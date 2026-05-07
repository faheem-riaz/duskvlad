/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ghost, Eye, Skull, ChevronRight, ChevronLeft, Info, Share2, Download } from 'lucide-react';
import banner1 from './assets/images/duskvald_banner_v1_1778137462923.png';
import banner2 from './assets/images/duskvald_banner_v2_1778137484968.png';
import banner3 from './assets/images/duskvald_banner_v3_1778137507564.png';
import logo1 from './assets/images/duskvald_logo_v1_1778137857042.png';

const BANNERS = [
  {
    id: 1,
    url: banner1,
    title: 'The Corridor',
    description: 'Atmospheric faceless entity in a hospital hallway.'
  },
  {
    id: 2,
    url: banner2,
    title: 'The Observer',
    description: 'Masked figure watching from an open doorway.'
  },
  {
    id: 3,
    url: banner3,
    title: 'The Woods',
    description: 'Silhouettes in a digital fog.'
  }
];

export default function App() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextBanner = () => setCurrentIdx((prev) => (prev + 1) % BANNERS.length);
  const prevBanner = () => setCurrentIdx((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

  return (
    <div className="min-h-screen bg-horror-bg font-sans overflow-x-hidden">
      {/* Noise overlay for texture */}
      <div className="fixed inset-0 pointer-events-none noise-overlay z-50" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-horror-border/50 bg-horror-bg/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-white flex items-center justify-center overflow-hidden">
            <img
              src={logo1}
              alt="Duskvald Logo"
              className="w-full h-full object-cover invert"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-mono text-sm tracking-[0.3em] uppercase hidden sm:block">Duskvald</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#identity" className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Identity</a>
          <a href="#banners" className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Banners</a>
          <button className="bg-white text-black text-[10px] sm:text-xs px-4 py-1.5 uppercase font-bold tracking-tighter hover:bg-zinc-200 transition-colors">
            Get Identity Kit
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section / Banner Showcase */}
        <section id="banners" className="relative h-[85vh] flex flex-col justify-center items-center px-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-0"
            >
              <img
                src={BANNERS[currentIdx].url}
                alt={BANNERS[currentIdx].title}
                className="w-full h-full object-cover brightness-[0.4]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 vignette" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-3 py-1 border border-zinc-700 bg-horror-bg/40 backdrop-blur-sm"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400">Digital Horror Brand</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-7xl md:text-9xl font-mono uppercase tracking-[0.2em] font-bold"
            >
              Duskvald
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.9 }}
              className="text-sm md:text-base tracking-[0.1em] font-light max-w-lg mx-auto text-zinc-300"
            >
              The fear of the unseen. Atmospheric, minimalist horror for the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <button
                onClick={prevBanner}
                className="p-3 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full"
                aria-label="Previous banner"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {BANNERS.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === currentIdx ? 'bg-white w-6' : 'bg-white/20'}`}
                  />
                ))}
              </div>
              <button
                onClick={nextBanner}
                className="p-3 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full"
                aria-label="Next banner"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-12 hidden lg:block">
            <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 space-y-1">
              <p>Variant: 00{BANNERS[currentIdx].id}</p>
              <p>Type: {BANNERS[currentIdx].title}</p>
            </div>
          </div>

          <div className="absolute bottom-12 right-12 flex gap-4">
            <button className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest bg-white/5 hover:bg-white/10 px-4 py-2 border border-white/10 transition-all backdrop-blur-sm">
              <Download size={14} />
              Download JPG
            </button>
          </div>
        </section>

        {/* Brand Details / Identity */}
        <section id="identity" className="py-32 px-6 max-w-7xl mx-auto border-t border-horror-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-mono uppercase tracking-widest flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-white opacity-30" />
                  The Concept
                </h2>
                <div className="space-y-6 text-zinc-400 font-light leading-relaxed tracking-wide">
                  <p>
                    Duskvald emerged within the wave of micro-horror creators using short-form video platforms to deliver intense, easily shareable scares. Its content typically centers on subtle, off-camera threats and ambiguous presences.
                  </p>
                  <p>
                    The brand’s visual identity relies on muted palettes, stark shadows, and minimalist sets. Storytelling often unfolds wordlessly through environmental cues—an open doorway, flickering light, or distorted sound—leaving interpretation to the viewer.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 border border-horror-border bg-white/[0.02] space-y-4">
                  <Eye className="text-zinc-500" />
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold">Faceless Horror</h3>
                  <p className="text-[11px] text-zinc-500 leading-relaxed uppercase">Masked or unseen entities interacting with low-fidelity environments.</p>
                </div>
                <div className="p-6 border border-horror-border bg-white/[0.02] space-y-4">
                  <Skull className="text-zinc-500" />
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold">High Contrast</h3>
                  <p className="text-[11px] text-zinc-500 leading-relaxed uppercase">Heavy reliance on deep shadows and single-point lighting sources.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="aspect-square bg-zinc-900 border border-horror-border relative overflow-hidden group">
                <img
                  src={BANNERS[1].url}
                  alt="Duskvald Identity"
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 border border-white/20 backdrop-blur-sm bg-black/40 text-center space-y-2">
                    <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white">Signature Aesthetic</p>
                    <h4 className="text-xl uppercase font-bold tracking-tight">Analog Digital Dread</h4>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {['Muted Palettes', 'Minimalism', 'Shadow Play', 'Analog Horror', 'Ambiguity'].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[10px] uppercase border border-zinc-800 text-zinc-500 tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-32 bg-zinc-950/50 border-y border-horror-border">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-xs uppercase tracking-[0.8em] text-zinc-500">Primary Platforms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-mono uppercase tracking-widest">YouTube</h3>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Atmospheric Shorts</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-mono uppercase tracking-widest">Instagram</h3>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Micro-Scares</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-mono uppercase tracking-widest">TikTok</h3>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Viral Dread</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-horror-border text-center">
        <div className="space-y-6">
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-zinc-600">
            © 2026 Duskvald Digital
          </div>
          <div className="flex justify-center gap-8">
            <Share2 size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
            <Info size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}
