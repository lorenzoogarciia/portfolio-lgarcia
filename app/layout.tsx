import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto, Ubuntu } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next";
import Header from "./ui/header";
import Footer from "./ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "300"
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: "700",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Inicio | LGarciaDev",
  description: "¡Hola, soy Lorenzo Garcia! Desarrollador de Software Full Stack en Sycket Technologies y estudiante de Ingeniería informática"
  + " ¡Bienvenido a mi sitio web!",
  icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨🏻‍💻</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${roboto.variable} ${ubuntu.variable} flex flex-col min-h-screen overflow-x-hidden`}
      >

          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <SpeedInsights />
          <Analytics />
      </body>
    </html>
  );
}
