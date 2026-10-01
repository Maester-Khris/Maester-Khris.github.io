// One-off/pre-push script: renders portfolioProjects into static HTML so
// crawlers that don't execute JS (many AI answer-engine bots) can read
// project content. Run after any edit to portfolioData.js, before pushing.
import { readFileSync, writeFileSync } from "node:fs";
import { portfolioProjects } from "../portfolioData.js";
import { showroomBays, showroomBacklog } from "../showroomData.js";

function renderCard(p) {
  const tagRow = p.keywords
    .slice(0, 3)
    .map((k) => k.toUpperCase())
    .join(" · ");

  return (
    '<div class="pf-card" data-project-id="' +
    p.projectId +
    '" data-category="' +
    (p.category || "fullstack") +
    '" data-stack="' +
    p.keywords.join(",") +
    '" data-type="' +
    (p.type || "") +
    '" data-year="' +
    (p.year || "") +
    '" data-github="' +
    (p.github || "") +
    '" data-live="' +
    (p.live_url || "") +
    '" data-images="' +
    p.images.join(",") +
    '" data-highlights=\'' +
    JSON.stringify(p.highlights || []) +
    "'>" +
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
    "</div>" +
    "</div>"
  );
}

const html = readFileSync("index.html", "utf8");
const cardsHtml = portfolioProjects.map(renderCard).join("\n");
const start = "<!-- projects:start -->";
const end = "<!-- projects:end -->";
const startIdx = html.indexOf(start);
const endIdx = html.indexOf(end);
if (startIdx === -1 || endIdx === -1) {
  throw new Error("projects:start/end markers not found in index.html");
}
const updated =
  html.slice(0, startIdx + start.length) +
  "\n" +
  cardsHtml +
  "\n" +
  html.slice(endIdx);


const esc = (t) =>
  String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function renderStep(b, s, k) {
  let media;
  if (s.video) media = `<button type="button" class="sr-video" data-yt="${esc(s.video)}" aria-label="Play: ${esc(b.name + " " + s.title)}"><span class="sr-play">&#9654;</span><span>Play ${esc(s.title.toLowerCase())}</span></button>`;
  else if (s.clip) media = `<video muted loop playsinline preload="none" poster="assets/img/${esc(s.poster || "")}" data-src="assets/img/${esc(s.clip)}"></video>`;
  else media = `<img src="assets/img/${esc(s.img)}" alt="${esc(b.name + ": " + s.title)}" loading="lazy">`;
  return `<li class="sr-step${k === 0 ? " is-active" : ""}"><figure><div class="sr-frame">${media}</div><figcaption><b>${k + 1}. ${esc(s.title)}</b><span>${esc(s.proves)}</span></figcaption></figure></li>`;
}

function renderBay(b, i) {
  const nums = b.numbers.length
    ? '<ul class="sr-numbers">' + b.numbers.map(([n, l]) => `<li><b>${esc(n)}</b><span>${esc(l)}</span></li>`).join("") + "</ul>"
    : "";
  const dots = b.steps
    .map((s, k) => `<button type="button" class="sr-dot${k === 0 ? " is-active" : ""}" data-step="${k}"><i>${k + 1}</i><span>${esc(s.title)}</span></button>`)
    .join("");
  const cta = b.cta.map((c) => `<a class="sr-cta" href="${esc(c.href)}" target="_blank" rel="noopener">${esc(c.label)} &rarr;</a>`).join("");
  return (
    `<div class="sr-bay" id="showroom-${b.id}" role="tabpanel"${i ? " hidden" : ""}>` +
    `<div class="sr-head"><div><h3 class="sr-pitch">${esc(b.name)}: ${esc(b.pitch)}</h3>` +
    `<p class="sr-line"><b>Problem</b> ${esc(b.problem)}</p><p class="sr-line"><b>System</b> ${esc(b.system)}</p></div>${nums}</div>` +
    `<div class="sr-stage" tabindex="0" role="group" aria-roledescription="carousel" aria-label="${esc(b.name)} walkthrough">` +
    `<div class="sr-viewport"><ol class="sr-steps">${b.steps.map((s, k) => renderStep(b, s, k)).join("")}</ol></div>` +
    `<button type="button" class="sr-arrow sr-prev" aria-label="Previous step">&#8249;</button><button type="button" class="sr-arrow sr-next" aria-label="Next step">&#8250;</button></div>` +
    `<div class="sr-dots" role="group" aria-label="Walkthrough steps">${dots}</div>` +
    `<div class="sr-actions">${cta}</div></div>`
  );
}

const sr = { start: "<!-- showroom:start -->", end: "<!-- showroom:end -->" };
const tabs =
  '<div class="pf-filters sr-tabs" role="tablist">' +
  showroomBays
    .map((b, i) => `<button type="button" role="tab" class="pf-pill${i ? "" : " is-active"}" data-bay="${b.id}">${esc(b.tab)}: ${esc(b.name)}</button>`)
    .join("") +
  "</div>";
const showroomHtml = tabs + showroomBays.map(renderBay).join("");
const a = updated.indexOf(sr.start);
const z = updated.indexOf(sr.end);
if (a === -1 || z === -1) throw new Error("showroom:start/end markers not found in index.html");
writeFileSync("index.html", updated.slice(0, a + sr.start.length) + "\n" + showroomHtml + "\n" + updated.slice(z));
console.log("Wrote", portfolioProjects.length, "project cards and", showroomBays.length, "showroom bays into index.html");

const pending = [...showroomBays.flatMap((b) => b.pending.map((t) => t)), ...showroomBacklog];
if (pending.length) console.log("\nSHOWROOM PENDING (not yet shown):\n - " + pending.join("\n - "));
