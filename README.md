# Prasobh R — Data Analyst Portfolio

Personal portfolio website for **Prasobh R**, a Data Analyst working with **SQL, Power BI, Excel and Python**. It presents business reporting, KPI dashboards and three end-to-end analytics case studies built on real or public datasets.

**Live site:** https://prasobh-r.github.io/portfolio-website/

A plain static site: HTML, CSS and vanilla JavaScript. There is no build step, framework or package install.

---

## What the site contains

| Section | Content |
|---|---|
| **Hero** | Role line (Data Analyst \| SQL • Power BI • Excel • Python), short summary, resume download, contact icons |
| **About** | Short analytical approach and three workplace results |
| **Projects** | Three featured case studies with tool filters (see below) |
| **Experience & Education** | Work history, degrees and two certificates (Google Data Analytics, NPTEL Database Management Systems) |
| **Skills** | Core tools (SQL, Power BI, Excel, data quality) and working knowledge (Python, Tableau) |
| **How I Work** | Five-step analytics workflow |
| **Contact** | Email, phone, LinkedIn, GitHub and a contact form |

### Projects shown

| # | Project | Data | Tools |
|---|---|---|---|
| 1 | **Bank Loan Risk Intelligence**: WOE/IV credit scorecard, validated out-of-time and benchmarked against the lender's grade, with an approval-cutoff simulator | Real: LendingClub (Kaggle) | Python, SQL Server, Power BI |
| 2 | **Marketing Data Quality & Customer Intelligence**: SQL cleaning with an audit trail, 18 validation checks, RFM segments and campaign analysis | Public: Maven Analytics | SQL Server (T-SQL), Power BI |
| 3 | **Kerala Essential Commodities: Price-Risk MIS**: monthly price-pressure monitoring pack on 700K+ official daily price records, validated in pandas and backtested | Real: Govt. of Kerala, Economics & Statistics | Advanced Excel, Python |

In progress, not yet on the site: **ACTT clinical trial funnel analysis**.

**Filters:** the buttons above the cards (All, SQL, Power BI, Excel, Python) show only projects tagged with that tool. Expected results: SQL shows 1 and 2, Power BI shows 1 and 2, Excel shows 3, Python shows 1 and 3.

Each card shows a dashboard screenshot, a problem statement, key results, a one-line "Shows:" summary, tools, a data-source tag, a **View Case Study** popup (problem, data, approach, findings, limits, impact) and a **View Code on GitHub** link. The GitHub links point to project folders inside the [Data_Analyst_Projects](https://github.com/prasobh-r/Data_Analyst_Projects) repository.

**About the numbers:** every figure on a card or in a popup comes from that project's own GitHub README, and each case study states its limitations. When a README changes, update `projects.js` to match (see below).

---

## Files

```text
portfolio-website/
├── index.html                              page structure and content
├── style.css                               all styling
├── script.js                               nav, scroll effects, contact form
├── projects.js                             project data, filters and card renderer
├── Prasobh_R_Data_Analyst_Resume.pdf       downloadable resume
├── images/
│   ├── avatar.jpg / avatar.webp            profile photo
│   └── shot-*.webp                         project dashboard screenshots (one per project)
└── README.md
```

---

## How to update it

### Add or edit a project
Everything about a project lives in **`projects.js`**. Copy one block in the `PROJECTS` array, edit the values and set `featured: true`. Cards and "Case Study 01…" numbers follow the order of the blocks. A block with `featured: false` stays in the file but is not shown. Adding `tier: 'additional'` lists a project under an "Additional projects" group instead of the main grid (none are used now).

Key fields: `cardTitle`, `label`, `dataType` (`real`, `public` or `synthetic`), `dataLabel`, `problemShort`, `highlight`, `image`, `imageAlt`, `imageSize`, `proves`, `chips`, `tags`, `github`, `categories`, and the popup fields `problem`, `scope`, `process`, `findings`, `rigor`, `impact`. The optional `modelled` field adds an "estimate, not a real business result" note.

**`categories` decides the filter buttons.** List every tool the project really uses, using the filter ids: `sql`, `powerbi`, `excel`, `python`. A project missing a tag will not appear under that button. When you add a project, also check that its `label`, `chips` and `tags` mention the same tools.

**Keep the numbers in sync.** Copy figures from the project's GitHub README, not from memory. After editing, check that the screenshot in `images/` shows the same numbers as the text.

### Replace a screenshot
Save the new image as WebP at about 1600 px wide, with the same file name as the old one (for example `images/shot-bank-risk.webp`), and make `imageSize` match its width and height so the layout does not jump. Update `imageAlt` to describe what the new image shows.

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
- [ ] Resume PDF matches the website (project list, same numbers)
- [ ] All three GitHub project links open the right folder
- [ ] Every card shows its screenshot (`images/shot-*.webp`) and the numbers in it match the text
- [ ] Filter buttons give the expected results (SQL: 1, 2; Power BI: 1, 2; Excel: 3; Python: 1, 3)
- [ ] Resume download works
- [ ] Profile photo loads
- [ ] Link preview checked when pasted into LinkedIn or WhatsApp

---

## Contact

**Prasobh R** — Data Analyst · Kochi, Kerala

- Email: prasobh4902@gmail.com
- LinkedIn: https://www.linkedin.com/in/prasobh04
- GitHub: https://github.com/prasobh-r
