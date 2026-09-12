import React from 'react';
import { Quote } from 'lucide-react';
import { QUOTE_CONTENT } from '../data/content';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#164E3D] text-white relative overflow-hidden">
      {/* Subtle Background Glow & Accent Lines */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E79E85]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Quote Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#E79E85] shadow-inner">
          <Quote className="w-8 h-8 fill-[#E79E85]/20" />
        </div>

        {/* Highlight Quote */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-title font-bold leading-tight text-white tracking-wide">
          "{QUOTE_CONTENT.quote}"
        </h2>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-[#E79E85] mx-auto rounded-full my-6" />

        {/* Subquote */}
        <p className="text-base sm:text-lg lg:text-xl text-[#FAF7F2]/90 max-w-2xl mx-auto font-light leading-relaxed">
          {QUOTE_CONTENT.subquote}
        </p>

        {/* Institutional Tag */}
        <div className="pt-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E79E85] font-semibold">
            Corporación Damas Voluntarias Hospital General de Medellín
          </span>
        </div>

      </div>
    </section>
  );
};
