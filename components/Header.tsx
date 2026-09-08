"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "El Estudio", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Filosofía", href: "#filosofia" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-header border-b border-dark-900/5 py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group transition-transform duration-200 hover:opacity-90"
            aria-label="Ir al inicio - Estudio Contable Tuzinkievich & Asociados"
          >
            <div className="relative h-10 sm:h-12 w-auto flex items-center justify-center">
              <Image
                src="/logo_tuzinkievich.png"
                alt="Estudio Contable Tuzinkievich & Asociados"
                width={280}
                height={90}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-dark-900/5 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-dark-700 hover:text-brand-600 rounded-full transition-colors hover:bg-brand-50/60"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5493755558383?text=Hola%2C%20quisiera%20hacer%20una%20consulta%20al%20Estudio%20Tuzinkievich%20%26%20Asociados."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-full transition-all duration-200 shadow-sm hover:shadow-soft group"
            >
              <span>Agendar Consulta</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-dark-700 hover:bg-dark-900/5 transition-colors"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-dark-900/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-dark-800 hover:text-brand-600 py-1 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-dark-900/5 flex flex-col space-y-3">
            <a
              href="https://wa.me/5493755558383?text=Hola%2C%20quisiera%20hacer%20una%20consulta%20al%20Estudio%20Tuzinkievich%20%26%20Asociados."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-xl transition-all shadow-sm"
            >
              <span>Agendar Consulta por WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
