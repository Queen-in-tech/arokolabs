"use client";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function PrivacyClient() {
  return (
    <Layout>
      <section className="wrap py-20 md:py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-display text-4xl font-bold text-foreground">Privacy Policy</h1>
          <div className="space-y-8 font-body text-muted-foreground">
            {[
              { title: "Information We Collect", body: "We collect information you provide directly, such as when you fill out our contact form. This includes your name, email address, company name, and details about your business needs." },
              { title: "How We Use Your Information", body: "We use the information collected to respond to your inquiries, provide our services, and send relevant communications. We do not sell your personal information to third parties." },
              { title: "Data Security", body: "We take data privacy and security seriously. All client data is encrypted in transit and at rest. We implement appropriate technical and organizational measures to protect your information." },
              { title: "Data Retention", body: "We retain your information for as long as necessary to provide our services or as required by law. You may request deletion of your data at any time." },
              { title: "Your Rights", body: "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@arokolabs.com." },
              { title: "Contact Us", body: "If you have questions about this policy, contact us at info@arokolabs.com." },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="mb-3 font-display text-xl font-semibold text-foreground">{section.title}</h2>
                <p className="text-sm leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
