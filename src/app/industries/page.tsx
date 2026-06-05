import type { Metadata } from "next";
import IndustriesClient from "./industries-client";

export const metadata: Metadata = {
  title: "Industries Served",
  description: "Supplying high-reliability electronic components across key global sectors including Industrial Automation, EV Automotive, Medical Electronics, IoT, Telecom, and Renewable Energy.",
};

export default function Industries() {
  return <IndustriesClient />;
}
