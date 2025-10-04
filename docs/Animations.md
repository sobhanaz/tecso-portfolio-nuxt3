## Animations & Scroll

### Smooth scrolling

- Enabled via `store.activeScrollbar`.
- Implemented with `smooth-scrollbar` and wired to GSAP ScrollTrigger in `hooks/plugin.js`.

### Common animations

- `hooks/pluginanimations.js` exposes helpers:
  - `fadeUp`, `animateUp`, `animateDown`, `counter`, `splitEl`, `triggerElement`
- They initialize on page load via `runAnimationOnLoad()`.

### Splitting

- The `hooks/spltting.js` file includes Splitting setup. Adjust or enable if you want character/word/line splitting animations.
