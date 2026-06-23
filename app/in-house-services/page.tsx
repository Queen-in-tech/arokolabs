import type { Metadata } from "next";
import InHouseServicesClient from "./InHouseServicesClient";
export const metadata: Metadata = {
  title: "In-House AI Services — Embedded Teams & Training",
  description: "Embed our AI experts into your team. Get dedicated support, training, and ongoing optimization for your automation systems.",
  alternates: { canonical: "https://arokolabs.com/in-house-services" },
};
export default function InHouseServices() { return <InHouseServicesClient />; }
