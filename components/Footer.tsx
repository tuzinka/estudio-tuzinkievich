"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Link href="#hero" className="inline-block group">
              <div className="relative h-12 w-auto flex items-center justify-start">
                <Image
                  src="/logo_tuzinkievich_blanco.png"
                  alt="Estudio Contable Tuzinkievich & Asociados"
                  width={280}
                  height={90}
                  className="h-10 sm:h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
                />
              </div>
            </Link>

            <p className="text-sm text-dark-300 max-w-md leading-relaxed font-normal">
              Contabilidad clara, simple y humana. Acompañamos a monotributistas, emprendedores, profesionales, comercios y PyMEs en San Vicente y la región con compromiso, responsabilidad y cercanía.
            </p>

            <div className="text-xs text-brand-400 space-y-1 font-medium pt-1">
              <p>📍 Jorge Newbery 1286 &bull; San Vicente, Misiones, Argentina</p>
              <p>📞 +54 9 3755 55-8383 &bull; ✉️ contacto@estudiotuzinkievich.com.ar</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Navegación</h3>
            <ul className="space-y-2 text-sm text-dark-300">
              <li>
                <Link href="#hero" className="hover:text-brand-400 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="#nosotros" className="hover:text-brand-400 transition-colors">El Estudio</Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-brand-400 transition-colors">Servicios</Link>
              </li>
              <li>
                <Link href="#filosofia" className="hover:text-brand-400 transition-colors">Filosofía</Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-brand-400 transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Institutional Hours & Information */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Horarios de Atención</h3>
            <p className="text-xs text-dark-300 leading-relaxed">
              Lunes a viernes:<br />
              <span className="text-white font-medium">08:00 a 12:00 hs</span> &bull; <span className="text-white font-medium">15:00 a 20:00 hs</span>
            </p>
            <p className="text-xs text-dark-400 pt-2 border-t border-white/10">
              Estudio Contable, Impositivo y Laboral.<br />
              Dirigido por el Contador Mario Roberto Tuzinkievich.
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Scroll Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-400">
          <p>
            © {new Date().getFullYear()} Estudio Contable Tuzinkievich &amp; Asociados. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-dark-300 hover:text-brand-400 transition-colors py-1 px-3 rounded-full bg-white/5 hover:bg-white/10"
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
