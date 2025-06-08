# Contribution Guidelines

This file contains instructions for anyone contributing to this repository.

## Project Overview
- **Frameworks**: Vite, React, TypeScript and shadcn-ui
- **Styling**: Tailwind CSS with a custom configuration defined in `tailwind.config.ts`
- **Package manager**: npm (a `bun.lockb` file exists but npm scripts are authoritative)
- **Entry point**: `index.html` loads `src/main.tsx` which renders `App`

## Getting Started
1. Install dependencies with `npm install`.
2. Start a local dev server with `npm run dev`.
3. Run linter checks using `npm run lint` before committing changes.
4. Build production assets using `npm run build` (or `npm run build:dev` for a development build).

## Repository Structure
- **src/**: Application source code
  - `pages/` contains route components
  - `components/` contains reusable UI pieces
  - `hooks/` and `lib/` store utilities
- **public/**: static assets included in the final build
- Configuration files such as `tsconfig.json`, `tailwind.config.ts` and `vite.config.ts` sit at the root

## Coding Conventions
- Use TypeScript for all source files
- React components are placed under `src/components` or `src/pages`
- `@/` is an alias for the `src` directory (configured in `vite.config.ts` and tsconfig files)
- Use the helper `cn()` from `src/lib/utils.ts` to compose CSS class names
- Keep components small and composable; prefer functional components

## Pull Request Checklist
- Ensure `npm run lint` completes without errors (warnings are acceptable)
- Include relevant tests or examples when adding new functionality
- Update documentation and component stories if applicable
- Provide clear commit messages summarizing the intent of the change

## Additional Notes
- This project is hosted on [Lovable](https://lovable.dev) so changes can also be made through that interface.
- The development server runs on port `8080` (see `vite.config.ts`). Adjust as necessary for local use.
- Feel free to open issues for discussion before submitting larger changes.
