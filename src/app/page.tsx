"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, UploadCloud, Cpu } from "lucide-react";
import StatsRow from "@/components/ui/StatsRow";
import IndustryCard from "@/components/ui/IndustryCard";
import ProductCategoryCard from "@/components/ui/ProductCategoryCard";
import FeaturedProductCard from "@/components/ui/FeaturedProductCard";
import TrustStrip from "@/components/ui/TrustStrip";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Home() {
  const industries = [
    {
      name: "Industrial Automation",
      description: "PLC systems, robotics, motor control, sensors and smart manufacturing electronics.",
      imageSeed: "1518775024507-647610082f0a",
      href: "/industries#industrial-automation",
    },
    {
      name: "Automotive Electronics",
      description: "EV systems, ECU, BMS, infotainment, ADAS and vehicle safety components.",
      imageSeed: "1617788138016-af228b76e53f",
      href: "/industries#automotive-electronics",
    },
    {
      name: "Consumer Electronics",
      description: "Smart devices, audio systems, home appliances and portable electronics solutions.",
      imageSeed: "1546868871-ef6f83290ae5",
      href: "/industries#consumer-electronics",
    },
    {
      name: "IoT & Smart Devices",
      description: "Wireless and embedded solutions for smart homes, cities and remote monitoring.",
      imageSeed: "1558494949-ef010c787b45",
      href: "/industries#iot-smart-devices",
    },
    {
      name: "Medical Electronics",
      description: "High-reliability components for healthcare devices, diagnostics and wearables.",
      imageSeed: "1581594698189-e81507797b0a",
      href: "/industries#medical-electronics",
    },
    {
      name: "Renewable Energy",
      description: "Power electronics for solar systems, battery storage, EV charging and smart grids.",
      imageSeed: "1508514177221-180b087000f2",
      href: "/industries#renewable-energy",
    },
    {
      name: "Telecom & Networking",
      description: "RF and communication electronics for 5G, routers, switches and wireless networks.",
      imageSeed: "1544197150-f191b41a9657",
      href: "/industries#telecom-networking",
    },
    {
      name: "Robotics & Embedded Systems",
      description: "Embedded control for robots, autonomous systems and smart machines.",
      imageSeed: "1485827404703-e68d20d1c58e",
      href: "/industries#robotics-embedded-systems",
    },
  ];

  const productCategories = [
    {
      name: "Passive Components",
      description: "Capacitors, resistors, inductors, filters, crystals, and transformers.",
      iconName: "Hash",
      href: "/products#passive-components",
    },
    {
      name: "Semiconductors",
      description: "Diodes, transistors, MOSFETs, IGBTs, thyristors, and rectifiers.",
      iconName: "Zap",
      href: "/products#semiconductors",
    },
    {
      name: "Integrated Circuits (ICs)",
      description: "Microcontrollers, logic ICs, operational amplifiers, interface chips, and PMICs.",
      iconName: "Cpu",
      href: "/products#integrated-circuits",
    },
    {
      name: "RF & Wireless Communication",
      description: "WiFi, Bluetooth, LoRa, Zigbee, GSM, 4G, and 5G communication modules.",
      iconName: "Wifi",
      href: "/products#rf-wireless",
    },
    {
      name: "Sensors & Memory",
      description: "Temperature, pressure, motion sensors alongside dynamic and non-volatile memory ICs.",
      iconName: "HardDrive",
      href: "/products#sensors-memory",
    },
    {
      name: "Electromechanical Components",
      description: "Connectors, terminals, switches, relays, buzzers, and control motors.",
      iconName: "ToggleLeft",
      href: "/products#electromechanical",
    },
    {
      name: "Optoelectronics & Displays",
      description: "LED modules, LCD panels, TFT/OLED displays, and infrared optical sensors.",
      iconName: "Monitor",
      href: "/products#optoelectronics",
    },
    {
      name: "Development Boards & Modules",
      description: "Arduino, Raspberry Pi, STM32, ESP32, and custom evaluation modules.",
      iconName: "Binary",
      href: "/products#development-boards",
    },
    {
      name: "Power & Protection",
      description: "DC-DC converters, LDOs, battery management (BMS), fuses, and TVS surge devices.",
      iconName: "Shield",
      href: "/products#power-protection",
    },
    {
      name: "Tools & Instruments",
      description: "Oscilloscopes, multimeters, soldering stations, and electronics testing equipment.",
      iconName: "Wrench",
      href: "/products#tools-instruments",
    },
  ];

  const featuredProducts = [
    {
      name: "ESP32 WiFi + Bluetooth Module",
      category: "RF & Wireless Communication",
      manufacturer: "Espressif",
      specs: "Dual-core 240MHz, WiFi 802.11 b/g/n, BLE 4.2, integrated antenna",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      name: "STM32F103C8T6 Microcontroller",
      category: "Integrated Circuits (ICs)",
      manufacturer: "STMicroelectronics",
      specs: "72MHz ARM Cortex-M3, 64KB Flash, 20KB RAM, Bluepill layout",
      image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      name: "IRFZ44N Power MOSFET",
      category: "Semiconductors",
      manufacturer: "Vishay",
      specs: "N-Channel, 55V, 49A, TO-220 Package, low Rds(on)",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      name: "LM7805 Voltage Regulator",
      category: "Power & Protection",
      manufacturer: "Texas Instruments",
      specs: "+5V Fixed Output, 1.5A, TO-220 Package, thermal overload protection",
      image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=400&h=300&q=80",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 2: HERO BANNER */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-brand-bg overflow-hidden border-b border-brand-border/40">
        {/* Background Gradients & Dot Matrix */}
        <div className="absolute inset-0 bg-dot-grid opacity-60 z-0" />
        <div className="absolute inset-0 bg-circuit-overlay opacity-30 z-0 animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-cyan/5 to-transparent blur-[100px] pointer-events-none" />
        
        {/* Glow grid accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            
            {/* Tech Tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-xs text-brand-cyan font-mono font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
              B2B Component Procurement Desk
            </motion.div>

            {/* Main H1 Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-brand-text leading-[1.1] glow-cyan"
            >
              Industrial Electronics & <br />
              <span className="text-brand-cyan">Semiconductor Solutions</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-sans text-brand-muted max-w-3xl leading-relaxed"
            >
              Supplying precision components to engineers, OEM buyers, and industrial teams worldwide. From passive components to advanced ICs — sourced, verified, and delivered.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-cyan hover:bg-brand-cyan-dark text-brand-bg font-sans font-bold text-sm transition-all duration-300 hover:shadow-glow-cyan group"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/rfq"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent hover:bg-brand-card/50 border border-brand-border hover:border-brand-cyan/60 text-brand-text font-sans font-semibold text-sm transition-all duration-300"
              >
                <UploadCloud className="mr-2 h-4 w-4 shrink-0 text-brand-cyan" />
                Upload BOM & Get Quote
              </Link>
            </motion.div>

            {/* Stats Row Container */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full pt-8"
            >
              <StatsRow />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRIES WE SERVE */}
      <section className="py-20 md:py-28 bg-[#050811] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Industries We Serve"
            subtitle="Powering electronics across the world's most critical sectors with high-reliability parts."
          />
          {/* Static visible 4-column grid (desktop), no hidden sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {industries.map((ind, idx) => (
              <IndustryCard
                key={ind.name}
                name={ind.name}
                description={ind.description}
                imageSeed={ind.imageSeed}
                href={ind.href}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT CATEGORIES */}
      <section className="py-20 md:py-28 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Product Categories"
            subtitle="A comprehensive range of electronic components for every engineering and industrial application."
          />
          {/* 5-column grid (desktop), 2-column (tablet), 1-column (mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
            {productCategories.map((cat, idx) => (
              <ProductCategoryCard
                key={cat.name}
                name={cat.name}
                description={cat.description}
                iconName={cat.iconName}
                href={cat.href}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED PRODUCTS */}
      <section className="py-20 md:py-28 bg-[#050811] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured Products"
            subtitle="Popular parts, microcontrollers, MOSFETs and regulators trusted by engineers and ready for shipping."
          />
          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((prod, idx) => (
              <FeaturedProductCard
                key={prod.name}
                product={prod}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TRUST STRIP */}
      <TrustStrip />

      {/* SECTION 7: CTA BANNER */}
      <CTABanner />
    </div>
  );
}
