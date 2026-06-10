import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Industries We Serve", href: "/industries" },
    { name: "Product Categories", href: "/products" },
    { name: "PCB Assembly & OEM", href: "/pcb-assembly" },
    { name: "Request a Quote (RFQ)", href: "/rfq" },
    { name: "Contact Us", href: "/contact" },
  ];

  const industries = [
    { name: "Industrial Automation", href: "/industries#industrial-automation" },
    { name: "Automotive Electronics", href: "/industries#automotive-electronics" },
    { name: "Consumer Electronics", href: "/industries#consumer-electronics" },
    { name: "IoT & Smart Devices", href: "/industries#iot-smart-devices" },
    { name: "Medical Electronics", href: "/industries#medical-electronics" },
    { name: "Renewable Energy", href: "/industries#renewable-energy" },
    { name: "Telecom & Networking", href: "/industries#telecom-networking" },
    { name: "Robotics & Embedded Systems", href: "/industries#robotics-embedded-systems" },
  ];

  return (
    <footer className="bg-[#050811] border-t border-brand-border/60 pt-16 pb-8 text-brand-muted relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Zentrix Logo"
                width={160}
                height={48}
                className="h-12 w-auto object-contain rounded-[10px]"
              />
            </Link>
            <p className="text-sm leading-relaxed font-sans text-brand-muted/95">
              Zentrix System Ltd – Supporting manufacturers, OEMs, research institutions, startups and technology innovators with electronic components, semiconductor technologies, PCB engineering and product development solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/447721855393"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-card hover:bg-brand-cyan/20 border border-brand-border hover:border-brand-cyan/45 rounded-lg text-brand-muted hover:text-brand-cyan transition-all duration-300 flex items-center gap-2 text-xs font-sans font-medium"
                aria-label="Contact Zentrix on WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-brand-text font-display font-bold text-base tracking-wide uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm font-sans">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-cyan hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industry Segments */}
          <div>
            <h3 className="text-brand-text font-display font-bold text-base tracking-wide uppercase mb-6">
              Industries Served
            </h3>
            <ul className="space-y-3.5 text-sm font-sans">
              {industries.map((ind) => (
                <li key={ind.name}>
                  <Link
                    href={ind.href}
                    className="hover:text-brand-cyan hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-brand-text font-display font-bold text-base tracking-wide uppercase mb-6">
                Corporate Office
              </h3>
              <ul className="space-y-4 text-sm font-sans">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span>
                    Zentrix System Ltd,
                    <br />
                    109 New Rd,
                    <br />
                    London E1 1HJ, United Kingdom
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-cyan shrink-0" />
                  <a href="mailto:Sales@zentrixsystem.co.uk" className="hover:text-brand-cyan transition-colors">
                    Sales@zentrixsystem.co.uk
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-cyan shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:+447721855393" className="hover:text-brand-cyan transition-colors">
                      +44 7721855393
                    </a>
                    <a href="tel:+447587757754" className="hover:text-brand-cyan transition-colors">
                      +44 7587757754
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="pt-2">
              <span className="text-xs text-brand-muted/70 block mb-2">Office Hours: Mon–Sat, 9AM–6PM GMT/BST</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border/40 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans">
          <p>© 2026 Zentrix Electronics. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-brand-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-cyan transition-colors">
              Terms of Use
            </Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
