# Contributing to mori-ui

This guide is the shared source for human contributor setup, development
workflow, validation, and pull-request expectations. Coding agents must also
follow [`AGENTS.md`](./AGENTS.md).

## Requirements

- Node.js `>=22`;
- pnpm `>=11 <12`, matching the version pinned in `package.json`;
- the Vite+ `vp` CLI used by repository formatting, lint, and checks;
- `prek` commit hooks;
- Git.

## Setup

```bash
git clone https://github.com/morirun/mori-ui.git
cd mori-ui
pnpm install
pnpm run check
```

`pnpm install` runs the `prepare` script and installs the `prek` hooks
(`pre-commit` and `commit-msg`).

## Validation

`pnpm run check` is the main repository gate.

| Change or purpose | Command |
| --- | --- |
| Format, lint-fix, and check | `pnpm run fix` |
| Full repository baseline | `pnpm run check` |
| Format only | `pnpm run format` / `pnpm run format:check` |
| Lint only | `pnpm run lint` / `pnpm run lint:check` |
| Svelte typecheck only | `pnpm run svelte-check` |
| All prek hooks | `prek run --all-files` |

## Commit messages

Commit messages are validated at `commit-msg` by
[zendev](https://github.com/zendev-lab/zendev) (`zendev-message-check`,
default `zendev` profile): emoji-prefixed conventional messages, for example:

```text
✨ feat: add Dialog component
🐛 fix: correct dark-mode border token
📝 docs: document token usage
♻️ refactor: extract shared variant helpers
```

You can validate a message manually:

```bash
uvx zendev message check --title --text "✨ feat: add Dialog component"
```

## Pull requests

PR titles follow the same emoji conventional style and are checked by CI.

PR bodies are checked by CI against
[`.github/pull_request_template.md`](./.github/pull_request_template.md): the
body's `##` headings must be a subset of the template's headings, appear in
template order, and include every required heading (`动机`, `解决方案`).
Optional headings (`说明`, `后续工作`) are declared with
`<!-- pr-body:optional -->` and may be omitted.

Create a Draft PR until the change and its required validation are complete.

## Repository hygiene

- Do not commit secrets, `.env` files, `node_modules/`, or generated output.
- Do not add a compiled-JS build step; the package ships `.svelte` source.
- Preserve version comments when pinning GitHub Actions.
