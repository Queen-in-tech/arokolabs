"use client";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function TermsClient() {
  return (
    <Layout>
      <section className="wrap py-20 md:py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-display text-4xl font-bold text-foreground">Terms of Service</h1>
          <div className="space-y-8 font-body text-muted-foreground">
            {[
              { title: "Acceptance of Terms", body: "By accessing and using arokolabs.com, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use this website." },
              { title: "Services", body: "Àrokò Labs provides AI automation consulting, software development, and related services. Specific service terms are outlined in individual client agreements." },
              { title: "Intellectual Property", body: "All content on this website, including text, graphics, and code, is the property of Àrokò Labs and protected by applicable intellectual property laws." },
              { title: "Limitation of Liability", body: "Àrokò Labs shall not be liable for any indirect, incidental, or consequential damages arising from use of this website or our services beyond what is explicitly agreed in writing." },
              { title: "Governing Law", body: "These terms are governed by the laws of the Federal Republic of Nigeria." },
              { title: "Contact", body: "For questions about these terms, contact us at info@arokolabs.com." },
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
