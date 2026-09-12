import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake, PhoneCall, ChevronRight } from 'lucide-react';
import { Logo } from '../Logo';
import { NAV_LINKS, OFFICIAL_INFO } from '../../data/content';

interface HeaderProps {
  onOpenLaborModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLaborModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy simple calculation
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-[#FAF7F2]/90 backdrop-blur-md shadow-md border-b border-[#E79E85]/20'
          : 'py-4 bg-[#FAF7F2]/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="group flex items-center focus:outline-none focus:ring-2 focus:ring-[#164E3D] rounded-lg p-1"
          >
            <Logo variant="full" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative rounded-md ${
                    isActive
                      ? 'text-[#164E3D] font-semibold'
                      : 'text-[#232F2C]/80 hover:text-[#164E3D] hover:bg-[#164E3D]/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E79E85] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenLaborModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#164E3D] hover:bg-[#11382C] rounded-full shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E79E85] active:scale-95 cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4 text-[#E79E85]" />
              <span>Conoce nuestra labor</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenLaborModal}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#164E3D] rounded-full cursor-pointer"
            >
              Labor
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#164E3D] hover:bg-[#164E3D]/10 focus:outline-none focus:ring-2 focus:ring-[#164E3D]"
              aria-label="Abrir menú principal"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FAF7F2] border-b border-[#E79E85]/30 shadow-2xl animate-fade-in z-50">
          <div className="px-5 pt-4 pb-6 space-y-3">
            <div className="pb-3 mb-2 border-b border-[#E79E85]/20 flex items-center justify-between text-xs text-[#164E3D] font-medium">
              <span>{OFFICIAL_INFO.nombrePublico}</span>
              <span className="bg-[#E79E85]/20 px-2 py-0.5 rounded text-[10px] font-semibold text-[#164E3D]">
                NIT {OFFICIAL_INFO.nit}
              </span>
            </div>

            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#164E3D] text-white font-semibold'
                      : 'text-[#232F2C] hover:bg-[#164E3D]/10 hover:text-[#164E3D]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#E79E85]' : 'text-gray-400'}`} />
                </a>
              );
            })}

            <div className="pt-4 mt-4 border-t border-[#E79E85]/20 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLaborModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#164E3D] rounded-xl shadow-md cursor-pointer active:scale-95"
              >
                <HeartHandshake className="w-4 h-4 text-[#E79E85]" />
                Conoce nuestra labor
              </button>

              <a
                href={`tel:${OFFICIAL_INFO.telefonoRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-[#164E3D] bg-white border border-[#164E3D]/20 rounded-xl"
              >
                <PhoneCall className="w-4 h-4 text-[#E79E85]" />
                Llamar: {OFFICIAL_INFO.telefono}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
