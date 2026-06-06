/* =====================================================================
   guides.js — registry of all study guides.
   Loaded by index.html (splash) and read by splash.js to render cards.
   To add a new guide:
     1. Create  guides/<slug>/  with its own index + section pages + data/
        (copy guides/ebola-2026/ as a template).
     2. Append a new entry below.  status: "live" makes the card clickable.
   ===================================================================== */
window.GUIDES = [
  {
    id:     "ebola-2026",
    status: "live",
    path:   "guides/ebola-2026/index.html",
    title:  "Ebola & the World",
    tagline:"An outbreak in Congo, a war on its doorstep, and a remade U.S. global-health policy.",
    icon:   "🦠",
    topics: ["Public health", "Aid policy", "Conflict"],
    meta:   "6 sections · 36 quiz questions · ~45 min",
    asOf:   "6 June 2026"
  },
  {
    id:     "ai-race-2026",
    status: "live",
    path:   "guides/ai-race-2026/index.html",
    title:  "Great-Power Competition in AI",
    tagline:"Chips, supply chains, and the politics of who gets to build a frontier model. The realist lens on AI.",
    icon:   "🏁",
    topics: ["Technology", "Competition", "Security"],
    meta:   "5 sections · 30 quiz questions · ~40 min",
    asOf:   "31 May 2026"
  },
  {
    id:     "ai-rulebook-2026",
    status: "live",
    path:   "guides/ai-rulebook-2026/index.html",
    title:  "International Cooperation on AI",
    tagline:"Summits, treaties, and what global cooperation on AI actually looks like. The institutionalist lens.",
    icon:   "📜",
    topics: ["Treaties", "Cooperation", "Governance"],
    meta:   "5 sections · 30 quiz questions · ~40 min",
    asOf:   "31 May 2026"
  },
  {
    id:     "ai-values-2026",
    status: "live",
    path:   "guides/ai-values-2026/index.html",
    title:  "Contested Norms in AI",
    tagline:"Disinformation, the Pope, and indigenous data sovereignty — the international fight over whose norms apply to AI. The constructivist lens.",
    icon:   "⚖️",
    topics: ["Norms", "Rights", "Ethics"],
    meta:   "5 sections · 30 quiz questions · ~40 min",
    asOf:   "31 May 2026"
  },
  {
    id:     "bougainville-2026",
    status: "live",
    path:   "guides/bougainville-2026/index.html",
    title:  "Bougainville",
    tagline:"An island of 300,000 people, a 97.7% Yes vote, and a PNG Parliament that has not yet said yes.",
    icon:   "🏝️",
    topics: ["Self-determination", "Pacific", "Sovereignty"],
    meta:   "6 sections · ~30 quiz questions · ~45 min",
    asOf:   "6 June 2026"
  },
  // ----- Placeholders for future guides. Edit or delete freely. -----
  {
    id:     "placeholder-climate",
    status: "coming-soon",
    title:  "Climate Diplomacy",
    tagline:"From Paris to whatever comes next — how the world bargains over a warming planet.",
    icon:   "🌡️",
    topics: ["Climate", "Treaties", "Energy"],
    meta:   "In planning"
  }
];
