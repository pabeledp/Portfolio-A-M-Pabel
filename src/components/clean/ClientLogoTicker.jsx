import React, { useState } from 'react';
import { 
  BookOpen, ShoppingBag, Shirt, Home, Smartphone, 
  Apple, Compass, MapPin, Tv, GraduationCap, 
  Globe2, Award, BookMarked, Lightbulb 
} from 'lucide-react';

const clientBrands = [
  { id: 1, name: 'reThink.ac', tag: 'EdTech Platform', icon: Lightbulb, active: true },
  { id: 2, name: 'Banglay IELTS', tag: 'IELTS Training Center', icon: BookMarked, active: true },
  { id: 3, name: 'Banglay IELTS & Immigration Center', tag: 'Immigration Services', icon: Award, active: true },
  { id: 4, name: 'Education BD', tag: 'Study Abroad Consultancy', icon: GraduationCap },
  { id: 5, name: 'Shikor TV Canada', tag: 'TV Channel Broadcast', icon: Tv },
  { id: 6, name: 'Amazon Immigration Services', tag: 'Visa & Work Services', icon: Compass },
  { id: 7, name: 'Worklife Canada Immigration', tag: 'Canada Immigration', icon: MapPin },
  { id: 8, name: 'Global Pathways Immigration', tag: 'Study Abroad Consultancy', icon: Globe2 },
  { id: 9, name: 'iMac BD', tag: 'Apple Products Seller', icon: Apple },
  { id: 10, name: 'Eastern Technologies', tag: 'Mobile Servicing Centre', icon: Smartphone },
  { id: 11, name: 'Rumi Dream Homes', tag: 'Real Estate Broker', icon: Home },
  { id: 12, name: 'Tex Challengers Asia', tag: 'Textile Agency', icon: Shirt },
  { id: 13, name: 'Infinity Mega Mall', tag: 'Retail & Shopping', icon: ShoppingBag },
  { id: 14, name: 'The Quarterly Parampara', tag: 'Islamic Magazine', icon: BookOpen }
];

export default function ClientLogoTicker() {
  const [isHovered, setIsHovered] = useState(false);

  const dupBrandsRow2 = [...clientBrands.slice().reverse(), ...clientBrands.slice().reverse(), ...clientBrands.slice().reverse()];
  const dupBrandsRow3 = [...clientBrands.slice(4), ...clientBrands.slice(0, 4), ...clientBrands, ...clientBrands];
  const dupBrandsRow4 = [...clientBrands.slice(8).reverse(), ...clientBrands.slice(0, 8).reverse(), ...clientBrands];

  const renderBgCard = (b, idx, colorClass) => {
    const IconComp = b.icon;
    return (
      <div 
        key={`bg-card-${idx}`} 
        className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm shrink-0"
      >
        <div className={`p-1.5 rounded-xl bg-slate-950 border border-slate-800 ${colorClass}`}>
          <IconComp className="w-3.5 h-3.5" />
        </div>
        <div className="text-left">
          <div className="text-xs font-bold text-slate-300 font-mono flex items-center gap-1.5">
            <span>{b.name}</span>
            {b.active && (
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,243,255,0.8)]" />
            )}
          </div>
          <span className="text-[9.5px] text-slate-400 font-mono">{b.tag}</span>
        </div>
      </div>
    );
  };

  return (
    <section 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-14 border-y border-slate-800/60 bg-slate-950 relative overflow-hidden group/section"
    >
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8 relative z-20">
        
        {/* Clean Header (Clean background behind text without marquee overflow) */}
        <div className="text-center space-y-2 relative z-30">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full inline-block">
            Trusted Partnerships
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-['Creato_Display',sans-serif]">
            Companies & Brands I've Worked With
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm font-light max-w-xl mx-auto">
            Delivering high-impact motion graphics, video editing, branding, and web development for leading organizations.
          </p>
        </div>

        {/* Cards Wrapper Container with Background Sliding Marquee strictly restricted to Cards Area & Vertically Centered */}
        <div className="relative py-2">
          
          {/* Background 3-Line Animated Card Marquee Stream (Centered vertically behind cards grid only) */}
          <div 
            className={`absolute inset-0 pointer-events-none transition-opacity duration-700 overflow-hidden flex flex-col justify-center gap-3.5 z-0 ticker-3d-mask filter blur-[1.5px] ${
              isHovered ? 'opacity-25' : 'opacity-12'
            }`}
          >
            {/* Row 1 of Cards BG: Rightward Animated Card Stream */}
            <div className="flex items-center gap-3 w-max animate-marquee-right whitespace-nowrap">
              {dupBrandsRow2.map((b, idx) => renderBgCard(b, `r2-${idx}`, 'text-purple-400'))}
            </div>

            {/* Row 2 of Cards BG: Leftward Animated Card Stream */}
            <div className="flex items-center gap-3 w-max animate-marquee-left whitespace-nowrap">
              {dupBrandsRow3.map((b, idx) => renderBgCard(b, `r3-${idx}`, 'text-emerald-400'))}
            </div>

            {/* Row 3 of Cards BG: Rightward Animated Card Stream */}
            <div className="flex items-center gap-3 w-max animate-marquee-right whitespace-nowrap">
              {dupBrandsRow4.map((b, idx) => renderBgCard(b, `r4-${idx}`, 'text-blue-400'))}
            </div>
          </div>

          {/* Side Fade Gradient Overlays (Melts seamlessly into section bg on left & right edges) */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent z-10 pointer-events-none" />

          {/* Foreground Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-3.5 relative z-20">
            {clientBrands.map((brand) => {
              const IconComp = brand.icon;
              return (
                <div
                  key={brand.id}
                  className={`p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-3 group cursor-default shadow-md ${
                    brand.active 
                      ? 'border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 to-slate-900/95 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,243,255,0.25)]' 
                      : 'border-slate-800/90 hover:border-cyan-500/30 hover:bg-slate-900/95'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 transition-colors`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    {brand.active && (
                      <span 
                        title="Active Ongoing Client Partner"
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(0,243,255,0.8)]" 
                      />
                    )}
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug break-words">
                      {brand.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono block mt-1 leading-tight break-words">
                      {brand.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
