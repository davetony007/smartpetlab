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
                {/* Tractive vs AirTag */}
                <a href="/comparisons/tractive-vs-airtag" className="group flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:border-blue-500 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-500">
                    <div className="flex-1 text-center font-bold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">Tractive GPS</div>
                    <div className="mx-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-sm font-black text-zinc-400 dark:bg-zinc-800">VS</div>
                    <div className="flex-1 text-center font-bold text-zinc-900 dark:text-white">Apple AirTag</div>
                </a>

                {/* LR4 vs PetKit */}
                <a href="/comparisons/litter-robot-vs-petkit" className="group flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:border-purple-500 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-500">
                    <div className="flex-1 text-center font-bold text-zinc-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">Litter-Robot 4</div>
                    <div className="mx-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-sm font-black text-zinc-400 dark:bg-zinc-800">VS</div>
                    <div className="flex-1 text-center font-bold text-zinc-900 dark:text-white">PetKit Purobot Ultra</div>
                </a>

                {/* Tractive vs PitPat */}
                <a href="/comparisons/tractive-vs-pitpat" className="group flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:border-green-500 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-green-500">
                    <div className="flex-1 text-center font-bold text-zinc-900 group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">Tractive GPS</div>
                    <div className="mx-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-sm font-black text-zinc-400 dark:bg-zinc-800">VS</div>
                    <div className="flex-1 text-center font-bold text-zinc-900 dark:text-white">PitPat GPS</div>
                </a>

                {/* Furbo vs Eufy */}
                <a href="/comparisons/furbo-vs-eufy" className="group flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:border-yellow-500 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-yellow-500">
                    <div className="flex-1 text-center font-bold text-zinc-900 group-hover:text-yellow-600 dark:text-white dark:group-hover:text-yellow-400">Furbo 360</div>
                    <div className="mx-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-sm font-black text-zinc-400 dark:bg-zinc-800">VS</div>
                    <div className="flex-1 text-center font-bold text-zinc-900 dark:text-white">Eufy Pet D605</div>
                </a>
            </div>
        </main>
    );
}
