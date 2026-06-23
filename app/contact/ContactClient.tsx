"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Mail, Clock, MessageSquare, CheckCircle } from "lucide-react";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", challenge: "", budget: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="wrap relative py-20 text-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block font-display text-xs font-semibold uppercase tracking-widest text-primary">Contact</span>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Book a Free <span className="text-gradient-gold">Efficiency Audit</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
              Tell us about your challenges. We'll map out an automation strategy in a 15-minute call — no commitment required.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Info */}
            <div className="space-y-8">
              {[
                { icon: Clock, title: "15-Minute Audit", desc: "A focused call to understand your current workflows and identify automation opportunities." },
                { icon: MessageSquare, title: "No Sales Pressure", desc: "We'll share honest recommendations whether or not we work together." },
                { icon: Mail, title: "Direct Contact", desc: "info@arokolabs.com" },
              ].map((item) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-12 text-center">
                  <CheckCircle className="mb-4 text-primary" size={48} />
                  <h2 className="font-display text-2xl font-bold text-foreground">We've received your message!</h2>
                  <p className="mt-3 font-body text-muted-foreground">We'll be in touch within 24 hours to schedule your audit.</p>
                </motion.div>
              ) : (
                <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-5 rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {[
                      { key: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                      { key: "email", label: "Email", placeholder: "you@company.com", type: "email" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="mb-1.5 block font-display text-sm font-medium text-foreground">{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="mb-1.5 block font-display text-sm font-medium text-foreground">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-display text-sm font-medium text-foreground">What's your biggest operational challenge?</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe the manual processes or inefficiencies you'd like to solve..."
                      value={form.challenge}
                      onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-display text-sm font-medium text-foreground">Estimated Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select a range...</option>
                      <option>Under ₦500k</option>
                      <option>₦500k – ₦1.5M</option>
                      <option>₦1.5M – ₦5M</option>
                      <option>₦5M+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Book My Free Audit"}
                  </Button>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
