/* =====================================================================
   sections.js — per-guide configuration for "Ebola & the World".
   main.js reads window.GUIDE to build the header, nav, and prev/next.
   Each guide ships its own copy of this file.
   ===================================================================== */
window.GUIDE = {
  title:      "Ebola & the World",
  homeFile:   "index.html",
  // Path back to the top-level splash that lists all guides.
  parentLink: { href: "../../index.html", label: "← All guides" },

  // The six numbered sections that drive the home grid, the nav, and prev/next.
  sections: [
    { id: "ebola",       file: "ebola.html",       n: 1, icon: "🦠", title: "What Ebola Is",
      blurb: "The virus, the Bundibugyo strain, and why speed decides who lives." },
    { id: "why-ir",      file: "why-ir.html",      n: 2, icon: "🌍", title: "Why International Relations Matters",
      blurb: "Why an outbreak in one country becomes everyone’s problem." },
    { id: "where",       file: "where.html",       n: 3, icon: "📍", title: "Where the Outbreak Is Happening",
      blurb: "The map, the numbers, and a war that blocks the response." },
    { id: "structure",   file: "structure.html",   n: 4, icon: "🏛️", title: "The Global Health System",
      blurb: "WHO, the IHR, PHEICs, Africa CDC — who actually does what." },
    { id: "changes",     file: "changes.html",     n: 5, icon: "⚖️", title: "USAID, the WHO & the Trump Administration",
      blurb: "What changed in 2025–26 — and the real debate about it." },
    { id: "obama-ebola", file: "obama-ebola.html", n: 6, icon: "🕰️", title: "Looking Back: the 2014 Ebola Crisis",
      blurb: "How the U.S. fought Ebola a decade ago — and what’s different now." }
  ],

  // Extra (non-section) pages that show up in the nav after the sections.
  extraNav: [
    { file: "final-quiz.html", title: "Final Challenge" },
    { file: "sources.html",    title: "Glossary & Sources" }
  ],

  // Footer line under the brand.
  footerNote: "A learning project about the 2026 Ebola outbreak and the international politics of fighting disease. " +
              "Figures are point-in-time (as of 6 June 2026). Every fact is sourced on the " +
              "<a href=\"sources.html\">Sources</a> page.",

  // Used by Progress to namespace localStorage. Bump only if you change the data shape.
  storeKey:   "ebolaWorld.progress.v1"
};
