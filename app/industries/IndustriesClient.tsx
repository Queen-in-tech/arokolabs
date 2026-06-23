"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Briefcase, Building2, Landmark, Heart, Truck, GraduationCap, ShoppingCart } from "lucide-react";

const industries = [
  { icon: Briefcase, name: "Businesses & SMEs", pain: "Growing businesses struggle with manual operations, scattered tools, and processes that don't scale.", solution: "Àrokò Labs builds custom websites, web apps, and automation systems that streamline operations, capture leads, and help businesses scale efficiently." },
  { icon: Building2, name: "Financial Services", pain: "Manual compliance checks and slow customer onboarding create bottlenecks.", solution: "Àrokò Labs automates KYC workflows, compliance reporting, and customer onboarding processes." },
  { icon: Landmark, name: "Government", pain: "Manual service delivery processes slow citizen response.", solution: "We build automated service workflows and AI assistants that improve service delivery and public engagement." },
  { icon: Heart, name: "Healthcare", pain: "Administrative overhead reduces time for patient care.", solution: "Automation of appointment scheduling, patient intake, records management, and reporting." },
  { icon: Truck, name: "Logistics", pain: "Manual tracking, routing, and communication overwhelm operations teams.", solution: "AI-powered tracking, automated customer updates, and intelligent route optimization." },
  { icon: GraduationCap, name: "Education", pain: "Enrollment, grading, and student communication are time-intensive.", solution: "Automated enrollment workflows, AI tutoring assistants, and intelligent student engagement systems." },
  { icon: ShoppingCart, name: "E-commerce", pain: "Order processing, customer queries, and inventory management consume resources.", solution: "End-to-end order automation, AI customer support, and inventory intelligence systems." },
];

export default function IndustriesClient() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="wrap relative py-20 text-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block font-display text-xs font-semibold uppercase tracking-widest text-primary">Industries</span>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Automation Across <span className="text-gradient-gold">Industries</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">Every industry has processes that can be automated. We build solutions tailored to your sector.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-2 md:px-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex flex-col rounded-xl border border-border bg-gradient-card p-6 shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <ind.icon className="text-primary" size={24} />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{ind.name}</h3>
                <p className="mb-3 font-body text-sm text-destructive/80"><span className="font-semibold">Challenge:</span> {ind.pain}</p>
                <p className="flex-1 font-body text-sm text-muted-foreground"><span className="font-semibold text-foreground">Solution:</span> {ind.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-20 text-center">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground">Don't See Your Industry?</h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-muted-foreground">We work across sectors. If you have processes, we can automate them.</p>
          <Link href="/contact"><Button variant="hero" size="lg" className="mt-8">Talk to Us <ArrowRight className="ml-1" size={18} /></Button></Link>
        </div>
      </section>
    </Layout>
  );
}
