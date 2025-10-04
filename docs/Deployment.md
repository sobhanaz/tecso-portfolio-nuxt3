## Deployment

### General

- Build the app:

```bash
npm run build
```

- Preview locally:

```bash
npm run preview
```

### Notes

- SSR is enabled. Ensure your hosting supports Node SSR (e.g., Vercel, Netlify functions/edge, Render, etc.).
- Many dynamic routes are set to not be prerendered in `nuxt.config.ts`. Adjust per your hosting and content strategy.
- If serving from a subfolder, verify `app.baseURL` and asset paths.
