<div align="center">

# Blackdsn Nuxt 3 – Personal Resume & Portfolio

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.10-00DC82?logo=nuxt.js)](https://nuxt.com)  
[![Vue 3](https://img.shields.io/badge/Vue-3.4-42b883?logo=vue.js)](https://vuejs.org)  
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

> A modern, animated, and highly-performant resume/portfolio built with Nuxt 3 and Vue 3. It uses GSAP, Swiper, fancy custom cursor, and smooth scrolling with lots of reusable components, all wired to static JSON content for easy customization.

- Design inspiration: https://tecso.team/

If you like the structure, you can fork and brand it with your own info quickly.

## Features

- Nuxt 3 SSR with Vite for fast DX and production
- Beautiful preloader, smooth-scrollbar integration, and ScrollTrigger animations
- Swiper sliders (web components) with multiple layouts and effects
- Static JSON-driven data model (portfolio, blog, services, team, testimonials, etc.)
- Theming support (light/dark) via URL query `?mode=light|dark`
- @nuxt/image integration with WebP support
- Modular components and sections to compose pages rapidly

## Tech stack

- Framework: Nuxt 3, Vue 3
- Styling: SCSS modules under `assets/styles`
- Animations: GSAP + ScrollTrigger, custom parallax/cursor
- Media/UI: Swiper, @fancyapps/ui, Isotope, smooth-scrollbar
- Modules: `@nuxt/image`, `@nuxtjs/device`

## Getting started

Prerequisites: Node 18+ (LTS recommended).

Install dependencies:

```bash
npm install
```

Start the dev server at http://localhost:3000:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview production:

```bash
npm run preview
```

## Configuration

- Environment variables (optional):
	- `FRONTENDURL`: used by `@nuxt/image` domains. Set this if you load images from an external domain.
	- `API_SECRET`: example private runtime config field (currently not used at runtime in this repo).
- Theming: append `?mode=dark` or `?mode=light` to any page URL to switch theme for that view.
- Smooth scrolling: enabled by default via `store.activeScrollbar`.

## Project structure

High-level layout (trimmed to essentials):

```
app.vue
nuxt.config.ts
package.json
assets/
	styles/               # SCSS entry `style.scss` and folders: blocks, core, forms, ...
components/
	layout/               # Global layout wrapper, preloader, helpers
	menu/                 # Top navigation and nested dropdowns
	option-theme/         # CursorGrowing, theme modes, etc.
	blog/, portfolio/, services/, ...
pages/
	index.vue             # Home
	main-demo.vue         # Marketing/landing composition
	blog/                 # stories list + [slug] detail
	work/, portfolio/, slider/, ...
api/                    # Static JSON content (blog, portfolio, services, team, etc.)
hooks/                  # DOM utils and animation helpers (GSAP/ScrollTrigger)
plugins/                # FontAwesome, Isotope, Splitting providers
public/                 # Static assets (images, js)
store/                  # Simple reactive store (theme, cursor, scrollbar)
```

Key files:

- `layouts/default.vue` and `layouts/view.vue`: base page chrome with menu and custom cursor
- `components/layout/Layout.vue`: applies smooth scroll, body class, theme mode
- `hooks/plugin.js`: DOM helpers (smooth-scrollbar proxy, parallax, cursor grow, etc.)
- `hooks/pluginanimations.js`: GSAP + ScrollTrigger wrappers and common effects
- `plugins/*.js`: Registers 3rd-party libraries

## Content model (JSON)

Static JSON lives under `api/` and is imported directly by pages/components.
Examples:

- Blog: `api/blog/blog.json`
- Portfolio: `api/portfolio/portfolio.json`
- Services: `api/services/*.json`
- Team: `api/team/team.json`

This keeps content editable without a backend. Update JSON and redeploy.

## Theming and animations

- Theme class is applied globally via `store.colorPage` (values: `v-dark` or `v-light`).
- Smooth scrolling uses `smooth-scrollbar` with GSAP ScrollTrigger proxy; toggled by `store.activeScrollbar`.
- Common animation utilities are in `hooks/pluginanimations.js` and initialized on page load.

## Deployment notes

- The project ships with SSR enabled. Many dynamic routes (blog, work, portfolio) skip prerendering via `routeRules`. Adjust based on your hosting.
- If you serve from a subfolder, ensure your `app.baseURL` and asset paths are correct. The store includes a `setBaseUrl` hint for historical setups.
- Check `nuxt.config.ts` for image domains, scripts, and CSS.

## Troubleshooting

- Animations not triggering:
	- Ensure code that touches `document` runs in `onMounted` on client.
	- If using `smooth-scrollbar`, confirm `#dsn-scrollbar` exists on pages using `Layout.vue`.
- Missing images:
	- Confirm files under `/public/images/...` and correct paths in JSON.
- Build errors on Swiper tags:
	- We declare `swiper` custom elements in `nuxt.config.ts` under `vue.compilerOptions.isCustomElement`.

## Contact

- Website: https://tecso.team/
- Email: tecsoteam@gmail.com
- Telegram: https://t.me/+989922068945
- LinkedIn: https://www.linkedin.com/in/sobhan-azimzadeh/
- GitHub org: https://github.com/Tecso-Dev

## License

This project is licensed under the MIT License – see [LICENSE](LICENSE).

## Contributing & Security

- See [CONTRIBUTING](CONTRIBUTING.md) for local setup and contribution guidelines.
- See [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for community standards.
- See [SECURITY](SECURITY.md) for reporting vulnerabilities.

## Documentation (Wiki-style)

Additional docs live in `docs/`:

- [Overview](docs/Overview.md)
- [Deployment](docs/Deployment.md)
- [Theming](docs/Theming.md)
- [Content Model](docs/ContentModel.md)
- [Animations & Scroll](docs/Animations.md)
- [FAQ](docs/FAQ.md)
 - [Project Structure (Full)](docs/ProjectStructure.md)

---

Made with Nuxt 3 and a lot of motion design. Fork it and make it yours.
