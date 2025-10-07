<!--
Sync Impact Report:
- Version change: None → 1.0.0 (initial constitution)
- Modified principles: None (initial creation)
- Added sections: All sections (Core Principles, Development Standards, Quality Assurance, Governance)
- Removed sections: None
- Templates requiring updates: ✅ plan-template.md, ✅ spec-template.md, ✅ tasks-template.md (all aligned with web development principles)
- Follow-up TODOs: None
-->

# ooo.oliyo.com Constitution
<!-- Fresh web application using Deno, Preact, and Tailwind CSS -->

## Core Principles

### I. Modern Web Standards
<!-- Example: I. Library-First -->
Every component MUST follow Fresh framework patterns and modern web standards. Components must be server-side rendered by default, client-side interactivity via islands only when necessary. Clear purpose required for each island - no interactive components without specific user interaction needs.

### II. TypeScript-First Development
<!-- Example: II. CLI Interface -->
All code MUST be written in TypeScript with strict type checking enabled. Fresh routes, islands, and components must have proper type definitions. Props interfaces must be explicitly defined for all components. No implicit `any` types allowed without explicit justification.

### III. Responsive Design (NON-NEGOTIABLE)
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
All UI components MUST be mobile-first responsive using Tailwind CSS responsive utilities. Every page must be tested and functional on mobile, tablet, and desktop viewports. Breakpoints must follow Tailwind's standard: sm (640px), md (768px), lg (1024px), xl (1280px).

### IV. Performance-First
<!-- Example: IV. Integration Testing -->
Focus areas requiring performance optimization: Initial page load MUST be under 2 seconds, Island JavaScript bundles MUST be code-split by functionality, Images MUST be optimized and served in modern formats. Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1.

### V. SEO & Accessibility
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
All pages MUST have proper meta tags, semantic HTML structure, and ARIA labels where appropriate. Color contrast MUST meet WCAG AA standards (4.5:1 for normal text). All interactive elements MUST be keyboard navigable. Structured data must be implemented for content pages.

## Development Standards
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

Code must follow Fresh conventions with routes in `routes/`, islands in `islands/`, and static assets in `static/`. All components must use Preact hooks correctly with proper dependency arrays. State management must use @preact/signals for shared state, local useState for component-specific state. CSS must use Tailwind utility classes, custom CSS only for animations or complex layouts.

## Quality Assurance
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

All changes must pass `deno task check` (formatting, linting, type checking) before commit. New features must include manual testing on mobile and desktop viewports. Visual regression testing recommended for UI changes. Security review required for any user input handling or data processing features.

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

This constitution supersedes all other development practices and guides all technical decisions. Amendments require proposal in a pull request with clear rationale, team approval, and migration plan for existing code. All pull requests must verify compliance with these principles. When complexity conflicts with principles, complexity must be explicitly justified in documentation. Use `.specify/memory/constitution.md` for runtime development guidance.

**Version**: 1.0.0 | **Ratified**: 2025-10-07 | **Last Amended**: 2025-10-07
<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->