import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Globe, ShieldCheck, Sparkles, AlertCircle, Play } from 'lucide-react';

export default function WebPreviewModal({ website, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('iframe'); // 'iframe' | 'info'

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !website) return null;

  return createPortal(
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-2xl animate-fade-in"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-7xl h-[92vh] rounded-3xl bg-slate-950 border border-cyan-500/40 overflow-hidden shadow-2xl flex flex-col justify-between"
      >
        
        {/* Browser Top Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          
          {/* Controls & URL Bar */}
          <div className="flex items-center gap-3 flex-1 overflow-hidden">
            <div className="flex items-center gap-1.5 shrink-0">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-xl px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs font-mono text-cyan-300 overflow-hidden">
              <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{website.url}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-auto" />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={website.url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Launch Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Notice Bar for Cross-Origin Embed Security */}
        <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300 font-mono gap-2 shrink-0">
          <div className="flex items-center gap-2 truncate">
            <AlertCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">If your browser restricts security frame embedding, launch directly in fullscreen.</span>
          </div>
          <a
            href={website.url}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 font-bold hover:underline shrink-0 flex items-center gap-1"
          >
            <span>Open {website.displayUrl}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Browser Content Viewport */}
        <div className="relative flex-1 bg-slate-950 overflow-hidden">
          
          <iframe
            src={website.url}
            title={website.title}
            className="w-full h-full border-0 bg-slate-950"
            allow="fullscreen"
          />

          {/* Overlay Direct Launch Floating Pill CTA for Smooth Experience */}
          <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
            <a
              href={website.url}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-2xl bg-slate-900/95 border border-cyan-500/50 text-cyan-300 font-bold text-xs shadow-2xl hover:bg-slate-800 transition-all flex items-center gap-2 backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Launch {website.title} Fullscreen ↗</span>
            </a>
          </div>

        </div>

        {/* Footer Info Bar */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-sm font-bold text-white mr-2">{website.title}</span>
            <span className="text-xs text-slate-400 font-mono">({website.category})</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {website.tags.map((t, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-cyan-300 border border-slate-800">
                #{t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}
