# Prasobh R — Data Analyst Portfolio

Personal portfolio website for **Prasobh R**, a Data Analyst working with **SQL, Power BI, Excel and Python**. It presents business reporting, KPI dashboards and six end-to-end analytics case studies.

**Live site:** https://prasobh-r.github.io/portfolio-website/

A plain static site: HTML, CSS and vanilla JavaScript. There is no build step, framework or package install.

---

## What the site contains

| Section | Content |
|---|---|
| **Hero** | Role line (Data Analyst \| SQL • Power BI • Excel • Python), short summary, resume download, contact icons |
| **About** | Short analytical approach and three workplace results |
| **Featured Projects** | Six case-study cards with filters (see below) |
| **Experience & Education** | Work history, degrees and the Google Data Analytics certificate |
| **Skills** | Core tools (SQL, Power BI, Excel, data quality) and working knowledge (Python, Tableau) |
| **How I Work** | Five-step analytics workflow |
| **Contact** | Email, phone, LinkedIn, GitHub and a contact form |

### Projects shown

1. **Business Performance 360°** — Power BI executive dashboard on a synthetic retail dataset
2. **Bank Risk Intelligence** — WOE/IV credit scorecard on real LendingClub data
3. **RavenStack Subscription Intelligence** — churn and revenue-at-risk analysis on a synthetic SaaS dataset
4. **Healthcare ED Throughput Optimization** — patient flow, LWBS patterns and significance tests
5. **Marketing Intelligence Analytics** — RFM segmentation and campaign response in T-SQL
6. **HR Attrition Analytics** — workforce attrition patterns from a public survey dataset

Each card shows a problem statement, key results, tools, a data-source tag, a **View Case Study** popup (problem, data, approach, findings, limits, impact) and a **View Code on GitHub** link.

**About the numbers:** projects use public or self-generated practice datasets. Figures marked "modelled estimate" are project analysis estimates, not actual client or business results.

---

## Files

```text
portfolio-website/
├── index.html                              page structure and content
├── style.css                               all styling
├── script.js                               nav, scroll effects, contact form
├── projects.js                             project data and card renderer
├── Prasobh_R_Data_Analyst_Resume.pdf       downloadable resume
├── images/
│   ├── avatar.jpg / avatar.webp            profile photo
│   └── cover-*.webp                        optional project images
└── README.md
```

---

## How to update it

### Add or edit a project
Everything about a project lives in **`projects.js`**. Copy one block in the `PROJECTS` array, edit the values and set `featured: true`. Cards and "Case Study 01…" numbers follow the order of the blocks.

Key fields: `cardTitle`, `label`, `dataType` (`real`, `public` or `synthetic`), `dataLabel`, `problemShort`, `highlight`, `modelled` (adds the estimate note), `chips`, `github`, and the popup fields `problem`, `scope`, `process`, `findings`, `rigor`, `impact`.

### Change text, metrics or experience
Edit **`index.html`**. Keep numbers consistent with the resume and the project READMEs.

### Update the resume
Replace `Prasobh_R_Data_Analyst_Resume.pdf` with a new file **of exactly the same name** (GitHub Pages is case-sensitive).

### Turn on the contact form
The form uses [Formspree](https://formspree.io) (free tier):
1. Create a form on formspree.io and copy its ID.
2. In `script.js`, replace `YOUR_FORM_ID` in `FORMSPREE_ENDPOINT`.
3. In `index.html`, replace `YOUR_FORM_ID` in the form's `action`.

Until then, the form falls back to opening the visitor's email app.

### Change colours, fonts or spacing
Design tokens (colours, spacing, radii) are at the top of `style.css`. Fonts are Space Grotesk, Inter and IBM Plex Mono, loaded from Google Fonts.

---

## Run locally

Open `index.html` in a browser. For a local server instead:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

Repository **Settings → Pages → Deploy from a branch → `main` / root**. The site is live a minute or two after each push. If you rename the repository, update the `canonical` and Open Graph URLs in `index.html`.

---

## Design and quality notes

- Responsive layout tested at desktop and phone widths
- Keyboard-friendly: skip link, visible focus states, accessible menu and popup (Esc closes)
- Text meets WCAG AA contrast; interactive elements are at least 40px tall
- Respects the reduced-motion setting
- SEO basics: page title and description, Open Graph and Twitter tags, schema.org `Person` data, favicon

## Before sharing the link — checklist

- [ ] Formspree ID added and a test message sent
- [ ] Resume PDF matches the website (reports per month, project list)
- [ ] All six GitHub project links open
- [ ] Resume download works
- [ ] Profile photo loads
- [ ] Link preview checked when pasted into LinkedIn or WhatsApp

---

## Contact

**Prasobh R** — Data Analyst · Kochi, Kerala

- Email: prasobh4902@gmail.com
- LinkedIn: https://www.linkedin.com/in/prasobh04
- GitHub: https://github.com/prasobh-r
