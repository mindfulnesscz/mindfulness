# ESS Steyr Revamp Approach

This theme is being revamped incrementally while the existing live website remains in place.

## Working Pattern

- Build new revamp pages as dedicated WordPress page templates inside the theme.
- Create or update pages from the WordPress admin and assign the new template there.
- Keep legacy templates available until the matching revamp page is ready to replace them.
- Promote a revamped page by assigning the new template to the intended live page, or by swapping the page used for that route.

## Current Example

`page-product-blackbox.php` is the current revamp-style template example. It defines a custom page template:

```php
/**
 * Template Name: Product Blackbox
 */
```

WordPress exposes that template in the page editor, where it can be assigned to a page created for the Blackbox product.

## Upcoming Work

- Homepage revamp should follow the same template-based approach with a new homepage template.
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

Enqueue revamp CSS only on the matching templates, following the existing template-specific pattern used for `product-page.css`.

### JavaScript and Animations

Use GSAP and ScrollTrigger for scroll-driven interactions, since the theme already registers them.

Keep animation hooks generic and reusable:

- `data-animate="fade-up"`
- `data-parallax`
- `data-product-carousel`

Prefer reusable animation initializers over one-off section scripts. Contact CTAs, product cards, carousels, and repeated reveal effects should use shared hooks when possible.

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
- styles: revamp-specific Sass compiled to template-specific CSS
- assets: `assets/images/revamp/`, `assets/icons/revamp/`, `assets/svg/revamp/`

This keeps the current site stable while homepage and product-page revamps are built and assigned through WordPress admin.
