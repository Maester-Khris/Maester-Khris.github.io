// One-off/pre-push script: renders portfolioProjects into static HTML so
// crawlers that don't execute JS (many AI answer-engine bots) can read
// project content. Run after any edit to portfolioData.js, before pushing.
import { readFileSync, writeFileSync } from "node:fs";
import { portfolioProjects } from "../portfolioData.js";

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

writeFileSync("index.html", updated);
console.log("Wrote", portfolioProjects.length, "project cards into index.html");
