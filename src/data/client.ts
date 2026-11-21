// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Shower Room & Enclosure | XC Bath",
	shortName: "XC Bath",
	tagline: "bathtub factory since 2009",
	description: "XC Bath is a premier factory of bath products in China, specializing in manufacturing high-quality, shower room, one-piece bathtub for global markets.",
	url: "https://www.chinabathtub.com",
	author: "XC Bath",
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	shortName: SITE.shortName,
	email: "info@chinabathtub.com",
	phoneForTel: "+865633032211",
	phoneFormatted: "+86 (563) 303-2211",
	whatsAppForLink: "8613905633017", // wa.me 标准格式（不带 + 或 00）
	whatsAppFormatted: "+86 139 0563 3017",
	logo: "/assets/images/blog/logo2026.png",
	address: {
		lineOne: "Sanitary Ware Zone",
		lineTwo: "Hanting",
		city: "Xuancheng",
		state: "China",
		zip: "242000",
		mapLink: "/contact/#cs-location",
	},
	socials: {
		// 后续有真实社媒主页 URL 时填入完整 https://... 链接，留空不会输出无效 Schema
		facebook: "",
		instagram: "",
		whatsapp: "https://wa.me/8613905633017",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.jpg", // Default fallback social image located in public/
};