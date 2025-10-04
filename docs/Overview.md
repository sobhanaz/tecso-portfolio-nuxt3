## Overview

This project is a Nuxt 3 + Vue 3 resume/portfolio with animated UI and static JSON content. It’s structured for fast customization and reuse across multiple layouts (home, demos, portfolio, blog).

### Core concepts

- SSR by default, with selective prerendering via `routeRules`
- Static JSON content under `api/` imported directly by pages/components
- Smooth scrolling and GSAP ScrollTrigger integration
- Theming via `store.colorPage` and `?mode=` query
