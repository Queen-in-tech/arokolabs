"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  { slug: "processes-to-automate", title: "5 Processes Every Business Should Automate", excerpt: "From lead capture to invoice processing, these are the automation quick wins that deliver immediate ROI.", category: "Automation Strategy", date: "March 2026", readTime: "5 min read" },
  { slug: "ai-government-services", title: "How AI Will Transform Government Services", excerpt: "Exploring how intelligent systems can improve public service delivery, reduce wait times, and enhance citizen engagement.", category: "Digital Governance", date: "February 2026", readTime: "7 min read" },
  { slug: "automation-vs-ai", title: "Automation vs. AI: What Your Business Actually Needs", excerpt: "Understanding the difference between rule-based automation and AI-powered systems, and when to use each.", category: "AI in Business", date: "January 2026", readTime: "6 min read" },
  { slug: "roi-of-automation", title: "Calculating the ROI of Business Automation", excerpt: "A practical framework for measuring the return on investment of automation projects in your organization.", category: "Process Optimization", date: "December 2025", readTime: "8 min read" },
];

export default function InsightsClient() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="wrap relative py-20 text-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block font-display text-xs font-semibold uppercase tracking-widest text-primary">Insights</span>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Thinking About <span className="text-gradient-gold">Automation</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">Strategies, perspectives, and practical guidance on AI automation for business.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post, i) => (
              <motion.article key={post.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group flex flex-col rounded-xl border border-border bg-gradient-card p-6 shadow-card transition-all hover:border-primary/30">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-display text-xs font-semibold text-primary">{post.category}</span>
                  <span className="flex items-center gap-1 font-body text-xs text-muted-foreground"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h2 className="mb-2 font-display text-xl font-semibold text-foreground">{post.title}</h2>
                <p className="flex-1 font-body text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                  <span className="inline-flex items-center font-display text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">Read more <ArrowRight className="ml-1" size={14} /></span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-20 text-center">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground">Want Automation Insights?</h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-muted-foreground">Start with a free automation audit to discover opportunities in your business.</p>
          <Link href="/contact"><Button variant="hero" size="lg" className="mt-8">Book a 15-Min Efficiency Audit <ArrowRight className="ml-1" size={18} /></Button></Link>
        </div>
      </section>
    </Layout>
  );
}
