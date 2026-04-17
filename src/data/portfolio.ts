export const siteMeta = {
  title: "Zen | Senior Android Developer",
  description:
    "A personal portfolio for Zen, a senior Android developer building privacy-first mobile software, self-hosted systems, and durable tools outside the usual platform defaults."
};

export const hero = {
  eyebrow: "Senior Android Developer • De-Google by design",
  title: "Shipping calm, resilient Android software with fewer black boxes.",
  summary:
    "Zen builds polished mobile experiences, trims operational drag, and steadily replaces cloud dependency with systems that can be understood, owned, and hosted close to home.",
  metrics: [
    { label: "Android Focus", value: "10+ years" },
    { label: "Current Arc", value: "Self-hosted stack" },
    { label: "Working Style", value: "Quietly obsessive" }
  ],
  primaryCta: { label: "View selected work", href: "#projects" },
  secondaryCta: { label: "Start a conversation", href: "#contact" }
};

export const about = [
  "Zen is a senior Android engineer with a strong bias for fast, stable products and codebases that stay legible six months later. The through-line is ownership: fewer surprises in production, fewer dependencies nobody understands, and fewer defaults chosen by big platforms on your behalf.",
  "Lately the work extends beyond app code into the systems around it: self-hosted services, lightweight observability, privacy-aware workflows, and static-first publishing that can live comfortably on a Raspberry Pi without ceremony."
];

export const projects = [
  {
    title: "Aurora Notes",
    label: "Privacy-first Android app",
    summary:
      "An offline-friendly notes app with local encryption, elegant sync conflict handling, and a Compose-first interface tuned for speed on low-power devices.",
    stack: ["Kotlin", "Jetpack Compose", "SQLDelight", "WorkManager"],
    outcome: "Reduced cold-start time by 38% while keeping the app fully functional without Google Play Services."
  },
  {
    title: "Harbor",
    label: "Self-hosted deployment panel",
    summary:
      "A minimal control surface for publishing static sites and small services to a home server, with readable build logs and dead-simple rollback behavior.",
    stack: ["Astro", "Tailwind", "Docker", "Caddy"],
    outcome: "Cut a multi-step deploy process down to a single reproducible build-and-sync flow for personal infrastructure."
  },
  {
    title: "Signal Path",
    label: "Engineering diagnostics toolkit",
    summary:
      "A set of internal Android utilities for startup tracing, flaky network reproduction, and release-readiness checks across multiple product flavors.",
    stack: ["Android", "Gradle", "Macrobenchmark", "Kotlin Coroutines"],
    outcome: "Improved release confidence by surfacing regressions earlier and turning tribal debugging knowledge into repeatable tooling."
  }
];

export const skills = [
  "Kotlin & modern Android architecture",
  "Jetpack Compose and UI systems",
  "Gradle, modularization, and build performance",
  "Offline-first data flows",
  "Privacy-aware product engineering",
  "Static sites and small-footprint hosting",
  "Linux, containers, and home-server automation",
  "Readable DX and durable code review culture"
];

export const experience = [
  {
    period: "2021 — Present",
    role: "Senior Android Developer",
    company: "Independent / Product Engineering",
    summary:
      "Partnering with small teams on Android architecture, performance work, Compose migrations, and product hardening with a strong preference for maintainable systems over rushed complexity."
  },
  {
    period: "2017 — 2021",
    role: "Android Lead",
    company: "Client Platforms",
    summary:
      "Led feature delivery across a multi-flavor Android codebase, improved release discipline, and raised the floor on testing, observability, and shared UI patterns."
  },
  {
    period: "2013 — 2017",
    role: "Android Engineer",
    company: "Early-stage Mobile Products",
    summary:
      "Built and iterated consumer Android apps from the Java era into Kotlin, shipping quickly while learning where speed pays off and where quality debt quietly compounds."
  }
];

export const contact = {
  blurb:
    "Best for Android consulting, architecture cleanup, privacy-minded product work, and small systems that should stay boring in production.",
  email: "zen@localhost.example",
  location: "Working remotely, often near a terminal and a Pi cluster",
  links: [
    { label: "GitHub", value: "github.com/zen" },
    { label: "Mastodon", value: "fosstodon.org/@zen" },
    { label: "RSS", value: "/feed.xml" }
  ]
};
