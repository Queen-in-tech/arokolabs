import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Àrokò Labs privacy policy.",
  robots: { index: false, follow: false },
};
export default function Privacy() { return <PrivacyClient />; }
