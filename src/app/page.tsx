import type { Metadata } from "next";
import HomeClient from "./page-client";

export const metadata: Metadata = {
  title: "B2B Electronic Components & Semiconductors",
  description: "Sourcing verified electronic components and custom PCB assembly for critical industries worldwide. Get a custom quote in 24 hours.",
};

export default function Home() {
  return <HomeClient />;
}
