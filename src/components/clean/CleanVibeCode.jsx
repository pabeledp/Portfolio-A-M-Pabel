import React, { useState } from 'react';
import { vibeCodedWebsites } from '../../data/personalData';
import WebPreviewModal from './WebPreviewModal';
import { Zap, Globe, ExternalLink, ShieldCheck, Eye, Sparkles } from 'lucide-react';

export default function CleanVibeCode() {
  const [selectedWeb, setSelectedWeb] = useState(null);

  return (
    <section id="vibe-code" className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
          <Zap className="w-3.5 h-3.5 fill-current" />
          Vibe Coded Web Applications & Platforms
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Websites Built With <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Vibe Coding</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light">
          Explore live production websites engineered with AI Vibe Coding. Click any site to preview or launch directly.
        </p>
      </div>

      {/* 4 Vibe Coded Web App Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {vibeCodedWebsites.map((site, index) => (
          <div
            key={site.id}
            onClick={() => setSelectedWeb(site)}
            className="group relative rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between shadow-xl space-y-6"
          >
            
            {/* Header & Number Badge */}
            <div className="space-y-4">
              
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors flex-1 overflow-hidden">
                  <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-mono text-cyan-300 font-bold tracking-tight truncate">
                    {site.displayUrl}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 ml-auto" />
                </div>

                <span className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold shrink-0">
                  0{index + 1}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 block mb-1">{site.category}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {site.title}
                </h3>
              </div>

              <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                {site.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {site.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar Footer CTAs */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedWeb(site);
                }}
                className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>Preview Window</span>
              </button>

              <a
                href={site.url}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md hover:scale-105 transition-transform flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Launch {site.displayUrl}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Live Web Preview Modal */}
      <WebPreviewModal
        website={selectedWeb}
        isOpen={Boolean(selectedWeb)}
        onClose={() => setSelectedWeb(null)}
      />

    </section>
  );
}
