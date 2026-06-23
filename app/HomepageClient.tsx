import Link from "next/link";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { MotionDiv } from "@/components/MotionDiv";
import { ArrowRight, CheckCircle, Zap, BarChart3, MessageSquare, Users, FileText, Search } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5 },
};

const problems = [
  "Your team spends hours on manual data entry and coordination",
  "Leads come in through WhatsApp and fall through the cracks",
  "Reporting is done manually in spreadsheets every week",
  "Every process depends on a specific person being available",
  "You have tools — but nothing talks to anything else",
  "Execution is slow because humans are in every loop",
];

const packages = [
  {
    icon: Search,
    name: "Operations Audit",
    desc: "We map your current workflows, identify every manual step, and produce a clear automation blueprint with quick wins and long-term priorities.",
    deliverable: "Automation blueprint + priority roadmap",
    timeline: "1 week",
  },
  {
    icon: Zap,
    name: "AI Workflow Setup",
    desc: "We build the automations. Lead routing, CRM updates, invoice processing, reporting, WhatsApp flows — whichever processes are costing you the most time.",
    deliverable: "Live automated workflows",
    timeline: "2–4 weeks",
    featured: true,
  },
  {
    icon: BarChart3,
    name: "Managed Automation",
    desc: "We maintain, monitor, and continuously improve your automation layer. Systems stay running. New processes get automated as your business evolves.",
    deliverable: "Monthly optimization + reporting",
    timeline: "Ongoing retainer",
  },
];

const systems = [
  {
    icon: Users,
    title: "Lead Routing System",
    before: "Leads collected manually in a spreadsheet, followed up hours later",
    after: "Lead captured → scored → assigned → follow-up triggered in under 2 minutes",
    impact: "3× faster response time",
  },
  {
    icon: FileText,
    title: "Invoice Automation",
    before: "6 manual steps from invoice receipt to payment approval",
    after: "Invoice received → extracted → validated → routed → logged automatically",
    impact: "6 steps reduced to 1",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp-to-CRM Flow",
    before: "Customer messages handled manually, no record kept in CRM",
    after: "WhatsApp message → parsed → CRM updated → response triggered automatically",
    impact: "Zero manual data entry",
  },
  {
    icon: BarChart3,
    title: "Reporting Agent",
    before: "Team spends 3–4 hours every Friday compiling reports manually",
    after: "Data pulled, compiled, formatted, and delivered automatically every week",
    impact: "4 hours saved weekly",
  },
];

export default function HomepageClient() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[--color-background] mx-auto w-full">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[--color-primary]/5 blur-[120px] pointer-events-none" />
        <div className="wrap relative py-28 md:py-32 lg:py-28">
          <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <span className="mb-6 inline-block rounded-full border border-[--color-primary]/30 bg-[--color-primary]/10 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-[--color-primary]">
              AI Operations Partner
            </span>
            <h1 className="font-display text-5xl font-bold leading-[1.05] text-[--color-foreground] md:text-6xl lg:text-7xl">
              We run your operations<br />
              using <span className="text-gradient-gold">AI systems.</span>
            </h1>
            <p className="mt-6 max-w-3xl font-body text-xl text-[--color-muted-foreground] leading-relaxed">
              We replace manual business operations with AI-driven systems that execute work automatically, so your team stops doing repetitive work and starts focusing on growth.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="text-base px-8">
                  Book an Operations Review <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <a href="https://wa.me/2347170573130" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg" className="text-base px-8">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="bg-[--color-card] border-y border-[--color-border] px-12">
        <div className="wrap py-16 md:py-24">
          <MotionDiv {...fadeUp} className="max-w-2xl mb-12">
            <span className="mb-3 inline-block font-display text-xs font-semibold uppercase tracking-widest text-[--color-primary]">The Problem</span>
            <h2 className="font-display text-3xl font-bold text-[--color-foreground] md:text-4xl">
              Your business runs on people doing work that systems should be doing.
            </h2>
          </MotionDiv>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <MotionDiv key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="flex items-start gap-3 rounded-xl border border-[--color-border] bg-[--color-secondary]/40 px-5 py-4">
                <span className="mt-0.5 shrink-0 text-[--color-primary]">✕</span>
                <span className="font-body text-sm text-[--color-foreground]">{p}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFRAME ── */}
      <section className="bg-[--color-background]">
        <div className="wrap py-16 md:py-24 text-center">
          <MotionDiv {...fadeUp} className="mx-auto max-w-3xl">
            <p className="font-display text-2xl font-semibold text-[--color-foreground] md:text-3xl lg:text-4xl leading-snug">
              You don't need more tools.<br />
              <span className="text-gradient-gold">You need systems that execute work automatically.</span>
            </p>
            <p className="mt-6 font-body text-lg text-[--color-muted-foreground]">
              Àrokò Labs acts as your operations layer — we map what your team does manually, then replace it with automated systems that run without anyone in the loop.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="bg-[--color-card] border-y border-[--color-border] px-10">
        <div className="wrap py-16 md:py-24">
          <MotionDiv {...fadeUp} className="mb-12 text-center">
            <span className="mb-3 inline-block font-display text-xs font-semibold uppercase tracking-widest text-[--color-primary]">How We Work</span>
            <h2 className="font-display text-3xl font-bold text-[--color-foreground] md:text-4xl">Three layers. One outcome: fewer humans in the loop.</h2>
          </MotionDiv>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <MotionDiv key={pkg.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className={`relative flex flex-col rounded-2xl border p-8 ${pkg.featured ? "border-[--color-primary] shadow-gold bg-[--color-primary]/5" : "border-[--color-border] bg-[--color-background]"}`}>
                {pkg.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[--color-primary] px-3 py-1 font-display text-xs font-semibold text-[--color-primary-foreground]">Most Popular</span>
                )}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[--color-primary]/10">
                  <pkg.icon className="text-[--color-primary]" size={24} />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-[--color-foreground]">{pkg.name}</h3>
                <p className="flex-1 font-body text-sm leading-relaxed text-[--color-muted-foreground]">{pkg.desc}</p>
                <div className="mt-6 space-y-2 border-t border-[--color-border] pt-5">
                  <div className="flex items-center gap-2 font-body text-xs text-[--color-muted-foreground]">
                    <CheckCircle size={13} className="text-[--color-primary]" />
                    <span>{pkg.deliverable}</span>
                  </div>
                  <div className="flex items-center gap-2 font-body text-xs text-[--color-muted-foreground]">
                    <CheckCircle size={13} className="text-[--color-primary]" />
                    <span>{pkg.timeline}</span>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
          <MotionDiv {...fadeUp} className="mt-10 text-center">
            <Link href="/contact">
              <Button variant="hero" size="lg">Book an Operations Review <ArrowRight className="ml-2" size={18} /></Button>
            </Link>
          </MotionDiv>
        </div>
      </section>

      {/* ── SYSTEM EXAMPLES ── */}
      <section className="bg-[--color-background] px-10">
        <div className="wrap py-16 md:py-24">
          <MotionDiv {...fadeUp} className="mb-12">
            <span className="mb-3 inline-block font-display text-xs font-semibold uppercase tracking-widest text-[--color-primary]">System Examples</span>
            <h2 className="font-display text-3xl font-bold text-[--color-foreground] md:text-4xl max-w-xl">
              Real systems. Real operations replaced.
            </h2>
          </MotionDiv>
          <div className="grid gap-6 md:grid-cols-2">
            {systems.map((sys, i) => (
              <MotionDiv key={sys.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl border border-[--color-border] bg-[--color-card] p-7 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[--color-primary]/10">
                    <sys.icon className="text-[--color-primary]" size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[--color-foreground]">{sys.title}</h3>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg bg-[--color-secondary]/60 px-4 py-3">
                    <p className="mb-1 font-display text-xs font-semibold uppercase tracking-wider text-[--color-muted-foreground]">Before</p>
                    <p className="font-body text-sm text-[--color-foreground]">{sys.before}</p>
                  </div>
                  <div className="rounded-lg bg-[--color-primary]/8 px-4 py-3 border border-[--color-primary]/20">
                    <p className="mb-1 font-display text-xs font-semibold uppercase tracking-wider text-[--color-primary]">After</p>
                    <p className="font-body text-sm text-[--color-foreground]">{sys.after}</p>
                  </div>
                </div>
                <div className="mt-4 inline-block rounded-full bg-[--color-primary]/10 px-4 py-1.5">
                  <span className="font-display text-xs font-bold text-[--color-primary]">{sys.impact}</span>
                </div>
              </MotionDiv>
            ))}
          </div>
          <MotionDiv {...fadeUp} className="mt-8">
            <Link href="/case-studies" className="inline-flex items-center font-display text-sm font-semibold text-[--color-primary] hover:opacity-80 transition-opacity">
              See all case studies <ArrowRight className="ml-1" size={15} />
            </Link>
          </MotionDiv>
        </div>
      </section>

      {/* ── DIFFERENTIATION ── */}
      <section className="bg-[--color-card] border-y border-[--color-border]">
        <div className="wrap py-16 md:py-20">
          <MotionDiv {...fadeUp} className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-[--color-border] bg-[--color-secondary]/40 p-8">
                <p className="mb-2 font-display text-xs font-semibold uppercase tracking-wider text-[--color-muted-foreground]">Other agencies</p>
                <h3 className="font-display text-xl font-semibold text-[--color-foreground] mb-4">Build you a system, hand it over, move on.</h3>
                <ul className="space-y-2">
                  {["Project-based delivery", "You manage it after launch", "Generic automation setups", "Support costs extra"].map(t => (
                    <li key={t} className="flex items-center gap-2 font-body text-sm text-[--color-muted-foreground]">
                      <span className="text-[--color-destructive]">✕</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[--color-primary]/30 bg-[--color-primary]/5 p-8">
                <p className="mb-2 font-display text-xs font-semibold uppercase tracking-wider text-[--color-primary]">Àrokò Labs</p>
                <h3 className="font-display text-xl font-semibold text-[--color-foreground] mb-4">Own and operate your automation layer continuously.</h3>
                <ul className="space-y-2">
                  {["System ownership model", "We maintain + improve ongoing", "Built around your actual ops", "Retainer-based partnership"].map(t => (
                    <li key={t} className="flex items-center gap-2 font-body text-sm text-[--color-foreground]">
                      <CheckCircle size={14} className="text-[--color-primary] shrink-0" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[--color-background]">
        <div className="wrap py-24 md:py-32 text-center">
          <MotionDiv {...fadeUp} className="mx-auto max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-[--color-foreground] md:text-5xl">
              Ready to remove humans from your operational loops?
            </h2>
            <p className="mx-auto mt-5 font-body text-lg text-[--color-muted-foreground]">
              Book a free 30-minute Operations Review. We'll map your manual processes and show you exactly what can be automated.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="text-base px-8">Book an Operations Review <ArrowRight className="ml-2" size={18} /></Button>
              </Link>
              <a href="https://wa.me/2347071573130" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg" className="text-base px-8">Chat on WhatsApp</Button>
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>

    </Layout>
  );
}
