import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { products } from "@/data/products";

export const metadata = {
    title: "Product Reviews - SmartPetLab",
    description: "In-depth, unbiased reviews of the latest smart pet technology.",
};

export default function ReviewsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-zinc-50 dark:bg-black py-24">
            <div className="mx-auto max-w-7xl px-6 w-full">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                        Product Reviews
                    </h1>
                    <p className="mt-4 text-xl text-zinc-500 dark:text-zinc-400">
                        Rigorous tests and hands-on verdicts for the best pet tech on the market.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <div key={product.id} className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="aspect-square w-full relative overflow-hidden bg-white p-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                                {product.badge && (
                                    <span className="absolute top-4 left-4 z-10 rounded-full bg-amber-400/90 px-3 py-1 text-xs font-bold text-black backdrop-blur-sm">
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                                    <Link href={`/reviews/${product.id}`}>
                                        <span className="absolute inset-0" />
                                        {product.name}
                                    </Link>
                                </h3>
                                <div className="mt-2 flex items-center gap-1 text-amber-400">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{product.rating}</span>
                                    <span className="text-sm text-zinc-500">({product.reviewCount} reviews)</span>
                                </div>
                                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-lg font-bold text-zinc-900 dark:text-white">{product.price}</span>
                                    <span className="text-sm font-medium text-violet-600 group-hover:underline dark:text-violet-400">
                                        Read Review &rarr;
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
