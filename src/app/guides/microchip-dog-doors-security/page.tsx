import Link from "next/link";
import { Check, X, Shield, Lock, Thermometer, Moon, Smartphone, Hammer } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";

export const metadata = {
    title: "Microchip Pet Doors: Security, Curfews & Energy Efficiency (2026) | SmartPetLab",
    description: "Keep the raccoons out and the heat in. A deep engineering review of the SureFlap Connect and high-insulation pet doors.",
    openGraph: {
        title: "Microchip Pet Doors: Security, Curfews & Energy Efficiency",
        description: "Stop heating result from escaping. Stop raccoons entering. The ultimate guide to smart doors.",
        images: ["/images/products/hero-sureflap-connect.jpg"],
    },
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-teal-600 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-emerald-600 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-teal-300 backdrop-blur-md">
                        <Shield className="h-3 w-3" />
                        Home Security Upgrade
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        Microchip Pet Doors: <br />
                        <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Fortress Your Home</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                        A standard cat flap is an open window invitation to every raccoon in the neighborhood. Providing freedom shouldn't mean sacrificing security.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-800">
                                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-xs text-zinc-500">SPL</div>
                            </div>
                            <div className="text-left">
                                <div className="text-white">SmartPetLab Team</div>
                                <div className="text-xs">Security Division</div>
                            </div>
                        </div>
                        <div className="hidden h-8 w-px bg-zinc-700 sm:block" />
                        <div className="flex items-center gap-2">
                            <Hammer className="h-4 w-4 text-teal-500" />
                            <span>Install Guide Included</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl px-6">

                {/* Introduction */}
                <div className="prose prose-lg prose-zinc dark:prose-invert prose-teal mx-auto">
                    <p className="lead border-l-4 border-teal-500 pl-6 text-xl font-medium italic text-zinc-700 dark:text-zinc-300">
                        "You wake up at 3 AM to a crashing sound in the kitchen. It's not a burglar. It's a raccoon eating your cat's food."
                    </p>
                    <p>
                        This is the reality for thousands of homeowners every winter. Standard magnetic flaps are easily pried open by dexterous raccoon paws.
                    </p>
                    <p>
                        But it's not just about intruders. It's about **Data**. Knowing exactly when your cat left and when they returned is a vital health metric. Is your cat spending more time outside? Less?
                    </p>
                    <p>
                        In this guide, we break down the **SureFlap Connect ecosystem**—the only system that gives you remote "Curfew Control."
                    </p>
                </div>

                {/* Section 1: The Threat Model */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">01</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The Raccoon Reality</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            We often think of "Microchip" doors as a way to stop the neighbor's cat. That is Stage 1. Stage 2 is **Wildlife Defense**.
                        </p>

                        <div className="my-8 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-900">
                            <h3 className="m-0 text-lg font-bold">Why Magnets Fail</h3>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Most "locking" doors use a weak magnet at the bottom. A raccoon learns to insert a claw, pull the flap toward them (breaking the seal), and then lift. It takes them seconds.
                            </p>
                            <h3 className="mt-6 text-lg font-bold text-teal-600 dark:text-teal-400">The "Dual-Lock" Solution</h3>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                High-end digital doors (SureFlap) use physical deadbolts. When the chip is read, two plastic lugs physically retract. When the pet enters, they snap back up. There is nothing to pry. It is mechanically locked.
                            </p>
                        </div>
                    </div>
                </div>

                <StickyCTA price="£150.00" productName="SureFlap Connect (with Hub)" amazonUrl="https://www.amazon.co.uk/s?k=SureFlap+Connect&tag=dts0f-21" />

                {/* Section 2: Curfew Mode */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">02</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The "Curfew" Protocol</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            The single most powerful feature of smart doors is **Curfew Mode**.
                        </p>
                        <p>
                            <strong>Why Curfew?</strong>
                        </p>
                        <ul className="list-none space-y-4 pl-0">
                            <li className="flex gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                                <div className="shrink-0 rounded-full bg-indigo-100 p-2 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                                    <Moon className="h-5 w-5" />
                                </div>
                                <div>
                                    <strong className="block text-zinc-900 dark:text-white">Predator Protection</strong>
                                    <span className="text-sm text-zinc-600 dark:text-zinc-400">Coyotes and foxes hunt at dawn and dusk. Keeping your pet in from 8 PM to 6 AM increases their survival odds exponentially.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                                <div className="shrink-0 rounded-full bg-teal-100 p-2 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                                    <Smartphone className="h-5 w-5" />
                                </div>
                                <div>
                                    <strong className="block text-zinc-900 dark:text-white">Automated Locking</strong>
                                    <span className="text-sm text-zinc-600 dark:text-zinc-400">You don't need to remember to "lock up" the cat. The Hub does it. The locking mechanism physically engages at the set time.</span>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-6 rounded-lg bg-teal-50 p-6 text-sm text-teal-800 dark:bg-teal-900/30 dark:text-teal-200">
                            <strong>The "Lookout" Logic:</strong> If your cat is *outside* when curfew hits (e.g. 8:05 PM), the door allows them **IN** but not **OUT** again. It doesn't lock them out. It captures them.
                        </div>
                    </div>
                </div>

                {/* Section 3: Energy Efficiency */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">03</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Energy Bills vs. Freedom</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            A typical plastic flap is essentially a hole in your wall. In winter, it is a heat leak.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/50 dark:bg-red-900/10">
                                <h3 className="text-lg font-bold text-red-800 dark:text-red-300">Standard Flap</h3>
                                <div className="mt-4 text-4xl font-black text-red-500">U-Value: 5.0+</div>
                                <p className="mt-2 text-xs text-red-700 dark:text-red-400">Equivalent to leaving a window open 2 inches.</p>
                            </div>
                            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900/50 dark:bg-green-900/10">
                                <h3 className="text-lg font-bold text-green-800 dark:text-green-300">SureFlap / Endura</h3>
                                <div className="mt-4 text-4xl font-black text-green-500">U-Value: 1.5</div>
                                <p className="mt-2 text-xs text-green-700 dark:text-green-400">Double-glazed polycarbonate or heavy bellows seals.</p>
                            </div>
                        </div>

                        <p className="mt-8">
                            **Tip:** If living in extreme climates (Nordics/Canada), microchip doors often struggle with sealing. We recommend the <strong>Endura Flap</strong> (not smart, but insulated) or building a "Pet Vestibule" (a tunnel) to create an airlock.
                        </p>
                    </div>
                </div>

                {/* Section 4: Installation Guide */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">04</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Installation Reality Check</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            Before you buy, you must measure your door.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200 font-bold dark:bg-zinc-700">A</div>
                                <div>
                                    <strong>Glass Doors (Patio):</strong> Do *not* try to cut this yourself. Toughened glass will shatter. You need a glazier to cut a new pane with a hole, then re-install. Budget £200+ for installation. You will need the "Mounting Adaptor" (circular).
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200 font-bold dark:bg-zinc-700">B</div>
                                <div>
                                    <strong>Metal/Composite Doors:</strong> Metal interferes with RFID signals. If you have a metal skin door, you MUST buy the mounting adaptor. It acts as a spacer to lift the reader away from the metal interference.
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200 font-bold dark:bg-zinc-700">C</div>
                                <div>
                                    <strong>Walls:</strong> You need "Tunnel Extenders." Measure wall thickness. Each extender adds 5cm. Slope the tunnel slightly *down* towards the outside so rain drains out.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: The Winner */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Our Recommendation</h2>
                    </div>

                    <div className="rounded-3xl border-2 border-teal-500 bg-teal-50/20 p-8 dark:border-teal-500/50 dark:bg-teal-900/10">
                        <div className="mb-4 inline-block rounded-lg bg-teal-500 px-3 py-1 text-xs font-bold text-white">CHAMPION 2026</div>
                        <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">SureFlap Microchip Pet Door Connect</h3>
                        <p className="mt-2 text-sm font-medium text-zinc-500">The "Smart Home" Standard</p>

                        <div className="mt-6 flex flex-col gap-6 md:flex-row">
                            <div className="flex-1">
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    It is the only door that reliably combines **Curfew Mode** with **Intruder Protection**. The app is robust, the locking mechanism is physical (deadbolt), and it integrates with Home Assistant via API if you are a tech user.
                                </p>
                                <ul className="mt-6 space-y-3 text-sm">
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <strong>Prevents Raccoons:</strong> Physical locks.</li>
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <strong>Hub Connectivity:</strong> Change permissions from work.</li>
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <strong>Dual-Scan:</strong> Scans on entry AND exit (optional on some models).</li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center gap-4">
                                <Link href="/reviews/sureflap-connect" className="w-full rounded-xl bg-teal-600 px-8 py-4 text-center font-bold text-white transition hover:bg-teal-700">
                                    Read Full Review
                                </Link>
                                <a href="https://www.amazon.co.uk/s?k=SureFlap+Connect&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="w-full rounded-xl bg-white border border-zinc-200 px-8 py-3 text-center font-bold text-zinc-900 transition hover:bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white">
                                    Check Price
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}
