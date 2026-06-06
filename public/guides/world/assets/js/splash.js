/* =====================================================================
   splash.js — renders the guide-card grid on the project splash page.
   Reads window.GUIDES from assets/data/guides.js.
   ===================================================================== */
(function () {
  "use strict";

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) { if (k === "class") e.className = attrs[k]; else e.setAttribute(k, attrs[k]); }
    if (html != null) e.innerHTML = html;
    return e;
  }

  function tagRow(topics) {
    var row = el("div", { class: "tag-row" });
    (topics || []).forEach(function (t) { row.appendChild(el("span", { class: "tag" }, t)); });
    return row;
  }

  function liveCard(g) {
    var card = el("a", { class: "card", href: g.path });
    card.appendChild(el("span", { class: "badge-n" }, g.icon || "★"));
    card.appendChild(el("h3", null, g.title));
    card.appendChild(el("p", { class: "blurb" }, g.tagline || ""));
    if (g.topics) card.appendChild(tagRow(g.topics));
    var foot = el("div", { class: "card-foot" });
    foot.appendChild(el("span", { class: "pill done" }, "Live"));
    if (g.meta) foot.appendChild(el("span", { class: "muted", style: "font-size:.82rem" }, g.meta));
    foot.appendChild(el("span", { class: "go", style: "margin-left:auto" }, "Open guide →"));
    card.appendChild(foot);
    return card;
  }

  function soonCard(g) {
    var card = el("div", { class: "card soon", "aria-disabled": "true" });
    card.appendChild(el("span", { class: "badge-n", style: "background:var(--line);color:var(--ink-soft)" }, g.icon || "…"));
    card.appendChild(el("h3", null, g.title));
    card.appendChild(el("p", { class: "blurb" }, g.tagline || ""));
    if (g.topics) card.appendChild(tagRow(g.topics));
    var foot = el("div", { class: "card-foot" });
    foot.appendChild(el("span", { class: "pill todo" }, "Coming soon"));
    if (g.meta) foot.appendChild(el("span", { class: "muted", style: "font-size:.82rem" }, g.meta));
    card.appendChild(foot);
    return card;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var grid = document.getElementById("guide-grid");
    if (!grid) return;
    var guides = window.GUIDES || [];
    guides.forEach(function (g) {
      grid.appendChild(g.status === "live" ? liveCard(g) : soonCard(g));
    });
    var countLive = guides.filter(function (g) { return g.status === "live"; }).length;
    var countSoon = guides.length - countLive;
    var meta = document.getElementById("guide-meta");
    if (meta) meta.textContent = countLive + " guide" + (countLive===1?"":"s") + " live · " + countSoon + " on the way";
  });
})();
