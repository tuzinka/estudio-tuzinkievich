"use client";

import { FileText, Building2, Users2, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Contabilidad & Gestión Impositiva",
      description:
        "Administración integral de obligaciones tributarias nacionales y provinciales. Claridad en cada presentación para evitar contingencias.",
      items: [
        "Inscripciones y recategorizaciones (Monotributo y Responsable Inscripto)",
        "Liquidación de IVA, Ganancias y Bienes Personales",
        "Ingresos Brutos ATM Misiones y Convenio Multilateral",
        "Confección y auditoría de Balances Comerciales",
      ],
    },
    {
      icon: Building2,
      title: "Acompañamiento a Emprendedores y PyMEs",
      description:
        "Te orientamos desde el primer paso para estructurar tu negocio de forma eficiente, sostenible y con un encuadre fiscal adecuado.",
      items: [
        "Elección de la estructura fiscal idónea para iniciar",
        "Alta de punto de venta, facturación electrónica y habilitaciones",
        "Seguimiento periódico del estado financiero y tributario",
        "Prevención de desvíos fiscales en etapa de crecimiento",
      ],
    },
    {
      icon: Users2,
      title: "Liquidación de Haberes y Gestión Laboral",
      description:
        "Gestión responsable de la nómina de personal de tu comercio o empresa, cumpliendo con toda la normativa vigente.",
      items: [
        "Liquidación mensual de sueldos y jornales por convenio",
        "Confección y presentación de Cargas Sociales (F.931)",
        "Libro de Sueldos Digital y recibos de sueldo",
        "Asesoramiento preventivo en consultas laborales",
      ],
    },
    {
      icon: TrendingUp,
      title: "Consultoría Estratégica & Diagnóstico",
      description:
        "Proporcionamos una mirada clara de tus números para planificar inversiones, reducir riesgos y tomar decisiones con tranquilidad.",
      items: [
        "Planificación fiscal responsable y eficiente",
        "Análisis de costos operativos y márgenes de rentabilidad",
        "Informes económicos periódicos para la dirección",
        "Asesoramiento en proyectos de expansión o reestructuración",
      ],
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-lino-100/70 border-y border-dark-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wider">
              <span>Propuesta de Valor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-dark-900 leading-tight">
              Soluciones contables diseñadas para acompañar tu crecimiento.
            </h2>
          </div>
          <p className="text-sm text-dark-600 max-w-md">
            Un servicio integral y profesional adaptado a la escala de cada cliente, garantizando tranquilidad fiscal y rigor técnico.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="editorial-card p-8 rounded-2xl flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-200/50 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-dark-900 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-dark-600 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-dark-900/5">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-dark-700">
                        <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-dark-900/5 flex items-center justify-between">
                  <span className="text-xs font-medium text-dark-700">
                    Asesoramiento personalizado
                  </span>
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Consultar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
