import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";
export const metadata: Metadata = {
  title: "Industries We Serve — AI Solutions by Sector",
  description: "We build AI automation solutions for businesses, finance, healthcare, logistics, education, retail, and government sectors.",
  alternates: { canonical: "https://arokolabs.com/industries" },
};
export default function Industries() { return <IndustriesClient />; }
