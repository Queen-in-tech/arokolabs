import type { Metadata } from "next";
import ContactClient from "./ContactClient";
export const metadata: Metadata = {
  title: "Contact Us — Book an Efficiency Audit",
  description: "Get in touch with Àrokò Labs. Book a free efficiency audit and discover how AI automation can transform your business.",
  alternates: { canonical: "https://arokolabs.com/contact" },
};
export default function Contact() { return <ContactClient />; }
