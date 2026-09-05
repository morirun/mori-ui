# AGENTS.md

Repository-wide instructions for coding agents working on mori-ui.

Human contributor setup, validation, and pull-request conventions live in
[`CONTRIBUTING.md`](./CONTRIBUTING.md). Do not duplicate them here. Read
[`README.md`](./README.md) for the public overview.

## Scope and precedence

- This file applies to the entire repository.
- Follow the user's explicit task and preserve unrelated work.
- Keep facts in one authoritative home and link to them instead of copying.

## Sources of truth

- Design tokens (color, radius, semantic mappings, dark mode):
  [`src/tokens.css`](./src/tokens.css). Never hard-code color values in
  components; use the semantic token classes (`bg-primary`, `text-foreground`,
  `border-border`, ...) derived from `@theme`.
- Typography defaults: [`src/typography.css`](./src/typography.css).
- Component conventions: existing components under `src/components/`.

## Component invariants

- Svelte 5 with runes (`$props`, `$state`, ...); no legacy syntax.
- Style variants go through `tailwind-variants` (`variant` / `size` props).
  Never add boolean style props (`primary`, `large`, ...).
- Class merging goes through `cn()` from `src/utils/cn.ts`.
- Headless behavior builds on `bits-ui`; icons come from `@lucide/svelte`.
- Components ship as uncompiled `.svelte` source. Do not add a build step that
  emits compiled JS; the consumer's Vite/Svelte plugin compiles the library.
- Dark mode is `.dark` on `<html>` only. Do not introduce a second scheme
  (media query, `data-theme`, ...).
- Domain components (conversation, workbench, streaming markdown, ...) do not
  belong here; they stay in their owning product repository.

## Change protocol

1. Read the nearest component and `src/tokens.css` before editing.
2. Make the smallest change that preserves the conventions above.
3. Run `pnpm run check` and make sure `prek run --all-files` stays green.
4. Review the final diff for unrelated edits, generated output, and secrets.
5. For a PR, follow the title and body conventions in
   [`CONTRIBUTING.md`](./CONTRIBUTING.md#pull-requests); CI enforces both.

## Documentation discipline

- Keep `README.md` stable and user-oriented: install, usage, conventions.
- Keep setup, validation, and PR rules in `CONTRIBUTING.md`.
- Keep this file limited to stable, self-contained standing orders.
