import React from 'react';
import { Heart, HandHeart, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { OFFICIAL_INFO } from '../data/content';

export const LaborModalContent: React.FC = () => {
  return (
    <div className="space-y-6 text-[#232F2C]">
      {/* Intro Badge */}
      <div className="flex items-center gap-2 text-xs font-bold text-[#164E3D] uppercase tracking-wider bg-[#164E3D]/10 px-3 py-1.5 rounded-full w-fit">
        <Heart className="w-4 h-4 text-[#E79E85] fill-[#E79E85]" />
        <span>Solidaridad que Transforma Vidas</span>
      </div>

      {/* Main Statement */}
      <div className="space-y-3">
        <h4 className="text-2xl font-serif-title font-bold text-[#164E3D]">
          Acompañamiento y Humanización con Vocación
        </h4>
        <p className="text-base text-[#232F2C]/85 leading-relaxed">
          La <strong>Corporación Damas Voluntarias Hospital General de Medellín</strong> es una entidad sin ánimo de lucro orientada a brindar apoyo constante, cercanía y solidaridad a las personas y a sus familias en momentos fundamentales de la vida.
        </p>
      </div>

      {/* Core Objectives */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-white border border-[#E79E85]/30 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center">
            <Heart className="w-4 h-4 text-[#E79E85]" />
          </div>
          <h5 className="text-sm font-bold text-[#164E3D]">Apoyo Humano</h5>
          <p className="text-xs text-gray-600">Presencia reconfortante y cercana en todo momento.</p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E79E85]/30 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center">
            <HandHeart className="w-4 h-4 text-[#164E3D]" />
          </div>
          <h5 className="text-sm font-bold text-[#164E3D]">Humanización</h5>
          <p className="text-xs text-gray-600">Promoción de un trato digno, cálido y lleno de empatía.</p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E79E85]/30 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-[#E79E85]" />
          </div>
          <h5 className="text-sm font-bold text-[#164E3D]">Bienestar</h5>
          <p className="text-xs text-gray-600">Contribución sincera al entorno comunitario.</p>
        </div>
      </div>

      {/* Official Details Box */}
      <div className="p-5 rounded-2xl bg-white border border-[#164E3D]/20 space-y-3">
        <h5 className="text-xs font-bold text-[#164E3D] uppercase tracking-wider">
          Información Institucional Oficial
        </h5>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#164E3D]" />
            <span><strong>NIT:</strong> {OFFICIAL_INFO.nit}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#E79E85]" />
            <span><strong>Ubicación:</strong> {OFFICIAL_INFO.direccion}, {OFFICIAL_INFO.ciudad}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#164E3D]" />
            <span><strong>Teléfono:</strong> {OFFICIAL_INFO.telefono}</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#E79E85]" />
            <span><strong>Correo:</strong> {OFFICIAL_INFO.correo}</span>
          </div>
        </div>
      </div>

      {/* Action Footer Buttons */}
      <div className="pt-4 flex flex-col sm:flex-row gap-3">
        <a
          href="#contacto"
          onClick={() => {
            const el = document.getElementById('contacto');
            if (el) {
              const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 80;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }}
          className="flex-1 text-center py-3 px-4 text-xs font-bold text-white bg-[#164E3D] hover:bg-[#11382C] rounded-xl shadow transition-colors"
        >

          Contactar a la Corporación
        </a>

        <a
          href={`tel:${OFFICIAL_INFO.telefonoRaw}`}
          className="flex-1 text-center py-3 px-4 text-xs font-bold text-[#164E3D] bg-[#FAF7F2] border border-[#164E3D]/30 hover:bg-white rounded-xl transition-colors"
        >
          Llamar Directamente
        </a>
      </div>
    </div>
  );
};
