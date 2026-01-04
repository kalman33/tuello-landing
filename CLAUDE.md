# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tuello Landing is a static marketing website for the Tuello Chrome Extension (a developer tool for web development tasks). Built with Astro 4.16, deployed to GitHub Pages with bilingual support (English/French).

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Production build (outputs to ./dist/)
npm run preview  # Preview production build locally
```

## Architecture

### Technology Stack
- **Astro 4.16** - Static site generator
- **TypeScript** - Strict mode enabled
- **GitHub Pages** - Hosting via GitHub Actions (deploys on push to main)

### Key Directories
- `src/components/` - Reusable Astro components (Header, Hero, Features, Demo, Screenshots, CTA, Footer)
- `src/layouts/Layout.astro` - Base HTML layout with metadata
- `src/pages/` - File-based routing (`/` for EN, `/fr/` for FR)
- `src/i18n/translations.ts` - Centralized translations object
- `src/styles/global.css` - CSS variables and global styles

### Internationalization Pattern
Language is URL-based with translations in `src/i18n/translations.ts`:
```typescript
import { t } from '../i18n/translations';
// Usage in components:
t(lang, 'hero.title')  // Returns translated string
```

Pages pass `lang: 'en' | 'fr'` prop through the component tree. Adding content requires entries in both `en` and `fr` translation objects.

### Styling
- CSS custom properties defined in `global.css` (colors, typography, spacing)
- Component-scoped styles via `<style>` blocks in Astro components
- Primary color: `--color-primary: #1f586c`
- Accent color: `--color-accent: #eb9b3b`

### Asset Paths
All public assets must use `/tuello-landing/` prefix due to GitHub Pages subpath configuration in `astro.config.mjs`.
