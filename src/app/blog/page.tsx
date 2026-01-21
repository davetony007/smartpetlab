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
            <div className="mt-12 w-full max-w-2xl space-y-8">
                {/* Placeholders for blog posts */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 w-full rounded-2xl bg-zinc-100 dark:bg-zinc-900 animate-pulse" />
                ))}
            </div>
        </main>
    );
}
