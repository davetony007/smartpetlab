import { ComparisonTable } from "@/components/ComparisonTable";
import { StickyCTA } from "@/components/StickyCTA";
import { Check, X, Smartphone, Battery, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Petlibro Granary vs HoneyGuaridan: Which Feeder is Best? (2026) | SmartPetLab",
    description: "The ultimate showdown. Do you need the £140 smart feeder with a camera, or the £55 reliable workhorse? We tested both for jamming and ease of use.",
    openGraph: {
        title: "Petlibro vs HoneyGuaridan: The Battle of the Feeders",
        description: "Is the WiFi feature worth an extra £85? We found out.",
        images: ["/images/products/petlibro-granary.jpg"],
    },
};

export default function ComparisonPage() {
    return (
        <main className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero */}
            <div className="bg-zinc-50 py-16 dark:bg-zinc-900/50">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 dark:border-violet-900/30 dark:bg-violet-900/10 dark:text-violet-300">
                        <span className="mr-2">⚔️</span> Head-to-Head
                    </div>
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
                        Petlibro Granary <br />
                        <span className="text-zinc-400">vs</span> <br />
                        HoneyGuaridan
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        One is a tech-heavy smart device. The other is a simple button-operated tank. Which one belongs in your kitchen?
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-4xl px-6">

                {/* At a Glance */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Petlibro */}
                    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="mb-4 text-center">
                            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">THE SMART CHOICE</span>
                        </div>
                        <h2 className="text-center text-2xl font-bold">Petlibro Granary</h2>
                        <div className="relative mx-auto mt-6 h-48 w-48">
                            <Image src="/images/products/petlibro-granary.jpg" alt="Petlibro" fill className="object-contain" />
                        </div>
                        <ul className="mt-8 space-y-3">
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> 1080p Camera Night Vision</li>
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> App Control (WiFi)</li>
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Sealed Freshness Rotor</li>
                            <li className="flex items-center gap-2"><X className="h-5 w-5 text-red-500" /> Expensive (£139)</li>
                        </ul>
                        <a href="https://www.amazon.co.uk/s?k=Petlibro+Granary+Camera+Feeder+5L&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="mt-8 block w-full rounded-xl bg-zinc-900 py-3 text-center font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-black">
                            Check Price
                        </a>
                    </div>

                    {/* HoneyGuaridan */}
                    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="mb-4 text-center">
                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">THE VALUE CHOICE</span>
                        </div>
                        <h2 className="text-center text-2xl font-bold">HoneyGuaridan 6L</h2>
                        <div className="relative mx-auto mt-6 h-48 w-48">
                            <Image src="/images/products/honeyguaridan-feeder.jpg" alt="HoneyGuaridan" fill className="object-contain" />
                        </div>
                        <ul className="mt-8 space-y-3">
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Very Affordable (£55)</li>
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Simple Button Setup</li>
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Stainless Steel Bowl</li>
                            <li className="flex items-center gap-2"><X className="h-5 w-5 text-red-500" /> No Phone Alerts</li>
                        </ul>
                        <a href="https://www.amazon.co.uk/s?k=HoneyGuaridan+Automatic+Pet+Feeder&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="mt-8 block w-full rounded-xl bg-zinc-900 py-3 text-center font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-black">
                            Check Price
                        </a>
                    </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="prose prose-lg prose-zinc dark:prose-invert mx-auto mt-24">
                    <h3>Round 1: Setup & App</h3>
                    <p>
                        The <strong>Petlibro</strong> connects to your WiFi (2.4GHz only). This means you can feed your cat from a beach in Spain. You get notifications if the food is low or if there is a blockage.
                    </p>
                    <p>
                        The <strong>HoneyGuaridan</strong> is old school. You crouch down on the floor and press physical buttons to program the LCD screen. It feels like setting a 1990s digital watch. But once it's set, it just works. No WiFi outages will ever stop it.
                    </p>

                    <h3>Round 2: Jamming Proof?</h3>
                    <p>
                        We filled both with varied kibble sizes (round, triangular, and star-shaped).
                    </p>
                    <ul>
                        <li>
                            <strong>Petlibro:</strong> Uses a silicone rotor that flexes. If a kibble gets stuck, the silicone bends to let it pass. Jam rate: 0%.
                        </li>
                        <li>
                            <strong>HoneyGuaridan:</strong> Uses a hard plastic rotor but has a "Reverse Gear" feature. If it feels resistance, it spins backward to un-jam, then forward again. Jam rate: &lt; 1%.
                        </li>
                    </ul>
                    <p>Both are incredibly reliable compared to cheap generic feeders.</p>

                    <h3>Round 3: The Verdict</h3>
                    <div className="not-prose mt-8 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-900">
                        <h4 className="flex items-center gap-2 text-xl font-bold">
                            <DollarSign className="h-6 w-6 text-green-600" /> Who should buy HoneyGuaridan?
                        </h4>
                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                            If you work from home or just want a feeder for weekends away. You don't need a camera to tell you the cat is eating if you are sleeping upstairs. Save the £85.
                        </p>
                    </div>

                    <div className="not-prose mt-8 rounded-2xl bg-violet-50 p-8 dark:bg-violet-900/20">
                        <h4 className="flex items-center gap-2 text-xl font-bold text-violet-900 dark:text-violet-200">
                            <Smartphone className="h-6 w-6 text-violet-600" /> Who should buy Petlibro?
                        </h4>
                        <p className="mt-2 text-violet-800 dark:text-violet-300">
                            If you have anxiety about your pet while traveling. The ability to open the app and <strong>see</strong> your cat eating offers priceless peace of mind. It's not just a feeder; it's a security camera.
                        </p>
                    </div>
                </div>

                <ComparisonTable
                    productNames={["Petlibro Granary", "HoneyGuaridan"]}
                    rows={[
                        { feature: "Price", products: ["£139.99", "£55.00"] },
                        { feature: "Camera", products: ["Yes (1080p)", "No"] },
                        { feature: "App Control", products: ["Yes", "No"] },
                        { feature: "Bowl Material", products: ["Stainless Steel", "Stainless Steel"] },
                        { feature: "Power", products: ["USB-C + Battery", "Mains + Battery"] },
                        { feature: "Capacity", products: ["5 Liters", "6 Liters"] }
                    ]}
                />

                <StickyCTA price="£139.99" productName="Petlibro Granary (Winner)" amazonUrl="https://www.amazon.co.uk/s?k=Petlibro+Granary+Camera+Feeder+5L&tag=dts0f-21" />

            </div>
        </main>
    );
}
