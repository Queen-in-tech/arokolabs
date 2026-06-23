import type { Metadata } from "next";
import HomepageClient from "./HomepageClient";

export const metadata: Metadata = {
  title: "Àrokò Labs — AI Operations Partner",
  description: "We replace manual business workflows with AI-driven systems that execute work automatically. Lead routing, invoice automation, reporting agents, and more.",
  alternates: { canonical: "https://arokolabs.com/" },
  openGraph: {
    url: "https://arokolabs.com/",
    title: "Àrokò Labs — AI Operations Partner",
    description: "We run your business operations using AI systems.",
  },
};

export default function Home() {
  return <HomepageClient />;
}
