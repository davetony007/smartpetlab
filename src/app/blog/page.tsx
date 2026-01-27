import Link from "next/link";

export const metadata = {
    title: "Pet Tech Blog - SmartPetLab",
    description: "News, updates, and analysis on the world of connected pet care.",
};

export default function BlogPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-bold tracking-tight">Latest News</h1>
            <p className="mt-4 text-xl text-zinc-500">
                Updates from the lab.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/guides/best-automatic-cat-feeders-2026" className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-xl dark:border-zinc-800 dark:bg-black">
                    <div className="aspect-video w-full bg-orange-100 dark:bg-orange-900/20">
                        {/* Placeholder generic image or use next/image if available */}
                        <div className="flex h-full w-full items-center justify-center text-4xl">🐱🥣</div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                        <h2 className="text-xl font-bold text-zinc-900 group-hover:text-orange-500 dark:text-white">
                            Best Automatic Cat Feeders 2026
                        </h2>
                        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                            Stop the 4 AM wake-up calls. We tested the most reliable feeders from Petlibro, HoneyGuaridan, and SureFeed.
                        </p>
                        <span className="mt-6 text-sm font-bold text-orange-600">Read Guide &rarr;</span>
                    </div>
                </Link>

                <Link href="/comparisons/petlibro-vs-honeyguaridan" className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-xl dark:border-zinc-800 dark:bg-black">
                    <div className="aspect-video w-full bg-violet-100 dark:bg-violet-900/20">
                        <div className="flex h-full w-full items-center justify-center text-4xl">⚔️</div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                        <h2 className="text-xl font-bold text-zinc-900 group-hover:text-violet-500 dark:text-white">
                            Petlibro vs. HoneyGuaridan
                        </h2>
                        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                            The ultimate showdown. WiFi vs Buttons. Camera vs No Camera. Which £100 difference is worth it?
                        </p>
                        <span className="mt-6 text-sm font-bold text-violet-600">Read Comparison &rarr;</span>
                    </div>
                </Link>

                <Link href="/guides/pet-camera-privacy-security" className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-xl dark:border-zinc-800 dark:bg-black">
                    <div className="aspect-video w-full bg-red-100 dark:bg-red-900/20">
                        <div className="flex h-full w-full items-center justify-center text-4xl">🔐</div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                        <h2 className="text-xl font-bold text-zinc-900 group-hover:text-red-500 dark:text-white">
                            Are Pet Cameras Safe?
                        </h2>
                        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                            A privacy guide for Furbo and Eufy owners. How to lock down your camera from hackers.
                        </p>
                        <span className="mt-6 text-sm font-bold text-red-600">Read Security Guide &rarr;</span>
                    </div>
                </Link>

                <Link href="/guides/wearable-health-monitors-review" className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-xl dark:border-zinc-800 dark:bg-black">
                    <div className="aspect-video w-full bg-rose-100 dark:bg-rose-900/20">
                        <div className="flex h-full w-full items-center justify-center text-4xl">❤️</div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                        <h2 className="text-xl font-bold text-zinc-900 group-hover:text-rose-500 dark:text-white">
                            Health Monitors: Itch Scores & Sleep
                        </h2>
                        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                            How smart collars can detect illness before you see symptoms. The science of pet biometrics.
                        </p>
                        <span className="mt-6 text-sm font-bold text-rose-600">Read Science Deep Dive &rarr;</span>
                    </div>
                </Link>
            </div>
        </main>
    );
}
