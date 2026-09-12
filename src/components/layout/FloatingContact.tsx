import React, { useState, useEffect } from 'react';
import { Phone, Mail, ArrowUp, MessageCircle } from 'lucide-react';
import { OFFICIAL_INFO } from '../../data/content';

export const FloatingContact: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Quick Action Items */}
      {isOpen && (
        <div className="flex flex-col items-end gap-2.5 animate-scale-up">
          <a
            href={`tel:${OFFICIAL_INFO.telefonoRaw}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#164E3D] shadow-lg border border-[#E79E85]/40 hover:bg-[#FAF7F2] text-xs font-semibold transition-all duration-200"
          >
            <span>Llamar {OFFICIAL_INFO.telefono}</span>
            <div className="w-8 h-8 rounded-full bg-[#164E3D] text-white flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#E79E85]" />
            </div>
          </a>

          <a
            href={`mailto:${OFFICIAL_INFO.correo}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#164E3D] shadow-lg border border-[#E79E85]/40 hover:bg-[#FAF7F2] text-xs font-semibold transition-all duration-200"
          >
            <span>Enviar Correo</span>
            <div className="w-8 h-8 rounded-full bg-[#164E3D] text-white flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#E79E85]" />
            </div>
          </a>
        </div>
      )}

      {/* Trigger Button & Scroll Top Button */}
      <div className="flex items-center gap-2">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-[#164E3D] border border-[#164E3D]/20 shadow-md hover:bg-[#FAF7F2] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5 text-[#164E3D]" />
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 px-5 rounded-full bg-[#164E3D] text-white shadow-xl hover:bg-[#11382C] border-2 border-[#E79E85] flex items-center gap-2.5 text-xs font-bold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer"
          aria-label="Contacto Rápido"
        >
          <MessageCircle className="w-5 h-5 text-[#E79E85]" />
          <span>Contacto Rápido</span>
        </button>
      </div>

    </div>
  );
};
