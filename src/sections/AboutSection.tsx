import React from 'react';
import { Heart, HandHeart, Users, CheckCircle2, Shield } from 'lucide-react';
import { ABOUT_CONTENT, OFFICIAL_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#164E3D_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Badge */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E79E85]/15 border border-[#E79E85]/30 text-[#164E3D] text-xs font-semibold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-[#E79E85]" />
                <span>{ABOUT_CONTENT.badge}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#164E3D] leading-tight">
                {ABOUT_CONTENT.title}
              </h2>
              
              <div className="w-20 h-1 bg-[#E79E85] rounded-full" />
            </div>

            {/* Official Text Statement */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#164E3D] shadow-sm space-y-4">
              <p className="text-lg sm:text-xl text-[#164E3D] font-serif-title font-medium leading-relaxed italic">
                "{ABOUT_CONTENT.text}"
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 pt-3 border-t border-[#E79E85]/20 text-xs text-gray-700 font-medium">
                <span><strong>Razón Social:</strong> {OFFICIAL_INFO.razonSocial}</span>
                <span className="text-[#164E3D] font-semibold"><strong>NIT:</strong> {OFFICIAL_INFO.nit}</span>
              </div>

            </div>

            {/* 3 Pillar Cards: Solidaridad, Servicio, Humanidad */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {ABOUT_CONTENT.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E79E85]/20 hover:border-[#164E3D]/30 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center mb-3 group-hover:bg-[#164E3D] group-hover:text-white transition-colors duration-300">
                    {pillar.id === 'solidaridad' && <Heart className="w-5 h-5 text-[#E79E85] group-hover:text-[#E79E85]" />}
                    {pillar.id === 'servicio' && <HandHeart className="w-5 h-5 text-[#164E3D] group-hover:text-white" />}
                    {pillar.id === 'humanidad' && <Users className="w-5 h-5 text-[#164E3D] group-hover:text-white" />}
                  </div>

                  <h3 className="text-base font-bold text-[#164E3D] mb-1 group-hover:text-[#164E3D]">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs text-[#232F2C]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Editorial Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-6">
              
              {/* Emblem Logo Presentation Card */}
              <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E79E85]/30 shadow-xl text-center space-y-6 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#164E3D]/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="w-32 h-32 mx-auto rounded-full p-2 bg-white shadow-md border-2 border-[#E79E85]/40 flex items-center justify-center">
                  <img
                    src="/assets/logo-emblem.jpg"
                    alt="Emblema Oficial Corporación Damas Voluntarias"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-serif-title font-bold text-[#164E3D]">
                    {OFFICIAL_INFO.nombrePublico}
                  </h3>
                  <p className="text-xs text-[#E79E85] font-semibold uppercase tracking-widest">
                    Solidaridad que transforma vidas
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E79E85]/20 space-y-2 text-left text-xs text-[#232F2C]/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#164E3D] shrink-0" />
                    <span>Entidad Sin Ánimo de Lucro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#164E3D] shrink-0" />
                    <span>Servicio y Acompañamiento Humano</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#164E3D] shrink-0" />
                    <span>Compromiso Social con las Familias</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
