import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Zentrix System Ltd collects, uses, and protects your corporate data and RFQ specifications.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Privacy Policy"
        subtitle="How we manage, protect, and process your RFQ documentation and corporate data."
        breadcrumbs={[{ name: "Privacy Policy", href: "/privacy" }]}
      />

      <section className="py-20 bg-brand-bg relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-card/35 border border-brand-border/60 rounded-3xl p-8 md:p-12 space-y-8 text-brand-muted font-sans text-sm leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand-text">1. Information We Collect</h2>
              <p>
                At Zentrix System Ltd, we collect corporate contact details, RFQ specifications, part list inquiries, and design documentation (including Gerber files, BOM sheets, and schematic files) submitted through our web portal, email channels, or WhatsApp procurement desk.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand-text">2. How We Use Your Data</h2>
              <p>
                We use the information provided exclusively to verify component availability, calculate pricing quotes, analyze engineering design rules (DRC) for PCB assembly, and arrange logistics for delivery. Your project files are shared only with verified technical staff and authorized partners involved in producing your quotation.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand-text">3. Intellectual Property & File Security</h2>
              <p>
                We respect your intellectual property rights. All submitted Gerber files, CAD configurations, and bill of materials remain your property. All uploaded materials are stored securely in access-controlled storage networks and are deleted from our standard active servers once project requirements are completed, unless requested otherwise.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand-text">4. Third-Party Sharing</h2>
              <p>
                We do not sell, rent, or lease corporate datasets or project designs to third parties. We share specifications with authorized semiconductor suppliers and manufacturer partners solely when required to negotiate volume pricing or custom assemblies for your order.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand-text">5. Contact and Inquiries</h2>
              <p>
                If you have any questions regarding our data security practices, file retention policies, or wish to request immediate removal of your CAD designs, please reach our compliance team at{" "}
                <a href="mailto:Sales@zentrixsystem.co.uk" className="text-brand-cyan hover:underline">
                  Sales@zentrixsystem.co.uk
                </a>.
              </p>
            </div>

            <div className="pt-6 border-t border-brand-border/40 text-xs text-brand-muted/60">
              Last Updated: June 10, 2026
            </div>

          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
