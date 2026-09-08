"use client";

import Image from "next/image";
import { Users, Award, HeartHandshake, Compass } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wider">
            <span>El Estudio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-dark-900 leading-tight">
            Compromiso profesional y presencia constante en San Vicente y la región.
          </h2>
        </div>

        {/* Grid Layout: Text Content + Editorial Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-dark-900/5">
                <Image
                  src="/images/equipo_reunion_mesa_redonda_web.jpg"
                  alt="Reunión del equipo de Estudio Contable Tuzinkievich"
                  width={600}
                  height={450}
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center"
                />
              </div>

              {/* Decorative Accent Card */}
              <div className="mt-4 p-5 rounded-2xl bg-lino-100 border border-dark-900/5">
                <blockquote className="text-sm md:text-base italic text-dark-800 font-serif leading-relaxed">
                  &ldquo;La contabilidad no es solo una obligación impositiva. Bien utilizada, se convierte en una herramienta para decidir mejor, crecer con orden y avanzar con tranquilidad.&rdquo;
                </blockquote>
                <p className="mt-2 text-xs font-semibold text-brand-800 uppercase tracking-wide">
                  Contador Mario Roberto Tuzinkievich — Fundador
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <p className="text-lg text-dark-800 leading-relaxed font-normal">
              Fundado por el <strong className="font-semibold text-dark-900">Contador Mario Roberto Tuzinkievich</strong>, nuestro estudio nació con una premisa fundamental: brindar un asesoramiento contables e impositivo serio, riguroso y por sobre todo, humano.
            </p>

            <p className="text-base text-dark-600 leading-relaxed">
              Sabemos que detrás de cada monotributista, comercio, PyME o emprendimiento profesional hay años de trabajo y esfuerzo. Por eso, no concebimos la contabilidad como una mera obligación administrativa; la transformamos en una herramienta práctica para evaluar el negocio, tomar decisiones estratégicas con certeza y crecer con orden.
            </p>

            <p className="text-base text-dark-600 leading-relaxed">
              Nuestra trayectoria en San Vicente y la zona centro de Misiones se ha construido día a día con honestidad, criterio técnico y un trato cálido. Combinamos la calidez de la atención personalizada con la permanente actualización frente a los constantes cambios normativos y tecnológicos.
            </p>

            {/* Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              <div className="p-4 rounded-xl bg-lino-50 border border-dark-900/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-600 flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-dark-900">Trato Cercano y Directo</h3>
                <p className="text-xs text-dark-600 leading-relaxed">
                  Respuestas claras, sin tecnicismos innecesarios y siempre disponibles para atender cada consulta.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-lino-50 border border-dark-900/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-600 flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-dark-900">Criterio y Claridad</h3>
                <p className="text-xs text-dark-600 leading-relaxed">
                  Análisis responsable para que cada cliente tome decisiones comerciales con respaldo y tranquilidad.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
