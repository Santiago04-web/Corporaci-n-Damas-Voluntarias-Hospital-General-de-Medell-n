import React from 'react';
import { MapPin, Phone, Mail, Globe, Heart } from 'lucide-react';
import { Logo } from '../Logo';
import { OFFICIAL_INFO, NAV_LINKS } from '../../data/content';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#164E3D] text-white pt-16 pb-8 border-t border-[#E79E85]/30 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E79E85]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          
          {/* Col 1: Logo & Corporate Entity Info */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="full" lightMode={true} />
            
            <p className="text-sm text-gray-200 leading-relaxed max-w-md">
              Una entidad sin ánimo de lucro orientada al servicio, la solidaridad y el acompañamiento de las personas y sus familias.
            </p>

            <div className="space-y-1 text-xs text-[#E79E85] bg-white/10 p-3.5 rounded-xl border border-white/20">
              <p><strong>Razón Social:</strong> {OFFICIAL_INFO.razonSocial}</p>
              <p><strong>NIT:</strong> {OFFICIAL_INFO.nit}</p>
            </div>

          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E79E85]">
              Navegación
            </h4>
            
            <ul className="space-y-2.5 text-sm text-gray-200">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E79E85]">
              Contacto Institucional
            </h4>

            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E79E85] shrink-0 mt-0.5" />
                <span>{OFFICIAL_INFO.direccion}, {OFFICIAL_INFO.ciudad}</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E79E85] shrink-0" />
                <a href={`tel:${OFFICIAL_INFO.telefonoRaw}`} className="hover:underline">
                  {OFFICIAL_INFO.telefono}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E79E85] shrink-0" />
                <a href={`mailto:${OFFICIAL_INFO.correo}`} className="hover:underline break-all">
                  {OFFICIAL_INFO.correo}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#E79E85] shrink-0" />
                <a href={OFFICIAL_INFO.sitioWeb} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {OFFICIAL_INFO.sitioWebDisplay}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <p>
            © {OFFICIAL_INFO.year} {OFFICIAL_INFO.nombrePublico}. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-1 text-gray-400">
            <span>Solidaridad que transforma vidas</span>
            <Heart className="w-3.5 h-3.5 text-[#E79E85] fill-[#E79E85]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
