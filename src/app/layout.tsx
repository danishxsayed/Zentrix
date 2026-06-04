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
    template: "%s | Zentrix Electronics",
  },
  description: "Leading supplier of electronic components for industrial automation, automotive, IoT, medical, telecom, and renewable energy sectors.",
  metadataBase: new URL("https://zentrix-electronics.com"), // Placeholder domain for absolute URLs
  openGraph: {
    title: "Zentrix — Industrial Electronics & Semiconductor Solutions",
    description: "Sourcing verified electronic components for critical sectors.",
    type: "website",
    locale: "en_US",
    url: "https://zentrix-electronics.com",
    siteName: "Zentrix Electronics",
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
