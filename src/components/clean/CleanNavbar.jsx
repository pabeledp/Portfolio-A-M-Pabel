import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

export default function CleanNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Seamless Top Glass Blur Shield (Butter-smooth gradient mask fade - ZERO hard edges!) */}
      <div className="fixed top-0 left-0 right-0 h-28 pointer-events-none z-40 top-blur-mask backdrop-blur-2xl bg-gradient-to-b from-[#070913]/90 via-[#070913]/40 to-transparent" />

      {/* Floating Navbar Pill Container */}
      <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-2 sm:px-4 md:px-3 max-w-[1320px] mx-auto transition-all pointer-events-none">
        <div className="bg-[#070913]/80 backdrop-blur-3xl border border-slate-800/80 rounded-2xl md:rounded-full px-5 sm:px-8 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.8)] flex items-center justify-between gap-4 pointer-events-auto">
          
          {/* Brand Logo Only */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <img
              src="/assets/A-M-Pabel-Logo.webp"
              alt="A M Pabel Official Logo"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#works" className="hover:text-cyan-400 transition-colors">Works</a>
            <a href="#vibe-code" className="hover:text-cyan-400 transition-colors">Vibe Coding</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          {/* Desktop WhatsApp CTA Button (Apple Liquid Glass) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/8801615288259"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-medium tracking-wide transition-all duration-300 backdrop-blur-2xl bg-white/[0.07] hover:bg-white/[0.14] active:bg-white/[0.22] border border-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5),inset_0_1px_2px_0_rgba(255,255,255,0.4)] hover:scale-[1.02] cursor-pointer overflow-hidden shrink-0"
            >
              {/* Specular Apple Glass Top Edge Highlight */}
              <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-full pointer-events-none" />
              <MessageSquare className="w-3.5 h-3.5 text-white/90 group-hover:text-white transition-colors" />
              <span>WhatsApp Pabel</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button (3 Lines) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>

        {/* Mobile Drawer Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-4 px-4 bg-[#070913]/95 backdrop-blur-3xl border border-slate-800 rounded-2xl mt-2 space-y-3 animate-in slide-in-from-top duration-200 shadow-2xl pointer-events-auto">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
            >
              Services
            </a>
            <a
              href="#works"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
            >
              Works
            </a>
            <a
              href="#vibe-code"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
            >
              Vibe Coding
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
            >
              Contact
            </a>

            {/* WhatsApp CTA inside Mobile 3-Lines Dropdown Menu (Apple Liquid Glass) */}
            <a
              href="https://wa.me/8801615288259"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative w-full py-3 px-4 rounded-xl text-white text-xs font-medium tracking-wide transition-all duration-300 backdrop-blur-2xl bg-white/[0.07] hover:bg-white/[0.14] active:bg-white/[0.22] border border-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 mt-2 overflow-hidden"
            >
              <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-xl pointer-events-none" />
              <MessageSquare className="w-3.5 h-3.5 text-white/90 group-hover:text-white transition-colors" />
              <span>WhatsApp Pabel</span>
            </a>
          </div>
        )}

      </header>
    </>
  );
}
