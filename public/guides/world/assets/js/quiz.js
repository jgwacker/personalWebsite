/* =====================================================================
   quiz.js — multiple-choice quiz engine.
   Mount point:  <div class="quiz" data-quiz="<id>"></div>
   Data source:  window.QUIZZES[<id>]  (from assets/data/quizzes.js)
   One question at a time, instant feedback + explanation, score ring,
   retry. Best score saved via window.Progress (main.js).
   ===================================================================== */
(function () {
  "use strict";

  var LETTERS = ["A", "B", "C", "D", "E"];

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) { if (k === "class") e.className = attrs[k]; else e.setAttribute(k, attrs[k]); }
    if (html != null) e.innerHTML = html;
    return e;
  }

  function messageFor(pct) {
    if (pct === 100) return "Perfect score. You’ve got this cold. 🌟";
    if (pct >= 75)  return "Strong work — you really understand this section.";
    if (pct >= 50)  return "Good start. Skim the section again and retry to lock it in.";
    return "Tricky material. Re-read the section, then give it another go.";
  }

  function Quiz(mount, id, data) {
    this.mount = mount;
    this.id = id;
    this.data = data;
    this.qs = data.questions;
    this.i = 0;
    this.score = 0;
    this.answered = false;
    this.render();
  }

  Quiz.prototype.render = function () {
    var q = this.qs[this.i];
    var self = this;
    this.mount.innerHTML = "";

    var head = el("div", { class: "quiz-head" });
    head.appendChild(el("p", { class: "eyebrow" }, "Check your understanding"));
    head.appendChild(el("span", { class: "quiz-progress" },
      "Question " + (this.i + 1) + " of " + this.qs.length));
    this.mount.appendChild(head);

    if (this.data.title && this.i === 0) {
      // title only shown subtly; section already has its own heading
    }

    this.mount.appendChild(el("p", { class: "q-prompt" }, q.prompt));

    var opts = el("div", { class: "q-options", role: "group", "aria-label": "Answer choices" });
    q.options.forEach(function (text, idx) {
      var b = el("button", { class: "q-option", type: "button" });
      b.appendChild(el("span", { class: "key", "aria-hidden": "true" }, LETTERS[idx]));
      b.appendChild(el("span", { class: "opt-text" }, text));
      b.addEventListener("click", function () { self.choose(idx, b, opts); });
      opts.appendChild(b);
    });
    this.mount.appendChild(opts);

    var fb = el("div", { class: "q-feedback", id: "qfb", "aria-live": "polite" });
    this.mount.appendChild(fb);

    var actions = el("div", { class: "quiz-actions" });
    var next = el("button", { class: "btn", id: "q-next", disabled: "true" },
      this.i === this.qs.length - 1 ? "See results" : "Next question");
    next.addEventListener("click", function () {
      if (self.i === self.qs.length - 1) self.results();
      else { self.i++; self.render(); self.scrollIntoView(); }
    });
    actions.appendChild(next);
    this.mount.appendChild(actions);
  };

  Quiz.prototype.scrollIntoView = function () {
    var top = this.mount.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: top, behavior: "smooth" });
  };

  Quiz.prototype.choose = function (idx, btn, opts) {
    if (this.answered) return;
    this.answered = true;
    var q = this.qs[this.i];
    var correct = q.correct;
    var buttons = opts.querySelectorAll(".q-option");

    buttons.forEach(function (b, j) {
      b.disabled = true;
      if (j === correct) b.classList.add("correct");
      else if (j === idx) b.classList.add("wrong");
      else b.classList.add("dim");
    });

    var right = idx === correct;
    if (right) this.score++;

    var fb = document.getElementById("qfb");
    fb.classList.add("show", right ? "right" : "wrong-fb");
    fb.innerHTML = '<span class="verdict">' +
      (right ? "✓ Correct" : "✗ Not quite — the answer is " + LETTERS[correct]) +
      '</span>' + q.explanation;

    var next = document.getElementById("q-next");
    next.removeAttribute("disabled");
    next.focus();
  };

  Quiz.prototype.results = function () {
    var total = this.qs.length;
    var pct = Math.round((this.score / total) * 100);
    if (window.Progress) window.Progress.record(this.id, this.score, total);
    // let the page react (e.g. the Final Challenge reveals a certificate)
    this.mount.dispatchEvent(new CustomEvent("quizcomplete", {
      bubbles: true, detail: { id: this.id, score: this.score, total: total, pct: pct }
    }));

    this.mount.innerHTML = "";
    var wrap = el("div", { class: "quiz-result" });
    wrap.appendChild(el("p", { class: "eyebrow" }, "Quiz complete"));

    var ring = el("div", { class: "score-ring", style: "--pct:" + pct + "%" });
    var inner = el("div", { class: "inner" });
    inner.appendChild(el("span", { class: "pctnum" }, pct + "%"));
    inner.appendChild(el("span", { class: "frac" }, this.score + " / " + total));
    ring.appendChild(inner);
    wrap.appendChild(ring);

    wrap.appendChild(el("p", { class: "result-msg" }, messageFor(pct)));

    var actions = el("div", { class: "quiz-actions", style: "justify-content:center" });
    var retry = el("button", { class: "btn ghost", type: "button" }, "↺ Try again");
    var self = this;
    retry.addEventListener("click", function () {
      self.i = 0; self.score = 0; self.answered = false; self.render(); self.scrollIntoView();
    });
    actions.appendChild(retry);

    // optional continue link supplied by the page via data-next attribute
    var nextHref = self.mount.getAttribute("data-next");
    var nextLabel = self.mount.getAttribute("data-next-label") || "Continue →";
    if (nextHref) actions.appendChild(el("a", { class: "btn", href: nextHref }, nextLabel));
    wrap.appendChild(actions);

    this.mount.appendChild(wrap);
  };

  // mount all quizzes on the page; reset per-question flag on each render
  document.addEventListener("DOMContentLoaded", function () {
    var mounts = document.querySelectorAll(".quiz[data-quiz]");
    mounts.forEach(function (m) {
      var id = m.getAttribute("data-quiz");
      var data = (window.QUIZZES || {})[id];
      if (!data) { m.innerHTML = '<p class="muted">Quiz data not found for “' + id + '”.</p>'; return; }
      // wrap each render so `answered` resets when a new question renders
      var q = new Quiz(m, id, data);
      var origRender = q.render.bind(q);
      q.render = function () { q.answered = false; origRender(); };
      // first render already ran in ctor with answered=false; subsequent ones via this wrapper
    });
  });
})();
