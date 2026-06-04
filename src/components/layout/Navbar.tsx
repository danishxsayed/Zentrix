"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: "Products", href: "/products" },
    { name: "PCB Assembly", href: "/pcb-assembly" },
    { name: "RFQ & Quote", href: "/rfq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/80 backdrop-blur-md border-b border-brand-border/60 py-3 shadow-lg"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Zentrix Logo"
                width={160}
                height={48}
                className="h-12 w-auto object-contain rounded-[10px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-sans font-medium transition-all duration-200 relative py-1 ${
                      isActive
                        ? "text-brand-cyan font-semibold"
                        : "text-brand-muted hover:text-brand-text"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-cyan rounded-full shadow-glow-cyan" />
                    )}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-cyan hover:bg-brand-cyan-dark text-brand-bg font-sans font-semibold text-sm transition-all duration-300 hover:shadow-glow-cyan group"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-brand-muted hover:text-brand-text hover:bg-brand-card/50 border border-brand-border/40 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] bg-brand-bg/95 backdrop-blur-lg border-b border-brand-border/80 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-screen py-6" : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-base font-sans font-medium transition-colors ${
                  isActive
                    ? "bg-brand-cyan/10 text-brand-cyan border-l-4 border-brand-cyan"
                    : "text-brand-muted hover:text-brand-text hover:bg-brand-card/30"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-brand-border/40 px-4">
            <Link
              href="/rfq"
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-cyan hover:bg-brand-cyan-dark text-brand-bg font-sans font-bold text-center transition-all duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
