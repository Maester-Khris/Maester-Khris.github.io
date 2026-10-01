// Guided demos of three systems. Rendered to static HTML by
// scripts/build-projects.mjs (run after editing). `pending` is the registry of
// content we know is missing: never rendered, printed by the build script.
// Rule: every caption must be backed by the screen and by code. No exceptions.
export const showroomBays = [
    {
        id: 'fintech',
        tab: 'Fintech',
        name: 'LedgerLens',
        pitch: 'AI proposes, a human approves, the ledger stays correct.',
        problem: 'Advisers need answers from contracts they can trust, and corrections that never touch the books unchecked.',
        system: 'Document-intelligence chat over advisory contracts with a verification gate, on top of a double-entry ledger.',
        numbers: [['387', 'backend tests'], ['30', 'case eval gate'], ['258', 'commits']],
        steps: [
            { img: 'showroom/ll-1-dashboard.webp', title: 'Landing', proves: 'A working product shell, with the ledger and review queue next to the chat.' },
            { img: 'showroom/ll-2-contracts.webp', title: 'Contracts in scope', proves: 'Parsed contracts become scoped context, with suggested questions drawn from them.' },
            { img: 'showroom/ll-3-cited-answer.webp', title: 'Cited answer', proves: 'Every figure in the answer links to the page it came from; the model does not calculate.' },
            { img: 'showroom/ll-4-approval.webp', title: 'Human approval gate', proves: 'A fee mismatch becomes a proposed balanced journal entry that waits for a person. Demo mode: nothing is written.' },
            { img: 'showroom/ll-5-audit.webp', title: 'Audit trail', proves: 'Each AI decision is logged with tool, model, prompt hash and inputs.' },
        ],
        cta: [{ label: 'Try the live demo', href: 'https://ledgerlens.nknext.dev' }],
        pending: [
            'LedgerLens: approved-state shot or 8-15s clip of the approval flow (owner recorded e2e test 2026-10-01)',
            'LedgerLens: SHA-256 audit export screen. Do NOT claim an export or hash chain until a capture exists',
        ],
    },
    {
        id: 'healthtech',
        tab: 'Healthtech',
        name: 'MediCoord AI',
        pitch: 'An AI triage that is not allowed to invent a clinic.',
        problem: 'Patients need a nearby, appropriate facility, and a language model alone will happily make one up.',
        system: 'One LLM pass classifies severity, a deterministic PostGIS backend picks a real facility, a second pass writes the reply.',
        numbers: [['0.956', 'DeepEval faithfulness'], ['13/13', 'data-quality tests'], ['400+', 'commits']],
        steps: [
            { img: 'showroom/mc-1-map.webp', title: 'Chat and facility map', proves: 'The city\'s 308 facilities are real records on a live map, next to the assistant.' },
            { img: 'showroom/mc-2-triage.webp', title: 'Follow-up questions', proves: 'The agent asks targeted clarifying questions before deciding severity.' },
            { img: 'showroom/mc-3-result.webp', title: 'Severity and real facility', proves: 'An ESI-style urgency, a real nearby clinic with drive, cycle and walk times, and the route on the map.' },
            { img: 'shots/medicoord/2026-09-10_09-38-09.webp', title: 'Agent graph', proves: 'The two-pass design: tools return facts, confidence gates decide between follow-up, answer and human handoff.' },
            { img: 'shots/medicoord/2026-08-03_22-10-48.webp', title: 'GraphRAG experiment', proves: 'A SNOMED-CT graph was built and measured, and the best retrieval did not give the best triage. That result is reported as found.' },
        ],
        cta: [
            { label: 'Try the live demo', href: 'https://medicoord.nknext.dev/' },
            { label: 'Engineering case study', href: 'https://medicoord.nknext.dev/for-engineers' },
        ],
        pending: [],
    },
    {
        id: 'docai',
        tab: 'Document AI',
        name: 'docciter',
        pitch: 'From PDF region to citable data.',
        problem: 'Answers over technical drawings are only useful if they can point to the exact page and region they came from.',
        system: 'React and FastAPI workspace: draw capture and ignore regions on PDFs and OCR them. The cited-answer step is designed, not built.',
        numbers: [],
        steps: [
            { video: 'ZiVLsYXapM0', title: 'Walkthrough', proves: 'The annotation workflow in motion, recorded by the author.' },
            { img: 'showroom/dc-3-annotation.webp', title: 'Annotation', proves: 'Capture and ignore tools on a real construction drawing set; the inspector lists regions as they are drawn.' },
            { img: 'showroom/dc-2-extraction.webp', title: 'Extraction hub', proves: 'Where captured regions are meant to land as tagged entities with source and match status. Layout with sample rows.' },
            { img: 'showroom/dc-1-workspace.webp', title: 'Corpus workspace', proves: 'Document list and ingestion status. The tile figures are design placeholders: the vector store is not connected.' },
            { img: 'showroom/dc-4-citation-preview.webp', title: 'Citation UI preview', proves: 'Chat with a source-grounding inspector. Honest status: no answering engine is connected yet; this previews the citation UI.' },
        ],
        cta: [{ label: 'Watch the walkthrough', href: 'https://www.youtube.com/watch?v=ZiVLsYXapM0' }],
        pending: [
            'docciter: build retrieval and cited answers, then replace the citation preview and placeholder dashboard tiles with real screens (the portfolio card already says "retrieval planned, not built", which matches today)',
            'docciter: confirm the YouTube walkthrough only shows features that exist today; update its caption if not',
            'docciter: card images docciter-workspace.webp / docciter-annotations.webp in portfolioData.js may be design-phase mocks; check and replace with showroom/dc-* shots',
            'docciter: live demo URL, if one is ever hosted',
        ],
    },
];

// A step is { img | clip (+poster) | video (YouTube id), title, proves }.
// Content with no home yet (not tied to a bay): LedgerLens/MediCoord 8-15s silent
// looping clips (~1-2MB each) to replace stills; architecture toggle per bay.
export const showroomBacklog = [
    '8-15s silent looping clips per bay (screenshots are the fallback)',
    'Architecture toggle per bay',
];
