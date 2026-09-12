import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, PhoneCall, MailCheck } from 'lucide-react';
import { CONTACT_CONTENT, OFFICIAL_INFO } from '../data/content';
import { Modal } from '../components/ui/Modal';


export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.nombre.trim()) errors.nombre = 'Por favor ingresa tu nombre completo.';
    if (!formData.correo.trim() || !/\S+@\S+\.\S+/.test(formData.correo)) {
      errors.correo = 'Por favor ingresa un correo electrónico válido.';
    }
    if (!formData.mensaje.trim()) errors.mensaje = 'Por favor escribe tu mensaje.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate clean submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
      setFormErrors({});
    }, 800);
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#164E3D]/10 border border-[#164E3D]/20 text-[#164E3D] text-xs font-semibold uppercase tracking-wider">
            Atención & Servicio
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#164E3D]">
            {CONTACT_CONTENT.title}
          </h2>

          <p className="text-base sm:text-lg text-[#232F2C]/80 leading-relaxed">
            {CONTACT_CONTENT.subtitle}
          </p>

          <div className="w-16 h-1 bg-[#E79E85] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E79E85]/30 shadow-md space-y-6">
              <h3 className="text-2xl font-serif-title font-bold text-[#164E3D]">
                Información Oficial
              </h3>

              <div className="space-y-5 text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-white border border-[#E79E85]/20">
                  <div className="w-10 h-10 rounded-lg bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E79E85]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#164E3D] uppercase tracking-wider block">Dirección</span>
                    <p className="font-medium text-[#232F2C]">{OFFICIAL_INFO.direccion}</p>
                    <p className="text-xs text-gray-500">{OFFICIAL_INFO.ciudad}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-white border border-[#E79E85]/20">
                  <div className="w-10 h-10 rounded-lg bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#164E3D]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#164E3D] uppercase tracking-wider block">Teléfono</span>
                    <p className="font-medium text-[#232F2C]">{OFFICIAL_INFO.telefono}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-white border border-[#E79E85]/20">
                  <div className="w-10 h-10 rounded-lg bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#E79E85]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#164E3D] uppercase tracking-wider block">Correo Electrónico</span>
                    <p className="font-medium text-[#232F2C] break-all">{OFFICIAL_INFO.correo}</p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-white border border-[#E79E85]/20">
                  <div className="w-10 h-10 rounded-lg bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-[#164E3D]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#164E3D] uppercase tracking-wider block">Sitio Web</span>
                    <p className="font-medium text-[#164E3D]">{OFFICIAL_INFO.sitioWebDisplay}</p>
                  </div>
                </div>

              </div>

              {/* Direct Quick Buttons */}
              <div className="pt-4 border-t border-[#E79E85]/20 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${OFFICIAL_INFO.telefonoRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#164E3D] hover:bg-[#11382C] rounded-xl shadow-sm transition-colors text-center"
                >
                  <PhoneCall className="w-4 h-4 text-[#E79E85]" />
                  <span>Llamar</span>
                </a>

                <a
                  href={`mailto:${OFFICIAL_INFO.correo}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-[#164E3D] bg-white border border-[#164E3D]/30 hover:bg-[#FAF7F2] rounded-xl transition-colors text-center"
                >
                  <MailCheck className="w-4 h-4 text-[#E79E85]" />
                  <span>Enviar correo</span>
                </a>
              </div>

            </div>

            {/* Interactive Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-[#E79E85]/30 shadow-md h-64 relative bg-gray-100">
              <iframe
                title="Ubicación Corporación Damas Voluntarias"
                src="https://maps.google.com/maps?q=Carrera%2048%2032%20102%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-[#E79E85]/30 shadow-lg space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-2xl font-serif-title font-bold text-[#164E3D]">
                  Envíanos un mensaje
                </h3>
                <p className="text-sm text-[#232F2C]/75">
                  Completa el siguiente formulario y nos pondremos en contacto contigo a la brevedad.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-xs font-bold text-[#164E3D] uppercase tracking-wider mb-2">
                    Nombre completo <span className="text-[#E79E85]">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      formErrors.nombre ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:border-[#164E3D] focus:ring-[#164E3D]'
                    } focus:outline-none focus:ring-2 text-sm text-[#232F2C]`}
                    placeholder="Tu nombre y apellidos"
                  />
                  {formErrors.nombre && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.nombre}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Correo */}
                  <div>
                    <label htmlFor="correo" className="block text-xs font-bold text-[#164E3D] uppercase tracking-wider mb-2">
                      Correo electrónico <span className="text-[#E79E85]">*</span>
                    </label>
                    <input
                      type="email"
                      id="correo"
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        formErrors.correo ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:border-[#164E3D] focus:ring-[#164E3D]'
                      } focus:outline-none focus:ring-2 text-sm text-[#232F2C]`}
                      placeholder="ejemplo@correo.com"
                    />
                    {formErrors.correo && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.correo}</p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-bold text-[#164E3D] uppercase tracking-wider mb-2">
                      Teléfono (Opcional)
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:border-[#164E3D] focus:ring-2 focus:ring-[#164E3D] focus:outline-none text-sm text-[#232F2C]"
                      placeholder="+57 300 0000000"
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-xs font-bold text-[#164E3D] uppercase tracking-wider mb-2">
                    Mensaje <span className="text-[#E79E85]">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      formErrors.mensaje ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:border-[#164E3D] focus:ring-[#164E3D]'
                    } focus:outline-none focus:ring-2 text-sm text-[#232F2C]`}
                    placeholder="Escribe tu mensaje o inquietud aquí..."
                  />
                  {formErrors.mensaje && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.mensaje}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold text-white bg-[#164E3D] hover:bg-[#11382C] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E79E85] disabled:opacity-50 cursor-pointer active:scale-98"
                >
                  {isSubmitting ? (
                    <span>Enviando mensaje...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#E79E85]" />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Mensaje Enviado con Éxito"
      >
        <div className="text-center space-y-4 py-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-[#164E3D]" />
          </div>

          <h4 className="text-xl font-serif-title font-bold text-[#164E3D]">
            ¡Gracias por comunicarte con nosotros!
          </h4>

          <p className="text-sm text-[#232F2C]/80 leading-relaxed max-w-md mx-auto">
            Hemos recibido tu mensaje correctamente. El equipo de la Corporación Damas Voluntarias revisará tu solicitud y te responderá a la brevedad.
          </p>

          <div className="pt-4">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-2.5 text-xs font-bold text-white bg-[#164E3D] rounded-full hover:bg-[#11382C] transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};
