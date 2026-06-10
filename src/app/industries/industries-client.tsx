"use client";

import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";

export default function IndustriesClient() {
  const industriesDetail = [
    {
      id: "industrial-automation",
      name: "Industrial Automation",
      overview:
        "Electronics for factories, PLC systems, robotics, machine control, smart manufacturing, monitoring, and automation panels. High durability and tolerance for extreme thermal environments.",
      applications: ["PLC systems", "Robotics & motor control", "Smart manufacturing sensors", "Industrial monitoring"],
      products: ["MCUs", "Relays & SSRs", "Industrial sensors", "Heavy-duty connectors", "Power ICs", "Optocoupler isolators", "RS485/CAN transceiver modules"],
      image: "/industries/Industrial-Automation.jpeg",
    },
    {
      id: "automotive-electronics",
      name: "Automotive Electronics",
      overview:
        "High-performance components certified for electric vehicles, automotive ECU modules, battery management systems (BMS), infotainment, ADAS, and advanced vehicle safety electronics.",
      applications: ["EV powertrain systems", "ECU modules", "Battery Management (BMS)", "ADAS & infotainment electronics", "Automotive lighting"],
      products: ["Automotive grade MOSFETs", "PMICs", "AEC-Q microcontrollers", "Engine sensors", "CAN transceiver chips", "Automotive connectors"],
      image: "/industries/Automotive-Electronics.jpeg",
    },
    {
      id: "consumer-electronics",
      name: "Consumer Electronics",
      overview:
        "Sleek and power-efficient semiconductor solutions for modern smart devices, home appliances, wearable technology, audio devices, and portable lifestyle electronics.",
      applications: ["Smart watches & wearables", "Audio systems & speakers", "Smart home appliances", "Portable electronics"],
      products: ["MLCC capacitors", "Biometric sensors", "Bluetooth SoC modules", "LCD/OLED driver ICs", "Ultra-low power MCU", "USB-C interface ICs"],
      image: "/industries/Consumer-Electronics.jpeg",
    },
    {
      id: "iot-smart-devices",
      name: "IoT & Smart Devices",
      overview:
        "Low-power wireless and embedded solutions designed for connected home devices, smart cities, logistics, asset tracking, and remote sensing applications.",
      applications: ["Smart home hubs", "Smart street lighting", "Supply chain tracking", "Remote environmental monitoring"],
      products: ["WiFi modules", "BLE transceivers", "LoRa modules", "Air quality & temperature sensors", "Patch antennas", "Energy harvesting PMUs"],
      image: "/industries/IoT-&-Smart-Devices.jpeg",
    },
    {
      id: "medical-electronics",
      name: "Medical Electronics",
      overview:
        "High-reliability components designed and manufactured for healthcare diagnostics, patient vital monitors, clinical imaging systems, and wearable therapeutic equipment.",
      applications: ["Patient vital monitors", "Diagnostics & lab equipment", "Imaging machinery controls", "Wearable health trackers"],
      products: ["Galvanic isolation ICs", "Precision instrumentation amplifiers", "Pressure & temp sensors", "Ultra-low power PMICs", "A/D Converters (ADC)"],
      image: "/industries/Medical-Electronics.jpeg",
    },
    {
      id: "renewable-energy",
      name: "Renewable Energy",
      overview:
        "Power electronics engineered for solar PV inverters, lithium battery energy storage systems (BESS), smart grid integration, and heavy electric vehicle charging points.",
      applications: ["Solar PV micro-inverters", "Battery energy storage (BESS)", "EV charging stations", "Smart power grid meters"],
      products: ["High-voltage MOSFETs", "IGBT power modules", "Aluminium electrolytic capacitors", "Grid-tie relays", "PWM controllers", "Surge arresters"],
      image: "/industries/Renewable-Energy.jpeg",
    },
    {
      id: "telecom-networking",
      name: "Telecom & Networking",
      overview:
        "High-frequency RF, microwave, and communication electronics backing 5G wireless stations, high-bandwidth routers, enterprise switches, and remote infrastructure.",
      applications: ["5G macro base stations", "Fiber routers & modems", "Enterprise core switches", "Satellite communications"],
      products: ["RF transceiver modules", "Low phase-noise oscillators", "RJ45 & RF connectors", "Ethernet physical layer ICs", "Network processors"],
      image: "/industries/Telecom-&-Networking.jpeg",
    },
    {
      id: "robotics-embedded-systems",
      name: "Robotics & Embedded Systems",
      overview:
        "Comprehensive control electronics powering robotic actuators, autonomous vehicle controllers, smart industrial grippers, and rapid product development modules.",
      applications: ["Robotic arms & joints", "Autonomous mobile robots (AMR)", "Embedded control systems", "Custom test automation rigs"],
      products: ["ARM Cortex development boards", "IMUs & gyroscopes", "H-bridge motor drivers", "Precision encoders", "CAN-bus communication modules"],
      image: "/industries/Robotics-&-Embedded-Systems.jpeg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Industries We Serve"
        subtitle="Powering innovation across industrial, automotive and advanced technology sectors."
        breadcrumbs={[{ name: "Industries", href: "/industries" }]}
      />

      <section className="py-20 md:py-24 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industriesDetail.map((ind, idx) => (
              <motion.div
                key={ind.id}
                id={ind.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx % 2 * 0.1 }}
                className="scroll-mt-28 flex flex-col bg-brand-card/40 border border-brand-border/60 hover:border-brand-cyan/40 rounded-3xl overflow-hidden transition-all duration-300 shadow-lg"
              >
                {/* Industry Header Image */}
                <div className="relative h-64 w-full bg-brand-surface overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-60 hover:scale-105 transition-transform duration-500"
                    priority={idx < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-text mt-2">
                      {ind.name}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                  
                  {/* Overview Paragraph */}
                  <div className="space-y-4">
                    <p className="text-sm font-sans text-brand-muted leading-relaxed">
                      {ind.overview}
                    </p>
                    
                    {/* Main Applications tags */}
                    <div>
                      <span className="text-xs uppercase font-display font-bold tracking-wider text-brand-cyan block mb-2">Key Applications</span>
                      <div className="flex flex-wrap gap-2">
                        {ind.applications.map((app) => (
                          <span
                            key={app}
                            className="text-xs font-sans font-medium px-2.5 py-1 bg-brand-surface/75 border border-brand-border/60 rounded-lg text-brand-text/90"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Products */}
                    <div className="pt-2">
                      <span className="text-xs uppercase font-display font-bold tracking-wider text-brand-cyan block mb-2">Recommended Components</span>
                      <div className="grid grid-cols-2 gap-2 text-xs font-sans text-brand-muted">
                        {ind.products.map((prod) => (
                          <div key={prod} className="flex items-center gap-2">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                            <span className="truncate">{prod}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-brand-border/40">
                    <Link
                      href={`/products?industry=${ind.id}`}
                      className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-brand-surface hover:bg-brand-cyan/10 border border-brand-border hover:border-brand-cyan/45 text-brand-cyan font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300"
                    >
                      Explore Component Categories
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <CTABanner />
    </div>
  );
}
