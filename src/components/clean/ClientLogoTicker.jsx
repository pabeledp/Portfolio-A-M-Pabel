import React from 'react';
import { 
  BookOpen, ShoppingBag, Shirt, Home, Smartphone, 
  Apple, Compass, MapPin, Tv, GraduationCap, 
  Globe2, Award, BookMarked, Lightbulb 
} from 'lucide-react';

const clientBrands = [
  { id: 1, name: 'reThink.ac', tag: 'EdTech Platform', icon: Lightbulb, highlight: true },
  { id: 2, name: 'Education BD', tag: 'Study Abroad Consultancy', icon: GraduationCap, highlight: true },
  { id: 3, name: 'Banglay IELTS', tag: 'IELTS Training Center', icon: BookMarked, highlight: true },
  { id: 4, name: 'Banglay IELTS & Immigration', tag: 'Immigration Services', icon: Award, highlight: true },
  { id: 5, name: 'Shikor TV Canada', tag: 'TV Channel', icon: Tv, highlight: true },
  { id: 6, name: 'Amazon Immigration', tag: 'Visa & Work Services', icon: Compass },
  { id: 7, name: 'Worklife Canada', tag: 'Canada Immigration', icon: MapPin },
  { id: 8, name: 'Global Pathways', tag: 'Study Abroad Consultancy', icon: Globe2 },
  { id: 9, name: 'iMac BD', tag: 'Apple Products Seller', icon: Apple },
  { id: 10, name: 'Eastern Technologies', tag: 'Mobile Servicing', icon: Smartphone },
  { id: 11, name: 'Rumi Dream Homes', tag: 'Real Estate Broker', icon: Home },
  { id: 12, name: 'Tex Challengers Asia', tag: 'Textile Agency', icon: Shirt },
  { id: 13, name: 'Infinity Mega Mall', tag: 'Retail & Shopping', icon: ShoppingBag },
  { id: 14, name: 'The Quarterly Parampara', tag: 'Islamic Magazine', icon: BookOpen }
];

export default function ClientLogoTicker() {
  const dupBrandsRow1 = [...clientBrands, ...clientBrands, ...clientBrands];
  const dupBrandsRow2 = [...clientBrands.slice().reverse(), ...clientBrands.slice().reverse(), ...clientBrands.slice().reverse()];

  return (
    <section className="py-14 border-y border-slate-800/60 bg-slate-950 relative overflow-hidden">
      
      {/* Background 10% Transparency Sliding Ticker & Side Gradient Mask */}
      <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden flex flex-col justify-center gap-6 z-0 ticker-3d-mask">
        
        {/* Row 1: Leftward Animated Marquee */}
        <div className="flex items-center gap-8 w-max animate-marquee-left whitespace-nowrap text-slate-300 font-mono text-sm font-bold uppercase tracking-widest">
          {dupBrandsRow1.map((b, idx) => (
            <div key={`bg-1-${idx}`} className="flex items-center gap-2">
              <span>{b.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60" />
            </div>
          ))}
        </div>

        {/* Row 2: Rightward Animated Marquee */}
        <div className="flex items-center gap-8 w-max animate-marquee-right whitespace-nowrap text-slate-300 font-mono text-sm font-bold uppercase tracking-widest">
          {dupBrandsRow2.map((b, idx) => (
            <div key={`bg-2-${idx}`} className="flex items-center gap-2">
              <span>{b.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 opacity-60" />
            </div>
          ))}
        </div>

      </div>

      {/* Side Fade Gradient Overlay (Melts smoothly into section bg on edges) */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />

      {/* Foreground Container: Clean 100% Readable Brand Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8 relative z-20">
        
        {/* Clean Header */}
        <div className="text-center space-y-2">
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

        {/* Clean 100% Readable Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {clientBrands.map((brand) => {
            const IconComp = brand.icon;
            return (
              <div
                key={brand.id}
                className={`p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-2.5 group cursor-default shadow-md ${
                  brand.highlight 
                    ? 'border-cyan-500/35 bg-gradient-to-b from-cyan-500/10 to-slate-900/90 hover:border-cyan-400' 
                    : 'border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 transition-colors`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  {brand.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-1">
                    {brand.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono block mt-0.5 truncate">
                    {brand.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
