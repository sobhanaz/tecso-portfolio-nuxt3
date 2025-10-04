## Theming

### Modes

- Global theme class is bound via `store.colorPage` with values `v-dark` or `v-light`.
- You can override per-page using URL query `?mode=dark` or `?mode=light` (handled in `components/layout/Layout.vue`).

### Styles

- SCSS lives under `assets/styles/`. Entry point: `style.scss`. Variables and mixins live under `variables-site/` and `mixins/`.
