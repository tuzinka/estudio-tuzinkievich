import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-lino-50 text-dark-900 font-sans">
      {/* 1. Header Responsive */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Principal Editorial */}
        <HeroSection />

        {/* 3. Sección de Presentación del Estudio */}
        <AboutSection />

        {/* 4. Sección de Servicios / Propuesta de Valor */}
        <ServicesSection />

        {/* 5. Bloque de Filosofía & Acompañamiento */}
        <PhilosophySection />

        {/* 6. Bloque CTA de Contacto */}
        <ContactCTA />
      </main>

      {/* 7. Footer Institucional */}
      <Footer />
    </div>
  );
}
