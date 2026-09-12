import React from 'react';
import { HeartHandshake, ArrowRight } from 'lucide-react';
import { CTA_CONTENT } from '../data/content';

export const CtaSection: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contacto');
    if (el) {
      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-white border border-[#E79E85]/40 shadow-xl p-8 sm:p-12 lg:p-16 text-center space-y-8 overflow-hidden">
          {/* Decorative Corner Waves */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#E79E85]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#164E3D]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center shadow-sm">
            <HeartHandshake className="w-8 h-8 text-[#E79E85]" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#164E3D] max-w-3xl mx-auto leading-tight">
            {CTA_CONTENT.title}
          </h2>

          {/* Body */}
          <p className="text-base sm:text-lg text-[#232F2C]/80 max-w-2xl mx-auto leading-relaxed">
            {CTA_CONTENT.text}
          </p>

          {/* Button */}
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-[#164E3D] hover:bg-[#11382C] rounded-full shadow-lg shadow-[#164E3D]/20 hover:shadow-xl transition-all duration-300 active:scale-95 group"
            >
              <span>{CTA_CONTENT.buttonText}</span>
              <ArrowRight className="w-5 h-5 text-[#E79E85] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
