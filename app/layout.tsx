import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

// Configuración de fuentes optimizadas con next/font/google
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://trazosestructurales.com";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trazos Estructurales | Cálculo Estructural y Licencias en Ibagué",
    template: "%s | Trazos Estructurales",
  },
  description:
    "Firma de ingeniería civil y arquitectura en Ibagué. Diseños estructurales conforme a la norma NSR-10, supervisión técnica, licencias de construcción y gestión de obras en el Tolima.",
  keywords: [
    "Cálculo estructural Ibagué",
    "Diseño estructural NSR-10 Ibagué",
    "Licencias de construcción Ibagué",
    "Supervisión técnica de obras Tolima",
    "Ingenieros civiles en Ibagué",
    "Arquitectos en Ibagué",
    "Planos de construcción Ibagué",
    "Trazos Estructurales",
  ],
  authors: [{ name: "Trazos Estructurales" }],
  creator: "Trazos Estructurales",
  publisher: "Trazos Estructurales",
  category: "Ingeniería Civil y Arquitectura",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Trazos Estructurales",
    title: "Trazos Estructurales | Ingeniería y Arquitectura en Ibagué",
    description:
      "Especialistas en cálculo estructural NSR-10, trámites de licencias y supervisión de obra en Ibagué y Tolima. Cotiza tu proyecto con expertos.",
    images: [
      {
        url: "https://www.trazosestructurales.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Trazos Estructurales - Ingeniería y Construcción en Ibagué",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trazos Estructurales | Cálculo y Licencias en Ibagué",
    description:
      "Diseños estructurales bajo norma NSR-10 y supervisión técnica de edificaciones en Ibagué.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Datos estructurados Schema.org para posicionamiento local en Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Trazos Estructurales",
    image: `${siteUrl}/og-image.jpg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: "+57311 240 0270", // Sustituir por tu teléfono
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrera 7 No. 68-22 T 11, Ibagué, Colombia, 730002", // Sustituir
      addressLocality: "Ibagué",
      addressRegion: "Tolima",
      postalCode: "730001",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.43889,
      longitude: -75.23222,
    },
    areaServed: [
      { "@type": "City", name: "Ibagué" },
      { "@type": "AdministrativeArea", name: "Tolima" },
    ],
    knowsAbout: [
      "Diseño Estructural NSR-10",
      "Supervisión Técnica de Obras",
      "Licencias de Construcción",
      "Diseño Arquitectónico",
    ],
  };

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* Marcado JSON-LD para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Mantenemos únicamente FontAwesome via CDN para no romper tus iconos */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}