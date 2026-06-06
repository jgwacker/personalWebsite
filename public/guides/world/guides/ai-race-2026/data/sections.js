/* =====================================================================
   sections.js — per-guide configuration for "Great-Power Competition in AI".
   ===================================================================== */
window.GUIDE = {
  title:      "Great-Power Competition in AI",
  homeFile:   "index.html",
  parentLink: { href: "../../index.html", label: "← All guides" },

  sections: [
    { id: "frontier-ai",  file: "frontier-ai.html",  n: 1, icon: "🧠", title: "Frontier AI in One Read",
      blurb: "What “frontier AI” is, why compute is the chokepoint, and why the rest of the guide is about who controls it." },
    { id: "geography",    file: "geography.html",    n: 2, icon: "🗺️", title: "The Geography of Dependence",
      blurb: "TSMC, ASML, Korea, Japan, U.S. fabs — the map of where leverage actually sits." },
    { id: "chip-war",     file: "chip-war.html",     n: 3, icon: "⚔️", title: "The Chip War",
      blurb: "U.S. export controls, allied alignment, leakage, and DeepSeek’s adaptation." },
    { id: "buildout",     file: "buildout.html",     n: 4, icon: "⚡", title: "The Compute Buildout Race",
      blurb: "Stargate, the Gulf’s $130B, China’s domestic stack, and the new energy geopolitics." },
    { id: "weapons",      file: "weapons.html",      n: 5, icon: "🛡️", title: "Autonomous Weapons and the Military AI Question",
      blurb: "UN GGE on LAWS, REAIM summits, the 164-to-6 UNGA vote, and why no treaty has stuck." }
  ],

  extraNav: [
    { file: "final-quiz.html", title: "Final Challenge" },
    { file: "sources.html",    title: "Glossary & Sources" }
  ],

  footerNote: "An IR study of AI as great-power competition. Figures point-in-time (May 2026). " +
              "Every fact is sourced on the <a href=\"sources.html\">Sources</a> page.",

  storeKey:   "aiRace.progress.v1"
};
