/* =====================================================================
   sections.js — per-guide configuration for "International Cooperation on AI".
   ===================================================================== */
window.GUIDE = {
  title:      "International Cooperation on AI",
  homeFile:   "index.html",
  parentLink: { href: "../../index.html", label: "← All guides" },

  sections: [
    { id: "collective-action", file: "collective-action.html", n: 1, icon: "🧩", title: "Why AI Is a Collective-Action Problem",
      blurb: "Game theory of unilateral regulation, the Brussels effect, and cheap talk vs. costly signals." },
    { id: "summits",           file: "summits.html",           n: 2, icon: "🤝", title: "The Summit Process",
      blurb: "Bletchley → Seoul → Paris → Delhi → next. What gets signed, what doesn’t, and what it costs to sign." },
    { id: "hard-law",          file: "hard-law.html",          n: 3, icon: "⚖️", title: "The Hard-Law Layer",
      blurb: "EU AI Act, the Council of Europe Framework Convention, OECD Principles — when AI law actually binds." },
    { id: "soft-law",          file: "soft-law.html",          n: 4, icon: "📋", title: "The Soft-Law Layer",
      blurb: "Voluntary commitments, NIST RMF as norm export, the AISI network, and the Frontier Model Forum." },
    { id: "breaking",          file: "breaking.html",          n: 5, icon: "🚪", title: "Where Cooperation Breaks",
      blurb: "U.S. withdrawals, the Paris non-signatures, the AISI → CAISI rebrand, and what happens when one big member walks." }
  ],

  extraNav: [
    { file: "final-quiz.html", title: "Final Challenge" },
    { file: "sources.html",    title: "Glossary & Sources" }
  ],

  footerNote: "An IR study of AI through the institutionalist lens. Figures point-in-time (May 2026). " +
              "Every fact is sourced on the <a href=\"sources.html\">Sources</a> page.",

  storeKey:   "aiRulebook.progress.v1"
};
