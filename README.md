# fivem-typescript-boilerplate

A boilerplate for creating FiveM resources with TypeScript.

This branch includes SQLite database support, but does not include NUI.

## Branches

This repository provides multiple template branches depending on the features you want included from the start.

| Branch | NUI | SQLite | Description |
|---|---:|---:|---|
| `lean` | No | No | Minimal resource template with no UI or database layer. |
| `nui` | Yes | No | Resource template with a web UI, but no database layer. |
| `sqlite` | No | Yes | Resource template with SQLite support, but no web UI. |
| `nui-sqlite` | Yes | Yes | Resource template with both a web UI and SQLite support. |

If you want the most feature-complete starting point, use `nui-sqlite`.

## Getting Started

### Node.js v18+

Install any LTS release of [`Node.js`](https://nodejs.org/) from v18.

### bun

Install the [`bun`](https://bun.sh/docs/installation) package manager globally.

```
npm install -g bun
```

### Setup

Download this branch directly to start from the SQLite template variant.

- [Download](https://github.com/DemiAutomatic/fivem-typescript-boilerplate/archive/refs/heads/sqlite.zip) the template directly.

Navigate to your new directory and execute the following command to install dependencies.

```
bun install
```

## Development

Use `bun run watch` to actively rebuild modified files while developing the resource.

## Build

Use `bun run build` to build all project files in production mode.

## Releases

This template repository is intended to be distributed as source only.

The included GitHub release workflow exists for repositories created from this template. In a generated resource repository, tag your commit (for example `v1.0.0`) and push the tag to build the resource and create a release archive.

## Layout

- [/dist/](dist)
  - Compiled project files.
- [/locales/](locales)
  - JSON files used for translations with [ox_lib](https://coxdocs.dev/ox_lib/Modules/Locale/Shared).
- [/scripts/](scripts)
  - Scripts used in the development process, but not part of the compiled resource.
- [/src/](src)
  - Project source code.
- [/static/](static)
  - Files to include with the resource that aren't compiled or loaded (e.g. config).
