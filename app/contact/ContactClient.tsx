"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const WEBHOOK_URL = "https://n8n.arokolabs.com/webhook/e4ffc9f8-eb21-4f27-8ad7-11a3c772f744";

export default function ContactClient() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    challenge: [] as string[],
    engagement: "",
    package: "",
    timeline: "",
    context: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateChallenges = (value: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.challenge.includes(value);
      return {
        ...prev,
        challenge: alreadySelected
          ? prev.challenge.filter((c) => c !== value)
          : [...prev.challenge, value],
      };
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setIsSubmitted(true);
      toast.success("Your audit request has been submitted!");
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-lg border border-[--color-border] bg-[--color-background] px-4 py-3 font-body text-sm text-[--color-foreground] placeholder:text-[--color-muted-foreground] focus:border-[--color-primary] focus:outline-none focus:ring-1 focus:ring-[--color-primary]";
  const btnGold = "rounded-lg bg-gradient-gold px-6 py-3 font-display font-semibold text-[--color-primary-foreground] shadow-gold transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed";
  const btnOutline = "rounded-lg border border-[--color-primary] bg-[--color-background] px-6 py-3 font-display font-semibold text-[--color-primary] shadow-sm hover:bg-[--color-primary]/10 transition";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[--color-border]">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="wrap relative py-20 text-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block font-display text-xs font-semibold uppercase tracking-widest text-[--color-primary]">Contact</span>
            <h1 className="font-display text-4xl font-bold text-[--color-foreground] md:text-5xl lg:text-6xl">
              Book an Operations Review
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-[--color-muted-foreground]">
              Tell us about your business and the processes you'd like to automate. We'll analyse your operations and recommend the right approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="wrap">
          <div className="grid gap-12 md:grid-cols-3">

            {/* Left info */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-8">
              <div>
                <h3 className="mb-4 font-display text-xl font-semibold text-[--color-foreground]">Get in Touch</h3>
                <p className="font-body text-sm text-[--color-muted-foreground]">
                  Fill out the form and our team will reach out to schedule your free operations review.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "info@arokolabs.com" },
                  { icon: Phone, label: "Phone", value: "Scheduled calls only" },
                  { icon: MapPin, label: "Location", value: "Nigeria" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[--color-primary]/10">
                      <Icon className="text-[--color-primary]" size={18} />
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-[--color-foreground]">{label}</p>
                      <p className="font-body text-sm text-[--color-muted-foreground]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-[--color-border] bg-[--color-secondary]/30 p-5">
                <h4 className="mb-2 font-display text-sm font-semibold text-[--color-foreground]">What Happens Next?</h4>
                <ol className="space-y-2 font-body text-sm text-[--color-muted-foreground]">
                  <li className="flex gap-2"><span className="font-semibold text-[--color-primary]">1.</span> We review your submission</li>
                  <li className="flex gap-2"><span className="font-semibold text-[--color-primary]">2.</span> Schedule a discovery call</li>
                  <li className="flex gap-2"><span className="font-semibold text-[--color-primary]">3.</span> Deliver your automation audit</li>
                </ol>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="md:col-span-2">
              <div className="rounded-2xl border border-[--color-border] bg-[--color-card] p-8 shadow-card md:p-12">

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="mb-4 text-[--color-primary]" size={48} />
                    <h3 className="mb-2 font-display text-2xl font-bold text-[--color-foreground]">Request Received!</h3>
                    <p className="max-w-md font-body text-[--color-muted-foreground]">
                      Thank you, {formData.fullName}. Your request has been received. You can schedule your audit at a convenient time using the link below. If no time is booked, our team will contact you within 24 hours.{" "}
                      <a href="https://zcal.co/aroko/30min" target="_blank" rel="noopener noreferrer" className="font-medium text-[--color-primary] underline">
                        Schedule Call
                      </a>
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="mb-2 font-display text-2xl font-bold text-[--color-foreground]">Operations Review Request</h3>
                    <p className="mb-8 font-body text-sm text-[--color-muted-foreground]">
                      Complete this quick 3-step form. We'll recommend the right automation approach for your business.
                    </p>

                    {/* Step indicator */}
                    <div className="mb-8 flex gap-2">
                      {[1, 2, 3].map((s) => (
                        <div key={s} className={`h-1.5 flex-1 rounded-full transition-colors ${step >= s ? "bg-[--color-primary]" : "bg-[--color-border]"}`} />
                      ))}
                    </div>

                    {/* Step 1 */}
                    {step === 1 && (
                      <div className="space-y-5">
                        <div>
                          <label className="mb-1.5 block font-display text-xs font-semibold text-[--color-foreground]">Full Name</label>
                          <input type="text" placeholder="Your name" value={formData.fullName} onChange={(e) => updateField("fullName", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className="mb-1.5 block font-display text-xs font-semibold text-[--color-foreground]">Company Name</label>
                          <input type="text" placeholder="Your company" value={formData.companyName} onChange={(e) => updateField("companyName", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className="mb-1.5 block font-display text-xs font-semibold text-[--color-foreground]">Work Email</label>
                          <input type="email" placeholder="you@company.com" value={formData.workEmail} onChange={(e) => updateField("workEmail", e.target.value)} className={inputClass} />
                        </div>
                        <button onClick={() => setStep(2)} disabled={!formData.fullName || !formData.workEmail} className={`w-full ${btnGold}`}>
                          Next →
                        </button>
                      </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div>
                          <label className="mb-2 block font-display text-xs font-semibold text-[--color-foreground]">Primary Operational Challenge</label>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {[
                              "Manual Data Entry & Reporting",
                              "WhatsApp & Customer Support Volume",
                              "ERP & System Synchronization",
                              "Document Processing & Compliance",
                              "Business Process Automation",
                              "Civic Tech & Governance Solutions",
                              "Other",
                            ].map((option) => (
                              <label key={option} className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-[--color-border] bg-[--color-background] px-4 py-3 font-body text-sm text-[--color-foreground] transition-colors hover:border-[--color-primary]/50 has-[:checked]:border-[--color-primary] has-[:checked]:bg-[--color-primary]/5">
                                <input type="checkbox" value={option} checked={formData.challenge.includes(option)} onChange={() => updateChallenges(option)} className="accent-[--color-primary]" />
                                {option}
                              </label>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="mb-2 block font-display text-xs font-semibold text-[--color-foreground]">Engagement Model</label>
                          <div className="grid gap-2 sm:grid-cols-3">
                            {[
                              "Project-Based (Fixed Build)",
                              "In-House Contract (Embedded AI Architect)",
                              "Strategy & Efficiency Audit",
                            ].map((option) => (
                              <label key={option} className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-[--color-border] bg-[--color-background] px-4 py-3 font-body text-sm text-[--color-foreground] transition-colors hover:border-[--color-primary]/50 has-[:checked]:border-[--color-primary] has-[:checked]:bg-[--color-primary]/5">
                                <input type="radio" name="engagement" value={option} checked={formData.engagement === option} onChange={() => updateField("engagement", option)} className="accent-[--color-primary]" />
                                {option}
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between gap-4">
                          <button onClick={() => setStep(1)} className={`w-1/2 ${btnOutline}`}>← Back</button>
                          <button onClick={() => setStep(3)} disabled={formData.challenge.length === 0 || !formData.engagement} className={`w-1/2 ${btnGold}`}>Next →</button>
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <div className="space-y-5">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="mb-1.5 block font-display text-xs font-semibold text-[--color-foreground]">Select Your Package</label>
                            <select value={formData.package} onChange={(e) => updateField("package", e.target.value)} className={inputClass}>
                              <option value="">Choose a package</option>
                              <option>Operations Audit</option>
                              <option>AI Workflow Setup</option>
                              <option>Managed Automation Layer</option>
                              <option>Not sure / Exploring</option>
                            </select>
                            <p className="mt-1 font-body text-xs text-[--color-muted-foreground]">Most clients start with the Operations Audit and scale from there.</p>
                          </div>
                          <div>
                            <label className="mb-1.5 block font-display text-xs font-semibold text-[--color-foreground]">Implementation Timeline</label>
                            <select value={formData.timeline} onChange={(e) => updateField("timeline", e.target.value)} className={inputClass}>
                              <option value="">Select timeline</option>
                              <option>Immediate</option>
                              <option>Within 30 days</option>
                              <option>Short-term (1–3 months)</option>
                              <option>Strategic Planning (3+ months)</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="mb-1.5 block font-display text-xs font-semibold text-[--color-foreground]">Additional Context <span className="font-normal text-[--color-muted-foreground]">(Optional)</span></label>
                          <textarea rows={4} placeholder="Tell us more about your automation challenge or goals..." value={formData.context} onChange={(e) => updateField("context", e.target.value)} className={`${inputClass} resize-none`} />
                        </div>
                        <div className="flex justify-between gap-4">
                          <button onClick={() => setStep(2)} className={`w-1/2 ${btnOutline}`}>← Back</button>
                          <button onClick={handleSubmit} disabled={isSubmitting || !formData.package || !formData.timeline} className={`w-1/2 ${btnGold} flex items-center justify-center gap-2`}>
                            {isSubmitting ? <><Loader2 className="animate-spin" size={18} /> Submitting...</> : "Submit"}
                          </button>
                        </div>
                        <p className="text-center font-body text-xs text-[--color-muted-foreground]">
                          By submitting, you agree to our privacy policy. We'll respond within 24 hours.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
