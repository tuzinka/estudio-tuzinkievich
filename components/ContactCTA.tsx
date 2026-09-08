"use client";

import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, CheckCircle2, Navigation } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Box */}
        <div className="rounded-3xl bg-lino-100 border border-dark-900/5 p-8 md:p-14 relative overflow-hidden">
          
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wider">
                <span>Contacto y Consultas</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-dark-900 leading-tight">
                ¿Querés coordinar una consulta o consultar por nuestros servicios?
              </h2>

              <p className="text-base text-dark-600 leading-relaxed max-w-xl">
                Estamos a disposición para escucharte, evaluar las necesidades de tu comercio, emprendimiento o empresa y proponerte un esquema de trabajo a tu medida.
              </p>

              {/* Direct Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://wa.me/5493755558383?text=Hola%2C%20quisiera%20hacer%20una%20consulta%20al%20Estudio%20Tuzinkievich%20%26%20Asociados."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-full transition-all duration-200 shadow-sm hover:shadow-soft group"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar mensaje por WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://wa.me/5493755558383?text=Hola%2C%20quisiera%20coordinar%20una%20reuni%C3%B3n%20presencial%20en%20el%20estudio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-dark-800 bg-white hover:bg-lino-50 rounded-full border border-dark-900/10 transition-all duration-200"
                >
                  <span>Coordinar reunión presencial</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-dark-600 font-medium">
                <a
                  href="https://maps.app.goo.gl/DpjkKssHoz2WCr7CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-brand-600 transition-colors group"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-500" />
                  <span className="group-hover:underline">Jorge Newbery 1286, San Vicente</span>
                </a>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-500" />
                  <span>Atención cercana y respuesta directa</span>
                </div>
              </div>

            </div>

            {/* Right Information Cards Column */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-white p-6 rounded-2xl border border-dark-900/5 shadow-card space-y-4">
                <h3 className="text-sm font-semibold text-dark-900 uppercase tracking-wider text-brand-700">
                  Información Institucional
                </h3>

                {/* Location */}
                <div className="flex items-start gap-3 text-sm text-dark-700">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-dark-900">Ubicación</p>
                    <a
                      href="https://maps.app.goo.gl/DpjkKssHoz2WCr7CA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group text-xs text-dark-700 hover:text-brand-600 transition-colors"
                      title="Ver en Google Maps"
                    >
                      <p className="font-medium group-hover:underline">Jorge Newbery 1286</p>
                      <p className="text-dark-600">San Vicente, Misiones, Argentina.</p>
                    </a>
                    
                    {/* Discreet "Cómo llegar" link */}
                    <a
                      href="https://maps.app.goo.gl/DpjkKssHoz2WCr7CA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors pt-0.5"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Cómo llegar</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Embedded Responsive Google Map */}
                <div className="pt-2">
                  <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-dark-900/10 shadow-sm bg-lino-100">
                    <iframe
                      src="https://maps.google.com/maps?q=Jorge+Newbery+1286,+San+Vicente,+Misiones,+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación oficial en Google Maps - Estudio Contable Tuzinkievich & Asociados"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3 text-sm text-dark-700">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-dark-900">Teléfono / WhatsApp</p>
                    <a
                      href="https://wa.me/5493755558383?text=Hola%2C%20quisiera%20hacer%20una%20consulta%20al%20Estudio%20Tuzinkievich%20%26%20Asociados."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-600 font-semibold hover:underline mt-0.5 inline-block"
                    >
                      +54 9 3755 55-8383
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 text-sm text-dark-700">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-dark-900">Correo Electrónico</p>
                    <a
                      href="mailto:contacto@estudiotuzinkievich.com.ar"
                      className="text-xs text-brand-600 font-medium hover:underline mt-0.5 inline-block"
                    >
                      contacto@estudiotuzinkievich.com.ar
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3 text-sm text-dark-700">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-dark-900">Horarios de Atención</p>
                    <p className="text-xs text-dark-700 mt-0.5">
                      Lunes a viernes
                    </p>
                    <p className="text-xs text-dark-600">
                      08:00 a 12:00 hs &bull; 15:00 a 20:00 hs
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
