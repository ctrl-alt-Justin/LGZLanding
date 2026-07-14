import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/logo.svg";
import {
  Infinity as InfinityIcon,
  TrendingUp,
  Flame,
  ArrowRight,
  Target,
  Compass,
  Sparkles,
  Users,
  Handshake,
  Code2,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <VisionMission />
      <CoreValues />
      <Divisions />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <Logo />
          <span>LGZ Solutions</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#vision" className="hover:text-foreground transition">Vision</a>
          <a href="#values" className="hover:text-foreground transition">Values</a>
          <a href="#divisions" className="hover:text-foreground transition">Divisions</a>
          <a href="#process" className="hover:text-foreground transition">Process</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:shadow-glow transition"
        >
          Get in touch <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <img
      src={logoImg}
      alt="LGZ Solutions logo"
      className="h-8 w-8 rounded-lg object-cover"
    />
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden bg-hero">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3 text-primary" />
            Research & Development Studio
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-display font-bold leading-[1.02]">
            Where <span className="text-gradient">Legacy</span> Starts with Vision.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            LGZ Solutions is a forward-looking R&D startup turning bold ideas into
            transformative solutions across industries — built on Limitless curiosity,
            Growth-driven impact, and Zeal for innovation.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#vision"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition"
            >
              Explore our vision <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#divisions"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-card transition"
            >
              How we work
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "3", v: "Core divisions" },
            { k: "90%+", v: "On-time delivery" },
            { k: "<5%", v: "Post-launch bugs" },
            { k: "∞", v: "Limitless ambition" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-5">
              <div className="text-3xl font-display font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  const items = [
    {
      icon: Compass,
      label: "Vision",
      body: "To be a catalyst of innovation that transforms bold ideas into lasting legacies across industries.",
    },
    {
      icon: Target,
      label: "Mission",
      body: "Drive interdisciplinary research and development to create impactful solutions, foster collaborations, and build technologies that shape a sustainable, future-ready world.",
    },
    {
      icon: Sparkles,
      label: "Philosophy",
      body: "“Where Legacy Starts with Vision.” We address today’s challenges while building the foundations for future generations.",
    },
  ];
  return (
    <section id="vision" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Purpose" title="Guided by vision, driven by mission." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, label, body }) => (
            <div
              key={label}
              className="group rounded-3xl border border-border/60 bg-card p-8 shadow-card-elevated hover:border-primary/40 transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{label}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const values = [
    {
      letter: "L",
      name: "Limitless",
      body: "We embrace boundless curiosity and innovation.",
      color: "var(--brand-l)",
      Icon: InfinityIcon,
    },
    {
      letter: "G",
      name: "Growth",
      body: "We foster continuous learning, impact, and progress.",
      color: "var(--brand-g)",
      Icon: TrendingUp,
    },
    {
      letter: "Z",
      name: "Zeal",
      body: "We work with passion, energy, and unwavering commitment.",
      color: "var(--brand-z)",
      Icon: Flame,
    },
  ];
  return (
    <section id="values" className="py-24 relative">
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] blur-3xl opacity-30 pointer-events-none"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Core values"
          title={<>The letters that shape <span className="text-gradient">everything</span>.</>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.letter}
              className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-card-elevated"
            >
              <div
                className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-30"
                style={{ background: v.color }}
              />
              <div className="relative flex items-start justify-between">
                <span
                  className="font-display text-7xl font-bold leading-none"
                  style={{ color: v.color }}
                >
                  {v.letter}
                </span>
                <v.Icon className="h-6 w-6" style={{ color: v.color }} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{v.name}</h3>
              <p className="mt-2 text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Divisions() {
  const divisions = [
    {
      Icon: Users,
      title: "Coordinators",
      tag: "Inbound · Outbound · Customer Care",
      points: [
        "Qualify every lead with the BANT framework",
        "Structured cadences for Hot, Warm & Cold leads",
        "Nurture long-term relationships beyond the first call",
      ],
    },
    {
      Icon: Handshake,
      title: "Business Development",
      tag: "Acquisition · Account Management",
      points: [
        "Proposals, negotiation, and strategic partnerships",
        "Regular business reviews & upsell discovery",
        "COTS · WON · NURTURE · LOST pipeline discipline",
      ],
    },
    {
      Icon: Code2,
      title: "Product Development",
      tag: "Build · Test · Deliver",
      points: [
        "Requirements → Design → Build → CAT → Handover",
        "90%+ on-time delivery, <5% post-launch defects",
        "Documentation & training with every project",
      ],
    },
  ];
  return (
    <section id="divisions" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="How we're organized"
          title="Three divisions, one legacy."
          sub="Each team operates by clear responsibilities, cadences, and success metrics — so momentum never stalls between discovery and delivery."
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {divisions.map((d) => (
            <div
              key={d.title}
              className="rounded-3xl border border-border/60 bg-card p-8 shadow-card-elevated hover:-translate-y-1 transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <d.Icon className="h-5 w-5" />
              </div>
              <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                {d.tag}
              </div>
              <h3 className="mt-1 text-2xl font-semibold">{d.title}</h3>
              <ul className="mt-6 space-y-3">
                {d.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Requirements Review", d: "Understand goals, identify constraints, estimate effort." },
    { n: "02", t: "Solution Design", d: "Database, user flows, APIs, and system architecture." },
    { n: "03", t: "Development", d: "Task-driven builds with daily progress and clean commits." },
    { n: "04", t: "Internal Testing", d: "Core flows, error handling, and acceptance criteria." },
    { n: "05", t: "Client Acceptance", d: "Validate, gather feedback, document revisions." },
    { n: "06", t: "Handover", d: "User manual, technical docs, and onboarding training." },
  ];
  return (
    <section id="process" className="py-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Development cycle"
          title="A disciplined path from idea to legacy."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-border/60 bg-card/60 p-6 hover:border-primary/40 transition"
            >
              <div className="font-display text-sm text-primary">{s.n}</div>
              <div className="mt-2 font-semibold text-lg">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-border/60 p-12 md:p-16 text-center"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[80%] blur-3xl opacity-40"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Have a bold idea? <span className="text-gradient">Let's build the legacy.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Whether you're validating a concept or scaling a product, our coordinators, BD team, and engineers are ready to move.
            </p>
            <a
              href="mailto:hello@lgzsolutions.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="font-display font-semibold text-foreground">LGZ Solutions</span>
        </div>
        <div>© {new Date().getFullYear()} LGZ Solutions. Where Legacy Starts with Vision.</div>
      </div>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
      <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}
