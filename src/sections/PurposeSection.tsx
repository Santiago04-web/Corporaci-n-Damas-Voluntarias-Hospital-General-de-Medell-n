import React from 'react';
import { HeartHandshake, UserCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { PURPOSE_CONTENT } from '../data/content';

export const PurposeSection: React.FC = () => {
  return (
    <section id="proposito" className="py-20 lg:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#164E3D]/10 border border-[#164E3D]/20 text-[#164E3D] text-xs font-semibold uppercase tracking-wider">
            Compromiso Institucional
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#164E3D]">
            {PURPOSE_CONTENT.title}
          </h2>
          
          <p className="text-base sm:text-lg text-[#232F2C]/75 leading-relaxed">
            {PURPOSE_CONTENT.subtitle}
          </p>

          <div className="w-16 h-1 bg-[#E79E85] mx-auto rounded-full mt-4" />
        </div>

        {/* 3 Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PURPOSE_CONTENT.items.map((item) => (
            <div
              key={item.id}
              className="relative p-8 rounded-3xl bg-white border border-[#E79E85]/30 hover:border-[#164E3D]/50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
            >
              {/* Card Top Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center group-hover:bg-[#164E3D] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {item.id === 'apoyo' && <HeartHandshake className="w-7 h-7 text-[#E79E85] group-hover:text-[#E79E85]" />}
                    {item.id === 'humanizacion' && <UserCheck className="w-7 h-7 text-[#164E3D] group-hover:text-white" />}
                    {item.id === 'bienestar' && <Sparkles className="w-7 h-7 text-[#E79E85] group-hover:text-[#E79E85]" />}
                  </div>

                  <span className="text-[11px] font-semibold tracking-wider text-[#164E3D] bg-[#164E3D]/5 px-3 py-1 rounded-full border border-[#164E3D]/10">
                    {item.badgeText}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif-title font-bold text-[#164E3D] mb-3 tracking-wide">
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="text-base text-[#232F2C]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative Card Footer */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-[#164E3D] font-medium">
                <span>Damas Voluntarias</span>
                <ArrowUpRight className="w-4 h-4 text-[#E79E85] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
