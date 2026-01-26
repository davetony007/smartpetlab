import { Product, Review } from "@/data/products";

interface JsonLdProps {
    product?: Product;
    reviews?: Review[];
    url?: string;
}

export function JsonLd({ product, url }: JsonLdProps) {
    if (!product) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.image.startsWith("/")
            ? `https://smartpetlab.vercel.app${product.image}`
            : product.image,
        description: product.description,
        brand: {
            "@type": "Brand",
            name: product.brand || "SmartPetLab",
        },
        review: product.reviews?.map((review) => ({
            "@type": "Review",
            author: {
                "@type": "Person",
                name: review.author,
            },
            datePublished: review.date,
            reviewRating: {
                "@type": "Rating",
                ratingValue: review.rating,
                bestRating: 5,
            },
            reviewBody: review.content,
        })),
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
        },
        offers: {
            "@type": "Offer",
            url: product.amazonUrl,
            priceCurrency: "GBP",
            price: product.price.replace("£", ""),
            availability: "https://schema.org/InStock",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
