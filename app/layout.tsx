import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto, Ubuntu } from "next/font/google";
import "./globals.css";
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
  title: "LGarciaDev",
  description: "Bienvenidos a LGarciaDev!",
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
      </body>
    </html>
  );
}
