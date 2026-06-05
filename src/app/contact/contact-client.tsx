"use client";

import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactClient() {
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

            {/* Right Column: Office info */}
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

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
