import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const APP_NAME = "CiudadConecta";
const APP_DESCRIPTION =
  "Descubre los mejores negocios, promociones y eventos locales de tu ciudad. Tu concierge digital en México.";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://ciudadconecta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: `${APP_NAME} — Tu ciudad, conectada`,
    template: `%s · ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icons/icon.svg" }],
  },
  keywords: ["México", "negocios locales", "promociones", "cupones", "eventos", "directorio", "mapa"],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: APP_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} — Tu ciudad, conectada`,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} — Tu ciudad, conectada`,
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#006a62",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-dvh bg-background font-sans text-on-surface antialiased">
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
