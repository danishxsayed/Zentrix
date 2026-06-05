import type { Metadata } from "next";
import PcbAssemblyClient from "./pcb-assembly-client";

export const metadata: Metadata = {
  title: "Custom PCB Assembly & OEM Manufacturing",
  description: "Professional turnkey PCB assembly, prototype fabrication, SMT & THT, and OEM manufacturing services. 100% component sourcing verification and quality testing.",
};

export default function PcbAssembly() {
  return <PcbAssemblyClient />;
}
