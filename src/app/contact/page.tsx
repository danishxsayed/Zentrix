import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Zentrix components procurement desk. Reach us via email, phone, or WhatsApp for parts sourcing, custom quotes, or partner opportunities.",
};

export default function Contact() {
  return <ContactClient />;
}
