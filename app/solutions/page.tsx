import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";
export const metadata: Metadata = {
  title: "Solutions — AI Automation, Web Development & More",
  description: "Explore our AI workflow automation, web development, custom software, AI assistants, and system integration solutions.",
  alternates: { canonical: "https://arokolabs.com/solutions" },
};
export default function Solutions() { return <SolutionsClient />; }
