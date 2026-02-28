// components/DynamicHeader.tsx
'use client';

import { useState, useEffect } from 'react';
import { Compass, Menu, Leaf } from 'lucide-react';

const sectionMap: Record<string, string> = {
  'home': 'Kinetic Clearing',
  'story': "The Founder's Story",
  'repair': 'Off-Grid Reset',
  'hatchet': 'The Field Hatchet',
  'clearing': 'Kinetic Clearing',
  'enrollment': 'Join The Signal',
  'mission': 'Our Mission'
};

// Randomized leaf decoration along the header bottom edge
const LeafDecoration = () => {
  const leaves = [
    { left: '2%', rotate: '15deg', scale: 0.8, color: '#2c5236', opacity: 0.6 },
    { left: '12%', rotate: '-10deg', scale: 1.1, color: '#3d2b1f', opacity: 0.8 },
    { left: '25%', rotate: '45deg', scale: 0.7, color: '#1a3622', opacity: 0.5 },
    { left: '38%', rotate: '-30deg', scale: 0.9, color: '#4a3728', opacity: 0.7 },
    { left: '55%', rotate: '20deg', scale: 1.2, color: '#2c5236', opacity: 0.6 },
    { left: '68%', rotate: '-15deg', scale: 0.6, color: '#1a3622', opacity: 0.8 },
    { left: '82%', rotate: '60deg', scale: 1.0, color: '#3d2b1f', opacity: 0.5 },
    { left: '94%', rotate: '5deg', scale: 0.8, color: '#4a3728', opacity: 0.7 },
  ];

  return (
    <div className="absolute bottom-[-10px] left-0 w-full h-8 pointer-events-none z-20 flex items-center">
      {leaves.map((leaf, i) => (
        <Leaf
          key={i}
          className="absolute transition-transform duration-700"
          style={{
            left: leaf.left,
            transform: `rotate(${leaf.rotate}) scale(${leaf.scale})`,
            color: leaf.color,
            opacity: leaf.opacity,
            width: '20px',
            height: '20px'
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
};

export default function DynamicHeader() {
  const [activeTitle, setActiveTitle] = useState('Kinetic Clearing');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress percentage (0 to 1)
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.min(Math.max(window.scrollY / scrollHeight, 0), 1) : 0;
      setScrollProgress(progress);
    };

    // Intersection Observer to track which section is currently viewed
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          const newTitle = sectionMap[entry.target.id];
          if (newTitle) setActiveTitle(newTitle);
        }
      });
    };

    // Observer options: Trigger when the section reaches a fair margin near the top
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -40% 0px', // Adjusted to catch the bottom-most section easier
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Target the IDs defined in page.tsx
    const targets = document.querySelectorAll('#home, #story, #repair, #hatchet, #clearing, #enrollment, #mission');
    targets.forEach((t) => observer.observe(t));

    window.addEventListener('scroll', handleScroll);

    // Initial call to set initial progress
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      targets.forEach((t) => observer.unobserve(t));
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 border-b-2 border-spruce/30 ${isScrolled ? 'h-16 bg-spruce/95 backdrop-blur-sm' : 'h-24'
        }`}
    >
      <LeafDecoration />
      {/* BACKGROUND IMAGE TEXTURE 
          Replace the URL below with your actual Northern Ontario texture image (e.g., spruce line, granite texture).
          We use CSS filters to make it feel gritty and recessive.
        */}
      <div className="absolute inset-0 -z-20 bg-spruce">
        <img
          src="https://picsum.photos/seed/spruce-needle-detailed/1920/200"
          alt="Northern Forest Texture"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-spruce via-spruce/90 to-spruce/80 -z-10"></div>
      </div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center relative z-10">

        {/* Dynamic Logo/Title Section */}
        <div className="flex items-center gap-3">
          {/* The compass rotates dynamically based on scroll progress (up to 360deg) */}
          <Compass
            className="text-yellow"
            strokeWidth={2.5}
            style={{
              transform: `rotate(${scrollProgress * 360}deg)`,
              width: `${Math.max(24, 32 - (scrollProgress * 8))}px`,
              height: `${Math.max(24, 32 - (scrollProgress * 8))}px`,
              transition: 'width 0.5s, height 0.5s', // Smooth scaling
            }}
          />

          {/* The Changing Text */}
          <span key={activeTitle} className={`font-serif font-black uppercase tracking-widest text-granite animate-in slide-in-from-bottom-2 fade-in duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
            {activeTitle}
          </span>
        </div>

        {/* Desktop Navigation - High Vis Safety Marks */}
        <nav className="hidden md:flex space-x-8 font-vision font-black text-xs text-white uppercase tracking-[0.2em]">
          <a href="#home" className="hover:text-yellow transition-colors border-b-2 border-transparent hover:border-yellow pb-1">Home</a>
          <a href="#story" className="hover:text-yellow transition-colors border-b-2 border-transparent hover:border-yellow pb-1">Story</a>
          <a href="#repair" className="hover:text-yellow transition-colors border-b-2 border-transparent hover:border-yellow pb-1">Reset</a>
          <a href="#hatchet" className="hover:text-yellow transition-colors border-b-2 border-transparent hover:border-yellow pb-1">Hatchet</a>
          <a href="#clearing" className="hover:text-yellow transition-colors border-b-2 border-transparent hover:border-yellow pb-1">Clearing</a>
          <a href="#mission" className="hover:text-yellow transition-colors border-b-2 border-transparent hover:border-yellow pb-1">Mission</a>
          <a href="#enrollment" className="hover:text-action hover:border-action transition-all border-b-2 border-transparent hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.7)] pb-1">Alert</a>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-yellow" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="w-8 h-8" />
        </button>

      </div>

      {/* Basic Mobile Menu Drawer (Safety Vest Style) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop for closing menu on click outside */}
          <div
            className="md:hidden absolute top-full left-0 w-full h-screen bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden absolute top-full left-0 w-full bg-action border-b-8 border-yellow p-8 flex flex-col gap-6 text-white font-black uppercase tracking-[0.2em] text-lg shadow-2xl animate-in slide-in-from-top duration-300">
            <a href="#home" className="hover:text-yellow flex items-center gap-4" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-2 h-2 bg-yellow"></div> Home
            </a>
            <a href="#story" className="hover:text-yellow flex items-center gap-4" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-2 h-2 bg-yellow"></div> Story
            </a>
            <a href="#repair" className="hover:text-yellow flex items-center gap-4" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-2 h-2 bg-yellow"></div> Reset
            </a>
            <a href="#hatchet" className="hover:text-yellow flex items-center gap-4" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-2 h-2 bg-yellow"></div> The Field Hatchet
            </a>
            <a href="#clearing" className="hover:text-yellow flex items-center gap-4" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-2 h-2 bg-yellow"></div> Kinetic Clearing
            </a>
            <a href="#mission" className="hover:text-yellow flex items-center gap-4" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-2 h-2 bg-yellow"></div> The Mission
            </a>
            <a href="#enrollment" className="hover:text-action flex items-center gap-4 transition-all" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-2 h-2 bg-yellow"></div> Alert the Signal
            </a>
          </div>
        </>
      )}
    </header>
  );
}