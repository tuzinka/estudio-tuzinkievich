"use client";

import { Shield, Sparkles, Lightbulb, Scale } from "lucide-react";

export default function PhilosophySection() {
  const principles = [
    {
      icon: Lightbulb,
      title: "Claridad ante la complejidad",
      description:
        "Traducimos las normativas impositivas y contables a un lenguaje comprensible, para que tengas control pleno sobre tu situación fiscal.",
    },
    {
      icon: Shield,
      title: "Respaldo y Responsabilidad",
      description:
        "Actuamos con el rigor técnico que exige la profesión, ofreciendo la tranquilidad de saber que tus obligaciones están al día.",
    },
    {
      icon: Scale,
      title: "Honestidad y Criterio",
      description:
        "Construimos relaciones de confianza a largo plazo basándonos en la transparencia, el sentido común y la objetividad profesional.",
    },
    {
      icon: Sparkles,
      title: "Evolución y Tecnología",
      description:
        "Incorporamos herramientas digitales y metodologías modernas para agilizar gestiones sin perder la calidez del contacto directo.",
    },
  ];

  return (
    <section id="filosofia" className="py-24 md:py-32 bg-dark-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Quote Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider">
            <span>Nuestra Filosofía</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium leading-tight text-lino-50">
            &ldquo;Entendemos el esfuerzo detrás de cada emprendimiento y el valor de trabajar con tranquilidad.&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-dark-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Admiramos a quienes emprenden, producen y trabajan todos los días. Nuestro rol es aliviar la carga administrativa e impositiva para que puedas enfocarte en hacer crecer tu proyecto.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark-800/80 border border-white/5 hover:border-brand-500/30 transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-serif font-semibold text-white">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-dark-300 leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
