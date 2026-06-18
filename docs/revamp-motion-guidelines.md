# Revamp Motion Guidelines

## Decision

Use Motion for JavaScript as the default animation library, with CSS and progressive enhancement around it:

- semantic HTML and all meaningful content are rendered by PHP;
- CSS owns ordinary hover/focus transitions and safe no-JavaScript presentation;
- Motion's `inView` utility owns viewport detection;
- Motion's `animate`/`animate mini` and `stagger` utilities own entrance motion and sequencing;
- one small revamp initializer translates shared data attributes into Motion calls;
- existing component JavaScript continues to own state changes such as carousels, toggles, and markers;
- GSAP/ScrollTrigger is reserved for an approved pinned, scrubbed, or unusually complex timeline;
- do not introduce a second routine reveal library such as AOS.

This is the default for revamp pages. Motion avoids maintaining our own animation engine while staying lean: its documented `inView` utility is approximately 0.5 kB and is built on `IntersectionObserver`, while `animate mini` is approximately 2.3 kB. It supports stagger, sequences, SVG, and richer effects if the design grows. The site-specific code remains a thin declarative adapter rather than a collection of custom animation implementations.

## Library Decision

### Default: Motion

Use the locally bundled `motion` npm package. Prefer the smallest import that supports the approved effect:

- `inView` for one-shot viewport triggers;
- `animate` from `motion/mini` for HTML/SVG transforms and opacity where sufficient;
- `stagger` for grouped entrances;
- the hybrid `animate` entry only when a design genuinely needs sequences, independent transform axes, CSS variables, complex values, or SVG path work.

Why it wins here:

- maintained, documented, and designed for modern browsers;
- small feature-level imports instead of a full scroll-animation runtime;
- uses browser animation capabilities and `IntersectionObserver` under the hood;
- supports the polished easing, staggering, and sequencing this design needs;
- framework-agnostic and suitable for the theme's plain JavaScript;
- lets future editors use stable data hooks instead of writing timelines.

### Escalation: GSAP and ScrollTrigger

Use GSAP only for a design that requires pinning, scroll scrubbing, snapping, deeply coordinated timelines, or complex cross-browser SVG choreography that Motion cannot express cleanly. If selected, upgrade and pin GSAP rather than relying on the legacy theme's current CDN registration. Document the reason at the call site.

### Not selected: AOS

Do not adopt AOS. Its stable release line is old/inactive, it adds a second styling convention, and its fixed reveal catalog is less adaptable than Motion for the same use case.

## Why This Fits the Site

The homepage is server-rendered WordPress content with large visual sections, repeated card patterns, carousels, and a small number of interactive controls. Most desired motion is one of three simple types:

1. a section or child enters once when it reaches the viewport;
2. related items enter with a short stagger;
3. a control gives immediate hover, focus, or state-change feedback.

Motion covers these patterns without custom observer and animation plumbing. CSS transitions remain close to component styles for simple interaction feedback. Complex pinned scenes or scroll-scrubbed timelines may justify GSAP later, but only after a concrete design requires them.

## Progressive Enhancement and SEO

- Never inject primary copy, links, headings, or images solely to support an animation.
- The page must remain complete and usable if JavaScript fails or is blocked.
- Do not hide reveal targets in base CSS. Add a root class such as `has-reveal-motion` only after the initializer is ready; initial hidden states must be scoped beneath that class.
- Do not change heading order, link semantics, button names, or DOM reading order for visual sequencing.
- Reserve image and media dimensions before load to avoid layout shift.
- Motion must never delay navigation, form use, carousel controls, or access to content.

## Performance Rules

- Animate only `transform` and `opacity` for entrance motion.
- Do not animate `top`, `right`, `bottom`, `left`, `width`, `height`, margins, or padding.
- Use `inView` through one shared initializer with a small set of approved options.
- Use one-shot `inView` behavior; do not intentionally register leave/re-enter callbacks for standard reveals.
- Do not attach a window `scroll` listener for reveal effects.
- Avoid permanent `will-change`; apply it only when measurement proves it necessary and remove it after animation.
- Preserve layout before animation. A reveal may visually translate an element, but it must not move surrounding content.
- Keep continuous effects exceptional. If a decorative parallax effect is approved, update it through one `requestAnimationFrame` loop only while its section is visible.

## Accessibility and UX Rules

- Treat `prefers-reduced-motion: reduce` as a no-motion mode: reveal content immediately and disable autoplay or continuous decorative movement.
- Keep focus indicators and keyboard behavior independent from decorative animation.
- Do not animate large full-screen elements with strong scale, rotation, or lateral travel.
- Do not replay entrance reveals when users scroll back and forth.
- Hover motion must also have a sensible focus-visible state, but focus styling may remain more explicit for keyboard accessibility.
- Motion should explain hierarchy or state. Avoid movement that exists only to keep the page busy.

## Motion Language

Use a restrained shared vocabulary rather than section-specific effects.

### Reveal variants

- `fade`: opacity from `0` to `1`.
- `fade-up`: opacity plus `translateY(16px)` to `0`.
- `fade-in-left` / `fade-in-right`: opacity plus at most `translateX(20px)` to `0`; use sparingly.
- `scale-in`: opacity plus scale from `0.985` to `1`, for images or decorative graphics only.

Default timing:

- duration: `520ms` for text, `620ms` for cards and media;
- easing: `cubic-bezier(0.22, 1, 0.36, 1)`;
- stagger: `70ms`, capped so a group finishes within roughly `900ms`;
- observer trigger: approximately `15%` visible with a small negative bottom root margin.

These values are shared Motion configuration tokens, not values to duplicate throughout section initializers.

### Micro-interactions

- Buttons and toggles: `140–180ms` color/background transition; no layout movement.
- Cards: subtle background, opacity, or at most `translateY(-2px)` where it does not conflict with interaction.
- Carousel arrows and links: immediate feedback under `200ms`.
- State changes: cross-fade changing copy within a dimensionally stable container; do not collapse and re-expand content.

## Markup Contract

Use declarative hooks in templates:

```html
<section data-motion-reveal-group>
  <h2 data-motion-reveal data-motion-reveal-order="1">...</h2>
  <div data-motion-reveal data-motion-reveal-order="2">...</div>
</section>
```

Rules:

- `data-motion-reveal` marks an item for the shared entrance treatment;
- `data-motion-reveal-rule` marks a reversible section divider whose left-to-right scale is linked directly to scroll progress;
- `data-motion-reveal-order` may select a bounded stagger step when DOM order is not appropriate;
- `data-motion-reveal-group` scopes related reveal items; each item still triggers from its own visibility;
- section-specific selectors may position content but must not duplicate or bypass the Motion adapter;
- use direct Motion code only for an approved component-specific sequence that cannot use the shared hooks.

## Proposed Homepage Application

- Hero: one initial-load sequence for heading, body copy, CTA, and visual; do not tie the main hero to scroll.
- Intro statement and cards: heading reveal followed by a short card stagger.
- Digital validation process: scroll-linked rule, title, BIW, staggered markers/toggles, then cards in clockwise order. Mode changes replay the BIW/controls/cards sequence but not the rule or title.
- Paint IQ feature: copy and CTA reveal independently from the background; no heavy background zoom.
- New tools: scroll-linked rule, statement, carousel chrome, then cards with an eased stagger and the indicator. Product names use a clipped bottom-to-top fill on hover/focus. Do not replay cards during horizontal scrolling.
- Modules: reveal section heading and carousel chrome once; do not animate every card again during horizontal scrolling.
- Production numbers: reveal title, then the complete SVG as one visual. Avoid animating every SVG path.
- Services and case studies: copy/media pair reveal with a short offset, preserving reading order.
- Footer: optional simple fade only; no stagger across every link.

## WordPress Integration

- Enqueue revamp motion code through `wp_enqueue_scripts` and only for revamp templates.
- Install and pin Motion through npm and bundle it locally; do not use a `latest` CDN URL.
- Build Motion into a revamp-only bundle so legacy pages do not pay for it.
- Keep the adapter in the existing revamp source structure unless build organization makes a dedicated module clearer.
- The theme currently declares WordPress 5.3 compatibility, so retain footer loading for compatibility. If the minimum WordPress version moves to 6.3 or newer, use the official `strategy => defer` enqueue argument instead of custom tag rewriting.
- Do not add a runtime CDN dependency for standard reveals.
- If GSAP is approved for a complex sequence, pin the version, enqueue it only where needed, declare dependencies through WordPress, and document why Motion was insufficient.

## Implementation Shape

The implementation uses four reusable pieces:

1. a pinned `motion` npm dependency and revamp-only bundle entry;
2. shared motion configuration and safe initial/fallback states in revamp Sass;
3. one `initRevampMotion()` adapter using `inView`, `animate`, and `stagger`;
4. declarative data attributes in section templates.

The Paint IQ feature is the first rollout and uses only the generic group/item hooks. Do not add per-section animation functions unless behavior cannot be represented by the shared adapter.

## Validation Gate

Before shipping motion changes:

- verify with JavaScript disabled that all content is visible and usable;
- verify reduced-motion mode;
- test keyboard navigation and focus visibility;
- confirm no animation-induced layout shift;
- inspect mobile and desktop breakpoints;
- check that standard reveals do not replay on viewport re-entry;
- run Lighthouse or equivalent checks for performance, accessibility, and CLS;
- avoid approving motion solely from a high-performance development machine.

## References

- [WordPress Theme Handbook: Including Assets](https://developer.wordpress.org/themes/core-concepts/including-assets/)
- [WordPress `wp_enqueue_script()` reference](https://developer.wordpress.org/reference/functions/wp_enqueue_script/)
- [MDN: Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [MDN: `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Motion: Quick start and installation](https://motion.dev/docs/quick-start)
- [Motion: `inView`](https://motion.dev/docs/inview)
- [Motion: `animate`](https://motion.dev/docs/animate)
- [Motion: `scroll`](https://motion.dev/docs/scroll)
- [web.dev: High-performance CSS animations](https://web.dev/articles/animations-guide)
- [web.dev: Optimize Cumulative Layout Shift](https://web.dev/articles/optimize-cls)
