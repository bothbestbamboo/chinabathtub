export function getProductSchema(product, siteUrl) {
	// 安全处理图片绝对路径（兼容 ImageMetadata 对象与纯字符串）
	let imageUrl = typeof product.image === "string"
		? product.image
		: (product.image?.src || "");

	if (imageUrl && !imageUrl.startsWith("http")) {
		imageUrl = `${siteUrl}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
	}

	const schema = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.title,
		...(imageUrl ? { image: [imageUrl] } : {}),
		description: product.description,
		sku: product.sku || product.id || product.title,
		brand: {
			"@type": "Brand",
			name: product.brand || "XC Bath",
		},
		offers: {
			"@type": "Offer",
			url: `${siteUrl}/product/${product.id}`,
			priceCurrency: product.currency || "USD",
			price: product.price !== undefined && product.price !== "" ? String(product.price) : "0.00",
			availability: `https://schema.org/${product.availability || "InStock"}`,
			itemCondition: `https://schema.org/${product.condition || "NewCondition"}`,
		},
	};

	// 根据产品 reviews 数组自动生成 AggregateRating 与 Review Schema
	if (Array.isArray(product.reviews) && product.reviews.length > 0) {
		const reviewCount = product.reviews.length;
		const totalRating = product.reviews.reduce((sum, r) => sum + Number(r.rating || 5), 0);
		const avgRating = Number((totalRating / reviewCount).toFixed(1));

		schema.aggregateRating = {
			"@type": "AggregateRating",
			ratingValue: avgRating,
			reviewCount: reviewCount,
		};

		schema.review = product.reviews.map((r) => ({
			"@type": "Review",
			author: {
				"@type": "Person",
				name: r.author,
			},
			datePublished: r.date,
			reviewBody: r.content,
			reviewRating: {
				"@type": "Rating",
				ratingValue: r.rating,
				bestRating: 5,
			},
		}));
	} else if (product.ratingValue && product.reviewCount) {
		schema.aggregateRating = {
			"@type": "AggregateRating",
			ratingValue: product.ratingValue,
			reviewCount: product.reviewCount,
		};
	}

	return schema;
}