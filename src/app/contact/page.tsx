"use client";

import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Corporate Headquarters",
      lines: [
        "Zentrix Electronics",
        "109 New Rd,",
        "London E1 1HJ, United Kingdom",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      lines: ["Monday – Saturday: 9:00 AM – 6:00 PM GMT/BST", "Sunday: Closed"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Get in Touch"
        subtitle="Contact our components desk for product inquiries, procurement assistance, or partner opportunities."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <section className="py-20 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Office info & Map */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Box 1: Address and Info */}
              <div className="bg-brand-card/40 border border-brand-border/60 p-6 md:p-8 rounded-2xl space-y-6">
                <h3 className="text-xl font-display font-extrabold text-brand-text">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactDetails.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border/80 flex items-center justify-center text-brand-cyan">
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="space-y-1 font-sans text-xs">
                          <h4 className="font-display font-bold text-sm text-brand-text">{item.title}</h4>
                          {item.lines.map((line, lIdx) => (
                            <p key={lIdx} className="text-brand-muted leading-relaxed">{line}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}

                  {/* Phone & Email direct */}
                  <div className="pt-4 border-t border-brand-border/40 space-y-3 text-xs font-sans text-brand-muted">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4.5 w-4.5 text-brand-cyan shrink-0" />
                      <span>General Inquiries: <a href="mailto:Sales@zentrixsystem.co.uk" className="text-brand-text hover:underline">Sales@zentrixsystem.co.uk</a></span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-4.5 w-4.5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="flex flex-col">
                        <span>Support Line 1: <a href="tel:+447721855393" className="text-brand-text hover:underline">+44 7721855393</a></span>
                        <span>Support Line 2: <a href="tel:+447587757754" className="text-brand-text hover:underline">+44 7587757754</a></span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/447721855393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-cyan/15 hover:bg-brand-cyan border border-brand-cyan/35 hover:border-brand-cyan text-brand-cyan hover:text-brand-bg font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Box 2: Map Placeholder */}
              <div className="bg-brand-card/40 border border-brand-border/60 p-4 rounded-2xl overflow-hidden relative group">
                <div className="h-64 rounded-xl bg-brand-surface border border-brand-border flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                  
                  {/* Decorative circuit line graphics behind text */}
                  <div className="absolute inset-0 bg-dot-grid opacity-30 z-0" />
                  <svg className="absolute inset-0 w-full h-full opacity-10 z-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 50 50 L 150 150 L 250 50" fill="none" stroke="#00D4FF" strokeWidth="2" />
                    <circle cx="150" cy="150" r="4" fill="#00D4FF" />
                  </svg>

                  <div className="relative z-10 space-y-2">
                    <MapPin className="h-8 w-8 text-brand-cyan mx-auto animate-bounce" />
                    <h4 className="text-sm font-display font-bold text-brand-text">Corporate Location Map</h4>
                    <p className="text-xs font-sans text-brand-muted max-w-xs leading-relaxed">
                      109 New Rd, London E1 1HJ, United Kingdom.
                    </p>
                    <span className="text-[10px] font-mono text-brand-cyan inline-block pt-3">
                      [ Interactive Maps API Integrations Coming Soon ]
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
