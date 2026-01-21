import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Zap, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 6); // Show top 6 products

  return (
    <main className="flex min-h-screen flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SmartPetLab",
            url: "https://smartpetlab.vercel.app",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://smartpetlab.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-background pt-16 pb-32 lg:pt-32">
        <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-20 translate-x-1/3 -translate-y-1/3">
          <div className="h-[600px] w-[600px] rounded-full bg-violet-400 blur-[120px]" />
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-30 dark:opacity-20 -translate-x-1/3 translate-y-1/3">
          <div className="h-[500px] w-[500px] rounded-full bg-amber-300 blur-[100px]" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 dark:border-violet-900/30 dark:bg-violet-900/10 dark:text-violet-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Top Rated Pet Tech 2026
            </div>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-7xl">
              Smarter Tech for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">Happier Pets.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-zinc-600 dark:text-zinc-300">
              We test the latest smart collars, feeders, and wellness gadgets so you don't have to. Real science, real reviews, for your best friend.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/reviews"
                className="flex items-center gap-2 rounded-full bg-violet-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-700 hover:scale-105 active:scale-95"
              >
                Explore Reviews <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/guides"
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-3.5 text-sm font-bold text-zinc-900 shadow-sm transition hover:bg-zinc-50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                Search Guides
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square w-full rounded-[2.5rem] bg-gradient-to-tr from-violet-100 to-amber-50 p-4 dark:from-violet-900/20 dark:to-amber-900/20">
              <Image
                src="/hero-dog.png"
                alt="Golden Retriever with Smart Collar"
                width={600}
                height={600}
                className="h-full w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-black/5 dark:ring-white/10"
                priority
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl shadow-zinc-200/50 dark:bg-zinc-900 dark:shadow-black/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Trusted By</p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white">10k+ Owners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full bg-zinc-50 py-24 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Trending This Week in the UK
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-xl dark:border-zinc-800 dark:bg-black">
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
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-bold text-zinc-900 dark:text-white">{product.price}</span>
                    <span className="text-sm font-medium text-violet-600 group-hover:underline dark:text-violet-400">
                      Check Price on Amazon &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/reviews" className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
              View all top-rated products &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-24 md:grid-cols-3">
        <div className="group flex flex-col items-start rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/20 dark:text-blue-400">
            <Star className="h-7 w-7" />
          </div>
          <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">
            Unbiased Reviews
          </h3>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            We buy our own test units to ensure our reviews are 100% honest. No sponsored fluff, just facts.
          </p>
        </div>
        <div className="group flex flex-col items-start rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-900/20 dark:text-purple-400">
            <Zap className="h-7 w-7" />
          </div>
          <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">
            Head-to-Head Tests
          </h3>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            Smart collars, feeders, and cameras tested side-by-side in real-world conditions.
          </p>
        </div>
        <div className="group flex flex-col items-start rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-xl hover:shadow-green-500/5 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white dark:bg-green-900/20 dark:text-green-400">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">
            Expert Vetted
          </h3>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            Rigorous testing methodologies supported by data, not just opinion.
          </p>
        </div>
      </section>
    </main>
  );
}
