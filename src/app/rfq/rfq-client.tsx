"use client";

import PageHero from "@/components/ui/PageHero";
import RFQForm from "@/components/ui/RFQForm";
import { ShieldCheck, Mail, Phone, MessageSquare } from "lucide-react";

export default function RfqClient() {
  const benefits = [
    {
      icon: MessageSquare,
      title: "Dedicated RFQ Support",
      desc: "Our engineering and procurement team supports component, BOM and PCB assembly inquiries for industrial and OEM applications.",
    },
    {
      icon: ShieldCheck,
      title: "Quality-Controlled Supply Network",
      desc: "Delivering reliable component solutions through trusted supplier partnerships and quality-focused standards.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Request a Quote & BOM Upload"
        subtitle="Upload your bill of materials (BOM) or submit your component requirements. Our engineering team will review your requirements and provide a tailored quotation within 24 hours."
        breadcrumbs={[{ name: "RFQ", href: "/rfq" }]}
      />

      <section className="py-20 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-brand-surface/30 p-1 border border-brand-border/40 rounded-2xl">
                <RFQForm />
              </div>
            </div>

            {/* Right Column: Trust strip & Contact details */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              
              {/* Box 1: Why Source with Zentrix */}
              <div className="bg-brand-card/40 border border-brand-border/60 p-6 md:p-8 rounded-2xl space-y-6">
                <h3 className="text-xl font-display font-extrabold text-brand-text">
                  Engineering Support with Zentrix
                </h3>
                <div className="space-y-6">
                  {benefits.map((bnf) => {
                    const Icon = bnf.icon;
                    return (
                      <div key={bnf.title} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border/80 flex items-center justify-center text-brand-cyan">
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-display font-bold text-brand-text mb-1">{bnf.title}</h4>
                          <p className="text-xs font-sans text-brand-muted leading-relaxed">{bnf.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Box 2: Help & Alternative Contact */}
              <div className="bg-brand-card/45 border border-brand-border/60 p-6 md:p-8 rounded-2xl space-y-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-brand-text mb-2">Need Technical or RFQ Support?</h3>
                  <p className="text-xs font-sans text-brand-muted leading-relaxed">
                    Have questions about component alternatives, lead times, packaging requirements or lifecycle status? Our team is here to assist.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-brand-border/40 text-xs font-sans text-brand-muted">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-brand-cyan shrink-0" />
                    <span>Send directly to: <a href="mailto:Sales@zentrixsystem.co.uk" className="text-brand-text font-medium hover:underline">Sales@zentrixsystem.co.uk</a></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="flex flex-col">
                      <span>BOM Hotline 1: <a href="tel:+447721855393" className="text-brand-text font-medium hover:underline">+44 7721855393</a></span>
                      <span>BOM Hotline 2: <a href="tel:+447587757754" className="text-brand-text font-medium hover:underline">+44 7587757754</a></span>
                    </span>
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
                    WhatsApp Procurement Desk
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
