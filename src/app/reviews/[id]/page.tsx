import { products } from "@/data/products";
import { Star, ShieldCheck, ArrowRight, Check, X, Info, Activity, Battery, Signal, Zap } from "lucide-react"; // Added new icons
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export const generateMetadata = async ({ params }: Props) => {
    const { id } = await params;
    const product = products.find((p) => p.id === id);
    if (!product) return { title: "Product Not Found" };

    return {
        title: `${product.name} Review (2026) - Expert Tested | SmartPetLab`,
        description: `Is the ${product.name} worth the money? We test battery life, accuracy, and features in our detailed UK review.`,
    };
};

export default async function ProductReviewPage({ params }: Props) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-zinc-50 pb-24 dark:bg-black">
            {/* 1. HERO SECTION */}
            <div className="bg-white border-b border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800">
                <div className="mx-auto max-w-6xl px-6 py-12">
                    <Link href="/" className="text-sm font-medium text-zinc-500 hover:text-violet-600 dark:text-zinc-400">
                        &larr; Back to Reviews
                    </Link>

                    <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
                        {/* Product Image */}
                        <div className="flex-shrink-0 w-full lg:w-[400px]">
                            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white border border-zinc-100 p-6 shadow-sm">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                                {product.badge && (
                                    <span className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-black uppercase tracking-wide">
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Main Header Info */}
                        <div className="flex-1">
                            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                                {product.name} <span className="text-violet-600">Review</span>
                            </h1>
                            <div className="mt-4 flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                                    <div className="flex text-amber-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "text-zinc-300"}`} />
                                        ))}
                                    </div>
                                    <span className="font-bold text-zinc-900 dark:text-white">{product.rating}</span>
                                    <span className="text-xs text-zinc-500">({product.reviewCount} users)</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                                    <ShieldCheck className="h-5 w-5" />
                                    <span className="font-medium">Expert Verified</span>
                                </div>
                            </div>

                            <p className="mt-6 text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
                                {product.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href={product.amazonUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#FF9900] px-8 py-4 font-bold text-black shadow-lg shadow-orange-500/20 transition hover:bg-[#FF9900]/90 hover:-translate-y-1"
                                >
                                    Get Best Price on Amazon <ArrowRight className="h-5 w-5" />
                                </a>
                                {/* Optional second button for comparisons etc. */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[2fr_1fr]">
                <div className="space-y-16">

                    {/* 2. EXPERT VERDICT (The "Knowledge" Section) */}
                    {product.expertVerdict && (
                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-zinc-900 dark:text-white">
                                <Activity className="h-6 w-6 text-violet-600" /> Our Expert Verdict
                            </h2>
                            <div className="mt-6 rounded-2xl border-l-4 border-violet-600 bg-white p-8 shadow-sm dark:bg-zinc-900">
                                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">
                                    "{product.expertVerdict}"
                                </p>
                            </div>
                        </section>
                    )}

                    {/* 3. PERFORMANCE BREAKDOWN */}
                    {product.ratingBreakdown && (
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Performance Analysis</h2>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {/* Render standard metrics */}
                                <ScoreBar label="Accuracy / Quality" value={product.ratingBreakdown.accuracy} icon={<Signal className="h-4 w-4" />} />
                                <ScoreBar label="Battery Life" value={product.ratingBreakdown.battery} icon={<Battery className="h-4 w-4" />} />
                                <ScoreBar label="App & Ease of Use" value={product.ratingBreakdown.app} icon={<Zap className="h-4 w-4" />} />
                                <ScoreBar label="Value for Money" value={product.ratingBreakdown.value} icon={<ShieldCheck className="h-4 w-4" />} />
                            </div>
                        </section>
                    )}

                    {/* 4. PROS & CONS */}
                    {(product.pros || product.cons) && (
                        <section className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-green-100 bg-green-50/50 p-6 dark:border-green-900/30 dark:bg-green-900/10">
                                <h3 className="flex items-center gap-2 font-bold text-green-700 dark:text-green-400 mb-4">
                                    <Check className="h-5 w-5" /> The Good
                                </h3>
                                <ul className="space-y-3">
                                    {product.pros?.map((pro, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                                            <span className="mt-1 block h-1 w-1 rounded-full bg-green-500" />
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6 dark:border-red-900/30 dark:bg-red-900/10">
                                <h3 className="flex items-center gap-2 font-bold text-red-700 dark:text-red-400 mb-4">
                                    <X className="h-5 w-5" /> The Bad
                                </h3>
                                <ul className="space-y-3">
                                    {product.cons?.map((con, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                                            <span className="mt-1 block h-1 w-1 rounded-full bg-red-500" />
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}

                    {/* 5. USER REVIEWS */}
                    {product.reviews && product.reviews.length > 0 && (
                        <section>
                            <h2 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-white">Verified Owner Feedback</h2>
                            <div className="grid gap-6">
                                {product.reviews.map((review) => (
                                    <div key={review.id} className="rounded-2xl bg-white p-6 shadow-sm border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                                                    {review.author.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-zinc-900 dark:text-white">{review.author}</div>
                                                    <div className="text-xs text-green-600 flex items-center gap-1"><Check className="h-3 w-3" /> Verified Owner</div>
                                                </div>
                                            </div>
                                            <div className="flex text-amber-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-zinc-300"}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-zinc-900 dark:text-white mb-2">"{review.title}"</h3>
                                        <p className="text-zinc-600 dark:text-zinc-400">{review.content}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* SIDEBAR: TECHNICAL SPECS */}
                <div className="lg:sticky lg:top-8 lg:h-fit space-y-8">
                    {product.specifications && (
                        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Technical Specs</h3>
                            <div className="space-y-4">
                                <SpecRow label="Dimensions" value={product.specifications.dimensions} />
                                <SpecRow label="Weight" value={product.specifications.weight} />
                                <SpecRow label="Battery Life" value={product.specifications.batteryLife} />
                                <SpecRow label="Waterproof" value={product.specifications.waterproofRating} />
                                <SpecRow label="Subscription" value={product.specifications.subscriptionRequired} />
                                <SpecRow label="Connectivity" value={product.specifications.connectivity} />
                                <SpecRow label="Warranty" value={product.specifications.warranty} />
                            </div>
                        </div>
                    )}

                    <div className="rounded-2xl bg-violet-600 p-8 text-white shadow-xl shadow-violet-500/20">
                        <h3 className="text-xl font-bold mb-2">Ready to buy?</h3>
                        <p className="text-violet-100 mb-6 text-sm">We check prices daily to find the best UK deals.</p>
                        <div className="text-3xl font-extrabold mb-6">{product.price}</div>
                        <a
                            href={product.amazonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-violet-700 transition hover:bg-zinc-100"
                        >
                            View on Amazon <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>

            </div>
        </article>
    );
}

// -----------------------------------------------------------------------------
// HELPER COMPONENTS
// -----------------------------------------------------------------------------

function ScoreBar({ label, value, icon }: { label: string, value: number, icon: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-sm font-medium">
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    {icon} {label}
                </div>
                <span className="font-bold text-zinc-900 dark:text-white">{value}/5</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div
                    className="h-full rounded-full bg-violet-500 transition-all duration-1000"
                    style={{ width: `${(value / 5) * 100}%` }}
                />
            </div>
        </div>
    );
}

function SpecRow({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between border-b border-zinc-100 pb-3 last:border-0 last:pb-0 dark:border-zinc-800">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">{label}</span>
            <span className="text-sm font-medium text-zinc-900 dark:text-white text-right">{value}</span>
        </div>
    );
}
