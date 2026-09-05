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

/* Animations used by overlay components (Dialog, DropdownMenu, Tooltip) */
@import "tw-animate-css";

/* Let Tailwind v4 scan mori-ui's component sources */
@source "../../node_modules/mori-ui";
```

Dark mode follows the `.dark` class on `<html>` (compatible with `mode-watcher`).
Overlay animations use [`tw-animate-css`](https://github.com/Wombosvideo/tw-animate-css);
install it as a direct dev dependency (`pnpm add -D tw-animate-css`) before importing.

### 2. Components

```svelte
<script lang="ts">
  import { Button, Input, Label, Switch } from "mori-ui";
</script>

<Button variant="primary" size="md">Hello</Button>
```

Compound components export their parts flat:

```svelte
<script lang="ts">
  import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
  } from "mori-ui";
</script>

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

## Components

| Group | Components |
| --- | --- |
| Actions | `Button` |
| Forms | `Input`, `Textarea`, `Label`, `Checkbox`, `Switch` |
| Display | `Badge`, `Card` family, `Separator` |
| Overlay | `Dialog` family, `DropdownMenu` family, `Tooltip` family |

## Conventions

- Components ship as uncompiled `.svelte` source (`"svelte": "./src/index.ts"`) — the consumer's Vite/Svelte plugin compiles them, avoiding Svelte version mismatches.
- Styling API uses `tailwind-variants` (`variant` / `size` props), never boolean style props.
- Headless behavior builds on `bits-ui`; icons come from `@lucide/svelte`.

## Publishing

```bash
pnpm install
pnpm check
npm publish   # requires npm login + 2FA
```

## License

MIT
