import React, { useState } from 'react';
import { portfolioProjects, externalArchives } from '../../data/personalData';
import VideoModal from './VideoModal';
import WebPreviewModal from './WebPreviewModal';
import BehanceModal from './BehanceModal';
import { 
  Sparkles, Play, ArrowRight, ArrowUpRight, ExternalLink, 
  Film, Palette, ChevronDown, ChevronUp, Layers 
} from 'lucide-react';

export default function CleanPortfolio({ isRevealed = true }) {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedWeb, setSelectedWeb] = useState(null);
  const [selectedBehance, setSelectedBehance] = useState(null);

  const motionProjects = portfolioProjects.filter(p => p.category === 'motion-graphics');
  const shortFormProjects = portfolioProjects.filter(p => p.subCategory === 'short-form');
  const edTechVideoProjects = portfolioProjects.filter(p => p.category === 'video-editing' && p.subCategory !== 'short-form');
  const graphicProjects = portfolioProjects.filter(p => p.category === 'graphic-design');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  const handleProjectClick = (project) => {
    if (project.category === 'graphic-design') {
      setSelectedBehance(project);
    } else if (project.category === 'vibe-coding' && project.url) {
      setSelectedWeb({
        id: project.id,
        title: project.title,
        url: project.url,
        displayUrl: project.client,
        category: 'Vibe Coded Web App',
        tags: project.tags
      });
    } else {
      setSelectedVideo(project);
    }
  };

  const renderProjectCard = (project) => {
    const isBehance = project.category === 'graphic-design';
    const isMotion = project.category === 'motion-graphics';
    const isShortForm = project.subCategory === 'short-form';

    return (
      <div
        key={project.id}
        onClick={() => handleProjectClick(project)}
        className="group relative rounded-2xl sm:rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.12)] flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-xl"
      >
        {/* Media Container / Live Embed Preview */}
        <div className="relative w-full aspect-video bg-slate-950 overflow-hidden border-b border-slate-800/80">
          
          {isBehance ? (
            /* Behance Graphic iFrame Embed Preview */
            <iframe
              src={project.embedUrl}
              title={project.title}
              className="w-full h-full border-0 pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            /* Google Drive Video Live Preview iFrame */
            <iframe
              src={project.embedUrl}
              title={project.title}
              className="w-full h-full border-0 pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              allow="autoplay"
            />
          )}

          {/* Hover Play / View Overlay */}
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.6)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
              {isBehance ? (
                <ExternalLink className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 fill-slate-950 translate-x-0.5" />
              )}
            </div>
          </div>

          {/* Top Category Badge */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-cyan-400 backdrop-blur-md">
            <span>{isBehance ? 'Behance Design' : isMotion ? '3D Motion' : isShortForm ? 'Short-Form Video' : 'Ed-Tech Video'}</span>
          </div>

          {/* Client Tag */}
          <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-[9px] font-mono text-slate-300">
            {project.client}
          </div>
        </div>

        {/* Card Content Footer */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyan-400 font-semibold block">
              {project.subjectTag}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 line-clamp-2 font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="works" 
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10 transition-all duration-700 ease-out transform ${
        isRevealed 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-30 translate-y-6 pointer-events-none'
      }`}
    >
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8 sm:mb-10 md:mb-12">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono font-medium">
            Featured Creative Work
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-['Creato_Display',sans-serif]">
            Selected <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            Commercial Video Edits, Short-Form Reels, 3D Motion Graphics, Graphic Design Systems, and Vibe Coded Web Applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 backdrop-blur-md">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'motion-graphics', label: '3D Motion' },
            { id: 'video-editing', label: 'Video Editing' },
            { id: 'graphic-design', label: 'Graphic Design' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category-Wise Display when filter === 'all' (Both 3-Item Preview and Full View) */}
      {filter === 'all' && (
        <div className="space-y-10 sm:space-y-14">
          
          {/* Section 1: 3D Motion Graphics */}
          {motionProjects.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    3D Motion Graphics
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-400 font-bold">
                    {motionProjects.length} Projects
                  </span>
                </div>
                {!showAll && motionProjects.length > 3 && (
                  <button
                    onClick={() => handleFilterChange('motion-graphics')}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer group"
                  >
                    <span>See more ({motionProjects.length - 3} more)</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
                {(showAll ? motionProjects : motionProjects.slice(0, 3)).map((project) => renderProjectCard(project))}
              </div>
            </div>
          )}

          {/* Section 2: Short-Form Video (Strictly 3 in default preview, all in showAll) */}
          {shortFormProjects.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <Film className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Short-Form Video
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-400 font-bold">
                    {shortFormProjects.length} Reels & Shorts
                  </span>
                </div>
                {!showAll && shortFormProjects.length > 3 && (
                  <button
                    onClick={() => handleFilterChange('video-editing')}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer group"
                  >
                    <span>See more ({shortFormProjects.length - 3} more)</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
                {(showAll ? shortFormProjects : shortFormProjects.slice(0, 3)).map((project) => renderProjectCard(project))}
              </div>
            </div>
          )}

          {/* Section 3: Commercial Video Editing */}
          {edTechVideoProjects.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Commercial Video Editing
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-400 font-bold">
                    {edTechVideoProjects.length} Videos
                  </span>
                </div>
                {!showAll && edTechVideoProjects.length > 3 && (
                  <button
                    onClick={() => handleFilterChange('video-editing')}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer group"
                  >
                    <span>See more ({edTechVideoProjects.length - 3} more)</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
                {(showAll ? edTechVideoProjects : edTechVideoProjects.slice(0, 3)).map((project) => renderProjectCard(project))}
              </div>
            </div>
          )}

          {/* Section 4: Graphic Design & Brand Systems */}
          {graphicProjects.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Graphic Design & Brand Systems
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-400 font-bold">
                    {graphicProjects.length} Projects
                  </span>
                </div>
                {!showAll && graphicProjects.length > 3 && (
                  <button
                    onClick={() => handleFilterChange('graphic-design')}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer group"
                  >
                    <span>See more ({graphicProjects.length - 3} more)</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
                {(showAll ? graphicProjects : graphicProjects.slice(0, 3)).map((project) => renderProjectCard(project))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* Grid View for Specific Filter Selected (3D Motion, Video Editing, Graphic Design) */}
      {filter !== 'all' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
            {portfolioProjects
              .filter(p => filter === 'video-editing' ? p.category === 'video-editing' : p.category === filter)
              .map((project) => renderProjectCard(project))}
          </div>
        </div>
      )}

      {/* Apple Liquid Glass Action Buttons Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 sm:pt-16">
        
        {/* Case 1: Filter is 3D Motion or Video Editing -> Google Drive Archive Button */}
        {(filter === 'motion-graphics' || filter === 'video-editing') && (
          <a
            href={externalArchives.videoAndMotionDriveUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-2xl bg-white/[0.07] hover:bg-white/[0.14] active:bg-white/[0.22] border border-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5),inset_0_1px_2px_0_rgba(255,255,255,0.4)] hover:scale-[1.02] cursor-pointer overflow-hidden"
          >
            {/* Specular Apple Glass Top Edge Highlight */}
            <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-full pointer-events-none" />
            <span>See More Works</span>
            <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </a>
        )}

        {/* Case 2: Filter is Graphic Design -> Behance Archive Button */}
        {filter === 'graphic-design' && (
          <a
            href={externalArchives.graphicDesignBehanceUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-2xl bg-white/[0.07] hover:bg-white/[0.14] active:bg-white/[0.22] border border-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5),inset_0_1px_2px_0_rgba(255,255,255,0.4)] hover:scale-[1.02] cursor-pointer overflow-hidden"
          >
            {/* Specular Apple Glass Top Edge Highlight */}
            <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-full pointer-events-none" />
            <span>See More Works</span>
            <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </a>
        )}

        {/* Case 3: Filter is 'all' and NOT showAll -> Expand to View All Projects Category-Wise */}
        {filter === 'all' && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-2xl bg-white/[0.07] hover:bg-white/[0.14] active:bg-white/[0.22] border border-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5),inset_0_1px_2px_0_rgba(255,255,255,0.4)] hover:scale-[1.02] cursor-pointer overflow-hidden"
          >
            <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-full pointer-events-none" />
            <Layers className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
            <span>See More Projects ({portfolioProjects.length - 12} More)</span>
            <ChevronDown className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* Case 4: Filter is 'all' and showAll is true (Full View of all projects category-wise) -> Liquid Glass links to Drive & Behance + Show Less */}
        {filter === 'all' && showAll && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={externalArchives.videoAndMotionDriveUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-2xl bg-white/[0.07] hover:bg-white/[0.14] active:bg-white/[0.22] border border-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5),inset_0_1px_2px_0_rgba(255,255,255,0.4)] hover:scale-[1.02] cursor-pointer overflow-hidden"
            >
              <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-full pointer-events-none" />
              <span>See More Works</span>
              <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>

            <button
              onClick={() => setShowAll(false)}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-slate-400 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 cursor-pointer"
            >
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}

      </div>

      {/* Dynamic Video Lightbox Modal */}
      <VideoModal
        project={selectedVideo}
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Dynamic Behance Graphic Lightbox Modal */}
      <BehanceModal
        project={selectedBehance}
        isOpen={Boolean(selectedBehance)}
        onClose={() => setSelectedBehance(null)}
      />

      {/* Dynamic Web App Preview Modal */}
      <WebPreviewModal
        project={selectedWeb}
        isOpen={Boolean(selectedWeb)}
        onClose={() => setSelectedWeb(null)}
      />

    </section>
  );
}
