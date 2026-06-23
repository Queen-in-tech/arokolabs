"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Zap, Bot, Link2, BarChart3, Globe, Code } from "lucide-react";

const sections = [
  { icon: Globe, title: "Website & Web App Development", desc: "We design and build modern, high-performance websites and web applications tailored to your business goals.", features: ["Business & corporate websites", "Web applications & portals", "E-commerce platforms", "Landing pages & conversion funnels"], flow: ["Discovery & strategy", "UI/UX design", "Development & testing", "Launch & optimization"] },
  { icon: Code, title: "Custom Software Development", desc: "Bespoke software solutions built to solve specific business challenges and integrate with your existing systems.", features: ["Internal business tools", "Customer-facing platforms", "SaaS product development", "Legacy system modernization"] },
  { icon: Zap, title: "AI Workflow Automation", desc: "We design and deploy automated workflows that handle complex business processes end-to-end.", features: ["Process mapping & optimization", "Trigger-based automation", "Multi-step workflow orchestration", "Error handling & monitoring"], flow: ["Customer submits form", "AI analyzes request", "CRM updates automatically", "Team notified instantly"] },
  { icon: Bot, title: "AI Assistants", desc: "Intelligent assistants that understand context, learn from interactions, and deliver accurate responses.", features: ["Customer service AI", "Internal knowledge assistants", "Company-specific AI agents", "Multi-channel deployment"] },
  { icon: Link2, title: "System Integrations", desc: "Connect your existing tools into a unified ecosystem that shares data and triggers actions automatically.", features: ["CRM integrations", "ERP integrations", "Database automation", "API integrations"] },
  { icon: BarChart3, title: "Data Intelligence", desc: "Transform raw data into actionable insights with automated reporting and predictive analytics.", features: ["Automated dashboards", "Scheduled reports", "Predictive insights", "Real-time analytics"] },
];

export default function SolutionsClient() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="wrap relative py-20 text-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block font-display text-xs font-semibold uppercase tracking-widest text-primary">Solutions</span>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Efficient Automation for <span className="text-gradient-gold">Every Challenge</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
              From workflow automation to intelligent assistants, we build measurable systems that transform how your organization operates.
            </p>
          </motion.div>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.title} className={`border-b border-border ${i % 2 === 0 ? "" : "bg-card"}`}>
          <div className="wrap py-16 md:py-24 p-2 md:px-12">
            <div className="grid items-start gap-12 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <section.icon className="text-primary" size={24} />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">{section.title}</h2>
                <p className="mt-3 font-body text-base text-muted-foreground">{section.desc}</p>
                <ul className="mt-6 space-y-3">
                  {section.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />{f}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                {section.flow ? (
                  <div className="rounded-xl border border-border bg-secondary/30 p-6">
                    <h4 className="mb-4 font-display text-sm font-semibold text-muted-foreground">Example Flow</h4>
                    <div className="space-y-3">
                      {section.flow.map((step, j) => (
                        <div key={step} className="flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-xs font-bold text-primary">{j + 1}</span>
                          <span className="font-body text-sm text-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-border bg-secondary/30 p-6">
                    <div className="grid grid-cols-2 gap-3">
                      {section.features.map((f) => (
                        <div key={f} className="rounded-lg border border-border bg-background/50 px-4 py-3 font-body text-xs text-muted-foreground">{f}</div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 text-center">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Ready to Automate?</h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-muted-foreground">Book a strategy call and let's design the right automation system for your business.</p>
          <Link href="/contact"><Button variant="hero" size="lg" className="mt-8">Book a 15-Min Efficiency Audit <ArrowRight className="ml-1" size={18} /></Button></Link>
        </div>
      </section>
    </Layout>
  );
}
