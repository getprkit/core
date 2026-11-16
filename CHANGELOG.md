# Changelog

## [1.0.0-beta.2] (2026-11-15)

### Added

- Add TypeScript definitions
- Add global border-radius to Variables
- Add margin-xsmall to Variable
- Add xxsmall and xsmall gutter to Variables
- Add animate parameter to Alert close method

### Fixed

- Invoke missing variables hook in Grid
- Correct breakpoint max calculations
- Sync CSS breakpoints with LESS variables
- Move modal inverse variables to modal variables hook

### Changed

- Restructure Accordion component
- Restructure Alert component
- Refine global color palettes
- Refine inverse global colors
- Reorganize imports and document dependencies in theme.less
- Reduce xsmall gutter to 10px

### Removed

- Remove inverse default color variables

## [1.0.0-beta.1] (2026-10-31)

First beta release of PrKit, based on the [UIkit](https://github.com/uikit/uikit) codebase as of 2026-10-31.

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

[1.0.0-beta.1]: https://github.com/getprkit/core/releases/tag/prkit-v1.0.0-beta.1
[1.0.0-beta.2]: https://github.com/getprkit/core/releases/tag/prkit-v1.0.0-beta.2