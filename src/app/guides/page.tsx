import Link from "next/link";
import { BookOpen, ArrowRight, Shield, Zap } from "lucide-react";

export const metadata = {
    title: "Pet Tech Guides & Advice | SmartPetLab UK",
    description: "Expert guides, buying advice, and deep dives into the latest pet technology. Learn how to choose the right smart collar, feeder, or camera.",
};

const guides = [
    {
        slug: "ultimate-smart-dog-collars-guide-2026",
        title: "The Ultimate Guide to Smart Dog Collars (2026 Edition)",
        excerpt: "GPS tracking, health monitoring, and virtual fences. We break down everything you need to know before buying a smart collar in the UK.",
        category: "Buying Guide",
        readTime: "8 min read",
        image: "/images/products/tractive-gps.jpg", // Using existing image for now
    },
    {
        slug: "automatic-feeders-cats-vs-dogs",
        title: "Automatic Feeders: Cats vs. Dogs",
        excerpt: "Not all feeders are created equal. Discover the key differences in portion control, security, and scheduling for your furry friend.",
        category: "Comparison",
        readTime: "5 min read",
        image: "/images/products/petlibro-granary.jpg",
    },
    {
        slug: "pet-camera-privacy-security",
        title: "Are Pet Cameras Safe? Privacy & Security Explained",
        excerpt: "How to keep your home secure while watching your pet. Encryption, 2FA, and the best practices for smart camera owners.",
        category: "Security & Privacy",
        readTime: "6 min read",
        image: "/images/products/furbo-360.jpg",
    }
];

export default function GuidesIndex() {
    return (
        <main className="min-h-screen bg-zinc-50 pb-24 dark:bg-black">
            {/* Header */}
            <div className="bg-white border-b border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800">
                <div className="mx-auto max-w-7xl px-6 py-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                        <BookOpen className="h-4 w-4" />
                        <span>Expert Knowledge Base</span>
                    </div>
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                        Guides & <span className="text-violet-600">Advice</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        Deep dives into the technology that cares for your pets. Unbiased advice, detailed comparisons, and practical tips.
                    </p>
                </div>
            </div>

            {/* Featured Guides Grid */}
            <div className="mx-auto mt-16 max-w-7xl px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {guides.map((guide) => (
                        <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                                {/* Placeholder for guide cover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <span className="absolute bottom-4 left-4 rounded-md bg-white/20 px-2 py-1 text-xs font-bold text-white backdrop-blur-md">
                                    {guide.category}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                                    <span>{guide.readTime}</span>
                                    <span>•</span>
                                    <span>Updated Jan 2026</span>
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 transition-colors">
                                    {guide.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    {guide.excerpt}
                                </p>
                                <div className="mt-6 flex items-center text-sm font-semibold text-violet-600 dark:text-violet-400">
                                    Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
