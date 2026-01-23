
import { Cpu, Thermometer, Wifi, Server, EyeOff, Radio, Zap } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";


export const metadata = {
    title: "DIY Smart Home for Pets: Automating Safety with Home Assistant (2026) | SmartPetLab",
    description: "Don't buy a $700 gadget. Build a $20 one. Learn how to use Aqara sensors, Smart Plugs, and Home Assistant to track litter usage and prevent heat stroke.",
    openGraph: {
        title: "DIY Smart Home for Pets: Automating Safety with Home Assistant",
        description: "The ultimate guide to low-cost, high-tech pet safety.",
        images: ["/images/products/hero-smart-home-sensor.jpg"],
    },
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-amber-500 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-yellow-600 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-300 backdrop-blur-md">
                        <Cpu className="h-3 w-3" />
                        Advanced Automation
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        The DIY Smart Home: <br />
                        <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Automating Pet Safety</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                        Big Tech wants you to buy a separate app for everything. We say: Centralize it. Learn how to build a &quot;Heat Stroke Prevention System&quot; for under $50.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-800">
                                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-xs text-zinc-500">SPL</div>
                            </div>
                            <div className="text-left">
                                <div className="text-white">SmartPetLab Team</div>
                                <div className="text-xs">Automation Engineers</div>
                            </div>
                        </div>
                        <div className="hidden h-8 w-px bg-zinc-700 sm:block" />
                        <div className="flex items-center gap-2">
                            <Server className="h-4 w-4 text-amber-500" />
                            <span>Home Assistant Compatible</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl px-6">

                {/* Introduction */}
                <div className="prose prose-lg prose-zinc dark:prose-invert prose-amber mx-auto">
                    <p className="lead border-l-4 border-amber-500 pl-6 text-xl font-medium italic text-zinc-700 dark:text-zinc-300">
                        &quot;If the WiFi goes down, your feeder shouldn&apos;t stop working. If the server crashes, your AC needs to stay on. Local Control is the only true safety.&quot;
                    </p>
                    <p>
                        The &quot;Smart Pet&quot; market is filled with closed ecosystems. If you buy a Furbo, you need the Furbo app. If you buy a PetKit feeder, you need the PetKit app. None of them talk to each other.
                    </p>
                    <p>
                        This guide is for the person who wants <strong>True Automation</strong>. We are going to show you how to use generic, industrial-grade sensors ($15-$25) to build systems that are more powerful than any $500 designated &quot;pet gadget.&quot;
                    </p>
                    <h3>The Goal: Local Control</h3>
                    <p>
                        We prioritize <strong>Zigbee</strong> and <strong>Home Assistant</strong>. Why? Because they run locally. If your internet provider has an outage, your heat stroke prevention system should still turn on the Air Conditioner. Cloud dependency is a safety risk.
                    </p>
                </div>

                {/* Section 1: The Protocol War */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">01</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Why WiFi Fails (And Zigbee Wins)</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            Most people start with WiFi smart plugs. They are cheap/easy. But for sensors (door sensors, temp sensors), WiFi is terrible.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900/50 dark:bg-red-950/30">
                                <h3 className="flex items-center font-bold text-red-900 dark:text-red-300"><Wifi className="mr-2 h-4 w-4" /> The Problem with WiFi</h3>
                                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                    <li><strong>Power Hungry:</strong> WiFi eats batteries. Sensors are bulky or need charging.</li>
                                    <li><strong>Congestion:</strong> Routers choke after 30+ devices.</li>
                                    <li><strong>Cloud Reliance:</strong> Most cheap plugs ping a Chinese server to work.</li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900/50 dark:bg-green-950/30">
                                <h3 className="flex items-center font-bold text-green-900 dark:text-green-300"><Radio className="mr-2 h-4 w-4" /> The Zigbee Solution</h3>
                                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                    <li><strong>Sips Power:</strong> A coin cell battery lasts 2 years.</li>
                                    <li><strong>Mesh Network:</strong> Every plugged-in device extends the signal range.</li>
                                    <li><strong>Local:</strong> Talks directly to your hub. No internet needed.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Project 1 - The $20 Medical Tracker */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">02</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Project: The &apos;Litter-Robot&apos; Alternative</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            A $700 Litter-Robot is great because it tells you <strong>Usage Frequency</strong>. Sudden frequency changes = UTI or Kidney Blockage.
                        </p>
                        <p>
                            You can get 90% of that medical data with a $20 Motion Sensor.
                        </p>

                        <div className="rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800/50">
                            <h3 className="m-0 text-lg font-bold">The Build</h3>
                            <ul className="mt-4 space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">1</div>
                                    <div>
                                        <strong>Hardware:</strong> Aqara Motion Sensor P1 ($24). Sticky tape it to the wall pointing *across* the litter box path.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">2</div>
                                    <div>
                                        <strong>Logic (Home Assistant):</strong>
                                        <div className="mt-2 rounded bg-black/80 p-3 font-mono text-xs text-green-400">
                                            IF Motion_Detected<br />
                                            AND State was &apos;Clear&apos; for &gt; 10 min<br />
                                            THEN Increment Counter &quot;Litter_Visits&quot;
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">3</div>
                                    <div>
                                        <strong>The Alert:</strong> Automation sends iOS notification if &quot;Litter_Visits&quot; &gt; 5 per day.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <StickyCTA price="$39.99" productName="Aqara Smart Hub E1 (Zigbee)" amazonUrl="https://www.amazon.co.uk/s?k=Aqara+Hub+E1&tag=dts0f-21" />

                {/* Section 3: Project 2 - Heat Stroke Prevention */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">03</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Project: Heat Stroke Fail-Safe</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            This is non-negotiable for apartment dwellers. AC units fail. Power goes out. Dogs die in 85°F+ heat, especially brachycephalic breeds (Pugs, Frenchies).
                        </p>

                        <div className="mt-6 flex flex-col gap-6 md:flex-row">
                            <div className="flex-1 rounded-xl bg-orange-50 p-6 dark:bg-orange-900/10">
                                <h4 className="flex items-center font-bold text-orange-900 dark:text-orange-200">
                                    <Thermometer className="mr-2 h-4 w-4" /> The Trigger
                                </h4>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    <strong>Aqara Temp Sensor ($15)</strong> placed at dog-level (not near the ceiling where it&apos;s hotter).
                                </p>
                            </div>
                            <div className="flex-1 rounded-xl bg-blue-50 p-6 dark:bg-blue-900/10">
                                <h4 className="flex items-center font-bold text-blue-900 dark:text-blue-200">
                                    <Zap className="mr-2 h-4 w-4" /> The Action
                                </h4>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    <strong>Smart Plug ($10)</strong> connected to a &quot;Dumb&quot; Fan or Window AC unit.
                                </p>
                                <p className="mt-2 text-xs italic text-zinc-500">
                                    *Note: You need a &quot;Dumb&quot; appliance with a physical switch that stays ON when power is cut/restored.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 rounded-lg border-l-4 border-red-500 bg-zinc-50 p-6 italic text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                            &quot;Automation Rule: If Temp &gt; 80°F, Turn Plug ON. Send Critical Notification to Phone with sound override.&quot;
                        </div>
                    </div>
                </div>

                {/* Section 4: Privacy & Geofencing */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">04</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Project: The &apos;No-Spy&apos; Camera</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            We all want to watch our pets, but we don&apos;t want cameras recording US when we are home. Software privacy switches can be hacked. Physical power cuts cannot.
                        </p>

                        <div className="rounded-xl bg-indigo-50 p-6 dark:bg-indigo-900/20">
                            <h3 className="flex items-center font-bold text-indigo-900 dark:text-indigo-200">
                                <Wifi className="mr-2 h-5 w-5" /> The Solution: WiFi Geofencing
                            </h3>
                            <p className="mt-4 text-sm text-indigo-800/80 dark:text-indigo-300/80">
                                Use <strong>Home Assistant</strong> (or HomeKit/Google Home) to track your phone&apos;s presence on the network.
                            </p>
                            <ul className="mt-4 list-disc pl-5 text-sm marker:text-indigo-500">
                                <li><strong>When Phone Joins WiFi:</strong> Cut power to Smart Plug 2 (Camera).</li>
                                <li><strong>When Phone Leaves WiFi:</strong> Restore power to Smart Plug 2.</li>
                            </ul>
                            <p className="mt-4 text-sm font-bold">
                                This creates a physical air-gap. A camera with no power is 100% secure.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 5: The Starter Kit */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">05</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The $100 Starter Kit</h2>
                    </div>

                    <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                            You don&apos;t need to rewire your house. Start with these three items to fix 90% of pet safety anxiety.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800"><Server className="h-6 w-6 text-zinc-400" /></div>
                                    <div>
                                        <strong className="block text-zinc-900 dark:text-white">Aqara Hub E1</strong>
                                        <span className="text-xs text-zinc-500">The Brain (Connects sensors to WiFi)</span>
                                    </div>
                                </div>
                                <div className="font-mono font-bold">~$30</div>
                            </div>

                            <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800"><EyeOff className="h-6 w-6 text-zinc-400" /></div>
                                    <div>
                                        <strong className="block text-zinc-900 dark:text-white">Motion Sensor P1</strong>
                                        <span className="text-xs text-zinc-500">The Eye (Litter tracking / Intruder)</span>
                                    </div>
                                </div>
                                <div className="font-mono font-bold">~$25</div>
                            </div>

                            <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800"><Thermometer className="h-6 w-6 text-zinc-400" /></div>
                                    <div>
                                        <strong className="block text-zinc-900 dark:text-white">Temp & Humidity Sensor</strong>
                                        <span className="text-xs text-zinc-500">The Guardian (Heat stroke prevention)</span>
                                    </div>
                                </div>
                                <div className="font-mono font-bold">~$15</div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <a href="https://www.amazon.co.uk/s?k=Aqara+Starter+Kit&tag=dts0f-21" target="_blank" rel="noopener noreferrer" className="block w-full max-w-sm rounded-xl bg-amber-500 py-4 text-center font-bold text-white transition hover:bg-amber-600">
                                Check Bundle Price on Amazon
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}
