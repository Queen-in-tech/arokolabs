import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";
export const metadata: Metadata = {
  title: "Case Studies — Real Results from AI Automation",
  description: "See how our AI automation solutions have transformed operations, cut costs, and scaled businesses across industries.",
  alternates: { canonical: "https://arokolabs.com/case-studies" },
};
export default function CaseStudies() { return <CaseStudiesClient />; }
