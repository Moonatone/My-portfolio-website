# CS Portfolio

A multi-page developer portfolio built with **React**, **Redux Toolkit**,
**React Router**, and **Tailwind CSS** — made for showing off projects
(with video demo placeholders) while job hunting.

## Quick start

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Make it yours

Everything you're likely to want to edit lives in a handful of files:

| What | File |
|---|---|
| Your name, tagline, bio, social links, résumé link | `src/data/profile.js` |
| Your projects | `src/data/projects.js` |
| Your skills & proficiency levels | `src/data/skills.js` |
| Your work/education history | `src/data/experience.js` |
| Colors, fonts, animation timings | `tailwind.config.js` |

### Adding real project demo videos

Each project card shows a colorful placeholder until you add a real clip:

1. Export a short screen recording as `.mp4` (a few MB, muted, ~20–40s is
   plenty — keep it short so it loads fast).
2. Drop it in `public/videos/`, e.g. `public/videos/task-flow-demo.mp4`.
3. In `src/data/projects.js`, set that project's `videoSrc` to
   `"/videos/task-flow-demo.mp4"`. Optionally set `poster` to a thumbnail
   image path for the frame shown before playback.

If a video fails to load (or `videoSrc` is left `null`), the card falls
back to the placeholder automatically — nothing breaks.

### Adding your résumé

Drop a PDF at `public/resume.pdf`. The "Résumé" button on the home page
already points at `/resume.pdf`.

### Connecting the contact form

The contact form (`src/pages/Contact.jsx`) is front-end only right now —
submitting it shows a success toast but doesn't send anything. Wire it up
to a form backend such as [Formspree](https://formspree.io) or
[EmailJS](https://www.emailjs.com/), or point it at your own API route.

## Why Redux here

State is split into three slices under `src/store/`:

- **`themeSlice`** — light/dark mode, persisted to `localStorage` and
  applied as a `dark` class on `<html>` for Tailwind's `dark:` variants.
- **`uiSlice`** — mobile menu open/closed, and a small global toast queue.
- **`projectsSlice`** — the active category filter, search query, and
  which project's demo is open in the modal — shared between the
  featured-projects section on Home and the full grid on the Projects
  page.

## Tech stack

- [Vite](https://vitejs.dev/) + React 18
- [Redux Toolkit](https://redux-toolkit.js.org/) + React Redux
- [React Router v6](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) (class-based dark mode)
- [lucide-react](https://lucide.dev/) for icons
