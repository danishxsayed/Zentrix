import type { Metadata } from "next";
import RfqClient from "./rfq-client";

export const metadata: Metadata = {
  title: "Request a Quote (RFQ) & BOM Upload",
  description: "Submit your bill of materials (BOM) or parts inquiry list. Upload files in .xlsx, .csv, or .pdf format and receive a verified pricing quote within 24 hours.",
};

export default function Rfq() {
  return <RfqClient />;
}
