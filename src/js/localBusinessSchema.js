import { SITE, BUSINESS } from "@data/client";

export function getLocalBusinessSchema(origin) {
	const baseUrl = origin || SITE.url;
	const sameAs = Object.values(BUSINESS.socials || {}).filter(
		(url) => typeof url === "string" && /^https?:\/\//i.test(url)
	);

	const schema = {
		"@context": "https://schema.org",
		"@type": ["LocalBusiness", "WebSite"],
		"name": BUSINESS.name,
		"url": SITE.url,
		"logo": baseUrl + BUSINESS.logo,
		"image": baseUrl + BUSINESS.logo,
		"email": BUSINESS.email,
		"telephone": BUSINESS.phoneForTel,
		"address": {
			"@type": "PostalAddress",
			"streetAddress": `${BUSINESS.address.lineOne}, ${BUSINESS.address.lineTwo}`,
			"addressLocality": BUSINESS.address.city,
			"addressRegion": BUSINESS.address.state,
			"postalCode": BUSINESS.address.zip,
		},
		"inLanguage": SITE.locale,
	};

	if (sameAs.length > 0) {
		schema.sameAs = sameAs;
	}

	return schema;
}