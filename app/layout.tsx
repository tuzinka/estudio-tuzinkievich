import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Estudio Contable Tuzinkievich & Asociados | San Vicente, Misiones",
  description:
    "Tu mejor aliado en cada decisión. Contabilidad clara, simple y humana. Acompañamos a emprendedores, profesionales y empresas con asesoramiento cercano y responsabilidad.",
  keywords: [
    "Estudio Contable San Vicente",
    "Contador Mario Tuzinkievich",
    "Asesoria fiscal Misiones",
    "Liquidación de sueldos Misiones",
    "Impuestos PyMEs San Vicente",
    "Contabilidad humana",
  ],
  authors: [{ name: "Estudio Contable Tuzinkievich & Asociados" }],
  robots: "index, follow",
  openGraph: {
    title: "Estudio Contable Tuzinkievich & Asociados",
    description:
      "Contabilidad clara, simple y humana. Acompañamos a emprendedores, profesionales y empresas en San Vicente, Misiones.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased text-dark-800 bg-lino-50 selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
