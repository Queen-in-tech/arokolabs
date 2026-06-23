"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const studies = [
  { id: "logistics-support", industry: "Logistics", title: "70% Reduction in Support Tickets", problem: "A logistics company's support team was overwhelmed by manual shipment tracking requests from customers, consuming hours of agent time daily.", design: "Designed an AI automation system integrated with WhatsApp and the company's internal tracking platform to provide real-time shipment updates.", automation: "WhatsApp chatbot deployed with natural language understanding, connected to the shipment database via API. Automated status updates sent proactively at key milestones.", outcome: "Support tickets reduced by 70%. Customer satisfaction scores improved by 45%. Support team reallocated to high-value tasks." },
  { id: "ecommerce-support", industry: "E-commerce", title: "60% Reduction in Support Workload", problem: "High volume of repetitive customer queries about orders, returns, and product information was overwhelming the support team during peak seasons.", design: "Built an AI-powered customer support system with intelligent routing that handles routine queries and escalates complex issues to human agents.", automation: "AI assistant trained on product catalog, order management system, and return policies. Integrated with CRM for personalized responses.", outcome: "Support workload reduced by 60%. Average response time dropped from 4 hours to under 2 minutes for automated queries." },
  { id: "finance-leads", industry: "Financial Services", title: "3x Faster Lead Response Time", problem: "Leads from multiple channels were being manually sorted, qualified, and assigned, resulting in delayed follow-ups and lost opportunities.", design: "Created an automated lead qualification and routing system that scores leads based on criteria and instantly assigns them to the right team member.", automation: "Multi-channel lead capture feeding into an AI scoring engine. High-value leads trigger immediate notifications and calendar booking links.", outcome: "Lead response time reduced from hours to minutes. Conversion rate improved by 35%. Sales team focused on qualified opportunities only." },
];

export default function CaseStudiesClient() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="wrap relative py-20 text-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block font-display text-xs font-semibold uppercase tracking-widest text-primary">Case Studies</span>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Real Results from <span className="text-gradient-gold">Real Automation</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-2 md:px-12">
        <div className="wrap space-y-16">
          {studies.map((study, i) => (
            <motion.div key={study.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card md:p-12">
              <span className="mb-2 inline-block font-display text-xs font-semibold uppercase tracking-wider text-primary">{study.industry}</span>
              <h2 className="mb-8 font-display text-2xl font-bold text-foreground md:text-3xl">{study.title}</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div><h4 className="mb-2 font-display text-sm font-semibold text-primary">Problem</h4><p className="font-body text-sm text-muted-foreground">{study.problem}</p></div>
                <div><h4 className="mb-2 font-display text-sm font-semibold text-primary">System Design</h4><p className="font-body text-sm text-muted-foreground">{study.design}</p></div>
                <div><h4 className="mb-2 font-display text-sm font-semibold text-primary">Automation Deployed</h4><p className="font-body text-sm text-muted-foreground">{study.automation}</p></div>
                <div><h4 className="mb-2 font-display text-sm font-semibold text-primary">Outcome</h4><p className="font-body text-sm text-muted-foreground">{study.outcome}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card py-20 text-center">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground">Want Similar Results?</h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-muted-foreground">Let's discuss how automation can transform your operations.</p>
          <Link href="/contact"><Button variant="hero" size="lg" className="mt-8">Book a 15-Min Efficiency Audit <ArrowRight className="ml-1" size={18} /></Button></Link>
        </div>
      </section>
    </Layout>
  );
}
