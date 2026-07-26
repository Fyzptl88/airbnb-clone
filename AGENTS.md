<!-- BEGIN:nextjs-agent-rules -->

## 1. The Architect Agent
**Objective:** Project initialization, structural integrity, and tech-stack boundaries.
*   **Workflow:** Tasked with scaffolding the Next.js App Router environment and configuring Tailwind CSS. 
*   **Key Decision:** Evaluated the initial request for a separate Node.js/Express backend and pivoted the architecture to a Next.js serverless model to avoid over-engineering static asset delivery for a single-page view.
*   **Constraints:** Enforced strict separation of React Server Components (for layout/static data) and Client Components (for interactive overlays/modals).

## 2. The Pixel-Perfect UI Auditor Agent
**Objective:** 1:1 visual replication of the reference URL.
*   **Workflow:** Operated using a strict "chunking" strategy (Hero Grid -> Two-Column Layout -> Calendar -> Reviews -> Footer). This prevented layout hallucination and CSS Grid drift.
*   **Constraints:** Zero creative freedom allowed. Required to extract exact hex codes (`#222222`, `#717171`), replicate precise Tailwind spacing (`p-`, `m-`, `gap-`), and enforce exact `border-bottom` divider weights.

## 3. The QA & Accessibility Enforcer Agent
**Objective:** Behavioral parity and accessibility compliance.
*   **Workflow:** Tasked specifically with the complex interactive overlays (Full-Screen Photo Tour and Lightbox).
*   **Constraints:** Required to implement semantic HTML, `alt` attributes for all images, and strict keyboard event listeners (`ArrowRight`, `ArrowLeft`, `Escape`) with focus-trapping inside the modal components.

## Execution Strategy
By separating concerns, the AI was never asked to "build the page." It was instructed to scaffold the frame, paint the specific UI blocks sequentially, and finally apply accessibility layers, mirroring a senior engineering workflow.

<!-- END:nextjs-agent-rules -->
