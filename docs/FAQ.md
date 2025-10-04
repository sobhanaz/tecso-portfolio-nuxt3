## FAQ

### Why static JSON instead of a CMS?

This template targets quick personal portfolio deployment. JSON keeps it simple and portable. You can later switch to a headless CMS by replacing imports with fetch calls.

### Animations don’t run on server-side

Direct DOM access only works client-side. Ensure animation code runs in `onMounted`.

### How to disable smooth scrolling?

Set `store.activeScrollbar = false` (e.g., in a setup script) to use native scroll.
