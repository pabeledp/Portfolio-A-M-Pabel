import React, { useState } from 'react';
import { vibeCodedWebsites } from '../../data/personalData';
import WebPreviewModal from './WebPreviewModal';
import { Zap, Globe, ExternalLink, ShieldCheck, Eye, Sparkles } from 'lucide-react';

export default function CleanVibeCode() {
  const [selectedWeb, setSelectedWeb] = useState(null);

  return (
    <section id="vibe-code" className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-10 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
          <Zap className="w-3.5 h-3.5 fill-current" />
          Vibe Coded Web Applications & Platforms
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-['Creato_Display',sans-serif]">
          Websites Built With <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Vibe Coding</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto font-light">
          Click any site card below to launch its large interactive browser preview window.
        </p>
      </div>

      {/* 4 Compact Vibe Coded Web App Cards in 1 Horizontal Line */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {vibeCodedWebsites.map((site, index) => (
          <div
            key={site.id}
            onClick={() => setSelectedWeb(site)}
            className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between shadow-xl space-y-4"
          >
            
            {/* Header & Number Badge */}
            <div className="space-y-3">
              
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                  0{index + 1}
                </span>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors flex-1 overflow-hidden">
                  <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-[11px] font-mono text-cyan-300 font-bold truncate">
                    {site.displayUrl}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono text-cyan-400 block mb-0.5">{site.category}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {site.title}
                </h3>
              </div>

              <p className="text-slate-300 text-xs font-light leading-relaxed line-clamp-2">
                {site.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {site.tags.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Preview Indicator Bar */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                <span>Click to Preview</span>
              </span>
              <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-slate-950 transition-all">
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Large Live Web Preview Modal */}
      <WebPreviewModal
        website={selectedWeb}
        isOpen={Boolean(selectedWeb)}
        onClose={() => setSelectedWeb(null)}
      />

    </section>
  );
}
