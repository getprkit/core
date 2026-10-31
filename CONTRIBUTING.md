# Contributing to PrKit

Thanks for your interest in contributing to PrKit! Contributions, bug reports, and improvements are welcome.

## Getting Started

PrKit is a fork of [UIkit](https://github.com/uikit/uikit). Before contributing, please review the existing code and check whether the issue or feature is already being addressed.

## Reporting Issues

If you find a bug or have a feature request, please open an issue in the [PrKit issue tracker](https://github.com/prfardin/uikit/issues).

When reporting a bug, include:
- Your browser and environment.
- Steps to reproduce the issue.
- Expected and actual behavior.
- The affected PrKit version.

## Pull Requests

1. Fork the repository.
2. Create a feature branch from `prkit`.
3. Keep changes focused and consistent with the existing codebase.
4. Test your changes before submitting.
5. Open a pull request targeting the `prkit` branch.

For changes that are also applicable to upstream UIkit, consider submitting a separate pull request to the [official UIkit repository](https://github.com/uikit/uikit).

## Commit Message Convention

PrKit follows the Vue-style commit message convention.

Commit messages should follow this format:

`type(scope): subject`

Examples:
- `feat(accordion): add multiple selection support`
- `fix(theme): correct inverse background colors`
- `refactor(css): migrate Less functions to native CSS`

Supported types:

- `build:` Changes that affect the build system or external dependencies.
- `chore:` Maintenance tasks and other changes that don't fit other categories.
- `ci:` Changes to CI configuration files and scripts.
- `docs:` Documentation-only changes.
- `feat:` A new feature.
- `fix:` A bug fix.
- `perf:` A code change that improves performance.
- `refactor:` A code change that neither fixes a bug nor adds a feature.
- `revert:` Reverts a previous commit.
- `style:` Changes that do not affect the meaning of the code (whitespace, formatting, etc.).
- `test:` Adding missing tests or correcting existing tests.

## Versioning

PrKit follows [Semantic Versioning (SemVer)](https://semver.org/), independently of UIkit.

Each release documents the corresponding upstream UIkit version.

## License

By submitting a contribution, you agree that your contribution will be distributed under the project's MIT License.