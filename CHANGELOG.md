# Changelog

PrKit is built on top of [UIkit](https://github.com/uikit/uikit). For changes inherited from the upstream project, see the [official UIkit Changelog](https://github.com/uikit/uikit/blob/develop/CHANGELOG.md).

## [1.0.0-beta.1] (2026-10-31)

First beta release of PrKit, based on [UIkit](https://github.com/uikit/uikit), with upstream `uikit:develop` merged through October 31, 2026.

### Added

- Added OKLCH-based color palettes with steps 50–950 for default, muted, primary, secondary, info, success, warning and danger
- Added logical direction utilities for improved RTL support
- Added `strokeRatio` support to SVG components (icons)
- Expanded inverse mode support across UIkit components and elements, with additional styles and `.hook-inverse-*` hooks, including alerts, backgrounds, cards, and more

### Changed

- Migrated Less functions and variables to native CSS, using CSS custom properties and native CSS functions
- Replaced `.svg-fill` Less functions with native CSS equivalents
- Replaced physical directional properties with their logical equivalents
- Renamed global and inverse background tokens to their corresponding color tokens
- Unified color palette and inverse mode variables, and updated components to use the shared palette colors
- Improved inverse mode colors across components
- Moved all CSS custom property declarations into the `@layer variables` layer

### Fixed

- Fixed missing theme files and hooks
- Fixed components retaining light surfaces inside `.uk-light` and inverse sections

### Breaking Changes

- **Less → CSS migration:** Custom themes relying on the previous Less functions and variables must be updated to use the new CSS custom properties and native CSS functions.
- **Color token renaming:** Global and inverse background tokens have been renamed to their corresponding color tokens:
  - `@global-*-background` → `--global-*-color`
  - `@inverse-global-*-background` → `--inverse-global-*-color`
- **CSS cascade layers:** All CSS custom properties are now declared inside `@layer variables`.
- **Inverse mode:** Inverse styles and colors have been refined across several components, which may result in visual differences compared to previous versions.

[1.0.0-beta.1]: https://github.com/prfardin/uikit/releases/tag/prkit-v1.0.0-beta.1