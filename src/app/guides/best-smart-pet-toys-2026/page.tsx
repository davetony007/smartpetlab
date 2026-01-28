import Link from "next/link";
import { Gamepad2, Zap, Brain, Video, ShieldCheck, Trophy, ArrowRight, Check, X, Scale } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";
import { ComparisonTable } from "@/components/ComparisonTable";
import Image from "next/image";

export const metadata = {
    title: "Best Smart Pet Toys 2026: Robots, Puzzles & Enrichment | SmartPetLab",
    description: "Don't let them get bored. We review the Enabot EBO, FluentPet, Wickedbone, Petcube, and iFetch. The best tech to keep your dog or cat entertained while you work.",
    openGraph: {
        title: "Best Smart Pet Toys 2026: Robots, Puzzles & Enrichment",
        description: "Boredom leads to destruction. Here are the 5 best smart toys to tire out your pet.",
        images: ["/images/products/enabot-ebo-air-2.jpg"],
    },
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-purple-600 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-indigo-300 backdrop-blur-md">
                        <Gamepad2 className="h-3 w-3" />
                        Enrichment Tech
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        Bored Pets are <br />
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Destructive Pets</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                        The 2026 guide to robots, cameras, and cognitive puzzles that do more than just squeak. Keep them happy while you work.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-800">
                                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-xs text-zinc-500">SPL</div>
                            </div>
                            <div className="text-left">
                                <div className="text-white">SmartPetLab Team</div>
                                <div className="text-xs">Testing Studio</div>
                            </div>
                        </div>
                        <div className="hidden h-8 w-px bg-zinc-700 sm:block" />
                        <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-indigo-500" />
                            <span>100+ Hours of Playtime</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-4xl px-6">

                {/* Introduction */}
                <div className="prose prose-lg prose-zinc dark:prose-invert prose-indigo mx-auto">
                    <p className="lead border-l-4 border-indigo-500 pl-6 text-xl font-medium italic text-zinc-700 dark:text-zinc-300">
                        &quot;A tired dog is a good dog. But you can&apos;t throw a ball while you&apos;re on a Zoom call.&quot;
                    </p>
                    <p>
                        Separation anxiety and boredom are the two biggest behavioral issues facing modern pets. When dogs (and active cats) don&apos;t have a &quot;job&quot; to do, they find one—usually chewing your baseboards or barking at the postman.
                    </p>
                    <p>
                        Smart toys have evolved rapidly in 2026. We are no longer talking about simple battery-operated bones. We are talking about <strong>mobile robots</strong> that patrol your house, <strong>cognitive training systems</strong> that teach language, and <strong>AI cameras</strong> that play laser tag with your cat automatically.
                    </p>
                </div>

                {/* PRODUCT 1: ENABOT EBO AIR 2 */}
                <div className="mt-24 scroll-mt-24" id="enabot">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">01</span>
                        <div>
                            <span className="mb-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                                BEST ROBOT COMPANION
                            </span>
                            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Enabot EBO Air 2</h2>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-800">
                            <Image
                                src="/images/products/enabot-ebo-air-2.jpg"
                                alt="Enabot EBO Air 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">The Robot Nanny</h3>
                                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                        It rolls, it dances, it shoots lasers. But most importantly, it follows your pet.
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-3xl font-bold text-zinc-900 dark:text-white">£199.00</span>
                                    <span className="text-sm text-zinc-500">Mains + Auto-Dock</span>
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="rounded-xl bg-green-50 p-6 dark:bg-green-900/10">
                                    <h4 className="flex items-center gap-2 font-bold text-green-700 dark:text-green-300">
                                        <Check className="h-5 w-5" /> The Good
                                    </h4>
                                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        <li>• <strong>Mobile Security:</strong> No blind spots. It can go under beds.</li>
                                        <li>• <strong>Auto-Cruise:</strong> Patrols the house automatically while you work.</li>
                                        <li>• <strong>Laser Tag:</strong> Built-in laser is great for cats.</li>
                                        <li>• <strong>Self-Charging:</strong> Returns to dock when battery is low.</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl bg-red-50 p-6 dark:bg-red-900/10">
                                    <h4 className="flex items-center gap-2 font-bold text-red-700 dark:text-red-300">
                                        <X className="h-5 w-5" /> The Bad
                                    </h4>
                                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        <li>• <strong>Carpet Struggle:</strong> Wheels can get stuck on thick rugs.</li>
                                        <li>• <strong>Small Size:</strong> A large dog (Lab/GSD) could crush it easily.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-800">
                                <h4 className="font-bold text-zinc-900 dark:text-white">Our Verdict</h4>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    If you have a cat or a small dog, this is the ultimate peace-of-mind device. The ability to actively *find* your pet rather than waiting for them to walk in front of a camera is game-changing. Just be careful if you have a "chewer"—it looks like a toy, but it's expensive tech.
                                </p>
                            </div>

                            <div className="mt-8">
                                <a href="https://amzn.to/3NIoOya" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-xl bg-zinc-900 py-4 font-bold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
                                    Check Price on Amazon <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRODUCT 2: FLUENTPET */}
                <div className="mt-24 scroll-mt-24" id="fluentpet">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">02</span>
                        <div>
                            <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                BEST FOR TRAINING
                            </span>
                            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">FluentPet Basic Vocab Kit</h2>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-800">
                            <Image
                                src="/images/products/fluentpet-basic-kit.jpg"
                                alt="FluentPet Basic Kit"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Teaching Them To Talk</h3>
                                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                        Cognitive stimulation that burns energy faster than a walk. Give your pet a voice.
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-3xl font-bold text-zinc-900 dark:text-white">£202.98</span>
                                    <span className="text-sm text-zinc-500">12 Buttons Included</span>
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="rounded-xl bg-green-50 p-6 dark:bg-green-900/10">
                                    <h4 className="flex items-center gap-2 font-bold text-green-700 dark:text-green-300">
                                        <Check className="h-5 w-5" /> The Good
                                    </h4>
                                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        <li>• <strong>Cognitive Exhaustion:</strong> 15 mins of training = 1 hour walk.</li>
                                        <li>• <strong>Reduces Frustration:</strong> Dogs stop barking when they can just press "Outside".</li>
                                        <li>• <strong>High Quality Audio:</strong> Clear recording playback.</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl bg-red-50 p-6 dark:bg-red-900/10">
                                    <h4 className="flex items-center gap-2 font-bold text-red-700 dark:text-red-300">
                                        <X className="h-5 w-5" /> The Bad
                                    </h4>
                                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        <li>• <strong>Requires Patience:</strong> You must commit to teaching them.</li>
                                        <li>• <strong>Expensive:</strong> £200 is a lot for buttons (but cheaper than a behaviorist).</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-800">
                                <h4 className="font-bold text-zinc-900 dark:text-white">Our Verdict</h4>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    This isn&apos;t a "toy" you throw on the floor; it&apos;s a lifestyle change. If you have a smart breed (Collie, Poodle, Shepadoodle) that gets bored easily, this is the best investment you can make. The "Basic Kit" is perfect because 12 buttons supports complex sentences like "Mom Play Now".
                                </p>
                            </div>

                            <div className="mt-8">
                                <a href="https://amzn.to/3OaiGPd" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-xl bg-zinc-900 py-4 font-bold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
                                    Check Price on Amazon <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRODUCT 3: WICKEDBONE */}
                <div className="mt-24 scroll-mt-24" id="wickedbone">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">03</span>
                        <div>
                            <span className="mb-2 inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
                                BEST FOR CHASE
                            </span>
                            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Wickedbone Smart Bone</h2>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-800">
                            <Image
                                src="/images/products/wickedbone.jpg"
                                alt="Wickedbone Smart Bone"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">The "Uncatchable" Prey</h3>
                                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                        A remote-control car disguised as a bone. Perfect for high-energy dogs who need to run.
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-3xl font-bold text-zinc-900 dark:text-white">£69.99</span>
                                    <span className="text-sm text-zinc-500">USB Rechargeable</span>
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="rounded-xl bg-green-50 p-6 dark:bg-green-900/10">
                                    <h4 className="flex items-center gap-2 font-bold text-green-700 dark:text-green-300">
                                        <Check className="h-5 w-5" /> The Good
                                    </h4>
                                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        <li>• <strong>Interactive Mode:</strong> Responds to touch (runs away when touched).</li>
                                        <li>• <strong>Durable Material:</strong> Polycarbonate body handles rough play.</li>
                                        <li>• <strong>Tires Changeable:</strong> Easy to clean or replace.</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl bg-red-50 p-6 dark:bg-red-900/10">
                                    <h4 className="flex items-center gap-2 font-bold text-red-700 dark:text-red-300">
                                        <X className="h-5 w-5" /> The Bad
                                    </h4>
                                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        <li>• <strong>Battery Life:</strong> Only 40 mins in "Drive Mode" (but that's plenty to tire a dog).</li>
                                        <li>• <strong>Not a Chew Toy:</strong> Don't leave it alone with a pitbull.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-800">
                                <h4 className="font-bold text-zinc-900 dark:text-white">Our Verdict</h4>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    If you have a Terrier, Spaniel, or Vizsla that loves to chase, this is unbeatable. It taps into that prey drive instantly. The "Interactive Mode" causes it to shake, spin, or run when the dog touches it, meaning it can technically entertain them without you driving it (though driving it is more fun).
                                </p>
                            </div>

                            <div className="mt-8">
                                <a href="https://amzn.to/4gY0W1S" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-xl bg-zinc-900 py-4 font-bold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
                                    Check Price on Amazon <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRODUCT 4: PETCUBE PLAY 2 */}
                <div className="mt-24 scroll-mt-24" id="petcube">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">04</span>
                        <div>
                            <span className="mb-2 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
                                BEST FOR CATS
                            </span>
                            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Petcube Play 2</h2>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-800">
                            <Image
                                src="/images/products/petcube-play-2.jpg"
                                alt="Petcube Play 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">The Laser Turret</h3>
                                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                        A premium camera with a certified-safe laser you can control from your phone.
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-3xl font-bold text-zinc-900 dark:text-white">£87.99</span>
                                    <span className="text-sm text-zinc-500">Mains Powered</span>
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="rounded-xl bg-green-50 p-6 dark:bg-green-900/10">
                                    <h4 className="flex items-center gap-2 font-bold text-green-700 dark:text-green-300">
                                        <Check className="h-5 w-5" /> The Good
                                    </h4>
                                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        <li>• <strong>Wide View:</strong> 160-degree angle sees the whole room.</li>
                                        <li>• <strong>Laser Toy:</strong> Certified safe for pets eyes, responsive control.</li>
                                        <li>• <strong>Build Quality:</strong> Aluminum body feels premium (Apple-like).</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl bg-red-50 p-6 dark:bg-red-900/10">
                                    <h4 className="flex items-center gap-2 font-bold text-red-700 dark:text-red-300">
                                        <X className="h-5 w-5" /> The Bad
                                    </h4>
                                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        <li>• <strong>Subscription:</strong> Need to pay for video history/alerts.</li>
                                        <li>• <strong>Laser Noise:</strong> The motor makes a whirring sound (some pets like this though).</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-800">
                                <h4 className="font-bold text-zinc-900 dark:text-white">Our Verdict</h4>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    For office workers who miss their cat, this is the solution. Being able to "play" with your cat during a lunch break is surprisingly therapeutic for both of you. The hardware is excellent for under £90.
                                </p>
                            </div>

                            <div className="mt-8">
                                <a href="https://amzn.to/3MbpFa3" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-xl bg-zinc-900 py-4 font-bold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
                                    Check Price on Amazon <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRODUCT 5: IFETCH */}
                <div className="mt-24 scroll-mt-24" id="ifetch">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">05</span>
                        <div>
                            <span className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                                BEST FOR OBSESSION
                            </span>
                            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">iFetch Classic</h2>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-800">
                            <Image
                                src="/images/products/ifetch.jpg"
                                alt="iFetch Classic"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">The Endless Game</h3>
                                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                        For the dog that never stops bringing you the ball. Teach them to play alone.
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-3xl font-bold text-zinc-900 dark:text-white">£130.00</span>
                                    <span className="text-sm text-zinc-500">Mains or C-Cells</span>
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="rounded-xl bg-green-50 p-6 dark:bg-green-900/10">
                                    <h4 className="flex items-center gap-2 font-bold text-green-700 dark:text-green-300">
                                        <Check className="h-5 w-5" /> The Good
                                    </h4>
                                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        <li>• <strong>Consistent Throws:</strong> launches 10, 20, or 30 feet perfectly.</li>
                                        <li>• <strong>Indoor Safe:</strong> 10ft setting is safe for hallways.</li>
                                        <li>• <strong>Silent:</strong> Very quiet compared to nerf blasters.</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl bg-red-50 p-6 dark:bg-red-900/10">
                                    <h4 className="flex items-center gap-2 font-bold text-red-700 dark:text-red-300">
                                        <X className="h-5 w-5" /> The Bad
                                    </h4>
                                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        <li>• <strong>Ball Size:</strong> Classic uses mini tennis balls (hazards for big dogs).</li>
                                        <li>• <strong>Pricey:</strong> £130 is steep for a ball thrower.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-800">
                                <h4 className="font-bold text-zinc-900 dark:text-white">Our Verdict</h4>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    If you have a Jack Russell or Dachshund, get this. The training process effectively teaches them "tidy up" logic (put ball in hole &rarr; get reward). It saves your arm and keeps them occupied for hours.
                                </p>
                            </div>

                            <div className="mt-8">
                                <a href="https://amzn.to/3ZgYqXj" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-xl bg-zinc-900 py-4 font-bold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
                                    Check Price on Amazon <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Comparison Section */}
                <div className="mt-24">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Quick Comparison</h2>
                    </div>

                    <ComparisonTable
                        productNames={["Enabot EBO Air 2", "FluentPet Basic", "Wickedbone", "Petcube Play 2", "iFetch Classic"]}
                        rows={[
                            { feature: "Primary Benefit", products: ["Security & Play", "Language Training", "Prey Drive / Chase", "Remote Laser Play", "Endless Fetch"] },
                            { feature: "Interaction Type", products: ["Mobile Robot", "Cognitive Puzzles", "Physical Chase", "Stationary Camera", "Ball Launcher"] },
                            { feature: "Autonomy", products: ["High (Auto-Patrol)", "Passive (Pet Initiated)", "Medium (Interactive Mode)", "Low (Human Controlled)", "High (Once Trained)"] },
                            { feature: "Best For", products: ["Anxious Pets / Security", "Smart Dogs (Collies)", "High Energy (Terriers)", "Indoor Cats", "Ball Obsessed Dogs"] },
                            { feature: "Price", products: ["£199.00", "£202.98", "£69.99", "£87.99", "£130.00"] },
                        ]}
                    />
                </div>

                <StickyCTA price="£199.00" productName="Enabot EBO Air 2 (Editor's Choice)" amazonUrl="https://amzn.to/3NIoOya" />

            </div>
        </article>
    );
}
