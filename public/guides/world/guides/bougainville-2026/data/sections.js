/* =====================================================================
   sections.js — per-guide configuration for "Bougainville".
   main.js reads window.GUIDE to build the header, nav, and prev/next.
   Each guide ships its own copy of this file.
   ===================================================================== */
window.GUIDE = {
  title:      "Bougainville",
  homeFile:   "index.html",
  // Path back to the top-level splash that lists all guides.
  parentLink: { href: "../../index.html", label: "← All guides" },

  // The six numbered sections that drive the home grid, the nav, and prev/next.
  sections: [
    { id: "what-bougainville-is", file: "what-bougainville-is.html", n: 1, icon: "🏝️", title: "What Bougainville Is",
      blurb: "An island bolted to PNG by an 1899 colonial trade — and a war that demanded it back." },
    { id: "self-determination",   file: "self-determination.html",   n: 2, icon: "⚖️", title: "Self-Determination in International Law",
      blurb: "Why a 97.7% Yes vote does not automatically make a sovereign state." },
    { id: "road-to-2027",         file: "road-to-2027.html",         n: 3, icon: "🗓️", title: "The Road to 2027",
      blurb: "Era Kone, the Melanesian Agreement, and three off-ramps Marape has put on the table." },
    { id: "panguna",              file: "panguna.html",              n: 4, icon: "⛏️", title: "Panguna and Resource Sovereignty",
      blurb: "The mine that caused the war — and Toroama's choice between Chinese and Indian capital." },
    { id: "pacific-geopolitics",  file: "pacific-geopolitics.html",  n: 5, icon: "🌏", title: "Pacific Geopolitics",
      blurb: "Pukpuk Treaty, Lombrum, Wale's Solomons, and the contest a new sovereign would land in." },
    { id: "comparators",          file: "comparators.html",          n: 6, icon: "🧭", title: "Four Comparators",
      blurb: "East Timor, South Sudan, New Caledonia, Catalonia — four lessons for one island." }
  ],

  // Extra (non-section) pages that show up in the nav after the sections.
  extraNav: [
    { file: "final-quiz.html", title: "Final Challenge" },
    { file: "sources.html",    title: "Glossary & Sources" }
  ],

  // Footer line under the brand.
  footerNote: "A learning project about Bougainville's path to a sovereignty vote in 2027 and the international politics it would land in. " +
              "Figures are point-in-time (as of 6 June 2026). Every contestable fact is sourced on the " +
              "<a href=\"sources.html\">Sources</a> page.",

  // Used by Progress to namespace localStorage. Bump only if you change the data shape.
  storeKey:   "bougainville.progress.v1"
};
