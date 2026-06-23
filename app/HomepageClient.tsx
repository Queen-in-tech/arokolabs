import Link from "next/link";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { MotionDiv, MotionSection, MotionArticle } from "@/components/MotionDiv";
import { ArrowRight, Zap, Bot, Link2, BarChart3, Search, Users, FileText, Headphones, Globe, ExternalLink } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const solutions = [
  { icon: Globe, title: "Website & Web App Development", desc: "Modern, high-performance websites and web applications built to grow your business.", link: "/solutions" },
  { icon: Zap, title: "AI Workflow Automation", desc: "Automate repetitive tasks and complex business processes with intelligent workflows.", link: "/solutions" },
  { icon: Bot, title: "AI Assistants", desc: "Deploy intelligent support systems that learn and respond to your customers and teams.", link: "/solutions" },
  { icon: Link2, title: "System Integrations", desc: "Connect your tools, platforms, and data sources into a unified automated ecosystem.", link: "/solutions" },
  { icon: BarChart3, title: "Data Intelligence", desc: "Transform raw data into automated insights, reports, and predictive analytics.", link: "/solutions" },
];

const steps = [
  { num: "01", title: "Audit", desc: "We begin with a discovery call to understand your current workflows, tools, and manual processes. We identify bottlenecks, inefficiencies, and gaps so the solution fits your actual needs." },
  { num: "02", title: "Build", desc: "We design the blueprint that connects your tools and workflows. We map out how data flows, who handles each task, and how processes can move automatically." },
  { num: "03", title: "Deploy", desc: "We deploy the solution, integrating your tools and workflows so the system starts running immediately — using automation platforms, workflow engines, or AI agents as needed." },
  { num: "04", title: "Implementation", desc: "We don't just deploy and leave. We monitor performance, refine the workflows, and adjust the system until it operates seamlessly." },
];

const scenarios = [
  { icon: Search, title: "Lead Generation", desc: "Automatically capture, qualify, and route leads to your sales team." },
  { icon: Users, title: "HR Onboarding", desc: "Streamline employee onboarding with automated workflows and document management." },
  { icon: FileText, title: "Invoice Processing", desc: "Automate invoice capture, validation, approval, and payment processing." },
  { icon: Headphones, title: "Customer Support", desc: "AI-powered support that resolves queries instantly and escalates intelligently." },
];

const labProjects = [
  { title: "Nigerian Bill Summarizer", desc: "AI agent that reads, summarizes, and tracks Nigerian legislative bills in plain language.", tag: "Civic AI", cta: "Try it now", link: "#" },
  { title: "Retail Inventory Reconciliation", desc: "Automated a retail chain's inventory reconciliation across 12 locations, saving 35 hours/week.", tag: "Logistics", cta: "View case study", link: "/case-studies" },
  { title: "WhatsApp Order Agent", desc: "End-to-end order placement and tracking via WhatsApp for an e-commerce brand.", tag: "E-commerce", cta: "View case study", link: "/case-studies" },
];

const caseStudies = [
  { title: "60% Reduction in Support Workload", industry: "E-commerce", desc: "AI-powered customer support system handled routine queries, freeing the team to focus on complex issues." },
  { title: "70% Fewer Support Tickets", industry: "Logistics", desc: "WhatsApp-integrated tracking automation eliminated manual shipment inquiry handling." },
  { title: "3x Faster Lead Response", industry: "Financial Services", desc: "Automated lead qualification and routing cut response time from hours to minutes." },
];

const WaveDivider = ({ fillClass, flip = false, variant = 1 }: { fillClass: string; flip?: boolean; variant?: number }) => {
  const paths: Record<number, string> = {
    1: "M0,40 C200,120 400,0 720,60 C1040,120 1280,20 1440,80 L1440,150 L0,150 Z",
    2: "M0,80 C180,10 480,100 800,40 C1120,-20 1320,90 1440,50 L1440,150 L0,150 Z",
    3: "M0,20 C300,110 600,30 900,80 C1200,130 1380,40 1440,60 L1440,150 L0,150 Z",
    4: "M0,60 C240,0 540,120 840,50 C1140,-20 1360,100 1440,40 L1440,150 L0,150 Z",
  };
  return (
    <div className="relative w-full overflow-hidden leading-[0]" aria-hidden="true">
      <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className={`w-full h-[60px] md:h-[100px] lg:h-[140px] block ${flip ? "scale-y-[-1]" : ""}`}>
        <path d={paths[variant] || paths[1]} className={fillClass} />
      </svg>
    </div>
  );
};

export default function HomepageClient() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]" />
        <div className="container relative flex flex-col items-center py-24 text-center md:py-36 lg:py-44">
          <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-primary">
              AI Automation & Software Development Studio
            </span>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground md:text-6xl lg:text-7xl max-w-4xl">
              Intelligent Agents for the Modern{" "}<span className="text-gradient-gold">Enterprise</span>
            </h1>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <p className="mt-6 max-w-2xl font-body text-lg text-muted-foreground md:text-xl">
              We build intelligent automation workflows and refined digital experiences for businesses ready to operate at the next level.
            </p>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact"><Button variant="hero" size="lg" className="text-base">Book A Free Audit <ArrowRight className="ml-1" size={18} /></Button></Link>
            <Link href="/solutions"><Button variant="hero-outline" size="lg" className="text-base">See Solutions</Button></Link>
          </MotionDiv>
        </div>
      </section>

      <WaveDivider fillClass="fill-card" variant={1} />

      {/* Problem */}
      <section className="bg-card">
        <div className="container py-12 md:py-20">
          <SectionHeading label="The Problem" title="Your Business Should Run Like a System, Not a Set of Tasks." description="Nigerian enterprises in 2026 face unique pressures. Manual processes aren't just inefficient — they're existential risks." />
          <MotionDiv {...fadeUp} className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "High Operational Costs", detail: "Manual data entry is an invisible tax on your growth." },
              { label: "Naira Volatility", detail: "Efficiency is no longer optional — it's your best hedge against inflation." },
              { label: "Cognitive Noise", detail: "Stop managing tasks. Start managing outcomes." },
              { label: "Disconnected Systems", detail: "Excel, WhatsApp, and email shouldn't be your integration layer." },
              { label: "Lost Leads", detail: "Slow follow-ups cost you deals every single day." },
              { label: "Compliance Gaps", detail: "Manual document handling creates regulatory exposure." },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-secondary/50 px-5 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary font-display text-sm font-semibold">✕</span>
                  <span className="font-display text-sm font-semibold text-foreground">{item.label}</span>
                </div>
                <p className="font-body text-xs text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </MotionDiv>
        </div>
      </section>

      <WaveDivider fillClass="fill-background" variant={2} flip />

      {/* Solutions */}
      <section className="bg-background">
        <div className="container py-12 md:py-20">
          <SectionHeading label="What We Do" title="Automation That Transforms Operations" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <MotionDiv key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link href={s.link} className="group flex h-full flex-col rounded-xl border border-border bg-gradient-card p-6 shadow-card transition-all hover:border-primary/30 hover:shadow-gold">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="flex-1 font-body text-sm text-muted-foreground">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center font-display text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="ml-1" size={14} />
                  </span>
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillClass="fill-background" variant={4} flip />

      {/* The Àrokò Method */}
      <section className="bg-background">
        <div className="container py-12 md:py-20">
          <SectionHeading label="The Àrokò Method" title="How We Work" description="We demystify AI adoption in four clear steps." />
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <MotionDiv key={step.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="relative text-center">
                <span className="font-display text-5xl font-bold text-primary/20">{step.num}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 font-body text-sm text-muted-foreground">{step.desc}</p>
              </MotionDiv>
            ))}
          </div>
          <MotionDiv {...fadeUp} className="mt-12 text-center">
            <Link href="/contact"><Button variant="hero" size="lg">Schedule an Audit <ArrowRight className="ml-1" size={18} /></Button></Link>
          </MotionDiv>
        </div>
      </section>

      <WaveDivider fillClass="fill-card" variant={2} />

      {/* Lab Projects */}
      <section className="bg-card">
        <div className="container py-12 md:py-20">
          <SectionHeading label="Lab Projects" title="Built, Not Pitched" description="We show, don't tell. Explore working systems from our lab." />
          <div className="grid gap-6 md:grid-cols-3">
            {labProjects.map((project, i) => (
              <MotionDiv key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group flex flex-col rounded-xl border border-border bg-gradient-card p-6 shadow-card transition-all hover:border-primary/30">
                <span className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 font-display text-xs font-semibold text-primary">{project.tag}</span>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="flex-1 font-body text-sm text-muted-foreground">{project.desc}</p>
                <Link href={project.link} className="mt-4 inline-flex items-center font-display text-sm font-medium text-primary">
                  {project.cta} <ExternalLink className="ml-1" size={14} />
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillClass="fill-background" variant={1} flip />

      {/* Scenarios */}
      <section className="bg-background">
        <div className="container py-12 md:py-20">
          <SectionHeading label="Use Cases" title="Automation Scenarios" description="See how intelligent automation transforms key business processes." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scenarios.map((s, i) => (
              <MotionDiv key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-xl border border-border bg-gradient-card p-6 shadow-card">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon className="text-primary" size={20} />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillClass="fill-card" variant={4} />

      {/* Case Studies */}
      <section className="bg-card">
        <div className="container py-12 md:py-20">
          <SectionHeading label="Results" title="Measurable Automation Outcomes" />
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <MotionDiv key={cs.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link href="/case-studies" className="group flex h-full flex-col rounded-xl border border-border bg-secondary/30 p-6 transition-all hover:border-primary/30">
                  <span className="mb-2 font-display text-xs font-semibold uppercase tracking-wider text-primary">{cs.industry}</span>
                  <h3 className="mb-3 font-display text-lg font-semibold text-foreground">{cs.title}</h3>
                  <p className="flex-1 font-body text-sm text-muted-foreground">{cs.desc}</p>
                  <span className="mt-4 inline-flex items-center font-display text-sm font-medium text-primary">Read case study <ArrowRight className="ml-1" size={14} /></span>
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillClass="fill-background" variant={3} flip />

      {/* Final CTA */}
      <section className="bg-background">
        <div className="container py-20 text-center md:py-28">
          <MotionDiv {...fadeUp}>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">Let Your Systems Do the Work.</h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">Stop losing time to manual processes. Let Àrokò Labs build efficient automation that scales with you.</p>
            <Link href="/contact">
              <Button variant="hero" size="lg" className="mt-8 text-base">Book a 15-Min Efficiency Audit <ArrowRight className="ml-1" size={18} /></Button>
            </Link>
          </MotionDiv>
        </div>
      </section>
    </Layout>
  );
}
