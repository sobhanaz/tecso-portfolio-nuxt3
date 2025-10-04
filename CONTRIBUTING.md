## Contributing

Thanks for your interest in contributing! This project is a Nuxt 3 application with Vue 3 and a set of animation/UX libraries.

### Local setup

1. Install Node 18+ (LTS recommended)
2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

### Branch & PR workflow

- Create a feature branch from `main`: `feat/your-feature` or `fix/your-bug`
- Keep PRs small and focused
- Include a clear description and screenshots/GIFs for UI changes

### Code style

- Follow existing patterns and naming
- Avoid direct DOM usage on server; only use in `onMounted` or `client` code

### Testing

- Manually verify pages load (Home, Stories, Blog detail) and animations run without console errors

### Commit messages

- Use conventional style when possible (e.g., `feat:`, `fix:`, `docs:`)
