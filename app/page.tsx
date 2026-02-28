// app/page.tsx
'use client';

import { useState } from 'react';
import { Crosshair, Map, Wind, Trees, ArrowRight, Activity, Cpu, PlusSquare, Brain, Bone, Download, MapPin, Users, Axe, Radio, Signal } from 'lucide-react';
import { OffGridResetIcon } from '@/components/OffGridResetIcon';

// ... (Keep existing waypoint data arrays the same as before)
const triageMovements = [
    { state: "Tangled (Overwhelmed) — Too many directions, nowhere to start, feeling \"trapped in the overgrowth.\"", action: "The Perimeter Stake", instruction: "Find a wall or a heavy piece of furniture. Place both palms flat against it at shoulder height. Lean in and push with 100% of your strength for 10 seconds, then immediately release and let your arms hang. Repeat 3 times." },
    { state: "Buried (Anxious) — A heavy chest, shallow breathing, feeling like you're under the weight of \"deadfall.\"", action: "The Brush-Off", instruction: "Stand up and use your hands to vigorously \"sweep\" your body. Start at your shoulders and sweep down your arms to your fingertips. Sweep down your chest, your back, and down your legs to your feet. Imagine you are literally brushing off dirt or debris from a day in the field." },
    { state: "Stagnant (Sedentary) — Physical \"frozen\" feeling, low energy, the \"stiff joints\" of a 9-to-5 map.", action: "The Pulse-Starter", instruction: "Stand with feet hip-width apart. Perform 10 small, rapid vertical hops. You don't need to go high; just get your heels off the ground. While jumping, let your jaw and shoulders go completely loose (the \"ragdoll\" effect)." },
    { state: "Clouded (Scattered) — \"Needle in a haystack\" focus is missing; thoughts are drifting like mist.", action: "The Horizon Pivot", instruction: "Stand still and pick one specific, tiny object in the distance (the \"Waypoint\"). Keep your eyes locked on it. Now, slowly rotate your entire body 360 degrees while keeping your head turned and your eyes fixed on that one point as long as possible. Once you lose sight of it, whip your head around to find it again immediately." },
    { state: "The Universal Clearing — For when you don't know which state you're in, but you know you're stuck.", action: "The Hatchet Swing", instruction: "Stand with a wide base. Interlace your fingers as if holding a hatchet handle. Reach high over your head, stretching your spine. On a forceful exhale (a \"Ha!\" sound), swing your \"hatchet\" down between your legs, hinging at the hips." }
];

export default function Home() {
    const [showTriage, setShowTriage] = useState(false);
    const [isDeploying, setIsDeploying] = useState(false);
    const [triageIndex, setTriageIndex] = useState(0);

    const handleDeployTriage = () => {
        if (!showTriage) {
            setIsDeploying(true);
            setTimeout(() => {
                setShowTriage(true);
                setIsDeploying(false);
                setTriageIndex(0);
            }, 800);
        } else {
            // Cycle to next movement
            setIsDeploying(true);
            setTimeout(() => {
                setTriageIndex((prev) => (prev + 1) % triageMovements.length);
                setIsDeploying(false);
            }, 400);
        }
    };

    return (
        <div className="flex flex-col">

            {/* HERO SECTION: ID="home" */}
            <section id="home" className="relative flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 overflow-hidden">

                {/* HERO IMAGE BACKGROUND */}
                <div className="absolute inset-0 -z-20">
                    <img
                        src="/hero-custom.jpg"
                        alt="Custom Northern Panorama"
                        className="w-full h-full object-cover filter grayscale contrast-125 brightness-65"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-spruce/80 via-spruce/50 to-slate-dark"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto mt-8">

                    <div className="flex flex-wrap items-center justify-center mb-12">
                        <img src="/kinetic-clear.png" alt="Clear" className="h-24 sm:h-32 md:h-48 lg:h-60 object-contain drop-shadow-2xl z-10 -mx-1 sm:-mx-1.5 md:-mx-2 lg:-mx-3" />
                        <img src="/kinetic-the.png" alt="the" className="h-20 sm:h-24 md:h-36 lg:h-48 object-contain drop-shadow-2xl scale-[1.18] z-20 -mr-1 sm:-mr-1.5 md:-mr-2 lg:-mr-3 -ml-1.5 sm:-ml-2 md:-ml-3 lg:-ml-4" />
                        <img src="/kinetic-brush.png" alt="Brush." className="h-24 sm:h-32 md:h-48 lg:h-60 object-contain drop-shadow-2xl z-10 -mx-1 sm:-mx-1.5 md:-mx-2 lg:-mx-3" />
                    </div>
                    <div className="max-w-3xl mx-auto mb-12 bg-black/40 backdrop-blur-sm p-6 md:p-8 border-l-4 border-yellow/80 shadow-lg text-left">
                        <p className="text-base md:text-lg font-vision font-light leading-relaxed text-white tracking-wide mb-6 opacity-90">
                            "I didn't find my mental stillness in a clinic; I found it lost in the Canadian bush. When the mind feels like overgrowth, staring at another map won't save you. I learned to survive my own thoughts not by sitting still, but through raw, kinetic energy—using a hatchet to carve a physical clearing where I no longer felt lost. We use those same kinetic techniques to cut through the noise, creating the space you need to finally trust your own internal compass."
                        </p>
                        <p className="text-yellow text-sm font-vision uppercase tracking-widest font-bold">
                            — Kirstin Cruickshank Taylor
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="#repair" className="bg-transparent border-4 border-yellow text-yellow px-10 py-5 font-serif text-xl tracking-widest uppercase hover:bg-yellow hover:text-black transition-all flex items-center justify-center gap-2">
                            Off-Grid Reset <OffGridResetIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="absolute inset-0 bg-tunnel-vision pointer-events-none"></div>
            </section>

            {/* VISUAL BREAK BANNER 1 - High Impact Custom Lifestyle */}
            <div className="relative h-48 md:h-72 overflow-hidden border-y-8 border-yellow shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
                <img
                    src="/beach-lifestyle.jpg"
                    className="w-full h-full object-cover object-center filter grayscale-[0.5] contrast-125 saturate-[0.7] brightness-90"
                />
                {/* Tactical Fog/Gradient to hide any remaining upper artifacts and focus on kinetics */}
                <div className="absolute inset-0 bg-gradient-to-t from-spruce/60 via-transparent to-spruce/90"></div>
                <div className="absolute top-4 left-4 bg-yellow text-black px-4 py-1 font-serif text-sm uppercase font-black tracking-widest z-20">Zone: Northern Ontario</div>
            </div>


            {/* THE FOUNDER's STORY: ID="story" */}
            <section id="story" className="py-24 bg-granite">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-5xl md:text-7xl font-bold text-spruce mb-16 uppercase tracking-tight text-center">The Founder’s Story</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-16 font-vision">
                            <div>
                                <h3 className="font-serif text-3xl font-bold text-spruce mb-4 uppercase border-b-2 border-action w-fit">The Limitless, Directionless Start</h3>
                                <p className="text-slate-700 leading-relaxed text-lg font-light">
                                    I grew up in an environment of endless horizons—thousands of opportunities stretching out in every direction—but I was standing there with a limited first aid kit. I knew I could go anywhere, but I didn't know where or why I should begin. In the midst of that vastness, I often felt tangled in the overgrowth. I spent years wondering why the path that seemed so clear for others felt like a tangled thicket for me, leaving me to question if there was a place for me in the landscape at all.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-3xl font-bold text-spruce mb-4 uppercase border-b-2 border-action w-fit">The Village and the Different Map</h3>
                                <p className="text-slate-700 leading-relaxed text-lg font-light">
                                    I was surrounded by a village that worked tirelessly to support me. I saw the effort, the sacrifice, and the genuine desire for me to be safe. But their version of safety was a paved road—the 9-to-5, the Monday-to-Friday. Because they cared so much, they naturally wanted me to stay on the path they understood. It wasn't that they lacked love; it was that we were speaking different languages of survival. While they looked for a sturdy house, I was looking for a clear light at the end of the tunnel. I realized that to find my mental stillness, I had to stop trying to force myself onto their map and start trusting my own compass.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-3xl font-bold text-spruce mb-4 uppercase border-b-2 border-action w-fit">Finding the Light</h3>
                                <p className="text-slate-700 leading-relaxed text-lg font-light">
                                    Leaving the 9-to-5 wasn't a rejection of my village; it was a search and rescue mission for my own sanity. I discovered that I thrive on short-term goals—bright, reachable waypoints that make the next step feel possible. I learned to use a needle in a haystack focus to stitch together a life that worked—one that took the tools I was given and used them in unorthodox ways to finally move forward.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-3xl font-bold text-spruce mb-4 uppercase border-b-2 border-action w-fit">Navigating the Overgrowth</h3>
                                <p className="text-slate-700 leading-relaxed text-lg font-light">
                                    Living with bipolar disorder meant my internal weather was constantly shifting. I gained my skills in the midst of that uncertainty—learning to regulate my nervous system while planting trees in the Canadian bush or navigating the high-frequency hum of a city like Medellin. I discovered that when you feel like you have no place in the civilized world, you have to build your own camp. You don't need to see the whole mountain; you just need that light at the end of the tunnel to keep your feet moving.
                                </p>
                            </div>
                        </div>

                        <div className="sticky top-32 space-y-8">
                            <div className="relative h-[500px] border-8 border-white shadow-2xl overflow-hidden rotate-2">
                                <img
                                    src="/founder-lifestyle.jpg"
                                    alt="Founder & Guide"
                                    className="w-full h-full object-cover filter grayscale-[0.5] contrast-125 saturate-[0.7] brightness-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-spruce/40 to-transparent"></div>
                            </div>

                            <div className="bg-action p-8 text-white shadow-xl -rotate-1 border-4 border-black/10">
                                <h4 className="font-serif text-4xl font-bold mb-4 uppercase">The Kinetic Clearing Philosophy</h4>
                                <p className="text-lg font-vision font-bold leading-relaxed">
                                    Pent-up emotions and mental fog act like deadfall—heavy, stagnant barriers that block your path and leave you feeling frozen. We use movement as the hatchet to break up that weight, transforming emotional paralysis into kinetic energy. This isn't about elite fitness; it's about the practical work of clearing the brush so you can see the trail again.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: Field Repair: ID="repair" */}
            <section id="repair" className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center mb-16">
                        <OffGridResetIcon className="w-16 h-16 text-action mb-8" />
                        <h2 className="font-serif text-5xl md:text-7xl font-bold text-spruce mb-8 uppercase tracking-tight leading-none italic">Off-Grid <span className="text-action">Reset</span></h2>
                        <p className="font-vision text-2xl font-bold text-spruce mb-6 leading-tight max-w-2xl">The Signal: A 5-movement protocol to clear the brush when you're stuck in the thick of it.</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white border-4 border-spruce/10 p-12 text-center shadow-lg relative overflow-hidden">
                            {!showTriage ? (
                                <div className="py-12">
                                    <Radio className={`w-16 h-16 mx-auto mb-8 transition-all duration-500 ${isDeploying ? 'text-action scale-125 animate-ping' : 'text-spruce-light'}`} />
                                    <h3 className="font-serif text-4xl font-black text-spruce uppercase mb-6">Patch Your Gear</h3>
                                    <p className="font-vision text-xl text-slate-600 mb-10 max-w-lg mx-auto">
                                        When the mind is clouded and the body feels heavy, you don't need a transformation—you need a recalibration.
                                    </p>
                                    <button
                                        onClick={handleDeployTriage}
                                        disabled={isDeploying}
                                        className="bg-action text-white px-12 py-5 font-serif text-2xl uppercase tracking-widest hover:bg-action-hover transition-all flex items-center justify-center gap-3 mx-auto shadow-xl hover:shadow-action/20"
                                    >
                                        {isDeploying ? 'Deploying...' : 'Calibrate Tools'} <OffGridResetIcon className={`w-6 h-6 ${isDeploying ? 'animate-pulse' : ''}`} />
                                    </button>
                                </div>
                            ) : (
                                <div className="text-left py-4">
                                    <div className="flex items-center justify-between mb-10 border-b-4 border-action pb-6">
                                        <h3 className="font-serif text-4xl font-black text-spruce uppercase">Recovery Checkpoint 0{triageIndex + 1}</h3>
                                        <div className="flex items-center gap-4 text-xs font-serif uppercase tracking-widest font-bold text-spruce/40">
                                            {triageIndex + 1} / {triageMovements.length}
                                        </div>
                                    </div>

                                    <div className="min-h-[160px] flex items-center mb-10">
                                        <div key={triageIndex} className="animate-in fade-in slide-in-from-right-8 duration-500">
                                            <h4 className="font-serif text-3xl md:text-4xl font-black text-spruce uppercase tracking-tight mb-4 flex items-center gap-3">
                                                <span className="text-action">{triageMovements[triageIndex].action}</span>
                                                <span className="text-sm font-vision font-light text-slate-400 normal-case tracking-normal border-l border-slate-200 pl-3">for {triageMovements[triageIndex].state}</span>
                                            </h4>
                                            <p className="font-vision text-xl text-slate-600 leading-relaxed max-w-2xl">{triageMovements[triageIndex].instruction}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t-2 border-slate-100 pt-8">
                                        <button
                                            onClick={handleDeployTriage}
                                            disabled={isDeploying}
                                            className="w-full sm:w-auto bg-spruce text-white px-8 py-4 font-serif text-xl uppercase tracking-widest hover:bg-spruce/90 transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50"
                                        >
                                            {isDeploying ? 'Scanning...' : triageIndex === triageMovements.length - 1 ? 'Restart Triage' : 'Next Waypoint'} <ArrowRight className={isDeploying ? 'animate-pulse' : ''} />
                                        </button>

                                        <button
                                            onClick={() => {
                                                setShowTriage(false);
                                                setTriageIndex(0);
                                            }}
                                            className="text-spruce-light hover:text-action font-serif uppercase tracking-widest text-sm underline decoration-2 underline-offset-4"
                                        >
                                            Reset Full Kit
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* BANNER: Pack Your Bag */}
            <div className="relative h-48 md:h-72 overflow-hidden bg-slate flex items-center justify-center">
                <img src="/packyourbagsimage.png" className="absolute inset-x-0 bottom-0 w-full h-[180%] object-cover object-bottom filter grayscale-[0.5] contrast-125 brightness-75 opacity-70 shadow-inner translate-y-[15%]" />
                <h2 className="relative z-10 font-serif text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-granite to-slate-light uppercase tracking-widest opacity-90">
                    Pack Your Bag
                </h2>
            </div>


            {/* SECTION: The Field Hatchet: ID="hatchet" */}
            <section id="hatchet" className="py-24 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Axe className="w-16 h-16 text-action mx-auto mb-8" />
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-spruce mb-8 uppercase tracking-tight italic">The Field Hatchet</h2>
                    <p className="font-vision text-2xl font-bold text-spruce mb-6 leading-tight">The Tool: The digital "Pocket Manual." The essential techniques you need to keep the trail open when you’re on your own.</p>
                    <p className="font-vision text-lg text-slate-600 leading-relaxed font-light mb-12">
                        A downloadable, mobile-friendly guide (PDF or video series) containing the "Ten Essentials" for urban survival. This includes "emergency" mobility drills, a 5-minute mental recalibration for high-stress moments, and a checklist for staying "kinetic" when you’re stuck in a sedentary environment. It's the tool you reach for when you're trying to make a clearing.
                    </p>
                    <div className="bg-granite p-8 md:p-12 border-4 border-spruce shadow-2xl relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow rotate-45 translate-x-16 -translate-y-16"></div>
                        <h3 className="font-serif text-3xl font-black text-spruce uppercase mb-6 flex items-center gap-4"><PlusSquare className="text-action" /> Secure the Essentials</h3>
                        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Trekker ID (Email)"
                                className="flex-1 bg-white border-2 border-spruce/20 px-6 py-4 font-vision focus:outline-none focus:border-action transition-all"
                            />
                            <button className="bg-action text-white px-10 py-4 font-serif text-xl uppercase tracking-widest hover:bg-action-hover transition-all flex items-center justify-center gap-2">
                                Access Hatchet Guide <Download />
                            </button>
                        </form>
                        <p className="mt-6 text-xs text-slate-400 uppercase tracking-widest font-bold">Mobile Friendly • PDF/Video • No Filler</p>
                    </div>
                </div>
            </section>

            {/* SECTION: The Clearing Pop-Ups: ID="clearing" */}
            <section id="clearing" className="py-24 bg-spruce relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute w-[800px] h-[800px] bg-yellow rounded-full blur-[120px] -top-1/2 -left-1/4"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2">
                            <MapPin className="w-16 h-16 text-yellow mb-8" />
                            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tight leading-none italic">Kinetic <span className="text-yellow">Clearing</span></h2>
                            <p className="font-vision text-2xl font-bold text-yellow mb-6 leading-tight">The Action: Live-streamed expeditions. This is the 20-minute heavy lifting where we physically "break trail" through emotional overgrowth.</p>
                            <p className="font-vision text-lg text-white/80 leading-relaxed font-light mb-10">
                                Live-streamed, short-notice workshops held in remote backcountry locations. These immersive sessions allow you to join me from anywhere, focusing on "Overgrown to Kinetic" movement patterns and community building while using the raw wilderness as our ultimate training ground.
                            </p>
                            <div className="inline-flex flex-col gap-4">
                                <span className="flex items-center gap-3 text-white font-serif uppercase tracking-widest text-sm bg-black/30 px-6 py-3 border-l-4 border-yellow">
                                    <Activity className="text-yellow" /> Pattern: Overgrown to Kinetic
                                </span>
                                <span className="flex items-center gap-3 text-white font-serif uppercase tracking-widest text-sm bg-black/30 px-6 py-3 border-l-4 border-yellow">
                                    <Map className="text-yellow" /> Location: Remote Backcountry
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="border-8 border-yellow shadow-2xl overflow-hidden rotate-1">
                                <img src="/kinetic-clearing.jpg" className="w-full h-full object-cover filter grayscale-[0.5] contrast-125 saturate-[0.7] brightness-90" alt="Sleeping Giant Provincial Park" />
                            </div>
                            <div className="absolute top-8 left-8 bg-black text-yellow px-6 py-2 font-vision font-black uppercase tracking-tight text-sm z-20">Now Entering: The Clearing</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ENROLLMENT SECTION: ID="enrollment" */}
            <section id="enrollment" className="py-24 bg-black text-white relative overflow-hidden border-y-8 border-action">
                {/* Background Decoration: Radio Waves effect */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-action rounded-full animate-ping"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[1px] border-action rounded-full animate-ping [animation-delay:0.5s]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-action rounded-full animate-ping [animation-delay:1s]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <div className="flex justify-center gap-4 mb-8">
                        <Radio className="w-12 h-12 text-action" />
                        <Signal className="w-12 h-12 text-yellow" />
                    </div>

                    <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tight italic">
                        Radio Silence <span className="text-action">Ends Here.</span>
                    </h2>

                    <div className="space-y-6 mb-12 max-w-2xl mx-auto">
                        <p className="font-vision text-2xl font-bold text-yellow leading-tight">
                            When you’re deep in the thicket, the worst thing you can be is out of touch. Join the frequency to receive Trail Reports on our progress in the backcountry.
                        </p>
                        <p className="font-vision text-lg text-white/80 leading-relaxed font-light">
                            We are currently forging <span className="text-white font-bold italic">The Field Hatchet</span>—your essential digital guide for breaking trail through the daily grind. By joining the signal, you’ll be the first to know when the tool is sharpened, polished, and ready for your rucksack.
                        </p>
                    </div>

                    <div className="bg-spruce/50 p-8 md:p-12 border-4 border-yellow/30 backdrop-blur-md shadow-2xl relative overflow-hidden text-left max-w-3xl mx-auto">
                        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Trekker ID (Email)"
                                className="flex-1 bg-white/10 border-2 border-white/20 text-white px-6 py-4 font-vision focus:outline-none focus:border-action transition-all placeholder:text-white/40"
                            />
                            <button className="bg-white text-black px-10 py-4 font-serif text-xl uppercase tracking-widest hover:bg-yellow transition-all flex items-center justify-center gap-2 group">
                                Transmit Your Email <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </form>
                        <p className="mt-6 text-sm text-yellow/80 uppercase tracking-widest font-bold">
                            Receive updates on the release date and early access coordinates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer / Mission Statement */}
            <footer id="mission" className="bg-spruce text-granite p-12 text-center border-t-8 border-yellow">
                <div className="max-w-4xl mx-auto mb-12">
                    <Crosshair className="w-12 h-12 text-action mx-auto mb-6" />
                    <h3 className="font-serif text-3xl font-bold uppercase mb-4 tracking-tight">The Mission</h3>
                    <p className="text-xl font-vision font-light leading-relaxed text-granite/90">
                        The mission of Kinetic Clearing is to provide the movement-based tools and strategies to hack a path through the mental overgrowth and emotional deadfall that keeps us stuck. We believe that when the mind is clouded and the body feels heavy, intentional motion is the hatchet that clears the way—cutting through the "brush" of pent-up emotion to reclaim your internal compass.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 mb-8 opacity-70 hover:opacity-100 transition-opacity">
                    <Cpu className="w-8 h-8 text-yellow" />
                    <h4 className="font-serif text-xl uppercase tracking-widest">Future Protocol: Digital Pathfinding Unit - Breaking Trail Shortly</h4>
                </div>
                <p className="text-sm opacity-50 uppercase tracking-widest font-vision">© {new Date().getFullYear()} Kinetic Clearing. All rights reserved on Crown Land and Overgrown Trails.</p>
            </footer>

        </div >
    );
}