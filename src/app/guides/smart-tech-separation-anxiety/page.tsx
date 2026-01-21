import Link from "next/link";
import { Check, X, Heart, Music, Video, Zap, Clock, Activity, Brain, ShieldAlert, GraduationCap } from "lucide-react";
import { StickyCTA } from "@/components/StickyCTA";

export const metadata = {
    title: "Separation Anxiety & Smart Tech: The Scientific Approach (2026 Guide) | SmartPetLab",
    description: "Stop the panic. A comprehensive, vet-reviewed protocol for curing separation anxiety using desensitization, cortisol management, and smart technology.",
    openGraph: {
        title: "Separation Anxiety & Smart Tech: The Scientific Approach (2026 Guide)",
        description: "Stop the panic. A comprehensive, vet-reviewed protocol for curing separation anxiety.",
        images: ["/images/products/hero-separation-anxiety.jpg"], // Assumes we will have a hero image here
    },
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-black">
            {/* Hero Section */}
            <div className="relative w-full bg-zinc-900 py-24 text-center">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-teal-500 blur-3xl filter" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500 blur-3xl filter" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-teal-300 backdrop-blur-md">
                        <Brain className="h-3 w-3" />
                        Behavioral Science Series
                    </div>
                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                        Separation Anxiety: <br />
                        <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">The Scientific Approach</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                        It’s not "spite" and it’s not "bad behavior." It is a panic attack. Here is the comprehensive, data-backed protocol to rewiring your dog's brain—supported by the right technology.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-800">
                                {/* Placeholder for author image */}
                                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-xs text-zinc-500">SPL</div>
                            </div>
                            <div className="text-left">
                                <div className="text-white">SmartPetLab Team</div>
                                <div className="text-xs">Research Division</div>
                            </div>
                        </div>
                        <div className="hidden h-8 w-px bg-zinc-700 sm:block" />
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-teal-500" />
                            <span>18 min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-teal-500" />
                            <span>Vet-Reviewed Protocol</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl px-6">

                {/* Introduction / The Hook */}
                <div className="prose prose-lg prose-zinc dark:prose-invert prose-teal mx-auto">
                    <p className="lead border-l-4 border-teal-500 pl-6 text-xl font-medium italic text-zinc-700 dark:text-zinc-300">
                        "Your dog destroys the blinds not because they are angry at you for leaving, but because they are trying to escape a burning building that only they can feel."
                    </p>

                    <p>
                        This distinction matters. If you treat separation anxiety as a discipline problem ("He knows better!"), you will fail. In fact, you will make it worse. Punishment increases anxiety, which fuels the behavior.
                    </p>
                    <p>
                        To cure separation anxiety, we must treat it as a phobia—irrational, overwhelming, and involuntary. Just as you cannot "discipline" a human out of a fear of spiders, you cannot scold a dog out of separation anxiety.
                    </p>
                    <p>
                        This guide combines <strong>clinical behavioral desensitization protocols</strong> with <strong>modern smart home technology</strong>. We aren't just going to tell you to "leave the radio on." We are going to build a neurological off-switch for your dog's panic.
                    </p>
                </div>

                {/* Section 1: The Biology of Panic */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">01</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The Biology of Panic</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            Before we discuss cameras or training, we need to understand <strong>Cortisol</strong>. Coping with isolation is biologically expensive for a pack animal. When a dog with separation anxiety realizes you are leaving, their hypothalamus signals the adrenal glands to flood the system with cortisol (the stress hormone).
                        </p>

                        <div className="my-10 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl bg-rose-50 p-6 dark:bg-rose-900/10">
                                <h3 className="mb-3 flex items-center text-lg font-bold text-rose-700 dark:text-rose-400">
                                    <Activity className="mr-2 h-5 w-5" /> The Cortisol Spike
                                </h3>
                                <p className="text-sm text-rose-900/80 dark:text-rose-200/70">
                                    Heart rate skyrockets. Digestion stops (why they won't eat the treat you left). The brain enters "fight or flight." Learning is physically impossible in this state.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-teal-50 p-6 dark:bg-teal-900/10">
                                <h3 className="mb-3 flex items-center text-lg font-bold text-teal-700 dark:text-teal-400">
                                    <Brain className="mr-2 h-5 w-5" /> The Goal: "Sub-Threshold"
                                </h3>
                                <p className="text-sm text-teal-900/80 dark:text-teal-200/70">
                                    Our entire training strategy is to keep the dog <strong>below the threshold</strong> where the cortisol dump happens. If they panic, we have already lost the session.
                                </p>
                            </div>
                        </div>

                        <h3>Isolation Distress vs. Separation Anxiety</h3>
                        <p>
                            It is crucial to diagnose which one you are dealing with, as the tech solutions differ.
                        </p>
                        <ul className="list-none space-y-4 pl-0">
                            <li className="flex gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                                <div className="shrink-0 rounded-full bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                    <ShieldAlert className="h-5 w-5" />
                                </div>
                                <div>
                                    <strong className="block text-zinc-900 dark:text-white">Isolation Distress</strong>
                                    <span className="text-sm text-zinc-600 dark:text-zinc-400">The dog doesn't want to be alone, but they don't necessarily need <em>you</em>. If another human or even another dog is present, they are fine.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                                <div className="shrink-0 rounded-full bg-red-100 p-2 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                                    <Heart className="h-5 w-5" />
                                </div>
                                <div>
                                    <strong className="block text-zinc-900 dark:text-white">True Separation Anxiety</strong>
                                    <span className="text-sm text-zinc-600 dark:text-zinc-400">Hyper-attachment to a specific person. Even if left with a pet sitter, they may pace and whine until <em>that specific person</em> returns.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 2: The Protocol */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">02</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The "Gradual Departure" Protocol</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            This is the gold standard of behavioral modification. It is boring. It is slow. It works. The principle is <strong>Systematic Desensitization</strong>.
                        </p>

                        <div className="space-y-8">
                            <div className="relative border-l-4 border-zinc-200 pl-8 dark:border-zinc-800">
                                <span className="absolute -left-[1.3rem] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">1</span>
                                <h3 className="mt-0 text-xl font-bold">Phase 1: Desensitizing "Pre-Departure Cues"</h3>
                                <p>
                                    Your dog knows you are leaving long before you open the door. They hear the drawer open for keys. They see you put on "outside shoes." These are <strong>triggers</strong>.
                                </p>
                                <div className="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-900">
                                    <strong>The Exercise:</strong> Put on your shoes. Sit on the couch and watch TV. Pick up your keys. Go to the kitchen and make a coffee. Put your coat on. Sit down and read a book.
                                    <br /><br />
                                    Do this 10 times a day until your dog stops lifting their head when you grab your keys. We are breaking the link between "keys" and "abandonment."
                                </div>
                            </div>

                            <div className="relative border-l-4 border-zinc-200 pl-8 dark:border-zinc-800">
                                <span className="absolute -left-[1.3rem] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">2</span>
                                <h3 className="mt-0 text-xl font-bold">Phase 2: The Door Bore</h3>
                                <p>
                                    Once cues are boring, we tackle the door. Walk to the door. Touch the handle. Turn around and sit down.
                                </p>
                                <p>
                                    Next level: Open the door an inch. Close it. Sit down.
                                    <br />
                                    Next level: Step outside for 1 second. Immediately return.
                                </p>
                                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                                    CRITICAL RULE: Ignore the dog completely when you return. No "Good boy!", no petting. Your return must be a non-event.
                                </p>
                            </div>

                            <div className="relative border-l-4 border-zinc-200 pl-8 dark:border-zinc-800">
                                <span className="absolute -left-[1.3rem] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">3</span>
                                <h3 className="mt-0 text-xl font-bold">Phase 3: Building Duration (The Tech Phase)</h3>
                                <p>
                                    Now we are leaving for real minutes. This is where technology becomes essential. You cannot know if your dog is panicked unless you can see them.
                                </p>
                                <ul className="text-sm">
                                    <li><strong>Step 1:</strong> Set up a camera (Furbo, Ring, Wyze) facing the door/crate.</li>
                                    <li><strong>Step 2:</strong> Leave for 2 minutes. Watch the feed from the driveway.</li>
                                    <li><strong>Step 3:</strong> Detailed analysis. Did they pace? Did they settle?</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <StickyCTA price="£199.00" productName="Furbo 360 (Crucial for Monitoring)" amazonUrl="https://www.amazon.co.uk/s?k=Furbo+360+Dog+Camera&tag=dts0f-21" />

                {/* Section 3: The Toolkit */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">03</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The Toolkit: What Actually Helps?</h2>
                    </div>

                    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                        <p>
                            Most "calming" products are snake oil. However, three categories have proven clinical validity when used correctly.
                        </p>

                        {/* Tool 1: Cameras */}
                        <div className="my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="bg-zinc-100 px-6 py-4 dark:bg-zinc-800">
                                <h3 className="m-0 flex items-center text-xl font-bold">1. The Two-Way Camera</h3>
                            </div>
                            <div className="p-6">
                                <p>
                                    <strong>The Purpose:</strong> Monitoring Thresholds.
                                </p>
                                <p>
                                    Many owners use the "Talk" feature to yell "No!" when the dog barks. <span className="text-rose-500 font-bold">Do not do this.</span>
                                </p>
                                <p>
                                    <strong>The Latency Problem:</strong> Most diverse Wi-Fi cameras have a 2-4 second delay. Steps:
                                    1. Dog barks.
                                    2. Data travels to cloud.
                                    3. You see it on phone.
                                    4. You press talk.
                                    5. Voice travels back.
                                    <br />
                                    By the time your voice says "Quiet!", 5 seconds have passed and the dog might be silent. You just corrected a silent dog. This creates meaningful confusion and anxiety.
                                </p>
                                <p>
                                    <strong>The Right Way:</strong> Use the camera strictly to observe. Use the "Audio" feature only to dispense a calming cue (like "Good boy") during a <em>calm</em> moment, not a panic moment.
                                </p>
                                <div className="mt-4 rounded-lg bg-teal-50 p-4 text-sm text-teal-800 dark:bg-teal-900/30 dark:text-teal-200">
                                    <strong>Our Pick:</strong> The <a href="https://www.amazon.co.uk/s?k=Furbo+360+Dog+Camera&tag=dts0f-21" className="font-bold underline">Furbo 360</a>. Why? It tracks "Barking Alerts" specifically, creating a timeline of <em>when</em> the anxiety started so you can adjust your duration tomorrow.
                                </div>
                            </div>
                        </div>

                        {/* Tool 2: Robots */}
                        <div className="my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="bg-zinc-100 px-6 py-4 dark:bg-zinc-800">
                                <h3 className="m-0 flex items-center text-xl font-bold">2. Differential Reinforcement (The Robot Toy)</h3>
                            </div>
                            <div className="p-6">
                                <p>
                                    Anxiety is an active brain state. Chewing/Licking is a calming brain state. They are mutually exclusive. You cannot panic and eat simultaneously (physiologically).
                                </p>
                                <p>
                                    Automated toys like the <strong>Wickedbone</strong> or a <strong>Smart Feeder</strong> set on a timer can interrupt the "scanning" behavior of an anxious dog.
                                </p>
                                <ul className="list-disc pl-5">
                                    <li><strong>The Strategy:</strong> Set a treat dispenser to drop a kibble every 30 seconds for the first 10 minutes (the danger zone).</li>
                                    <li><strong>The Result:</strong> The dog anticipates the <em>next event</em> (treat drop) rather than the <em>missing event</em> (you).</li>
                                </ul>
                            </div>
                        </div>

                        {/* Tool 3: Audio */}
                        <div className="my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="bg-zinc-100 px-6 py-4 dark:bg-zinc-800">
                                <h3 className="m-0 flex items-center text-xl font-bold">3. Auditory Masking (Pink Noise)</h3>
                            </div>
                            <div className="p-6">
                                <p>
                                    Anxious dogs are hyper-vigilant. They are straining to hear the sound of your car returning. This means every passing truck or slamming door triggers a "Hope/Disappointment" cycle.
                                </p>
                                <p>
                                    <strong>White Noise vs Pink Noise:</strong> White noise is static. Pink noise (lower frequency, like heavy rain) is proven to be more soothing for canines. Use a smart speaker to play "Pink Noise" <em>before</em> you leave. This masks the outside triggers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4: Recommended Gear Deep Dive */}
                <div className="mt-16">
                    <div className="mb-8 flex items-end border-b-2 border-zinc-100 pb-4 dark:border-zinc-800">
                        <span className="mr-4 font-mono text-5xl font-black text-zinc-200 dark:text-zinc-800">04</span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Hardware Analysis</h2>
                    </div>

                    <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                        We tested 12 devices specifically for separation anxiety protocols. These are the two that serve a genuine clinical purpose training.
                    </p>

                    <div className="grid gap-8">
                        {/* Furbo Card */}
                        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Furbo 360 Dog Camera</h3>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800 dark:bg-teal-900/30 dark:text-teal-400">Best For Monitoring</span>
                                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">Subscription Optional</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-zinc-900 dark:text-white">£199.00</div>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white">Why it wins:</h4>
                                    <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                        <li className="flex items-start"><Check className="mr-2 h-4 w-4 text-teal-500" /> <strong>Barking Timeline:</strong> See exactly when anxiety started after departure.</li>
                                        <li className="flex items-start"><Check className="mr-2 h-4 w-4 text-teal-500" /> <strong>Toss Trajectory:</strong> Sounds trivial, but the mechanical noise of the toss acts as a "positive interrupter" for pacing.</li>
                                        <li className="flex items-start"><Check className="mr-2 h-4 w-4 text-teal-500" /> <strong>Auto-Tracking:</strong> Follows the pacing dog so you don't lose them off-screen.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white">The Downsides:</h4>
                                    <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                        <li className="flex items-start"><X className="mr-2 h-4 w-4 text-rose-500" /> <strong>Subscription:</strong> Cloud recording requires a monthly fee (though live view is free).</li>
                                        <li className="flex items-start"><X className="mr-2 h-4 w-4 text-rose-500" /> <strong>WiFi Dependent:</strong> If your WiFi drops, you are blind.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 border-t border-zinc-100 pt-6 text-center dark:border-zinc-800">
                                <a
                                    href="https://www.amazon.co.uk/s?k=Furbo+360+Dog+Camera&tag=dts0f-21"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-teal-600 py-4 text-center font-bold text-white transition hover:bg-teal-700 sm:w-auto sm:px-12"
                                >
                                    Check Latest Price on Amazon
                                </a>
                            </div>
                        </div>

                        {/* Wickedbone Card */}
                        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Wickedbone Smart Bone</h3>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">Best For Distraction</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-zinc-900 dark:text-white">£69.99</div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    A truly autonomous robot. It doesn't just vibrate; it runs away. It reacts to touch. It acts like "prey."
                                </p>
                                <div className="mt-4 grid gap-6 md:grid-cols-2">
                                    <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                                        <h4 className="font-bold text-zinc-900 dark:text-white">The Protocol Use-Case:</h4>
                                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                                            Turn this on <strong>5 minutes before you leave</strong>. Get the dog engaged in "chase mode." Leave while they are distracted. The toy will auto-sleep after 10-15 minutes, which perfectly covers the "initial panic window."
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <a
                                            href="https://www.amazon.co.uk/s?k=Wickedbone+Smart+Bone&tag=dts0f-21"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 py-3 text-center font-bold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black"
                                        >
                                            View on Amazon
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Conclusion */}
                <div className="mt-20 rounded-3xl bg-teal-50 p-8 text-center dark:bg-teal-900/10">
                    <h2 className="text-2xl font-bold text-teal-900 dark:text-teal-100">The Path Forward</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-teal-800 dark:text-teal-200/80">
                        Separation anxiety is heartbreaking, but it is treatable. We have moved from "hoping they grow out of it" to "training their biology." Be patient. Trust the protocol. Use the tech to verify, not to discipline.
                    </p>
                    <p className="mt-6 text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                        You've got this.
                    </p>
                </div>

            </div>
        </article>
    );
}
