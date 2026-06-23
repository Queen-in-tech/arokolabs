import Link from "next/link";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { MotionDiv } from "@/components/MotionDiv";
import { ArrowRight, CheckCircle, MessageSquare, FileSpreadsheet, Users, BarChart3, Zap, RefreshCw } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const problems = [
  "Your team coordinates work over WhatsApp threads",
  "Leads come in and sit unactioned for hours",
  "Reporting requires someone to manually pull data",
  "Onboarding new clients takes days of back-and-forth",
  "Invoices, approvals, and follow-ups depend on one person",
  "Every workflow breaks when that person is unavailable",
];

const offers = [
  {
    step: "01",
    name: "Operations Audit",
    desc: "We map your current workflows end-to-end — every manual step, every handoff, every bottleneck. You leave with a clear picture of where operations are leaking time and money.",
    deliverable: "Workflow map + automation opportunity report",
  },
  {
    step: "02",
    name: "AI Workflow Setup",
    desc: "We build the automation layer for your highest-impact processes — lead handling, CRM updates, reporting, client onboarding, invoicing. Systems that execute work without a human in the loop.",
    deliverable: "Live automations handling your key business functions",
  },
  {
    step: "03",
    name: "Managed Automation Layer",
    desc: "We maintain, monitor, and improve your automation systems on an ongoing basis. When your business changes, your systems adapt. You focus on growth — we keep the engine running.",
    deliverable: "Monthly reporting + continuous system optimization",
  },
];

const systemExamples = [
  {
    icon: Users,
    title: "Lead Routing System",
    before: "Leads sit in a spreadsheet until someone manually assigns them",
    after: "New lead triggers instant qualification, assignment, and follow-up — zero manual steps",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp-to-CRM Flow",
    before: "Customer messages on WhatsApp, team manually logs details into the CRM",
    after: "Conversation is parsed, contact created, deal stage updated automatically",
  },
  {
    icon: FileSpreadsheet,
    title: "Invoice Automation",
    before: "Finance team manually creates invoices, sends reminders, tracks payment status",
    after: "Invoice generated on trigger, sent automatically, payment tracked and reconciled",
  },
  {
    icon: BarChart3,
    title: "Reporting Agent",
    before: "Weekly report requires someone to pull data from 4 tools every Monday",
    after: "Report auto-generated, formatted, and delivered to stakeholders every week",
  },
  {
    icon: Zap,
    title: "Client Onboarding Flow",
    before: "Onboarding takes 3–5 days of emails, form chasing, and manual setup",
    after: "Client submits form → welcome sent → workspace set up → kickoff booked automatically",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-Up System",
    before: "Sales team manually tracks who needs a follow-up and when",
    after: "System monitors deal stages and fires contextual follow-ups at the right time",
  },
];

const proof = [
  { metric: "6 → 1", label: "Manual processing steps eliminated for a logistics client's shipment workflow" },
  { metric: "< 2 min", label: "Lead response time after automating qualification and routing for a financial services firm" },
  { metric: "35 hrs/wk", label: "Saved on manual inventory reconciliation across 12 retail locations" },
  { metric: "70%", label: "Reduction in support tickets after deploying a WhatsApp automation layer" },
];

export default function HomepageClient() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[120px]" />
        <div className="container relative flex flex-col items-start py-28 md:py-40 lg:py-48 max-w-4xl">
          <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-primary">
              AI Operations Partner
            </span>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h1 className="font-display text-5xl font-bold leading-[1.08] text-foreground md:text-6xl lg:text-7xl">
              We run your business operations{" "}
              <span className="text-gradient-gold">using AI systems.</span>
            </h1>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="mt-6 max-w-2xl font-body text-xl text-muted-foreground leading-relaxed">
              We replace manual business workflows with AI-driven systems that execute work automatically — so your team stops doing operational busywork and starts focusing on what moves the business forward.
            </p>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button variant="hero" size="lg" className="text-base px-8">Book an Operations Review <ArrowRight className="ml-2" size={18} /></Button>
            </Link>
            <a href="https://wa.me/2349000000000" target="_blank" rel="noopener noreferrer">
              <Button variant="hero-outline" size="lg" className="text-base px-8">WhatsApp Us</Button>
            </a>
          </MotionDiv>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="border-y border-border bg-card">
        <div className="container py-16 md:py-24">
          <MotionDiv {...fadeUp}>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-primary mb-4">Sound familiar?</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl max-w-2xl">
              Your operations are running on human effort that could be automated.
            </h2>
          </MotionDiv>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <MotionDiv key={p} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="flex items-start gap-3 rounded-lg border border-border bg-background px-5 py-4">
                <span className="mt-0.5 text-destructive font-bold text-sm shrink-0">✕</span>
                <p className="font-body text-sm text-foreground">{p}</p>
              </MotionDiv>
            ))}
          </div>
          <MotionDiv {...fadeUp} className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-7">
            <p className="font-display text-xl font-semibold text-foreground md:text-2xl">
              You don't need more tools.{" "}
              <span className="text-gradient-gold">You need systems that execute work automatically.</span>
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* ── OFFER ── */}
      <section className="bg-background">
        <div className="container py-16 md:py-24">
          <MotionDiv {...fadeUp}>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-primary mb-4">How we work</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl max-w-2xl">
              Three layers. One outcome: operations that run themselves.
            </h2>
          </MotionDiv>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offers.map((offer, i) => (
              <MotionDiv key={offer.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="flex flex-col rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
                <span className="font-display text-5xl font-bold text-primary/15 leading-none">{offer.step}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">{offer.name}</h3>
                <p className="mt-3 flex-1 font-body text-sm text-muted-foreground leading-relaxed">{offer.desc}</p>
                <div className="mt-6 rounded-lg bg-primary/8 px-4 py-3">
                  <p className="font-display text-xs font-semibold text-primary">Deliverable</p>
                  <p className="mt-1 font-body text-sm text-foreground">{offer.deliverable}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
          <MotionDiv {...fadeUp} className="mt-10 text-center">
            <Link href="/contact">
              <Button variant="hero" size="lg" className="text-base px-10">Book an Operations Review <ArrowRight className="ml-2" size={18} /></Button>
            </Link>
          </MotionDiv>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section className="border-y border-border bg-card">
        <div className="container py-16 md:py-24">
          <MotionDiv {...fadeUp}>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-primary mb-4">Operations impact</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl max-w-2xl">
              We measure success in operations changed, not projects shipped.
            </h2>
          </MotionDiv>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((p, i) => (
              <MotionDiv key={p.metric} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-xl border border-border bg-background p-6 shadow-card">
                <p className="font-display text-4xl font-bold text-gradient-gold">{p.metric}</p>
                <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">{p.label}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEM EXAMPLES ── */}
      <section className="bg-background">
        <div className="container py-16 md:py-24">
          <MotionDiv {...fadeUp}>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-primary mb-4">Conversion anchors</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl max-w-2xl">
              Real systems we deploy across client operations.
            </h2>
          </MotionDiv>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systemExamples.map((ex, i) => (
              <MotionDiv key={ex.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex flex-col rounded-xl border border-border bg-gradient-card p-6 shadow-card">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <ex.icon className="text-primary" size={22} />
                </div>
                <h3 className="mb-4 font-display text-lg font-bold text-foreground">{ex.title}</h3>
                <div className="flex flex-col gap-3">
                  <div className="rounded-lg bg-destructive/8 px-4 py-3">
                    <p className="font-display text-xs font-semibold text-destructive mb-1">Before</p>
                    <p className="font-body text-xs text-muted-foreground">{ex.before}</p>
                  </div>
                  <div className="rounded-lg bg-primary/8 px-4 py-3">
                    <p className="font-display text-xs font-semibold text-primary mb-1">After</p>
                    <p className="font-body text-xs text-foreground">{ex.after}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border bg-card">
        <div className="container py-20 md:py-28">
          <MotionDiv {...fadeUp} className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl leading-tight">
              Ready to stop running operations manually?
            </h2>
            <p className="mx-auto mt-5 font-body text-lg text-muted-foreground">
              Book a 30-minute operations review. We'll map your key workflows and show you exactly what can be automated — no commitment required.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="text-base px-10">Book an Operations Review <ArrowRight className="ml-2" size={18} /></Button>
              </Link>
              <a href="https://wa.me/2349000000000" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg" className="text-base px-8">WhatsApp Us</Button>
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>

    </Layout>
  );
}
