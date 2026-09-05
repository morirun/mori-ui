# mori-ui

Svelte 5 + Tailwind CSS v4 design system & component library, shared across
[spark](https://github.com/zendev-lab/spark), [bonehub](https://github.com/zrr1999/bonehub)
and [zrr.dev](https://github.com/zrr1999/zrr.dev).

## Install

```bash
pnpm add mori-ui
```

Peer dependencies: `svelte@^5`, `tailwindcss@^4`.

## Usage

### 1. Tokens (framework-agnostic CSS)

Import once in your global CSS. Works in any app, even without components:

```css
@import "tailwindcss";
@import "mori-ui/tokens.css";
@import "mori-ui/typography.css";

/* Let Tailwind v4 scan mori-ui's component sources */
@source "../../node_modules/mori-ui";
```

Dark mode follows the `.dark` class on `<html>` (compatible with `mode-watcher`).

### 2. Components

```svelte
<script lang="ts">
  import { Button } from "mori-ui";
</script>

<Button variant="primary" size="md">Hello</Button>
```

## Architecture

| Layer | What | Status |
| --- | --- | --- |
| `tokens.css` | OKLCH color palette, radius, semantic tokens, `.dark` overrides, Tailwind v4 `@theme` mapping | v0.0.1 |
| `typography.css` | Font stacks and prose defaults | v0.0.1 |
| Components | bits-ui based primitives styled with tailwind-variants | Button only, more to come |
| Catalog | Component playground / docs site | planned |

## Conventions

- Components ship as uncompiled `.svelte` source (`"svelte": "./src/index.ts"`) — the consumer's Vite/Svelte plugin compiles them, avoiding Svelte version mismatches.
- Styling API uses `tailwind-variants` (`variant` / `size` props), never boolean style props.
- Icons via `@lucide/svelte`.

## Publishing

```bash
pnpm install
pnpm check
npm publish   # requires npm login + 2FA
```

## License

MIT
