# React TS Starter Kit

Minimal starter kit focused on folder structure and CSS architecture. No boilerplate code: files are intentionally empty so you can wire your own stack.

## What is included
- Scalable React/TypeScript folder layout
- Styles architecture with layered `main.css` and per-folder `index.css`
- Placeholders for components, pages, layouts, hooks, services, store, types, and utilities

## Structure
- `public/`
- `src/`
  - `assets/`
  - `components/`
  - `features/`
  - `hooks/`
  - `layouts/`
  - `pages/`
  - `services/`
  - `store/`
  - `styles/`
  - `types/`
  - `utils/`
  - `config/`

## Styles
- `src/styles/main.css` imports: base, theme, utilities, componentes, layouts, pages, vendor.
- Each folder has `index.css` that imports its local files.
- `src/styles/base/` includes `fonts`, `reset`, `variables`, `icons`, `elements`, `forms`, `animations`, `print`.

## Getting started
1) Choose your tooling (Vite, CRA, Next, etc).
2) Fill `package.json`, `tsconfig.json`, `vite.config.js`, and `public/index.html`.
3) Build your features and pages inside `src/`.

## Notes
- Empty files are deliberate. Remove what you do not use.
- `src/index.tsx` already imports `src/styles/main.css`.

## License
Add your license to `LICENSE`.
