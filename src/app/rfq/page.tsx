import type { Metadata } from "next";
import RfqClient from "./rfq-client";

export const metadata: Metadata = {
  title: "Request a Quote (RFQ) & BOM Upload",
  description: "Upload your bill of materials (BOM) or submit your component requirements. Our engineering team will review your requirements and provide a tailored quotation within 24 hours.",
};

export default function Rfq() {
  return <RfqClient />;
}
