# zen-portfolio

First draft of a personal portfolio site for Zen, built with Astro and Tailwind.

## Stack

- Astro for static generation
- Tailwind CSS for styling
- Plain data objects in `src/data/portfolio.ts` for easy editing

## Local development

1. Install dependencies with `npm install`
2. Start the dev server with `npm run dev`
3. Build the static site with `npm run build`

The generated site lands in `dist/`, which keeps deployment simple for a Raspberry Pi or any other small self-hosted box.

## Self-hosting notes

- Build locally or on the Pi with `npm run build`
- Serve `dist/` with a static file server such as Caddy, Nginx, or `python -m http.server`
- Because the site is fully static, deployment can be as simple as syncing `dist/` to the target machine

## Project structure

- `src/pages/index.astro`: Homepage composition
- `src/components/`: Reusable section and card components
- `src/data/portfolio.ts`: Editable site content
- `src/styles/global.css`: Global styles and Tailwind entrypoint
