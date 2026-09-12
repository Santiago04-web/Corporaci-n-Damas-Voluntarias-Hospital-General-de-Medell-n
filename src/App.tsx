import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingContact } from './components/layout/FloatingContact';
import { Modal } from './components/ui/Modal';
import { LaborModalContent } from './components/LaborModalContent';

import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { PurposeSection } from './sections/PurposeSection';
import { ImpactSection } from './sections/ImpactSection';
import { QuoteSection } from './sections/QuoteSection';
import { CtaSection } from './sections/CtaSection';
import { ContactSection } from './sections/ContactSection';

export function App() {
  const [isLaborModalOpen, setIsLaborModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#232F2C] flex flex-col font-sans selection:bg-[#E79E85]/30 selection:text-[#164E3D]">
      {/* Sticky Header */}
      <Header onOpenLaborModal={() => setIsLaborModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection onOpenLaborModal={() => setIsLaborModalOpen(true)} />
        <AboutSection />
        <PurposeSection />
        <ImpactSection />
        <QuoteSection />
        <CtaSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Button */}
      <FloatingContact />

      {/* Reusable "Conoce nuestra labor" Modal */}
      <Modal
        isOpen={isLaborModalOpen}
        onClose={() => setIsLaborModalOpen(false)}
        title="Nuestra Labor Institucional"
      >
        <LaborModalContent />
      </Modal>
    </div>
  );
}

export default App;
