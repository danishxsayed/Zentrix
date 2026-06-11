import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Zentrix — Industrial Electronics & Semiconductor Solutions",
    template: "%s | Zentrix System Ltd",
  },
  description: "Zentrix System Ltd – Supporting manufacturers, OEMs, research institutions, startups and technology innovators with electronic components, semiconductor technologies, PCB engineering and product development solutions.",
  metadataBase: new URL("https://zentrix-electronics.com"), // Placeholder domain for absolute URLs
  openGraph: {
    title: "Zentrix — Industrial Electronics & Semiconductor Solutions",
    description: "Zentrix System Ltd – Supporting manufacturers, OEMs, research institutions, startups and technology innovators with electronic components, semiconductor technologies, PCB engineering and product development solutions.",
    type: "website",
    locale: "en_US",
    url: "https://zentrix-electronics.com",
    siteName: "Zentrix System Ltd",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${displayFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text font-sans scroll-smooth" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
