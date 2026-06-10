"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Layers, Cpu, Radio, Shield, Wrench, Eye, Database, Power, Cable, Hammer } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";

export default function ProductsClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "passive-components",
      name: "Passive Components",
      products: "Capacitors, resistors, inductors, filters, crystals, oscillators and transformers.",
      applications: "Power filtering, circuit timing, frequency tuning, noise suppression.",
      subcategories: ["Ceramic/Electrolytic Capacitors", "SMD & Power Resistors", "RF & Power Inductors", "Crystals & Oscillators", "Transformers"],
      icon: Layers,
    },
    {
      id: "semiconductors",
      name: "Semiconductors",
      products: "Diodes, transistors, MOSFETs, IGBTs, thyristors, rectifiers and protection devices.",
      applications: "Power conversion, solid-state switching, circuit protection, motor driving.",
      subcategories: ["Power MOSFETs & IGBTs", "Schottky & Zener Diodes", "Bridge Rectifiers", "BJTs & Thyristors", "TVS Protection Diodes"],
      icon: Power,
    },
    {
      id: "integrated-circuits",
      name: "Integrated Circuits (ICs)",
      products: "Microcontrollers, logic ICs, operational amplifiers, interface chips, PMICs and data converters.",
      applications: "Embedded system computation, sensor signal amplification, serial data interface.",
      subcategories: ["ARM / AVR / PIC MCUs", "FPGAs & CPLDs", "ADC & DAC Converters", "PMIC Regulators", "RS485 / CAN / USB Interfaces"],
      icon: Cpu,
    },
    {
      id: "rf-wireless",
      name: "RF & Wireless Communication",
      products: "RF transmitters, WiFi, Bluetooth, LoRa, Zigbee, GSM, 4G and 5G communication modules.",
      applications: "IoT remote sensing, smart home networks, wireless data links, cellular communication.",
      subcategories: ["WiFi & BLE SoC Modules", "LoRa & Zigbee Transceivers", "Cellular NB-IoT Modules", "RF Amplifiers", "Antennas & RF Connectors"],
      icon: Radio,
    },
    {
      id: "sensors-memory",
      name: "Sensors & Memory",
      products: "Digital/analog sensors, memory ICs and signal isolators for industrial systems.",
      applications: "Physical variable sensing, industrial data logging, flash firmware storage.",
      subcategories: ["Temperature & Humidity Sensors", "Pressure & Load Cells", "MEMS Motion & IMUs", "EEPROM / Flash / SRAM", "Opto-Isolators & Isolator ICs"],
      icon: Database,
    },
    {
      id: "electromechanical",
      name: "Electromechanical Components",
      products: "Connectors, terminals, switches, relays, buzzers, DC/servo motors and control units.",
      applications: "PCB board-to-board routing, heavy power relays, automation motor drivers.",
      subcategories: ["Terminal Blocks", "Board-to-Board & RF Connectors", "Tactile & Rotary Switches", "Electromagnetic & Solid-State Relays", "DC / Stepper / Servo Motors"],
      icon: Cable,
    },
    {
      id: "optoelectronics",
      name: "Optoelectronics & Displays",
      products: "LEDs, LCD panels, OLEDs, TFT displays, display driver modules and optical couplers.",
      applications: "Industrial UI screen displays, status indication LEDs, optical distance sensing.",
      subcategories: ["Alphanumeric LCD Modules", "IPS TFT & OLED Displays", "LED Matrix Panels", "Infrared & Ambient Light Sensors", "Laser Diodes"],
      icon: Eye,
    },
    {
      id: "development-boards",
      name: "Development Boards & Modules",
      products: "Evaluation kits, micro-controller boards, FPGA kits and system-on-modules (SoM).",
      applications: "Rapid engineering prototyping, firmware verification, hardware design validation.",
      subcategories: ["Arduino & Raspberry Pi Kits", "STM32 / ESP32 Boards", "FPGA Development Toolkits", "Camera & Audio Modules", "Sensor Shield Expanders"],
      icon: Hammer,
    },
    {
      id: "power-protection",
      name: "Power & Protection",
      products: "DC-DC converters, linear LDO regulators, battery management modules, fuses and surge devices.",
      applications: "Voltage regulation, battery balancing, overcurrent fuse protection.",
      subcategories: ["DC-DC Buck & Boost Converters", "Low-Dropout (LDO) Regulators", "BMS Boards", "Resettable PTC Fuses", "Surge Protectors & TVS Arrays"],
      icon: Shield,
    },
    {
      id: "tools-instruments",
      name: "Tools & Instruments",
      products: "Oscilloscopes, digital multimeters, soldering stations, hand tools and test equipment.",
      applications: "PCB repair lab tools, electronics prototyping diagnostic checks.",
      subcategories: ["Benchtop Oscilloscopes", "Digital Multimeters", "Soldering & Desoldering Stations", "Component Testers", "ESD Protection Consumables"],
      icon: Wrench,
    },
  ];

  // Filter categories based on search input
  const filteredCategories = categories.filter((cat) => {
    const query = searchQuery.toLowerCase();
    return (
      cat.name.toLowerCase().includes(query) ||
      cat.products.toLowerCase().includes(query) ||
      cat.subcategories.some((sub) => sub.toLowerCase().includes(query))
    );
  });

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Electronic Component Categories"
        subtitle="Supplying precision components across 10 specialized categories for industrial, automotive, and OEM clients."
        breadcrumbs={[{ name: "Products", href: "/products" }]}
      />

      {/* Search & Listing Section */}
      <section className="py-16 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Real-time search bar */}
          <div className="max-w-xl mx-auto mb-16 relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-muted" />
              <input
                type="text"
                placeholder="Search categories, products (e.g. MOSFETs, ESP32, Capacitors)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-brand-card/50 border border-brand-border/60 hover:border-brand-border focus:border-brand-cyan text-sm text-brand-text placeholder-brand-muted transition-colors focus:outline-none shadow-lg"
              />
            </div>
            {searchQuery && (
              <p className="text-xs text-brand-muted mt-3 text-center">
                Found {filteredCategories.length} matching categories
              </p>
            )}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredCategories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <motion.div
                    key={cat.id}
                    id={cat.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="scroll-mt-28 flex flex-col justify-between bg-brand-card/35 border border-brand-border/60 hover:border-brand-cyan/40 rounded-3xl p-6 md:p-8 hover:bg-brand-card/50 transition-all duration-300"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-cyan shadow-sm">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand-text">
                          {cat.name}
                        </h2>
                      </div>

                      {/* Detail Fields */}
                      <div className="space-y-4">
                        <div>
                          <span className="text-xs font-display font-bold uppercase tracking-wider text-brand-cyan block mb-1">
                            Component Technologies
                          </span>
                          <p className="text-sm font-sans text-brand-text/90 leading-relaxed">
                            {cat.products}
                          </p>
                        </div>

                        <div>
                          <span className="text-xs font-display font-bold uppercase tracking-wider text-brand-cyan block mb-1">
                            Common Applications
                          </span>
                          <p className="text-sm font-sans text-brand-muted leading-relaxed">
                            {cat.applications}
                          </p>
                        </div>

                        <div>
                          <span className="text-xs font-display font-bold uppercase tracking-wider text-brand-cyan block mb-2">
                            Product Subcategories
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {cat.subcategories.map((sub) => (
                              <span
                                key={sub}
                                className="text-xs font-sans font-medium px-2.5 py-1 bg-brand-surface/75 border border-brand-border/60 text-brand-muted rounded-lg"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="pt-6 mt-8 border-t border-brand-border/40">
                      <Link
                        href={`/rfq?category=${encodeURIComponent(cat.name)}`}
                        className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-brand-surface hover:bg-brand-cyan text-brand-cyan hover:text-brand-bg border border-brand-border hover:border-brand-cyan font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300"
                      >
                        Request Quote for this category
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredCategories.length === 0 && (
              <div className="col-span-full py-16 text-center">
                <p className="text-brand-muted text-sm font-sans">
                  No component categories found matching &quot;{searchQuery}&quot;.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      <CTABanner />
    </div>
  );
}
