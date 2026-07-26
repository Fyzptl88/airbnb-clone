---
name: nextjs-code-quality-enforcer
description: Reviews and refactors Next.js App Router code to enforce modern React standards, server/client component boundaries, and performance best practices. Use when generating new components or reviewing project architecture.
---

# Goal
Maintain enterprise-grade code quality within the Next.js ecosystem, ensuring strict adherence to rendering boundaries and structural best practices.

## Instructions
1. Check the file directive: ensure the `"use client"` directive is only placed at the top of components that require React hooks (`useState`, `useEffect`) or browser APIs.
2. Default to React Server Components (RSC) for all static layouts, UI shells, and direct data-fetching modules.
3. Verify that all images utilize the `next/image` component for automatic optimization, and ensure `alt` tags are highly descriptive.
4. Enforce clean prop structures and actively remove any unused imports.

## Constraints
- Do not inject client-side state hooks into root layout or page files unless absolutely necessary.
- Avoid passing non-serializable data (like functions or complex class instances) from Server Components down to Client Components.
- Do not bypass linting errors using `// eslint-disable` comments; refactor the code to fix the underlying issue.