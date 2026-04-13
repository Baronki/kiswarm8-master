import { useEffect, useMemo, useState } from "react";

type VectorCard = {
  id: string;
  label: string;
  title: string;
  file: string;
  format: string;
  summary: string;
  audience: string[];
  highlights: string[];
  deliverables: string[];
  accent: string;
  glow: string;
};

const vectors: VectorCard[] = [
  {
    id: "economic",
    label: "Vector 1",
    title: "Economic Pressure Dashboard",
    file: "/PRESSURE_VECTORS/Economic_Impact_Dashboard.html",
    format: "Standalone HTML",
    summary:
      "A public-facing dashboard concept focused on packaging the repository update into an economic-impact visual with a live display, metric blocks, and static-hosting readiness.",
    audience: ["Citizens", "Businesses", "General public"],
    highlights: [
      "Standalone HTML artifact intended for direct hosting",
      "Live ticker presentation pattern with supporting metric cards",
      "Repository-authored economic-impact formula and source list",
    ],
    deliverables: [
      "Launch-ready single file",
      "Shareable visual format",
      "High-contrast presentation layer",
    ],
    accent: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/20",
  },
  {
    id: "audit",
    label: "Vector 2",
    title: "Jurisdictional Audit Report",
    file: "/PRESSURE_VECTORS/KISWARM_Jurisdictional_Audit_Report_Germany.md",
    format: "Markdown report",
    summary:
      "A structured memo format aimed at external professional audiences, organized around risk framing, scorecards, and distribution targets referenced in the repository update.",
    audience: [
      "International legal bodies",
      "Sovereign wealth funds",
      "Foreign law firms",
      "Business risk consultancies",
    ],
    highlights: [
      "Markdown-first report optimized for rapid circulation",
      "Scorecard-style framing for reputational and legal risk",
      "Target-distribution list embedded in the publication notes",
    ],
    deliverables: [
      "Portable briefing memo",
      "Distribution-ready structure",
      "Risk-oriented narrative packaging",
    ],
    accent: "from-violet-400 to-fuchsia-500",
    glow: "shadow-fuchsia-500/20",
  },
  {
    id: "osint",
    label: "Vector 3",
    title: "OSINT Bounty Board",
    file: "/PRESSURE_VECTORS/OSINT_Bounty_Board.md",
    format: "Markdown program board",
    summary:
      "A gamified participation layer that organizes repository exploration into challenge tracks, contribution paths, and submission guidance for outside researchers.",
    audience: ["Researchers", "Analysts", "Data visualizers", "Open-source investigators"],
    highlights: [
      "Six listed bounties with difficulty bands",
      "Submission workflow based on repository forks and pull requests",
      "Community participation framing through badges and recognition",
    ],
    deliverables: [
      "Challenge catalog",
      "Contribution structure",
      "Gamified engagement model",
    ],
    accent: "from-amber-300 to-orange-500",
    glow: "shadow-orange-500/20",
  },
];

const snapshotStats = [
  {
    value: "3",
    label: "new published artifacts",
    detail: "One dashboard and two Markdown documents in the new directory.",
  },
  {
    value: "1",
    label: "new top-level directory",
    detail: "PRESSURE_VECTORS groups the latest publication set.",
  },
  {
    value: "6",
    label: "listed bounty tracks",
    detail: "The participation board outlines six challenge categories.",
  },
  {
    value: "2",
    label: "report-style markdown files",
    detail: "The audit memo and bounty board are both Markdown-first assets.",
  },
];

const repositoryFootprint = [
  {
    heading: "Directory",
    body: "PRESSURE_VECTORS",
    note: "New publication folder called out in the repository update.",
  },
  {
    heading: "Formats",
    body: "HTML + Markdown",
    note: "Built for both direct hosting and easy redistribution.",
  },
  {
    heading: "Presentation style",
    body: "Dashboard, memo, board",
    note: "Each file uses a different communication format.",
  },
  {
    heading: "Distribution model",
    body: "Public repository",
    note: "The update is framed as openly accessible source material.",
  },
];

const reviewChecklist = [
  "Read the raw files in the repository before sharing summaries or extracts.",
  "Separate repository-authored claims from independently verified evidence.",
  "Check commit history, timestamps, and source provenance for each file.",
  "Treat named allegations about identifiable people as unverified unless corroborated by reliable reporting or official records.",
  "Document context if you reuse any visuals, statistics, or audience targeting notes.",
];

const timeline = [
  {
    step: "01",
    title: "Directory introduced",
    description:
      "A new PRESSURE_VECTORS folder is referenced as the container for the latest publication set.",
  },
  {
    step: "02",
    title: "Three artifacts published",
    description:
      "The update describes one HTML dashboard, one audit-style memo, and one gamified bounty board.",
  },
  {
    step: "03",
    title: "Distribution framing added",
    description:
      "The repository notes present different intended audiences for public, professional, and research-facing dissemination.",
  },
];

function App() {
  const [activeVector, setActiveVector] = useState(vectors[0].id);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const selectedVector = useMemo(
    () => vectors.find((item) => item.id === activeVector) ?? vectors[0],
    [activeVector],
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-4rem] h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10 lg:py-10">
        <section className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
              Repository update overview
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Public repository briefing
                </p>
                <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  PRESSURE_VECTORS launch snapshot for the KISWARM repository
                </h1>
              </div>

              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                This interface summarizes the newly referenced repository materials in a neutral,
                source-aware format. It highlights file structure, presentation styles, and stated
                distribution goals without endorsing or repeating sensitive allegations about named
                individuals.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {repositoryFootprint.map((item) => (
                <div
                  key={item.heading}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    {item.heading}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">{item.body}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/Baronki/kiswarm8-master"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Open repository
              </a>
              <a
                href="#vectors"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore the three artifacts
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Live session</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Briefing monitor</h2>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                Active
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-5">
              <p className="text-sm text-slate-400">Local time</p>
              <p className="mt-2 text-3xl font-semibold text-white">
                {now.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {now.toLocaleDateString([], {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Selected artifact</p>
                <p className="mt-2 text-lg font-semibold text-white">{selectedVector.title}</p>
                <p className="mt-1 text-sm text-slate-400">{selectedVector.file}</p>
              </div>

              <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-50">
                <p className="font-semibold text-amber-200">Context note</p>
                <p className="mt-2 text-amber-50/90">
                  The source repository contains serious claims that are not independently verified by
                  this site. Review original materials carefully and use reliable corroboration before
                  drawing conclusions.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {snapshotStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <p className="text-4xl font-semibold tracking-tight text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">{stat.detail}</p>
            </div>
          ))}
        </section>

        <section id="vectors" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Artifacts</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Three-vector publication set</h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {vectors.map((vector) => {
                const isActive = vector.id === selectedVector.id;

                return (
                  <button
                    key={vector.id}
                    type="button"
                    onClick={() => setActiveVector(vector.id)}
                    className={`w-full rounded-3xl border p-5 text-left transition ${
                      isActive
                        ? "border-white/20 bg-slate-900 shadow-xl shadow-black/25"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                          {vector.label}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-white">{vector.title}</h3>
                      </div>
                      <div
                        className={`rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-slate-950 ${vector.accent}`}
                      >
                        {vector.format}
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-400">{vector.summary}</p>
                    <p className="mt-4 text-sm text-slate-500">{vector.file}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl ${selectedVector.glow}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Focused view</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">{selectedVector.title}</h2>
              </div>
              <div
                className={`rounded-full bg-gradient-to-r px-4 py-2 text-sm font-semibold text-slate-950 ${selectedVector.accent}`}
              >
                {selectedVector.format}
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              {selectedVector.summary}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Highlights</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  {selectedVector.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-white/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Deliverables</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  {selectedVector.deliverables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-white/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Intended audience noted in repository</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {selectedVector.audience.map((group) => (
                  <span
                    key={group}
                    className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-300"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Update sequence</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">How the repository expansion is framed</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {timeline.map((item) => (
                <div key={item.step} className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
                  <p className="text-sm font-semibold text-cyan-200">Step {item.step}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Responsible review</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Source-handling checklist</h2>
            <div className="mt-6 space-y-4">
              {reviewChecklist.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-900 to-slate-950 p-6 text-sm text-slate-400 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Repository</p>
              <p className="mt-2 text-lg font-semibold text-white">Baronki / kiswarm8-master</p>
              <p className="mt-2 max-w-2xl leading-6 text-slate-400">
                Designed as a clean public-facing briefing page for the latest repository update,
                with emphasis on structure, publishing format, and careful source interpretation.
              </p>
            </div>
            <a
              href="https://github.com/Baronki/kiswarm8-master"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View on GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
