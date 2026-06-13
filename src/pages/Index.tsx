import ParticleHero from "@/components/hub/ParticleHero";

const projects = [
  {
    title: "TrainingLog",
    desc: "Training logger with a containerized .NET backend, PostgreSQL, full CRUD via Swagger, and a React frontend.",
    tags: [".NET", "React", "Docker", "PostgreSQL", "Swagger"],
    href: "#",
  },
];

const stack = ["C# / .NET", "React", "TypeScript", "PostgreSQL", "Docker", "Git", "GitHub Copilot"];

const notes = [
  { date: "Jun 2025", title: "BFF-mønsteret i praksis" },
  { date: "Mai 2025", title: "Hva jeg lærte av å containerisere .NET med Docker Compose" },
  { date: "Apr 2025", title: "Et innblikk i Chord DHT" },
];

const Section = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-4xl mx-auto px-6 py-20">
    <div className="flex items-baseline gap-3 mb-8">
      <span className="text-xs font-mono uppercase tracking-widest text-primary">{label}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
    {children}
  </section>
);

const Index = () => {
  const scrollDown = () => {
    document.getElementById("now")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground aurora-bg">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <ParticleHero />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background pointer-events-none" />
        <div className="relative z-10 text-center px-6">
          <div className="inline-flex items-center gap-2 glass-pill rounded-full px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
            <p className="text-[11px] md:text-xs font-mono tracking-widest text-foreground/70 uppercase">
              misje05.github.io
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 text-gradient-glow">
            Magnus Misje
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-12 font-light tracking-wide">
            Data engineering · HVL Bergen · Fintech
          </p>
          <button
            onClick={scrollDown}
            className="group inline-flex items-center gap-2 px-7 py-3 glass-pill rounded-full text-foreground/90 hover:text-primary hover:scale-[1.03] transition-all duration-300"
          >
            <span className="text-sm font-medium">Explore</span>
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </button>
        </div>
      </section>

      {/* Now */}
      <Section id="now" label="Now">
        <div className="glass-card glass-glow p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Live</span>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            Finishing 4th semester at HVL Bergen. Starting my Web & Mobile Development specialization in autumn 2026.
            Building fullstack projects with .NET and React. Active in Bergen's fintech scene — Finance Innovation
            events and Norway Fintech Festival YOUNG.
          </p>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" label="Projects">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group glass-card p-6 hover:glass-glow hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-foreground/70 glass-pill rounded-full px-2.5 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Stack */}
      <Section id="stack" label="Stack">
        <div className="flex flex-wrap gap-2.5">
          {stack.map((s) => (
            <span
              key={s}
              className="px-4 py-1.5 rounded-full glass-pill text-sm text-foreground/80 hover:text-primary hover:scale-[1.04] transition-all duration-300"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* Notes */}
      <Section id="notes" label="Notes">
        <ul className="divide-y divide-border">
          {notes.map((n) => (
            <li key={n.title} className="py-4 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 group cursor-pointer">
              <span className="text-xs font-mono text-muted-foreground md:w-28 shrink-0">{n.date}</span>
              <span className="text-base text-foreground/90 group-hover:text-primary transition-colors">{n.title}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Portfolio removed: kept hub-related content only */}

      <footer className="max-w-4xl mx-auto px-6 py-10 text-center text-xs font-mono text-muted-foreground">
        © {new Date().getFullYear()} Magnus Misje
      </footer>
    </main>
  );
};

export default Index;
