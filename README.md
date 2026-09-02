# Prasobh R — Portfolio Website



A single-page, recruiter-focused portfolio for Prasobh R, Data Analyst (SQL · Power BI · Excel · Python). Built as a static site — no framework, no build step, no backend.



## Live Site



Not yet hosted — deploy with GitHub Pages or Vercel (see below) and update this line with the live URL.



## Structure



```

portfolio-website/

├── index.html                          # all page content and markup

├── style.css                           # all styling (CSS custom properties, no framework)

├── script.js                           # nav highlighting, scroll-reveal, mobile menu, scroll-to-top

├── Prasobh_R_Data_Analyst_Resume.pdf   # downloadable resume, linked from the hero and contact sections

└── images/

    ├── avatar.jpg / avatar.webp        # hero portrait (JPEG fallback + WebP)

    ├── cover-bp360.png                # decorative cover, Business Performance 360 project card

    ├── cover-ravenstack.png           # decorative cover, RavenStack project card

    ├── cover-marketing.png            # decorative cover, Marketing Intelligence Analytics project card

    └── google-cert.webp                # Google Data Analytics certificate thumbnail

```



## Tech



Plain HTML5, CSS3 (custom properties, no preprocessor), and vanilla JavaScript (IIFE, `IntersectionObserver` for scroll-reveal and active-nav highlighting). Fonts loaded from Google Fonts (Space Grotesk, Inter, IBM Plex Mono). No build tools, no dependencies, no package.json — open `index.html` directly in a browser and everything works.



## Content



- **About / Experience / Education / Certifications** — sourced directly from resume and LinkedIn profile.

- **Featured Projects** — three self-directed analytics projects (Business Performance 360, RavenStack, Marketing Intelligence Analytics), each with a Business Problem / Data & Scope / Process / Key Findings / Impact breakdown. Every figure traces back to project READMEs or dashboard screenshots — nothing is estimated or invented. Dataset provenance (synthetic vs. public) is disclosed on each card.

- **Repository links** — each project card links to its actual source repo under [github.com/prasobh-r/Data_Analyst_Projects](https://github.com/prasobh-r/Data_Analyst_Projects).

- **Certifications** — the Google Data Analytics Professional Certificate links to its Coursera verification page; certificates without a public verification link are listed as plain text only.



## Deploying



**Vercel (recommended, no CLI needed)**

1. Go to [vercel.com](https://vercel.com) and sign up free.

2. Dashboard → **Add New** → **Project**.

3. Drag this whole `portfolio-website` folder into the upload area (it must contain `index.html` at the top level, as it does here).

4. Click **Deploy**. You'll get a live link like `your-name.vercel.app`.



**GitHub Pages**

1. Push this folder's contents to a GitHub repo (`index.html` at the repo root, or in a `/docs` folder if you configure it that way).

2. Repo → **Settings** → **Pages** → set source to the branch/folder containing `index.html`.

3. GitHub gives you a live link like `username.github.io/repo-name`.



## Accessibility & Performance



Semantic HTML, ARIA labels on interactive controls, visible focus states, `prefers-reduced-motion` respected, responsive down to small mobile widths, and images served as WebP with a JPEG fallback for the hero portrait.



## License



Personal portfolio — content and resume data belong to Prasobh R. Feel free to reference the code structure for your own portfolio, but please don't reuse the personal content, project case studies, or resume as your own.

