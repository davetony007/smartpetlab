export const metadata = {
    title: "Comparisons - SmartPetLab",
    description: "Head-to-head comparisons of the top pet tech brands.",
};

export default function ComparisonsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-bold tracking-tight">Head-to-Head Comparisons</h1>
            <p className="mt-4 text-xl text-zinc-500">
                We test the top brands side-by-side so you don't have to.
            </p>
            <div className="mt-12 w-full max-w-4xl space-y-8">
                {/* Placeholders for comparison rows */}
                {[1, 2].map((i) => (
                    <div key={i} className="flex h-48 w-full items-center justify-between rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-900 animate-pulse">
                        <div className="h-32 w-32 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                        <div className="text-2xl font-bold text-zinc-300">VS</div>
                        <div className="h-32 w-32 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                ))}
            </div>
        </main>
    );
}
