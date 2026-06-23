import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";
export const metadata: Metadata = {
  title: "Insights — AI Automation Blog & Resources",
  description: "Read our latest articles on AI automation, business efficiency, and intelligent systems.",
  alternates: { canonical: "https://arokolabs.com/insights" },
};
export default function Insights() { return <InsightsClient />; }
