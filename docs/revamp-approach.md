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
