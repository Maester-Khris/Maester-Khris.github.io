import { portfolioProjects } from "../../portfolioData.js";

/* ── About+Community mosaic carousel ─────────────────────────────────── */
(() => {
  const pages = document.querySelectorAll(".ac-page");
  const dots = document.querySelectorAll(".ac-dot");
  let current = 0;

  function goTo(n) {
    pages[current].classList.remove("is-active");
    dots[current].classList.remove("is-active");
    current = ((n % pages.length) + pages.length) % pages.length;
    pages[current].classList.add("is-active");
    dots[current].classList.add("is-active");
  }

  document
    .getElementById("ac-prev")
    .addEventListener("click", () => goTo(current - 1));
  document
    .getElementById("ac-next")
    .addEventListener("click", () => goTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));
})();

/* ── Side nav scroll-spy ──────────────────────────────────────────────── */
(() => {
  const links = document.querySelectorAll(".side-nav-link[data-section]");

  function update() {
    const mid = window.scrollY + window.innerHeight * 0.4;
    let activeId = null;
    document.querySelectorAll("section[id]").forEach((sec) => {
      if (sec.offsetTop <= mid) activeId = sec.id;
    });
    links.forEach((l) =>
      l.classList.toggle("is-active", l.dataset.section === activeId),
    );
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
})();

/* ── Hero typing effect + terminal replay ────────────────────────────── */
(() => {
  const PHRASES = [
    "a Backend Developer",
    "designing systems",
    "orchestrating pipelines",
    "shipping AI infrastructure",
    "monitoring production",
    "a Software Engineer",
  ];
  const TYPE_SPEED = 60;
  const ERASE_SPEED = 35;
  const PAUSE_MS = 1300;

  const el = document.getElementById("hero-typed-text");
  let phraseIdx = 0;
  let charIdx = 0;
  let erasing = false;

  function tick() {
    const phrase = PHRASES[phraseIdx];
    const isFinal = phraseIdx === PHRASES.length - 1;

    if (!erasing) {
      charIdx++;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx < phrase.length) {
        setTimeout(tick, TYPE_SPEED);
      } else if (!isFinal) {
        setTimeout(() => {
          erasing = true;
          tick();
        }, PAUSE_MS);
      }
    } else {
      charIdx--;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx > 0) {
        setTimeout(tick, ERASE_SPEED);
      } else {
        erasing = false;
        phraseIdx++;
        setTimeout(tick, 220);
      }
    }
  }

  tick();

  const LINES = [
    { cls: "tl-prompt", text: "$ curl -X POST https://api.acme.io/v1/orders \\" },
    { cls: "tl-cmd", text: '    -H "Authorization: Bearer $TOKEN" -d @payload.json' },
    { cls: "tl-dim", text: "* Connecting to api.acme.io:443 …" },
    { cls: "tl-ok", text: "* SSL handshake OK  (TLS 1.3, 22ms)" },
    { cls: "tl-ok", text: "→ Auth verified      [jwt: valid, scope: orders:write]" },
    { cls: "tl-ok", text: "→ Cache              [HIT — inventory snapshot, age 4s]" },
    { cls: "tl-warn", text: "→ Inventory lock     [acquired +89ms]  ⚠ slow" },
    { cls: "tl-dim", text: "→ Payment gateway    [Stripe charge_id: ch_3Px…Kz]" },
    { cls: "tl-status", text: "< HTTP/2 201 Created" },
    { cls: "tl-dim", text: "< x-request-id: 8f3a-c12d | x-latency: 214ms" },
    { cls: "tl-warn", text: "⚠ p95 latency 214ms — review lock contention" },
  ];
  const LINE_DELAY = 75;
  const SLOW_PAUSE = 520;
  const LOOP_PAUSE = 3200;

  const body = document.getElementById("terminal-body");

  function playTerminal() {
    body.innerHTML = "";
    let delay = 0;
    LINES.forEach((line, i) => {
      const extra = line.cls === "tl-warn" && i === 6 ? SLOW_PAUSE : 0;
      delay += LINE_DELAY + extra;
      setTimeout(() => {
        const span = document.createElement("span");
        span.className = `tl ${line.cls}`;
        span.textContent = line.text;
        body.appendChild(span);
      }, delay);
    });
    setTimeout(playTerminal, delay + LOOP_PAUSE);
  }

  playTerminal();
})();

/* ── Resume tab filter ────────────────────────────────────────────────── */
(() => {
  const tabs = document.querySelectorAll("#rv2-tabs .rv2-tab");
  const cards = document.querySelectorAll(".rv2-card");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      const f = tab.dataset.filter;
      cards.forEach((c) => {
        c.classList.toggle("rv2-hidden", f !== "all" && c.dataset.type !== f);
      });
    });
  });
})();

/* ── Expertise accordion ──────────────────────────────────────────────── */
(() => {
  const deck = document.getElementById("expertise-deck");
  if (!deck) return;
  deck.addEventListener("click", (e) => {
    const card = e.target.closest(".exp-card");
    if (!card || card.classList.contains("is-active")) return;
    deck
      .querySelectorAll(".exp-card.is-active")
      .forEach((c) => c.classList.remove("is-active"));
    card.classList.add("is-active");
  });
})();

/* ── Portfolio grid + modal ───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  const projectMap = new Map(portfolioProjects.map((p) => [p.projectId, p]));
  const grid = document.getElementById("pf-grid");

  portfolioProjects.forEach((p) => {
    const tagRow = p.keywords
      .slice(0, 3)
      .map((k) => k.toUpperCase())
      .join(" · ");

    const card = document.createElement("div");
    card.className = "pf-card";
    card.dataset.projectId = p.projectId;
    card.dataset.category = p.category || "fullstack";
    card.dataset.stack = p.keywords.join(",");
    card.dataset.type = p.type || "";
    card.dataset.year = p.year || "";
    card.dataset.github = p.github || "";
    card.dataset.live = p.live_url || "";
    card.dataset.images = p.images.join(",");
    card.dataset.highlights = JSON.stringify(p.highlights || []);

    card.innerHTML =
      '<div class="pf-thumb">' +
      '<img src="assets/img/' +
      p.images[0] +
      '" alt="' +
      p.title +
      '" class="pf-thumb-img" loading="lazy">' +
      '<div class="pf-thumb-overlay"><span class="pf-view-pill">View project</span></div>' +
      "</div>" +
      '<div class="pf-body">' +
      '<div class="pf-tag-row">' +
      tagRow +
      "</div>" +
      '<h3 class="pf-card-title">' +
      p.title +
      "</h3>" +
      '<p class="pf-card-desc">' +
      (p.shortDesc || "") +
      "</p>" +
      '<div class="pf-card-footer">' +
      '<span class="pf-type-label">' +
      (p.type || "") +
      "</span>" +
      '<span class="pf-arrow-box">' +
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>' +
      "</svg>" +
      "</span>" +
      "</div>" +
      "</div>";

    grid.appendChild(card);
  });

  const pills = document.querySelectorAll("#pf-filters .pf-pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("is-active"));
      pill.classList.add("is-active");
      const f = pill.dataset.filter;
      document.querySelectorAll(".pf-card").forEach((c) => {
        c.classList.toggle("pf-hidden", f !== "all" && c.dataset.category !== f);
      });
    });
  });

  const overlay = document.getElementById("pf-overlay");
  const modal = document.getElementById("pf-modal");

  function buildModalMedia(images, projectId, type) {
    const controls =
      '<span class="pf-modal-type-badge">' +
      type +
      "</span>" +
      '<button class="pf-modal-close" id="pf-close" aria-label="Close">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>' +
      "</svg>" +
      "</button>";
    if (images.length === 1) {
      return (
        '<div class="pf-modal-thumb">' +
        '<img src="assets/img/' +
        images[0] +
        '" alt="" class="pf-modal-thumb-img">' +
        controls +
        "</div>"
      );
    }
    const cid = "pf-mc-" + projectId;
    const dots = images
      .map(
        (_, i) =>
          '<button type="button" data-bs-target="#' +
          cid +
          '" data-bs-slide-to="' +
          i +
          '"' +
          (i === 0 ? ' class="active" aria-current="true"' : "") +
          ' aria-label="Slide ' +
          (i + 1) +
          '"></button>',
      )
      .join("");
    const slides = images
      .map(
        (img, i) =>
          '<div class="carousel-item' +
          (i === 0 ? " active" : "") +
          '">' +
          '<img src="assets/img/' +
          img +
          '" class="pf-modal-carousel-img" alt="Slide ' +
          (i + 1) +
          '">' +
          "</div>",
      )
      .join("");
    return (
      '<div class="pf-modal-thumb">' +
      '<div id="' +
      cid +
      '" class="carousel slide h-100" data-bs-ride="carousel">' +
      '<div class="carousel-indicators">' +
      dots +
      "</div>" +
      '<div class="carousel-inner h-100">' +
      slides +
      "</div>" +
      '<button class="carousel-control-prev" type="button" data-bs-target="#' +
      cid +
      '" data-bs-slide="prev">' +
      '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
      '<span class="visually-hidden">Previous</span>' +
      "</button>" +
      '<button class="carousel-control-next" type="button" data-bs-target="#' +
      cid +
      '" data-bs-slide="next">' +
      '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
      '<span class="visually-hidden">Next</span>' +
      "</button>" +
      "</div>" +
      controls +
      "</div>"
    );
  }

  function openModal(card) {
    const d = card.dataset;
    const project = projectMap.get(d.projectId);
    const highlights = JSON.parse(d.highlights || "[]");
    const images = d.images ? d.images.split(",") : [];

    const pillsHtml = d.stack
      .split(",")
      .map((s) => '<span class="pf-modal-pill">' + s.trim() + "</span>")
      .join("");

    const hlHtml = highlights.length
      ? '<div class="pf-modal-divider"></div>' +
        '<span class="pf-modal-section-label">Engineering highlights</span>' +
        '<div class="pf-highlights-grid">' +
        highlights
          .map(
            (h) =>
              '<div class="pf-highlight-cell">' +
              '<div class="pf-highlight-header">' +
              '<span class="pf-highlight-dot"></span>' +
              '<span class="pf-highlight-title">' +
              h.title +
              "</span>" +
              "</div>" +
              '<p class="pf-highlight-detail">' +
              h.detail +
              "</p>" +
              "</div>",
          )
          .join("") +
        "</div>"
      : "";

    const rawDesc = project ? project.description : "";
    const descHtml = typeof rawDesc === "string" ? rawDesc : "";

    const githubBtn = d.github
      ? '<a href="' +
        d.github +
        '" target="_blank" rel="noopener" class="pf-btn-ghost">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>' +
        "</svg>GitHub</a>"
      : "";

    const liveBtn = d.live
      ? '<a href="' +
        d.live +
        '" target="_blank" rel="noopener" class="pf-btn-primary">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>' +
        "</svg>Live Demo</a>"
      : "";

    modal.innerHTML =
      buildModalMedia(images, d.projectId, d.type) +
      '<div class="pf-modal-body">' +
      '<div class="pf-modal-pills">' +
      pillsHtml +
      "</div>" +
      '<h2 class="pf-modal-title"></h2>' +
      '<span class="pf-modal-sublabel">' +
      d.year +
      " · " +
      d.type +
      "</span>" +
      '<div class="pf-modal-divider"></div>' +
      '<span class="pf-modal-section-label">Overview</span>' +
      '<div class="pf-modal-desc">' +
      descHtml +
      "</div>" +
      hlHtml +
      "</div>" +
      '<div class="pf-modal-footer">' +
      '<span class="pf-modal-year">' +
      d.year +
      "</span>" +
      '<div class="pf-modal-actions">' +
      githubBtn +
      liveBtn +
      "</div>" +
      "</div>";

    modal.querySelector(".pf-modal-title").textContent = d.title;

    overlay.classList.add("is-open");
    overlay.removeAttribute("aria-hidden");
    document.body.style.overflow = "hidden";
    document.getElementById("pf-close").addEventListener("click", closeModal);
  }

  function closeModal() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open"))
      closeModal();
  });
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".pf-card");
    if (card) openModal(card);
  });
});
