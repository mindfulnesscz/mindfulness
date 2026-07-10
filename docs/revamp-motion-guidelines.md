# Revamp Motion Guidelines

## Decision

Use Motion for JavaScript as the default animation library, with CSS and progressive enhancement around it:

- semantic HTML and all meaningful content are rendered by PHP;
- CSS owns ordinary hover/focus transitions and safe no-JavaScript presentation;
- Motion's `inView` utility owns viewport detection;
- Motion's `animate`/`animate mini` utilities own entrance motion and bounded staggered sequencing;
- one small revamp initializer translates shared data attributes into Motion calls;
- existing component JavaScript continues to own state changes such as carousels, toggles, and markers;
- GSAP/ScrollTrigger is reserved for an approved pinned, scrubbed, or unusually complex timeline;
- do not introduce a second routine reveal library such as AOS.

This is the default for revamp pages. Motion avoids maintaining our own animation engine while staying lean: its documented `inView` utility is approximately 0.5 kB and is built on `IntersectionObserver`, while `animate mini` is approximately 2.3 kB. It supports stagger, sequences, SVG, and richer effects if the design grows. The site-specific code remains a thin declarative adapter rather than a collection of custom animation implementations.

## Library Decision

### Page scrolling: Lenis

Use the locally bundled, pinned `lenis` package for wheel smoothing on templates that render the `ess-revamp-shell` body class. This is a shared revamp-shell behavior, not a homepage-only behavior: every revamp template should use `get_header('revamp')` so the same smooth-scroll setup applies consistently. Keep touch scrolling native, enable anchor handling, and do not initialize Lenis when `prefers-reduced-motion: reduce` matches. Lenis is responsible only for page-scroll interpolation; Motion remains responsible for section reveals and scroll-linked visual effects.

Do not add a second per-page smooth-scroll initializer. If a future revamp page cannot use Lenis, document the exception in that template or component and keep the default revamp-shell path unchanged.

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

## Why This Fits the Revamp

The revamp pages are server-rendered WordPress templates with large visual sections, repeated card patterns, carousels, and a small number of interactive controls. Most desired motion is one of three simple types:

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

## Current Homepage Application

- Hero: one initial-load sequence for heading, body copy, CTA, and visual; do not tie the main hero to scroll.
- Intro statement and cards: heading reveal followed by a short card stagger.
- Digital validation process: scroll-linked rule, title, BIW, staggered markers/toggles, then cards in clockwise order. Mode changes replay the BIW/controls/cards sequence but not the rule or title.
- Paint IQ feature: copy and CTA reveal independently from the background; no heavy background zoom.
- New tools: scroll-linked rule, statement, carousel chrome, then cards with an eased stagger and the indicator. Product names use a clipped bottom-to-top fill on hover/focus. Do not replay cards during horizontal scrolling.
- Modules: reveal section heading and carousel chrome once; do not animate every card again during horizontal scrolling.
- Production numbers: reveal title, then animate the desktop SVG in grouped statistic clusters, or use the mobile graphic sequence below the `1096px` breakpoint. Avoid per-path choreography beyond those coarse groups.
- Services: scroll-linked rule and word opacity treatment, list-item entrance, and a restrained background transform.
- Case studies: section heading reveal followed by per-case rule, media clip reveal, and content entrance that preserves reading order.
- Footer: simple grouped fade/translate; keep the delay cap short so link access is not meaningfully delayed.

## WordPress Integration

- Enqueue revamp motion code through `wp_enqueue_scripts` and only for `mindfulness_is_revamp_template()`.
- `mindfulness_is_revamp_template()` currently covers `page-home-revamp.php` and product templates whose slug starts with `page-product-`.
- Revamp templates should call `get_header('revamp')` and `get_footer('revamp')`; `header-revamp.php` supplies the `ess-revamp-shell` class required by shared Lenis initialization.
- Install and pin Motion and Lenis through npm and bundle them locally; do not use a `latest` CDN URL.
- Build Motion/Lenis into a revamp-only bundle so legacy pages do not pay for it.
- The current bundle is compiled from `dev/src/home-revamp-motion.js` to `assets/js/home-revamp-motion.js`. Despite the filename, it is the shared revamp motion bundle until the files are renamed or split.
- The theme currently declares WordPress 5.3 compatibility, so retain footer loading for compatibility. If the minimum WordPress version moves to 6.3 or newer, use the official `strategy => defer` enqueue argument instead of custom tag rewriting.
- Do not add a runtime CDN dependency for standard reveals.
- If GSAP is approved for a complex sequence, pin the version, enqueue it only where needed, declare dependencies through WordPress, and document why Motion was insufficient.

## Implementation Shape

The implementation uses four reusable pieces:

1. pinned `motion` and `lenis` npm dependencies and a revamp-only bundle entry;
2. shared motion configuration and safe initial/fallback states in revamp Sass;
3. one `initRevampMotion()` adapter using `inView`, `scroll`, `animate`, and Lenis;
4. declarative data attributes in section templates;
5. `initRevampSmoothScroll()` guarded by `ess-revamp-shell` and `prefers-reduced-motion`.

Generic group/item hooks remain the default. Homepage-specific hooks exist for the more composed sections, but new revamp pages should start with the generic hooks and add section-specific functions only when behavior cannot be represented by the shared adapter.

## Validation Gate

Before shipping motion changes:

- verify with JavaScript disabled that all content is visible and usable;
- verify reduced-motion mode;
- verify smooth scrolling on each revamp template and confirm it is disabled in reduced-motion mode;
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
