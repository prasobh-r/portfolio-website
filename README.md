# Prasobh R — Portfolio Website

A single-page, recruiter-focused portfolio for Prasobh R, Data Analyst (SQL · Power BI · Excel · Python). Built as a static site — no framework, no build step, no backend.

## Live Site

[prasobh-r.github.io/portfolio-website](https://prasobh-r.github.io/portfolio-website/) — hosted on GitHub Pages.

## Structure

```
portfolio-website/
├── index.html                          # all page content and markup
├── style.css                           # all styling (CSS custom properties, no framework)
├── script.js                           # nav highlighting, scroll-reveal, mobile menu, scroll-to-top
├── Prasobh_R_Data_Analyst_Resume.pdf   # downloadable resume, linked from the hero and contact sections
└── images/
    ├── avatar.jpg / avatar.webp        # hero portrait (JPEG fallback + WebP)
    ├── cover-bp360.webp                # decorative cover, Business Performance 360 project card
    ├── cover-ravenstack.webp           # decorative cover, RavenStack project card
    ├── cover-marketing.webp            # decorative cover, Marketing Intelligence Analytics project card
    └── google-cert.webp                # Google Data Analytics certificate thumbnail
```

**Important:** every image path in `index.html` (and the resume link) is relative to this exact structure — e.g. `images/avatar.jpg`, not `avatar.jpg`. If images stop showing after an upload, the most common cause is the `images/` folder getting flattened during upload (its files ending up loose at the repo root instead of inside a subfolder). Always confirm on github.com that `images/` shows as an actual folder containing all 6 files before assuming anything else is wrong.

## Tech

Plain HTML5, CSS3 (custom properties, no preprocessor), and vanilla JavaScript (IIFE, `IntersectionObserver` for scroll-reveal and active-nav highlighting). Fonts loaded from Google Fonts (Space Grotesk, Inter, IBM Plex Mono). No build tools, no dependencies, no package.json — open `index.html` directly in a browser and everything works.

## Content

- **About / Experience / Education / Certifications** — sourced directly from resume and LinkedIn profile.
- **Featured Projects** — three self-directed analytics projects (Business Performance 360, RavenStack, Marketing Intelligence Analytics), each with a Business Problem / Data & Scope / Process / Key Findings / Impact breakdown. Every figure traces back to project READMEs or dashboard screenshots — nothing is estimated or invented. Dataset provenance (synthetic vs. public) is disclosed on each card.
- **Repository links** — each project card links to its actual source repo under [github.com/prasobh-r/Data_Analyst_Projects](https://github.com/prasobh-r/Data_Analyst_Projects).
- **Certifications** — the Google Data Analytics Professional Certificate links to its Coursera verification page; certificates without a public verification link are listed as plain text only.

## Updating the Site

This is a hand-maintained static site — there's no CMS or data file driving the Projects section, each project is a direct HTML block in `index.html`. To add a new project:

1. On github.com, open `index.html` and click the pencil (✏️) edit icon.
2. Copy one existing `<article class="case-card">...</article>` block (search for `<!-- Project` comments to find the boundaries) and paste a new one below it.
3. Replace the title, tags, dataset badge, repo link, cover image path, and every `case-field` (Business Problem, Data & Scope, Process, Key Findings, Impact/Recommendation) with the new project's real content.
4. Commit directly to `main`.
5. Separately, click **Add file → Upload files** and upload just the one new cover image into the `images/` folder (don't re-upload the whole folder — just add the single new file to it).

No deletion, no re-uploading the whole site, and no rebuild step required — GitHub Pages redeploys automatically within about a minute of any commit to `main`.

## Deploying (from scratch)

**GitHub Pages (what this site actually uses)**
1. Push this folder's contents to a GitHub repo, with `index.html` at the repo root.
2. Repo → **Settings** → **Pages** → set source to the branch containing `index.html` (usually `main`).
3. GitHub gives you a live link like `username.github.io/repo-name`.

**Vercel (alternative, if you ever want a custom-looking domain or prefer its dashboard)**
1. Go to [vercel.com](https://vercel.com) and sign up free.
2. Dashboard → **Add New** → **Project**.
3. Drag this whole `portfolio-website` folder into the upload area (it must contain `index.html` at the top level).
4. Click **Deploy**. You'll get a live link like `your-name.vercel.app`.

## Accessibility & Performance

Semantic HTML, ARIA labels on interactive controls, visible focus states, `prefers-reduced-motion` respected, responsive down to small mobile widths, and images served as WebP with a JPEG fallback for the hero portrait.

## License

Personal portfolio — content and resume data belong to Prasobh R. Feel free to reference the code structure for your own portfolio, but please don't reuse the personal content, project case studies, or resume as your own.
