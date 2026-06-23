import ParticleHero from "@/components/hub/ParticleHero";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    date: "Jun 22, 2026",
    title: "VOLUM - AI workshop with Sparebanken Norge",
    summary:
      "Learned to build practical AI tools from scratch: explored how instructions shape Claude's behavior across different tasks, and built a meeting scheduling assistant as a team. Left with a clearer picture of how fast the field is moving and have since started using Claude Cowork for agents, debugging, and development.",
  },
  {
    date: "May 2026",
    title: "Starting TrainingLog - fullstack with .NET and React",
    summary:
      "Containerized backend with Docker Compose, PostgreSQL and Swagger. Frontend in React with TypeScript.",
  },
  {
    date: "May 2026",
    title: "Hub project: Personal website",
    summary:
      "Built a personal website with React, TypeScript and Tailwind CSS. Added a blog, timeline and portfolio section to showcase my work.",
  },
  {
    date: "Apr 2026",
    title: "Norway Fintech Festival YOUNG",
    summary:
      "Attended the festival in Bergen. Great conversations with fintech founders and investors.",
  },
  {
    date: "Apr 2026",
    title: "Portfolio project: Personal website",
    summary:
      "Built a personal website with React, TypeScript and Tailwind CSS. Added a blog, timeline and portfolio section to showcase my work.",
  },
  {
    date: "Mar 2026",
    title: "Web & Mobile specialization confirmed",
    summary:
      "Chose my specialization for autumn 2026 - digging deep into Web API and JavaScript.",
  },
  {
    date: "Feb 2026",
    title: "The Application Period",
    summary:
      "Applying for every available summer internship resulting in a reality check I needed.",
  },
];

const path = [
  {
    year: "2026 →",
    title: "Web & Mobile Development",
    desc: "Starting specialization autumn 2026.",
    active: true,
  },
  {
    year: "2026",
    title: "Nettworking",
    desc: "Attending Norway Fintech Festival YOUNG and VOLUM Workshop to connect with fintech developers.",
    active: false,
  },
  {
    year: "2026",
    title: "Creating my own projects",
    desc: "Starting small with portfolio projects, and gradually building larger fullstack applications.",
    active: false,
  },
  {
    year: "2025",
    title: "First of 3 Student Assistant roles in Programming",
    desc: "Teaching programming to first-year students, and assisting with course development.",
    active: false,
  },
  {
    year: "2024",
    title: "Started at HVL Bergen",
    desc: "Bachelor's in Data Engineering.",
    active: false,
  },
];

const stack = [
  { category: "Backend", items: ["C# / .NET", "PostgreSQL", "Docker"] },
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
  { category: "Tools", items: ["Git", "GitHub Copilot", "Swagger"] },
];

const moreLinks = [
  {
    title: "Portfolio",
    desc: "A deeper look at my projects, technologies and work experience.",
    href: "https://misje05.github.io/Portfolio/",
  },
];

const Section = ({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="max-w-5xl mx-auto px-6 py-20">
    <div className="flex items-baseline gap-3 mb-8">
      <span className="text-xs font-mono uppercase tracking-widest text-primary">
        {label}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
    {children}
  </section>
);

const Index = () => {
  const scrollDownNow = () => {
    document.getElementById("now")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollDownPortfolio = () => {
    document.getElementById("more")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground aurora-bg">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <ParticleHero />
        {/* Top vignette */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/30 to-transparent pointer-events-none" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-pill rounded-full px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
            <p className="text-[11px] md:text-xs font-mono tracking-widest text-foreground/70 uppercase">
              Data Engineering Student · HVL Bergen
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-4 text-gradient-glow pb-2">
            Magnus Misje
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-3 font-light tracking-wide">
            Building fullstack applications with .NET and React.
          </p>
          <p className="text-sm text-muted-foreground/60 mb-12 font-light">
            Active in Bergen's fintech scene.
          </p>
          <button
            onClick={scrollDownNow}
            className="group inline-flex items-center gap-2 px-7 py-3 mr-3 glass-pill rounded-full text-foreground/90 hover:text-primary hover:scale-[1.03] transition-all duration-300"
          >
            <span className="text-sm font-medium">Explore</span>
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </button>
          <button
            onClick={scrollDownPortfolio}
            className="group inline-flex items-center gap-2 px-7 py-3 glass-pill rounded-full text-foreground/90 hover:text-primary hover:scale-[1.03] transition-all duration-300"
          >
            <span className="text-sm font-medium">Portfolio</span>
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
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Active
            </span>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            Finished my 4th semester at HVL Bergen studying Data Engineering. Starting a Web & Mobile Development 
            specialization in autumn 2026. Building fullstack projects 
            with .NET and React, and active in Bergen's fintech scene through VOLUM Workshop 
            and Norway Fintech Festival YOUNG.
          </p>
        </div>
      </Section>

      {/* Blog */}
      <Section id="blog" label="What I'm working on">
        <div
          className="space-y-4 overflow-y-auto pr-2 theme-scrollbar"
          style={{ maxHeight: "470px" }}
        >
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="glass-card p-6 hover:glass-glow transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                <span className="text-xs font-mono text-primary shrink-0">{post.date}</span>
                <h3 className="text-base font-semibold text-foreground/90">{post.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{post.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Path */}
      <Section id="path" label="My path">
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-8">
            {path.map((step) => (
              <div key={step.year} className="relative pl-8">
                <div
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                    step.active
                      ? "border-primary bg-primary/30 shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                      : "border-border bg-background"
                  }`}
                />
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1">
                  <span
                    className={`text-xs font-mono shrink-0 ${
                      step.active ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {step.year}
                  </span>
                  <h3 className="text-base font-semibold text-foreground/90">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stack */}
      <Section id="stack" label="Stack">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stack.map((group) => (
            <div key={group.category} className="glass-card p-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-primary mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full glass-pill text-sm text-foreground/80 hover:text-primary hover:scale-[1.04] transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* More */}
      <Section id="more" label="More">
        <div className="grid grid-cols-1 gap-4">
          {moreLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-5 flex items-center justify-between gap-4 hover:glass-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              <div>
                <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/50 group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </Section>

      <footer className="max-w-5xl mx-auto px-6 py-10 text-center text-xs font-mono text-muted-foreground">
        © {new Date().getFullYear()} Magnus Misje
      </footer>
    </main>
  );
};

export default Index;
