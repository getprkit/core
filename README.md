# PRKit

PRKit is a fork of [UIkit](https://github.com/uikit/uikit) 3.25.28, introducing modern CSS features, an enhanced color system and improved theming.

> **Status:** Beta (`1.0.0-beta.1`). APIs, styles and CSS variables may still change.

## What's Different from UIkit

- Replaced Less-specific functions with native CSS equivalents and migrated runtime theme variables to CSS custom properties.
- Moved CSS custom property declarations into a dedicated cascade layer (`@layer variables`).
- Introduced OKLCH-based color palettes with steps 50–950.
- Improved inverse mode colors and component theming.
- Added logical properties and direction utilities for RTL support.
- Added `strokeRatio` support for SVG components.

See the [Changelog](CHANGELOG.md) for details and [breaking changes](CHANGELOG.md#breaking-changes).

## Installation

```bash
npm install github:getprkit/core#prkit-v1.0.0-beta.1
```

### Using Prebuilt Files

Alternatively, use the prebuilt files from `dist/` directly:

```html
<link rel="stylesheet" href="dist/css/uikit.css" />
<script src="dist/js/uikit.js"></script>
```

## Browser Support

Requires modern browsers supporting:

- CSS custom properties and cascade layers (`@layer`)
- CSS logical properties
- OKLCH color syntax
- CSS relative color syntax

## Migrating from UIkit

PRKit introduces several changes that may require updates to existing UIkit customizations.

Before upgrading, review the [Breaking Changes](CHANGELOG.md#breaking-changes), particularly:

- Less functions and variables replaced with native CSS equivalents.
- Renamed color and directional custom properties.
- Component variables moved from `:root` to their respective components.
- CSS custom properties moved into `@layer variables`.

## Development

```bash
pnpm install

pnpm compile        # Build JavaScript and CSS
pnpm compile-less   # Build CSS only
```

## Versioning

PRKit follows its own [Semantic Versioning](https://semver.org/), independently of UIkit.

Each release is based on a specific UIkit version, documented in the Changelog.

## License

Released under the [MIT License](LICENSE.md).

PRKit is a fork of UIkit, originally developed by YOOtheme GmbH.