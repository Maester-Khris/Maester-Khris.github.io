// Showroom: bay tabs, carousel (arrows, dots, swipe, keys, autoplay while in view),
// deep links (#showroom-<bay>), click-to-load YouTube, looping clips.
(() => {
  const root = document.getElementById("showroom");
  if (!root) return;
  const bays = [...root.querySelectorAll(".sr-bay")];
  const tabs = [...root.querySelectorAll(".sr-tabs [data-bay]")];
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.add("sr-js");

  const inView = new IntersectionObserver(
    (es) => es.forEach((e) => {
      e.target.classList.toggle("sr-visible", e.isIntersecting);
      if (e.isIntersecting) e.target.classList.add("sr-in");
      e.target.update();
    }),
    { threshold: 0.35 }
  );

  bays.forEach((bay) => {
    const track = bay.querySelector(".sr-steps");
    const steps = [...bay.querySelectorAll(".sr-step")];
    const dots = [...bay.querySelectorAll(".sr-dot")];
    const stage = bay.querySelector(".sr-stage");
    let cur = 0;
    let stopped = still; // user interaction (or reduced motion) ends autoplay

    // autoplay only while visible, not hovered, and on a plain image slide
    bay.update = () => {
      const media = steps[cur].querySelector(".sr-video, video");
      bay.classList.toggle("sr-playing", !stopped && !media && bay.classList.contains("sr-visible") && !bay.hidden);
      steps.forEach((s, i) => {
        const v = s.querySelector("video");
        if (!v) return;
        if (i === cur && bay.classList.contains("sr-visible")) {
          if (v.dataset.src) { v.src = v.dataset.src; delete v.dataset.src; }
          v.play().catch(() => {});
        } else v.pause();
      });
    };
    const go = (i, byUser) => {
      cur = (i + steps.length) % steps.length;
      if (byUser) stopped = true;
      track.style.transform = "translateX(" + -cur * 100 + "%)";
      dots.forEach((d, j) => d.classList.toggle("is-active", j === cur));
      steps.forEach((s, j) => {
        s.classList.toggle("is-active", j === cur);
        s.inert = j !== cur;
      });
      bay.update();
    };
    go(0);
    dots.forEach((d, i) => d.addEventListener("click", () => go(i, true)));
    bay.querySelector(".sr-prev").addEventListener("click", () => go(cur - 1, true));
    bay.querySelector(".sr-next").addEventListener("click", () => go(cur + 1, true));
    stage.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") go(cur - 1, true);
      if (e.key === "ArrowRight") go(cur + 1, true);
    });
    dots.forEach((d) => d.addEventListener("animationend", () => go(cur + 1)));
    bay.addEventListener("mouseenter", () => bay.classList.add("sr-paused"));
    bay.addEventListener("mouseleave", () => bay.classList.remove("sr-paused"));
    let x0 = null;
    stage.addEventListener("pointerdown", (e) => (x0 = e.clientX));
    stage.addEventListener("pointerup", (e) => {
      if (x0 !== null && Math.abs(e.clientX - x0) > 50) go(cur + (e.clientX < x0 ? 1 : -1), true);
      x0 = null;
    });
    inView.observe(bay);
  });

  const show = (id) => {
    bays.forEach((b) => {
      b.hidden = b.id !== "showroom-" + id;
      b.update();
    });
    tabs.forEach((t) => {
      t.classList.toggle("is-active", t.dataset.bay === id);
      t.setAttribute("aria-selected", t.dataset.bay === id);
    });
  };
  tabs.forEach((t) =>
    t.addEventListener("click", () => {
      show(t.dataset.bay);
      history.replaceState(null, "", "#showroom-" + t.dataset.bay);
    })
  );
  const fromHash = () => {
    const m = location.hash.match(/^#showroom-(\w+)/);
    if (m && bays.some((b) => b.id === "showroom-" + m[1])) {
      show(m[1]);
      root.scrollIntoView();
    }
  };
  fromHash();
  addEventListener("hashchange", fromHash);

  root.querySelectorAll(".sr-video").forEach((v) =>
    v.addEventListener("click", () => {
      const f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + v.dataset.yt + "?autoplay=1";
      f.allow = "autoplay; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      f.title = v.getAttribute("aria-label");
      f.className = "sr-video sr-video-live";
      v.replaceWith(f);
    })
  );
})();
