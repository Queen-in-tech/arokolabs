import type { Metadata } from "next";
import AboutClient from "./AboutClient";
export const metadata: Metadata = {
  title: "About Àrokò Labs — Our Story & Mission",
  description: "Learn about Àrokò Labs, our mission to democratize AI automation, and the team building intelligent systems for businesses worldwide.",
  alternates: { canonical: "https://arokolabs.com/about" },
};
export default function About() { return <AboutClient />; }
