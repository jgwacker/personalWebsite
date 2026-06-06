/* =====================================================================
   sections.js — per-guide configuration for "Contested Norms in AI".
   ===================================================================== */
window.GUIDE = {
  title:      "Contested Norms in AI",
  homeFile:   "index.html",
  parentLink: { href: "../../index.html", label: "← All guides" },

  sections: [
    { id: "disinfo-norm",   file: "disinfo-norm.html",   n: 1, icon: "📰", title: "Disinformation as a Cross-Border Norm Violation",
      blurb: "Russian and Chinese influence operations, the AI labs' disruption reports, and the politics of attribution." },
    { id: "provenance",     file: "provenance.html",     n: 2, icon: "🔍", title: "Provenance and Watermarking",
      blurb: "C2PA, SynthID, and EU Digital Services Act enforcement — the emerging international norm of authenticity." },
    { id: "human-rights",   file: "human-rights.html",   n: 3, icon: "🕊️", title: "The Human-Rights Frame",
      blurb: "The UN OHCHR pipeline, the Council of Europe Framework Convention, and the European Court's binding AI case law." },
    { id: "pope",           file: "pope.html",           n: 4, icon: "⛪", title: "The Pope and the Moral Frame",
      blurb: "Pope Leo XIV's encyclical Magnifica Humanitas, the Rerum Novarum parallel, and the moral frame as norm entrepreneurship." },
    { id: "indigenous",     file: "indigenous.html",     n: 5, icon: "🌱", title: "Indigenous Data Sovereignty",
      blurb: "The CARE Principles, Te Hiku Media's Māori-language project, and the particularist challenge to universal AI ethics." }
  ],

  extraNav: [
    { file: "final-quiz.html", title: "Final Challenge" },
    { file: "sources.html",    title: "Glossary & Sources" }
  ],

  footerNote: "An international-relations guide to AI through the constructivist lens. Figures current as of May 2026. " +
              "Sources for every claim are listed on the <a href=\"sources.html\">Sources</a> page.",

  storeKey:   "aiValues.progress.v1"
};
