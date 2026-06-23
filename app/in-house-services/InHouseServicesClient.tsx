"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Users, BookOpen, Wrench, Headphones } from "lucide-react";

const services = [
  { icon: Users, title: "Embedded AI Team", desc: "Place our automation engineers directly within your team on a retainer basis. We become your in-house AI capability without the overhead of full-time hires." },
  { icon: BookOpen, title: "Automation Training", desc: "Upskill your existing team on workflow automation tools, AI concepts, and process optimization frameworks." },
  { icon: Wrench, title: "Ongoing System Optimization", desc: "Monthly audits and refinements of your deployed automation systems to ensure they're performing optimally as your business evolves." },
  { icon: Headphones, title: "Priority Support", desc: "Dedicated support channel with guaranteed response times for mission-critical automation systems." },
];

const plans = [
  { name: "Starter", price: "₦150k", period: "/month", desc: "For small businesses getting started with automation.", features: ["5 hours/month support", "Quarterly system audit", "Slack/WhatsApp access", "1 automation system"] },
  { name: "Growth", price: "₦350k", period: "/month", desc: "For growing teams with active automation needs.", features: ["15 hours/month support", "Monthly system audit", "Priority response time", "Up to 3 automation systems", "Team training session (quarterly)"], featured: true },
  { name: "Enterprise", price: "Custom", period: "", desc: "For organizations needing dedicated AI capability.", features: ["Dedicated engineer allocation", "Weekly check-ins", "Unlimited systems", "Custom SLA", "Executive reporting"] },
];

export default function InHouseServicesClient() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="wrap relative py-20 text-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block font-display text-xs font-semibold uppercase tracking-widest text-primary">In-House Services</span>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Your Embedded <span className="text-gradient-gold">AI Team</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
              Get ongoing AI and automation expertise embedded into your operations — without the cost of full-time hires.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24 px-2 md:px-12">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-xl border border-border bg-gradient-card p-6 shadow-card">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="text-primary" size={22} />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-2 md:px-12">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">Retainer Plans</h2>
            <p className="mt-3 font-body text-muted-foreground">Flexible plans that scale with your needs.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`flex flex-col rounded-2xl border p-8 ${plan.featured ? "border-primary bg-primary/5 shadow-gold" : "border-border bg-gradient-card shadow-card"}`}>
                {plan.featured && <span className="mb-3 inline-block w-fit rounded-full bg-primary/20 px-3 py-1 font-display text-xs font-semibold text-primary">Most Popular</span>}
                <h3 className="font-display text-xl font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="font-display text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="mb-1 font-body text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 font-body text-sm text-muted-foreground">{plan.desc}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-8">
                  <Button variant={plan.featured ? "hero" : "hero-outline"} className="w-full">Get Started <ArrowRight className="ml-1" size={16} /></Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
