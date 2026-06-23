import type { Metadata } from "next";
import TermsClient from "./TermsClient";
export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Àrokò Labs terms of service.",
  robots: { index: false, follow: false },
};
export default function Terms() { return <TermsClient />; }
