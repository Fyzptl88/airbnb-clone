---
name: pixel-perfect-ui-auditor
description: Audits Next.js and Tailwind CSS code against a provided reference design to ensure exact visual and behavioral parity. Use this when the user needs to fix UI margins, padding, grids, or typography.
---

# Goal
Ensure the provided frontend code is a 1:1 pixel-perfect clone of the requested reference UI, utilizing standard Tailwind CSS practices.

## Workflow
1. Analyze the provided code snippet against the requested layout block from the reference URL.
2. Identify any deviations in spacing (margins/padding), typography, flexbox/grid alignments, or color choices.
3. Refactor the Tailwind classes to enforce exact visual parity. 

## Constraints
- Do not invent custom hex colors; strictly use extracted values (e.g., `text-[#222222]`) or standard Tailwind grays.
- Do not modify the underlying Next.js routing, server actions, or state logic; only alter the presentation layer.
- Do not remove existing accessibility attributes (e.g., `aria-label`, `tabIndex`, keyboard event listeners).
- Output the complete, refactored React component—do not omit code for brevity.