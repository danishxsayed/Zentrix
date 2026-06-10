"use client";

import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Settings, Zap, Compass, CheckCircle2, ArrowRight, ShieldCheck, Database, Award } from "lucide-react";

export default function PcbAssemblyClient() {
  const services = [
    {
      icon: Cpu,
      title: "Custom PCB Assembly",
      desc: "Turnkey PCBA services for industrial control, medical sensors, automotive ECUs, and high-frequency communication boards.",
    },
    {
      icon: Settings,
      title: "OEM Manufacturing",
      desc: "Full-scale original equipment manufacturing support. From schematics refinement to physical enclosure and box-build assembly.",
    },
    {
      icon: Zap,
      title: "PCB Prototyping",
      desc: "Fast, quick-turn prototype assembly lines allowing hardware designers to validate layouts, test signals, and finalize revisions quickly.",
    },
    {
      icon: Compass,
      title: "SMT & THT Assembly",
      desc: "State-of-the-art Surface Mount Technology (SMT) pick-and-place machines coupled with manual Through-Hole Technology (THT) wave soldering.",
    },
    {
      icon: Database,
      title: "BOM & Component Management",
      desc: "Zentrix supports BOM management, component availability review and supply chain coordination to help keep projects on schedule.",
    },
    {
      icon: Award,
      title: "Scalable Production",
      desc: "Flexible batch limits supporting startups testing small initial runs to enterprise operations requiring high-volume manufacturing output.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Project Requirements Review",
      desc: "Submit your BOM, Gerber files and project requirements through our RFQ system.",
    },
    {
      num: "02",
      title: "BOM & Component Planning",
      desc: "Engineering and procurement review component availability and prepare BOM for production.",
    },
    {
      num: "03",
      title: "PCB Fabrication",
      desc: "Fabrication completed according to project specifications, including multilayer and high-precision board requirements.",
    },
    {
      num: "04",
      title: "Assembly & Testing",
      desc: "SMT assembly, through-hole assembly, AOI inspection, functional testing and quality verification.",
    },
    {
      num: "05",
      title: "Quality Assurance & Production Release",
      desc: "Final inspection, protective packaging and production release processes completed.",
    },
  ];

  const industryBadges = [
    "Industrial Automation",
    "Automotive Electronics",
    "Consumer Electronics",
    "IoT & Smart Devices",
    "Medical Electronics",
    "Renewable Energy",
    "Telecom & Networking",
    "Robotics & Embedded Systems",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Custom PCB Assembly & OEM Services"
        subtitle="Professional PCB engineering, assembly and manufacturing solutions from concept to production."
        breadcrumbs={[{ name: "PCB Assembly", href: "/pcb-assembly" }]}
      />

      {/* Capabilities Section */}
      <section className="py-20 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-display font-semibold tracking-widest text-brand-cyan">Assembly Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-text mt-3">
              Precision Engineering, Scale, and Support
            </h2>
            <p className="text-sm font-sans text-brand-muted mt-4">
              Zentrix bridges the gap between hardware engineering design and physical PCB production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group bg-brand-card/40 border border-brand-border/60 hover:border-brand-cyan/50 rounded-2xl p-6 md:p-8 hover:bg-brand-card transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border/80 text-brand-cyan flex items-center justify-center mb-6 group-hover:bg-brand-cyan/15 group-hover:border-brand-cyan/40 transition-colors duration-300">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-bold text-brand-text mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-sm font-sans text-brand-muted leading-relaxed">
                    {srv.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Assembly Process Flow */}
      <section className="py-20 bg-[#050811] border-y border-brand-border/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-display font-semibold tracking-widest text-brand-cyan">Production Cycle</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-text mt-3">
              Our 5-Step PCB Engineering & Assembly Process
            </h2>
            <p className="text-sm font-sans text-brand-muted mt-4">
              We manage the entire engineering lifecycle to ensure high-yield rates and rapid delivery.
            </p>
          </div>

          <div className="relative">
            {/* Connecting progress line on desktop */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-brand-border/60 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-surface border-2 border-brand-border flex items-center justify-center text-lg font-mono font-bold text-brand-cyan shadow-glow-cyan">
                    {step.num}
                  </div>
                  <h3 className="text-base font-display font-bold text-brand-text">
                    {step.title}
                  </h3>
                  <p className="text-xs font-sans text-brand-muted leading-relaxed max-w-xs mx-auto lg:mx-0">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Industries Badges section */}
      <section className="py-20 bg-brand-bg relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-3">
            <span className="text-xs uppercase font-display font-semibold tracking-widest text-brand-cyan">Certified Compliance</span>
            <h2 className="text-3xl font-display font-extrabold text-brand-text">
              Sectors We Manufacture For
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {industryBadges.map((badge, idx) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="text-xs md:text-sm font-sans font-bold px-4 py-2 bg-brand-card/50 border border-brand-border/60 text-brand-text rounded-full shadow-sm hover:border-brand-cyan/40 transition-colors"
              >
                {badge}
              </motion.span>
            ))}
          </div>

          <div className="pt-8">
            <div className="inline-flex flex-col items-center p-8 bg-brand-card/50 border border-brand-border/60 rounded-3xl max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/35 to-transparent" />
              <ShieldCheck className="h-10 w-10 text-brand-cyan mb-4" />
              <h3 className="text-lg font-display font-bold text-brand-text mb-2">Have Gerber Files and a BOM Ready?</h3>
              <p className="text-xs font-sans text-brand-muted mb-6 leading-relaxed">
                Upload your Gerber files and BOM documentation through our RFQ system. Our engineering team will review your project requirements and provide a tailored quotation within 24 hours.
              </p>
              <Link
                href="/rfq"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-cyan hover:bg-brand-cyan-dark text-brand-bg font-sans font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-glow-cyan"
              >
                Get a PCB Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
