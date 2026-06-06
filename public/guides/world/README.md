# Guides to the World

A growing collection of short, illustrated, locally-running study guides on
**international relations as it happens.** Each guide takes one current story
and walks the reader from the basic facts to the international-relations ideas
that make sense of it, with maps, timelines, debate-forward analysis, and quizzes
after every section.

The first guide — **Ebola &amp; the World** — covers the 2026 Bundibugyo Ebola
outbreak in DR Congo and Uganda and the U.S. policy decisions that intersect with it.

## How to open it

It's a plain website — **no installation, no build step.**

- **Easiest:** double-click `index.html` (the splash page) and pick a guide.
  Works entirely offline in any modern browser.
- **Optional** (if your browser is strict about `file://`): from this folder run
  ```bash
  python3 -m http.server 8000
  ```
  and visit `http://localhost:8000`.

## Project layout

```
international_relations/
  index.html                      # the SPLASH — lists every guide
  README.md
  assets/                         # shared design system, used by every guide
    css/styles.css                # all the styling
    js/main.js                    # shared header/nav/footer + progress tracking
    js/quiz.js                    # the quiz engine
    js/splash.js                  # renders the splash's guide grid
    data/guides.js                # registry of all available guides
  guides/
    ebola-2026/                   # one self-contained guide
      index.html, ebola.html, …   # the eight content pages + final quiz + sources
      data/sections.js            # this guide's title, sections, nav, footer note
      data/quizzes.js             # this guide's quiz questions
      notes/                      # the sourced research the content was built from
```

Shared CSS/JS lives once at the top; everything that is guide-specific (content,
quiz questions, the section list, the brand name) lives inside that guide's folder.

## Adding another guide

The whole reason for the splash. Roughly 30 minutes once you have your research.

1. **Copy the existing guide as a template:**
   ```bash
   cp -R guides/ebola-2026 guides/<your-slug>
   ```
2. **Edit the per-guide settings** in `guides/<your-slug>/data/sections.js`:
   set `title`, the six `sections` (id, file, title, blurb, icon), and the
   `footerNote`. Bump the `storeKey` so this guide gets its own progress.
3. **Rewrite the content** in each of the section HTML pages
   (keep the structural building blocks — `callout`, `perspectives`,
   `stat-strip`, `timeline`, `compare` — they all work the same).
4. **Rewrite the quizzes** in `guides/<your-slug>/data/quizzes.js` —
   the format is documented in that file's header comment. Aim for distractors
   of similar length to the correct answer, with correct answers spread across
   A, B, C, and D.
5. **Register the guide** by adding an entry to `assets/data/guides.js` with
   `status: "live"` and the path to its `index.html`.

You're done — the splash will pick it up on the next reload.

## Editing the existing Ebola guide

Open `guides/ebola-2026/`. Each section is a normal HTML file you can edit
directly; the quiz questions live in `guides/ebola-2026/data/quizzes.js`.

A quiz appears wherever a page has `<div class="quiz" data-quiz="<id>"></div>`;
each `<id>` must match a key in `quizzes.js`:

```js
"ebola": {
  title: "What Ebola Is",
  questions: [
    {
      prompt: "Your question?",
      options: ["A", "B", "C", "D"],
      correct: 1,
      explanation: "Shown after the user answers."
    }
  ]
}
```

## A note on accuracy and balance

- **Figures are point-in-time** and will go out of date.
- **Sources** for every claim live on each guide's Sources page; the research
  notes used to write the content are in that guide's `notes/`.
- The Ebola guide's Section 5 is deliberately **debate-forward**: it presents the
  strongest version of both sides and asks the reader to weigh them. Modeled
  estimates are labeled as estimates and attributed to who produced them.
- All maps and diagrams are original schematic illustrations; no third-party
  images are used.
