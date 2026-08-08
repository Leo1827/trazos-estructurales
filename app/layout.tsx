import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// URL base de la aplicación para resolver rutas relativas de metadatos/Open Graph
const siteUrl = "https://trazosestructurales.com"; // Sustituir por el dominio real

export const viewport: Viewport = {
  themeColor: "#0f172a", // Color principal para barra de navegación móvil
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trazos Estructurales | Diseño Arquitectónico y Construcción en Ibagué",
    template: "%s | Trazos Estructurales",
  },
  description:
    "Especialistas en diseño estructural, arquitectura, supervisión técnica y construcción de edificaciones en Ibagué. Calidad, normativa sísmica y proyectos a medida.",
  keywords: [
    "Diseño estructural Ibagué",
    "Diseño arquitectónico Ibagué",
    "Supervisión técnica de obras",
    "Construcción de edificaciones Ibagué",
    "Ingeniería civil Ibagué",
    "Licencias de construcción Ibagué",
    "Trazos Estructurales",
  ],
  authors: [{ name: "Trazos Estructurales" }],
  creator: "Trazos Estructurales",
  publisher: "Trazos Estructurales",
  formatDetection: {
    email: false,
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
      "Diseño estructural, gestión arquitectónica y supervisión técnica de proyectos de construcción en Ibagué y el Tolima.",
    images: [
      {
        url: "/og-image.jpg", // Crear esta imagen en /public (1200x630px)
        width: 1200,
        height: 630,
        alt: "Trazos Estructurales - Ingeniería y Construcción en Ibagué",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trazos Estructurales | Diseño y Construcción en Ibagué",
    description:
      "Soluciones integrales en diseño estructural, supervisión técnica y arquitectura en Ibagué.",
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
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}