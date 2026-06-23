"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

export default function AboutClient() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="wrap relative py-20 text-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block font-display text-xs font-semibold uppercase tracking-widest text-primary">About</span>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              The Story Behind <span className="text-gradient-gold">Àrokò Labs</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground">The Meaning of Àrokò</h2>
              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
                <p><span className="text-foreground font-medium">Àrokò</span> historically referred to symbolic communication systems in Yoruba culture, encoded objects and signs that carried complex messages between communities without written language.</p>
                <p>Àrokò Labs carries this legacy forward. We build modern intelligent systems that allow organizations and machines to communicate and operate automatically, translating complex business logic into seamless automated workflows.</p>
                <p>Just as the original Àrokò encoded meaning into physical symbols, we encode business intelligence into systems that run themselves.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-16 md:py-24">
        <div className="wrap text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
              To build intelligent systems that empower organizations and governments to operate at their highest potential, eliminating inefficiency, unlocking data, and scaling impact through automation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground">Founder</h2>
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                <span className="font-display text-3xl font-bold text-primary">À</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Founder & Lead Systems Architect</h3>
              <p className="mt-4 font-body text-base text-muted-foreground">
                With deep expertise in automation engineering, AI systems, and process optimization, the founder built Àrokò Labs to help organizations leverage intelligent systems to achieve operational excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground">Let's Build Together</h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-muted-foreground">Ready to transform your operations with intelligent automation?</p>
          <Link href="/contact"><Button variant="hero" size="lg" className="mt-8">Book a 15-Min Efficiency Audit <ArrowRight className="ml-1" size={18} /></Button></Link>
        </div>
      </section>
    </Layout>
  );
}
