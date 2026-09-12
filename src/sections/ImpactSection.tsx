import React from 'react';
import { Heart, HandHeart, ShieldCheck, Smile, Sparkles } from 'lucide-react';
import { IMPACT_CONTENT } from '../data/content';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impacto" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E79E85]/15 border border-[#E79E85]/30 text-[#164E3D] text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#E79E85] fill-[#E79E85]" />
            <span>Presencia & Vocación</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#164E3D]">
            {IMPACT_CONTENT.title}
          </h2>

          <p className="text-base sm:text-lg text-[#232F2C]/80 max-w-2xl mx-auto leading-relaxed">
            {IMPACT_CONTENT.subtitle}
          </p>

          <div className="w-16 h-1 bg-[#E79E85] mx-auto rounded-full mt-4" />
        </div>

        {/* Qualitative Pillars Grid (NO fake statistics) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {IMPACT_CONTENT.tags.map((tag, idx) => (
            <div
              key={tag.label}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E79E85]/25 hover:border-[#164E3D]/40 shadow-sm hover:shadow-lg transition-all duration-300 text-center space-y-3 group"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center group-hover:bg-[#164E3D] group-hover:text-white transition-colors duration-300">
                {idx === 0 && <HandHeart className="w-6 h-6 text-[#E79E85] group-hover:text-[#E79E85]" />}
                {idx === 1 && <Heart className="w-6 h-6 text-[#164E3D] group-hover:text-white" />}
                {idx === 2 && <ShieldCheck className="w-6 h-6 text-[#E79E85] group-hover:text-[#E79E85]" />}
                {idx === 3 && <Smile className="w-6 h-6 text-[#164E3D] group-hover:text-white" />}
              </div>

              <h3 className="text-xl font-serif-title font-bold text-[#164E3D]">
                {tag.label}
              </h3>

              <p className="text-xs text-[#232F2C]/75 leading-relaxed">
                {tag.description}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Photo Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF7F2] p-8 lg:p-12 rounded-3xl border border-[#E79E85]/30 shadow-md">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#E79E85] tracking-widest uppercase">
              Acompañamiento Constante
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#164E3D] leading-tight">
              Estar presentes en el momento oportuno genera paz y esperanza
            </h3>

            <p className="text-base text-[#232F2C]/80 leading-relaxed">
              Cada integrante de la Corporación Damas Voluntarias ofrece una mano amigable, una escucha paciente y un apoyo desinteresado. Entendemos que el acompañamiento humano es indispensable para brindar fortaleza y bienestar emocional.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-[#164E3D]">
              <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-[#164E3D]/10">
                <Sparkles className="w-4 h-4 text-[#E79E85]" />
                <span>Atención Cálida</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-[#164E3D]/10">
                <Heart className="w-4 h-4 text-[#164E3D]" />
                <span>Cercanía Humana</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
              <img
                src="/assets/banner.png"
                alt="Fotografía de voluntariado y acompañamiento"
                className="w-full h-64 sm:h-80 object-cover object-center transform hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
