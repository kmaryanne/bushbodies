// app/page.tsx
'use client';

import { useState } from 'react';
import { Crosshair, Map, Wind, Trees, ArrowRight, Activity, Cpu, PlusSquare, Brain, Bone, Download, MapPin, Users, MountainSnow } from 'lucide-react';

// ... (Keep existing waypoint data arrays the same as before)
const mentalWaypoints = [
    "Three minutes to clear the brush: Focus your eyes on a distant pine, breathe in for 4, out for 6.",
    "Acknowledge the thicket in your mind. Take a step back, find a granite anchor point, and reset.",
    "Shift your horizon. Break the gridlock by physically moving to a different environment for 60 seconds."
];

const physicalWaypoints = [
    "Assess your posture. Stack your joints like well-laid fieldstones. Drop your shoulders.",
    "Shake out the tension in your hands—let the kinetic energy disperse into the ground.",
    "Anchor your footing. Perform three deep squats to restore blood flow to your foundational gear (your legs)."
];

export default function Home() {
    const [patchUpTip, setPatchUpTip] = useState("");
    const [isPatching, setIsPatching] = useState(false);
    const [activeKit, setActiveKit] = useState<'mental' | 'physical' | null>(null);

    const handlePatchUp = (type: 'mental' | 'physical') => {
        setIsPatching(true);
        setActiveKit(type);

        setTimeout(() => {
            const pool = type === 'mental' ? mentalWaypoints : physicalWaypoints;
            const randomTip = pool[Math.floor(Math.random() * pool.length)];
            setPatchUpTip(randomTip);
            setIsPatching(false);
        }, 500);
    };

    return (
        <div className="flex flex-col">

            {/* HERO SECTION: ID="home" */}
            <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20 pb-32 overflow-hidden">

                {/* HERO IMAGE BACKGROUND */}
                <div className="absolute inset-0 -z-20">
                    <img
                        src="/hero-custom.jpg"
                        alt="Custom Northern Panorama"
                        className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-spruce/95 via-spruce/70 to-slate-dark"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto mt-20">
                    <MountainSnow className="w-16 h-16 text-white mx-auto mb-8 animate-pulse" strokeWidth={1.5} />
                    <h1 className="font-serif text-6xl md:text-9xl font-bold text-granite mb-8 uppercase tracking-tighter leading-none drop-shadow-2xl">
                        Clear the <span className="text-white">Brush.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl font-vision font-light leading-relaxed text-white mb-12 drop-shadow-md tracking-wide">
                        We use movement to clear the brush in our own minds and patch ourselves up so we can keep trekking. We take that feeling of being frozen and we turn it into kinetic energy.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="#story" className="bg-action text-white px-10 py-5 font-serif text-xl tracking-widest uppercase hover:bg-action-hover transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,85,0,0.3)] border-b-4 border-black/20 active:translate-y-1">
                            The Story <Map className="w-6 h-6" />
                        </a>
                        <a href="#triage" className="bg-transparent border-4 border-yellow text-yellow px-10 py-5 font-serif text-xl tracking-widest uppercase hover:bg-yellow hover:text-black transition-all flex items-center justify-center gap-2">
                            Field Triage <Activity className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="absolute inset-0 bg-tunnel-vision pointer-events-none"></div>
            </section>

            {/* VISUAL BREAK BANNER 1 - High Impact Custom Lifestyle */}
            <div className="relative h-48 md:h-72 overflow-hidden border-y-8 border-yellow shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
                <img
                    src="/beach-lifestyle.jpg"
                    className="w-full h-full object-cover object-center filter grayscale contrast-150 brightness-75 scale-110"
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
                                    I grew up in an environment of endless horizons—thousands of opportunities stretching out in every direction—but I was standing there with a limited first aid kit. I knew I could go anywhere, but I didn't know where or why I should begin. In the midst of that vastness, I often felt frozen. I spent years wondering why the path that seemed so clear for others felt like a tangled thicket for me, leaving me to question if there was a place for me in the landscape at all.
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
                                <h4 className="font-serif text-4xl font-bold mb-4 uppercase">The Bush Bodies Philosophy</h4>
                                <p className="text-lg font-vision font-bold leading-relaxed">
                                    I created Bush Bodies for the people who are tired of being told to just start on a path that doesn't fit their internal landscape. Bush Bodies is for when you’re stuck in the overgrowth, overstimulated, and needing to be efficient with your energy. We don't focus on 12-week transformations; we focus on the short-term trek.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative h-40 md:h-64 overflow-hidden bg-slate flex items-center justify-center">
                <img src="https://picsum.photos/seed/canadian-shield-granite/1920/500" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 opacity-40 mix-blend-luminosity" />
                <h2 className="relative z-10 font-serif text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-granite to-slate-light uppercase tracking-widest opacity-90">
                    Build Your Kit
                </h2>
            </div>


            {/* SECTION: Unbound Trekkers: ID="unbound" */}
            <section id="unbound" className="py-24 bg-granite relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="font-serif text-5xl md:text-7xl font-bold text-spruce mb-8 uppercase tracking-tighter leading-none italic">Unbound <span className="text-action">Trekkers</span></h2>
                            <p className="font-vision text-2xl font-bold text-spruce mb-6 leading-tight">The Strategy: The community of "graduates" who have moved through the brush and reached the clearing.</p>
                            <p className="font-vision text-lg text-slate-700 leading-relaxed font-light mb-8">
                                A high-level membership or referral network of people who have integrated these survival skills into their lives. This stage focuses on long-term resilience, storytelling (sharing their "pathway" out of the swamp), and mentoring newer trekkers. They are no longer "stuck" in the urban grind; they are moving through it with freedom and intent.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-spruce text-white px-4 py-2 font-serif text-xs uppercase tracking-widest">Graduates Only</span>
                                <span className="bg-action text-white px-4 py-2 font-serif text-xs uppercase tracking-widest">Resilience</span>
                                <span className="border-2 border-spruce/20 text-spruce px-4 py-2 font-serif text-xs uppercase tracking-widest">Mentorship</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="border-8 border-white shadow-2xl overflow-hidden -rotate-2 bg-slate-200">
                                <img src="https://picsum.photos/seed/summit-group/800/600" className="w-full h-full object-cover filter grayscale contrast-125 saturate-50" alt="Unbound Community" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-yellow text-black px-6 py-3 font-serif font-black uppercase z-20 shadow-xl">The Clearing</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISUAL BREAK BANNER 2: Rucksack (EDC) Focus */}
            <div className="relative h-48 md:h-72 overflow-hidden border-y-8 border-action shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
                <img src="https://picsum.photos/seed/tactical-rucksack/1920/600" className="w-full h-full object-cover filter grayscale contrast-150 brightness-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-spruce via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="font-serif text-4xl md:text-7xl font-black text-white uppercase tracking-widest italic opacity-20">Everyday Carry</h2>
                </div>
            </div>

            {/* SECTION: The Rucksack Pocket: ID="rucksack" */}
            <section id="rucksack" className="py-24 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Download className="w-16 h-16 text-action mx-auto mb-8" />
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-spruce mb-8 uppercase tracking-tighter italic">The Rucksack Pocket</h2>
                    <p className="font-vision text-2xl font-bold text-spruce mb-6 leading-tight">The Strategy: The digital "Everyday Carry" (EDC) lead magnet that every trekker needs in their bag.</p>
                    <p className="font-vision text-lg text-slate-600 leading-relaxed font-light mb-12">
                        A downloadable, mobile-friendly guide (PDF or video series) containing the "Ten Essentials" for urban survival. This includes "emergency" mobility drills, a 5-minute mental recalibration for high-stress moments, and a checklist for staying "kinetic" when you’re stuck in a sedentary environment. It’s the tool you reach for when you're starting to feel "frozen."
                    </p>
                    <div className="bg-granite p-8 md:p-12 border-4 border-spruce shadow-2xl relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow rotate-45 translate-x-16 -translate-y-16"></div>
                        <h3 className="font-serif text-3xl font-black text-spruce uppercase mb-6 flex items-center gap-4"><PlusSquare className="text-action" /> Secure the Essentials</h3>
                        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Trekber ID (Email)"
                                className="flex-1 bg-white border-2 border-spruce/20 px-6 py-4 font-vision focus:outline-none focus:border-action transition-all"
                            />
                            <button className="bg-action text-white px-10 py-4 font-serif text-xl uppercase tracking-widest hover:bg-action-hover transition-all flex items-center justify-center gap-2">
                                Access Pocket Guide <Download />
                            </button>
                        </form>
                        <p className="mt-6 text-xs text-slate-400 uppercase tracking-widest font-bold">Mobile Friendly • PDF/Video • No Filler</p>
                    </div>
                </div>
            </section>

            {/* SECTION: Base Camp Pop-Ups: ID="basecamp" */}
            <section id="basecamp" className="py-24 bg-spruce relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute w-[800px] h-[800px] bg-yellow rounded-full blur-[120px] -top-1/2 -left-1/4"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2">
                            <MapPin className="w-16 h-16 text-yellow mb-8" />
                            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tighter leading-none italic">Base Camp <span className="text-yellow">Pop-Ups</span></h2>
                            <p className="font-vision text-2xl font-bold text-yellow mb-6 leading-tight">The Strategy: Low-friction, physical meetups that prove you can find "Crown Land" anywhere.</p>
                            <p className="font-vision text-lg text-white/80 leading-relaxed font-light mb-10">
                                Mobile, short-notice workshops held in "unexpected" urban wilderness—empty parking lots, alleyways, or small apartment rooftops. These sessions focus on "Frozen to Kinetic" movement patterns and community building, showing people how to use their immediate environment as a training ground.
                            </p>
                            <div className="inline-flex flex-col gap-4">
                                <span className="flex items-center gap-3 text-white font-serif uppercase tracking-widest text-sm bg-black/30 px-6 py-3 border-l-4 border-yellow">
                                    <Activity className="text-yellow" /> Pattern: Frozen to Kinetic
                                </span>
                                <span className="flex items-center gap-3 text-white font-serif uppercase tracking-widest text-sm bg-black/30 px-6 py-3 border-l-4 border-yellow">
                                    <Map className="text-yellow" /> Location: Mobile / Urban Wilderness
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="border-8 border-yellow shadow-2xl overflow-hidden rotate-1">
                                <img src="https://picsum.photos/seed/urban-forest/800/1000" className="w-full h-full object-cover filter grayscale contrast-125" alt="Urban Base Camp" />
                            </div>
                            <div className="absolute top-8 left-8 bg-black text-yellow px-6 py-2 font-vision font-black uppercase tracking-tighter text-sm z-20">Now Entering: Base Camp</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Mission Statement */}
            <footer className="bg-spruce text-granite p-12 text-center border-t-8 border-yellow">
                <div className="max-w-4xl mx-auto mb-12">
                    <Crosshair className="w-12 h-12 text-action mx-auto mb-6" />
                    <h3 className="font-serif text-3xl font-bold uppercase mb-4 tracking-tighter">My Mission</h3>
                    <p className="text-xl font-vision font-light leading-relaxed text-granite/90">
                        I am here to help you get creative with what you have. We use movement to clear the brush in our own minds and patch ourselves up so we can keep trekking. Whether you are on Crown Land or a concrete sidewalk, we take that feeling of being frozen and we turn it into kinetic energy.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 mb-8 opacity-70 hover:opacity-100 transition-opacity">
                    <Cpu className="w-8 h-8 text-yellow" />
                    <h4 className="font-serif text-xl uppercase tracking-widest">Future Protocol: AI Scout In Development</h4>
                </div>
                <p className="text-sm opacity-50 uppercase tracking-widest font-vision">© {new Date().getFullYear()} Bush Bodies. All rights reserved on Crown Land and Frozen Trails.</p>
            </footer>

        </div>
    );
}