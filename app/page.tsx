import type { Metadata } from "next";
import HomepageClient from "./HomepageClient";

export const metadata: Metadata = {
  title: "Àrokò Labs — AI Automation & Intelligent Systems",
  description: "We design AI-powered automation systems that eliminate repetitive work and help organizations scale faster.",
  alternates: { canonical: "https://arokolabs.com/" },
  openGraph: { url: "https://arokolabs.com/" },
};

export default function Home() {
  return <HomepageClient />;
}
