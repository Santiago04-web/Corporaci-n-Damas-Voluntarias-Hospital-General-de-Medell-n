import React from 'react';
import { HeartHandshake, ArrowRight, Heart, Users, Sparkles, ShieldCheck } from 'lucide-react';
import { HERO_CONTENT, OFFICIAL_INFO } from '../data/content';

interface HeroSectionProps {
  onOpenLaborModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLaborModal }) => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contacto');
    if (el) {
      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FAF7F2]">
      {/* Background Soft Organic Waves/Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#E79E85]/10 rounded-full filter blur-3xl opacity-70 transform translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-10 left-0 -z-10 w-80 h-80 bg-[#164E3D]/5 rounded-full filter blur-3xl opacity-60 transform -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography and Action CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Institutional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#164E3D]/10 border border-[#164E3D]/20 text-[#164E3D] text-xs sm:text-sm font-medium tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#E79E85]" />
              <span>{OFFICIAL_INFO.tipoOrganizacion} • NIT {OFFICIAL_INFO.nit}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-title font-bold text-[#164E3D] leading-tight tracking-tight">
                {HERO_CONTENT.title}
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl font-medium text-[#E79E85] tracking-wide">
                {HERO_CONTENT.subtitle}
              </p>
            </div>

            {/* Body Text */}
            <p className="text-base sm:text-lg text-[#232F2C]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {HERO_CONTENT.text}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenLaborModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-[#164E3D] hover:bg-[#11382C] rounded-full shadow-lg shadow-[#164E3D]/20 hover:shadow-xl hover:shadow-[#164E3D]/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E79E85] active:scale-95 cursor-pointer group"
              >
                <HeartHandshake className="w-5 h-5 text-[#E79E85] group-hover:scale-110 transition-transform" />
                <span>{HERO_CONTENT.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contacto"
                onClick={handleScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#164E3D] bg-white hover:bg-[#FAF7F2] border-2 border-[#164E3D]/20 hover:border-[#164E3D] rounded-full shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#164E3D]"
              >
                <span>{HERO_CONTENT.ctaSecondary}</span>
              </a>
            </div>

            {/* Key Value Micro-Cards */}
            <div className="pt-6 border-t border-[#E79E85]/20 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-2.5 rounded-xl bg-white/60 border border-[#E79E85]/20">
                <Heart className="w-5 h-5 text-[#E79E85] mb-1" />
                <span className="text-xs font-bold text-[#164E3D] uppercase tracking-wider">APOYO</span>
                <span className="text-[11px] text-gray-600 line-clamp-1">A personas y familias</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-2.5 rounded-xl bg-white/60 border border-[#E79E85]/20">
                <Users className="w-5 h-5 text-[#164E3D] mb-1" />
                <span className="text-xs font-bold text-[#164E3D] uppercase tracking-wider">HUMANIZACIÓN</span>
                <span className="text-[11px] text-gray-600 line-clamp-1">Atención cercana</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-2.5 rounded-xl bg-white/60 border border-[#E79E85]/20">
                <Sparkles className="w-5 h-5 text-[#E79E85] mb-1" />
                <span className="text-xs font-bold text-[#164E3D] uppercase tracking-wider">BIENESTAR</span>
                <span className="text-[11px] text-gray-600 line-clamp-1">Para la comunidad</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Official Banner & Editorial Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/assets/banner.png"
                  alt="Acompañamiento y voluntariado humano - Damas Voluntarias"
                  className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback visually if image fails to render in browser
                    const target = e.target as HTMLImageElement;
                    target.src = "/assets/logo-emblem.jpg";
                  }}
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#164E3D]/60 via-transparent to-transparent opacity-80" />

                {/* Emotional Text Badge Overlay on Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E79E85] animate-pulse" />
                    <span className="text-xs font-semibold text-[#164E3D] uppercase tracking-wider">
                      Voluntariado que deja huella
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#232F2C] italic font-serif-title">
                    "Un hospital más humano es posible a través del apoyo, el amor y la cercanía constante."
                  </p>
                </div>
              </div>

              {/* Decorative Accent Pill Floating */}
              <div className="absolute -top-4 -left-4 bg-[#164E3D] text-white py-2 px-4 rounded-full text-xs font-medium shadow-lg hidden sm:flex items-center gap-2 border border-[#E79E85]">
                <Heart className="w-3.5 h-3.5 text-[#E79E85] fill-[#E79E85]" />
                <span>Personas al servicio de personas</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
