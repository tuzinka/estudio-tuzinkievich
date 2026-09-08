"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, HeartHandshake, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-brand-200/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/60 text-brand-800 text-xs font-semibold tracking-wide uppercase">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              <span>San Vicente, Misiones</span>
            </div>

            {/* Sub-header name */}
            <h2 className="text-sm md:text-base font-semibold tracking-widest text-brand-600 uppercase font-sans">
              Estudio Contable Tuzinkievich &amp; Asociados
            </h2>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-dark-900 tracking-tight leading-[1.15]">
              Tu mejor aliado <br className="hidden sm:inline" />
              <span className="italic text-brand-600 font-normal">en cada decisión.</span>
            </h1>

            {/* Subheadline & Description */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-medium text-dark-800 tracking-tight">
                Contabilidad clara, simple y humana.
              </h3>
              <p className="text-base sm:text-lg text-dark-600 max-w-2xl font-normal leading-relaxed">
                Acompañamos a monotributistas, emprendedores, profesionales, comercios y PyMEs con asesoramiento cercano, responsabilidad y una mirada puesta en su crecimiento.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/5493755558383?text=Hola%2C%20quisiera%20hacer%20una%20consulta%20al%20Estudio%20Tuzinkievich%20%26%20Asociados."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-full transition-all duration-200 shadow-sm hover:shadow-soft group"
              >
                <span>Conversar con el Estudio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-dark-700 bg-white hover:bg-lino-100 rounded-full border border-dark-900/10 transition-all duration-200"
              >
                <span>Conocer nuestra propuesta</span>
              </a>
            </div>

            {/* Value & Benefit Pillars */}
            <div className="pt-6 border-t border-dark-900/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2.5 text-xs font-medium text-dark-700">
                <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Tranquilidad impositiva</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-dark-700">
                <HeartHandshake className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Trato directo y transparente</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-dark-700">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Respaldo a PyMEs, comercios y monotributistas</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-dark-700">
                <TrendingUp className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Acompañamiento para crecer con orden</span>
              </div>
            </div>

          </div>

          {/* Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-500/10 via-brand-200/20 to-transparent blur-lg" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-dark-900/10 bg-white">
                <Image
                  src="/images/tuzinkievich_equipo_web.jpg"
                  alt="Equipo de trabajo de Estudio Contable Tuzinkievich & Asociados"
                  width={700}
                  height={500}
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center"
                  priority
                />

                {/* Floating Info Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0 font-serif font-bold text-lg">
                      T
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-900 uppercase tracking-wider">
                        Contador Mario R. Tuzinkievich &amp; Equipo
                      </p>
                      <p className="text-xs text-dark-600 mt-0.5">
                        Trayectoria, criterio profesional y presencia activa en Misiones.
                      </p>
                    </div>
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
