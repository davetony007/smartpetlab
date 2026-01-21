export const metadata = {
    title: "About SmartPetLab - Our Mission",
    description: "Learn why we started SmartPetLab and how we test pet technology.",
};

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    About SmartPetLab
                </h1>
                <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
                    We are a team of pet lovers and tech nerds dedicated to finding the best products for your furry friends.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        To provide unbiased, scientific reviews of pet technology. We believe that technology can improve the lives of pets and their owners, but only if it works as promised.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">How We Test</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        We purchase every product we review. We test battery life, GPS accuracy, and durability in real-world conditions with real pets.
                    </p>
                </div>
            </div>
        </main>
    );
}
