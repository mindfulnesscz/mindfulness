# ESS Steyr Revamp Approach

This theme is being revamped incrementally while the existing live website remains in place.

## Working Pattern

- Build new revamp pages as dedicated WordPress page templates inside the theme.
- Create or update pages from the WordPress admin and assign the new template there.
- Keep legacy templates available until the matching revamp page is ready to replace them.
- Promote a revamped page by assigning the new template to the intended live page, or by swapping the page used for that route.

## Current Revamp Templates

Current revamp templates include:

- `page-home-revamp.php`, assigned through the WordPress page editor as `Home Revamp`.
- `page-product-blackbox.php`, assigned through the WordPress page editor as `Product Blackbox`.

Each revamp template defines a custom page template header, for example:

```php
/**
 * Template Name: Product Blackbox
 */
```

WordPress exposes these templates in the page editor, where they can be assigned to their matching pages.

## Active Pattern

- Homepage revamp now follows the template-based approach through `page-home-revamp.php`.
- Future product pages should use separate templates when their layout or content structure differs meaningfully.
- Shared UI, assets, and repeated sections should be extracted only when reuse becomes clear across multiple revamp pages.

## File Naming

Use explicit template filenames that match the page intent:

- `page-home-revamp.php` for the new homepage.
- `page-product-{product-name}.php` for product-specific revamp pages.

Each template should include a clear `Template Name` header so it can be assigned from the WordPress admin.

## Recommended Organization

### Templates

Keep page templates focused on page composition, section order, and page-specific data arrays.
Revamp templates should call `get_header('revamp')` and `get_footer('revamp')` so they use the shared revamp navigation, footer, body class, smooth scroll, and motion setup.

Examples:

- `page-home-revamp.php`
- `page-product-blackbox.php`
- `page-product-paint-iq.php`

### Sections and Components

Place revamp-specific partials in `template-parts/revamp/`.

Suggested section partials:

- `section-hero.php`
- `section-product-carousel.php`
- `section-contact-cta.php`
- `section-footer-cta.php`

Suggested component partials:

- `card-product.php`
- `card-case-study.php`
- `metric-item.php`
- `cta-link.php`

Use `get_template_part()` and pass data through `$args`. Avoid abstracting too early; extract only when a section or component is reused across multiple revamp templates.

### Styles

Author revamp styles in Sass and compile to `assets/css`.

Suggested source files:

- `dev/src/sass/home-revamp.scss`
- `dev/src/sass/_revamp-components.scss`
- `dev/src/sass/_revamp-sections.scss`

Suggested compiled output:

- `assets/css/home-revamp.css`

Current behavior:

- `assets/css/home-revamp.css` is enqueued for every `mindfulness_is_revamp_template()` page and is the shared revamp stylesheet despite the homepage-oriented filename.
- `assets/css/product-page.css` is still enqueued for product templates.
- Legacy templates should not depend on revamp Sass, and revamp templates should not require global legacy component styles beyond the base theme styles already loaded everywhere.

### JavaScript and Animations

Use the Motion-powered architecture defined in [revamp-motion-guidelines.md](revamp-motion-guidelines.md). Motion is the default library for entrance reveals, staggered sequences, and lightweight state transitions. CSS remains responsible for ordinary hover/focus transitions.

The shared revamp JavaScript is currently:

- `assets/js/home-revamp-motion.js`, compiled from `dev/src/home-revamp-motion.js`.
- `assets/js/home-revamp.js`, used for revamp component interactions and dependent on the motion bundle.

Both scripts are enqueued for `mindfulness_is_revamp_template()`. The filename is historical; treat these as shared revamp scripts until a rename or split is worth the churn.

Keep animation hooks generic and reusable:

- `data-motion-reveal`
- `data-motion-reveal-group`
- `data-motion-reveal-order`
- `data-product-carousel`

Use Motion's `inView` and `animate` utilities behind one reusable initializer, with bounded per-item delays for staggered entrances. Prefer declarative hooks over one-off section scripts. GSAP/ScrollTrigger is an exception for an approved pinned, scrubbed, or unusually complex timeline; it is not the default merely because the legacy theme registers an older version.

Lenis smooth scroll is initialized by the motion bundle for pages whose body has `ess-revamp-shell`, which comes from `header-revamp.php`. Smooth scroll is therefore expected on the homepage revamp and all product revamp templates. It must remain disabled when `prefers-reduced-motion: reduce` matches.

Motion must preserve server-rendered content, layout dimensions, keyboard behavior, and `prefers-reduced-motion`. Animate `transform` and `opacity`; do not animate layout properties for decorative effects.

### Assets

Keep revamp assets isolated from legacy assets.

Suggested structure:

- `assets/images/revamp/home/`
- `assets/images/revamp/products/blackbox/`
- `assets/images/revamp/products/paint-iq/`
- `assets/icons/revamp/`
- `assets/svg/revamp/`

Name Figma exports semantically instead of keeping generic names like `Group 123.svg`.

### Fonts

Use existing theme fonts when they match the design. If new fonts are required, add the font files under `assets/font/` and define them through Sass with `@font-face`.

Avoid external font CDNs for the revamp unless there is a specific deployment reason.

## Revamp Isolation Rule

Keep the revamp layer isolated from legacy templates and styles:

- templates: `page-*-revamp.php` or product-specific page templates
- partials: `template-parts/revamp/`
- styles: revamp-specific Sass compiled to revamp CSS
- scripts: revamp-only scripts enqueued through `mindfulness_is_revamp_template()`
- assets: `assets/images/revamp/`, `assets/icons/revamp/`, `assets/svg/revamp/`

This keeps the current site stable while homepage and product-page revamps are built and assigned through WordPress admin.
