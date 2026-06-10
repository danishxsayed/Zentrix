import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Review the corporate terms and service conditions for component procurement and custom PCB assembly with Zentrix System Ltd.",
};

export default function TermsOfUse() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Terms of Use"
        subtitle="Standard commercial terms and conditions governing component supply and manufacturing agreements."
        breadcrumbs={[{ name: "Terms of Use", href: "/terms" }]}
      />

      <section className="py-20 bg-brand-bg relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-card/35 border border-brand-border/60 rounded-3xl p-8 md:p-12 space-y-8 text-brand-muted font-sans text-sm leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand-text">1. Scope of Agreement</h2>
              <p>
                These Terms of Use govern all component pricing estimates, logistics, and assembly projects coordinated by Zentrix System Ltd. By accessing our services, submitting bill of materials (BOM) inventories, or uploading circuit design files, you agree to comply with these service policies.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand-text">2. RFQ Submission and Quotes</h2>
              <p>
                All project estimates, component lists, and custom PCB assembly bids issued by our engineering support desk are valid for 14 days from date of receipt, subject to market availability of semiconductor wafers and supplier price adjustments. Final assembly pricing is verified upon component lock-in.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand-text">3. Manufacturing Files and Warranty</h2>
              <p>
                Customers are solely responsible for verifying the accuracy of Gerber files, netlists, and component specifications submitted for PCB manufacturing. While our team performs automated Design Rule Checks (DRC) to flag obvious routing issues, Zentrix System Ltd is not liable for layout faults, component spacing design flaws, or assembly errors resulting from inaccurate customer documents.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand-text">4. Deliveries and Shipments</h2>
              <p>
                Logistics lead times and delivery schedules are calculated in good faith but are subject to global supply chain and freight transit delays. Zentrix system operations coordinate shipments via express global carriers, but is not responsible for customs delays, clearance hold-ups, or import tariffs.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand-text">5. Governing Law</h2>
              <p>
                These terms, transaction policies, and supply contracts are governed by and construed in accordance with the laws of the United Kingdom, and the courts of London shall have exclusive jurisdiction over any related disputes.
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
