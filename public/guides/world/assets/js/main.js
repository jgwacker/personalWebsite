/* =====================================================================
   main.js — shared chrome (header / nav / footer) + progress tracking
   for ALL guides under /guides/<slug>/.
   Reads window.GUIDE (defined by each guide's data/sections.js) so this
   file stays the same across every guide.

   No fetch(): everything is built in the DOM so the site works from a
   plain file:// double-click with no server.
   ===================================================================== */
(function () {
  "use strict";

  // ---- favicon for jaywacker.com (idempotent; safe on file:// too) ----
  if (typeof document !== "undefined" && !document.querySelector("link[rel='icon']")) {
    var __fav = document.createElement("link");
    __fav.rel = "icon";
    __fav.type = "image/svg+xml";
    __fav.href = "/favicon.svg";
    document.head.appendChild(__fav);
  }

  // ---- per-guide config (with safe fallbacks) ----
  var G = window.GUIDE || {};
  var SECTIONS   = G.sections   || [];
  var EXTRA_NAV  = G.extraNav   || [];
  var TITLE      = G.title      || "International Relations";
  var HOME_FILE  = G.homeFile   || "index.html";
  var PARENT     = G.parentLink || null;
  var STORE_KEY  = G.storeKey   || "guide.progress.v1";
  var FOOT_NOTE  = G.footerNote || "";
  // expose for other scripts on the page
  window.SECTIONS = SECTIONS;

  // ---- progress storage (best-score per section) ----
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {}
  }
  window.Progress = {
    get: loadProgress,
    record: function (id, score, total) {
      var p = loadProgress();
      var prev = p[id];
      if (!prev || score >= prev.score) { p[id] = { score: score, total: total, completed: true }; }
      saveProgress(p);
      return p;
    },
    reset: function () { saveProgress({}); }
  };

  // ---- helpers ----
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) { if (k === "class") e.className = attrs[k]; else e.setAttribute(k, attrs[k]); }
    if (html != null) e.innerHTML = html;
    return e;
  }
  function currentFile() {
    var path = location.pathname.split("/").pop();
    return path || HOME_FILE;
  }

  // ---- header / nav ----
  function buildHeader() {
    var host = document.getElementById("site-header");
    if (!host) return;
    var here = currentFile();

    var header = el("header", { class: "site-header" });
    var nav = el("nav", { class: "nav", "aria-label": "Main" });

    var brand = el("a", { class: "brand", href: HOME_FILE });
    brand.appendChild(el("span", { class: "dot", "aria-hidden": "true" }));
    brand.appendChild(el("span", null, TITLE));
    nav.appendChild(brand);

    var toggle = el("button", { class: "nav-toggle", "aria-label": "Toggle menu", "aria-expanded": "false" }, "☰");
    nav.appendChild(toggle);

    var links = el("div", { class: "nav-links", id: "nav-links" });
    SECTIONS.forEach(function (s) {
      var a = el("a", { href: s.file }, String(s.n) + ". " + s.title);
      if (s.file === here) a.classList.add("active");
      links.appendChild(a);
    });
    EXTRA_NAV.forEach(function (s) {
      var a = el("a", { href: s.file }, s.title);
      if (s.file === here) a.classList.add("active");
      links.appendChild(a);
    });
    nav.appendChild(links);

    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    header.appendChild(nav);
    host.replaceWith(header);
  }

  // ---- footer ----
  function buildFooter() {
    var host = document.getElementById("site-footer");
    if (!host) return;
    var footer = el("footer", { class: "site-footer" });
    var inner = el("div", { class: "wrap-wide" });

    var links = el("div", { class: "f-links" });
    if (PARENT) links.appendChild(el("a", { href: PARENT.href }, PARENT.label));
    links.appendChild(el("a", { href: HOME_FILE }, "This guide’s home"));
    EXTRA_NAV.forEach(function (s) {
      links.appendChild(el("a", { href: s.file }, s.title));
    });

    var note = el("div", { class: "f-note" }, FOOT_NOTE);

    inner.appendChild(links);
    if (FOOT_NOTE) inner.appendChild(note);
    footer.appendChild(inner);
    host.replaceWith(footer);
  }

  // ---- prev / next (content pages opt-in via #page-nav) ----
  function buildPageNav() {
    var host = document.getElementById("page-nav");
    if (!host || !SECTIONS.length) return;
    var here = currentFile();
    var idx = SECTIONS.findIndex(function (s) { return s.file === here; });
    if (idx === -1) return;
    var prev = SECTIONS[idx - 1];
    var next = SECTIONS[idx + 1];
    var nav = el("nav", { class: "page-nav", "aria-label": "Section navigation" });
    if (prev) nav.appendChild(el("a", { class: "prv", href: prev.file }, "← " + prev.n + ". " + prev.title));
    else      nav.appendChild(el("a", { class: "prv", href: HOME_FILE }, "← Guide home"));
    var fallbackNext = (EXTRA_NAV[0] && EXTRA_NAV[0].file) || HOME_FILE;
    var fallbackNextLabel = (EXTRA_NAV[0] && EXTRA_NAV[0].title) || "Home";
    if (next) nav.appendChild(el("a", { class: "nxt", href: next.file }, next.n + ". " + next.title + " →"));
    else      nav.appendChild(el("a", { class: "nxt", href: fallbackNext }, fallbackNextLabel + " →"));
    host.replaceWith(nav);
  }

  // ---- home: render section cards + progress panel ----
  function buildHomeGrid() {
    var grid = document.getElementById("section-grid");
    if (!grid) return;
    var prog = loadProgress();
    SECTIONS.forEach(function (s) {
      var done = prog[s.id] && prog[s.id].completed;
      var card = el("a", { class: "card", href: s.file });
      card.appendChild(el("span", { class: "badge-n" }, s.icon || String(s.n)));
      card.appendChild(el("h3", null, s.title));
      card.appendChild(el("p", { class: "blurb" }, s.blurb));
      var foot = el("div", { class: "card-foot" });
      if (done) {
        foot.appendChild(el("span", { class: "pill done" }, "Completed"));
        foot.appendChild(el("span", { class: "pill score" }, prog[s.id].score + "/" + prog[s.id].total));
      } else {
        foot.appendChild(el("span", { class: "pill todo" }, "Not started"));
      }
      foot.appendChild(el("span", { class: "go", style: "margin-left:auto" }, "Read &amp; quiz →"));
      card.appendChild(foot);
      grid.appendChild(card);
    });
  }

  function buildProgressPanel() {
    var panel = document.getElementById("progress-panel");
    if (!panel || !SECTIONS.length) return;
    render();
    function render() {
      var prog = loadProgress();
      var done = SECTIONS.filter(function (s) { return prog[s.id] && prog[s.id].completed; }).length;
      var total = SECTIONS.length;
      var pct = Math.round((done / total) * 100);
      var stars = "★".repeat(done) + "☆".repeat(total - done);
      panel.innerHTML =
        '<div style="flex:1 1 16rem">' +
          '<strong>' + done + ' of ' + total + ' sections complete</strong>' +
          '<div class="progress-bar" aria-hidden="true"><span style="width:' + pct + '%"></span></div>' +
        '</div>' +
        '<div class="progress-stars" title="' + done + '/' + total + '">' + stars + '</div>' +
        '<button class="reset-link" type="button" id="reset-progress">Reset my progress</button>';
      var btn = document.getElementById("reset-progress");
      if (btn) btn.addEventListener("click", function () {
        if (confirm("Clear all quiz progress on this device?")) {
          window.Progress.reset();
          var g = document.getElementById("section-grid");
          if (g) g.innerHTML = "";
          buildHomeGrid();
          render();
        }
      });
    }
  }

  // ---- boot ----
  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildFooter();
    buildPageNav();
    buildHomeGrid();
    buildProgressPanel();
  });
})();
