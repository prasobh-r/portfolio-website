/* ============================================================
   PROJECT DATA
   ------------------------------------------------------------
   HOW TO ADD A NEW PROJECT:
   1. Copy one whole object below — from the opening { to the
      closing }, — and paste it as a new entry in the PROJECTS
      array (before the closing ]).
   2. Edit the values. Every piece of text uses backticks (`)
      as the quote marks, not straight quotes ('  or  "). That
      means you can type apostrophes, quotes and & normally —
      "the campaign's targeting" is safe to type exactly like
      that inside backticks. It would NOT be safe inside single
      quotes ('...').
   3. The only characters to avoid inside a backtick string are
      another backtick (`) and the two-character sequence ${ —
      both are extremely rare in normal writing, so this is a
      minor rule, not a real constraint.
   4. `rigor` is OPTIONAL — only projects that have one need it.
      Leave it out entirely for a project that doesn't need it
      (don't write "rigor: null" or similar — just omit the line).
   5. Upload the new cover image into images/, matching the
      path you write in `image` below.
   6. Commit.

   You should not need to touch anything below the PROJECTS
   array — that part (the "renderer") builds the actual page
   HTML from this data automatically, using the same visual
   design as the existing project cards.
============================================================ */

const PROJECTS = [
  {
    title: `Business Performance 360 — End-to-End BI & Reporting Dashboard`,
    tags: [`Excel`, `SQL Server`, `ETL`, `Power BI`, `DAX`],
    dataset: `Public dataset`,
    image: `images/cover-bp360.webp`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/business-performance-360-dashboard`,
    problem: `Give management one decision-ready view across executive, geographic, risk & operations, and product-performance domains — instead of scattered source data.`,
    scope: `₹16.9 Cr in revenue across 15,000 orders (Jan 2022 – Dec 2025), spanning FMCG, Electronics and Apparel across 10 Indian states. Built on a synthetic retail dataset generated in Python to simulate a real-world reporting environment — not a real company's data.`,
    process: `Generated and cleaned the dataset in Python, built SQL-based ETL and KPI-engineering workflows on a star-schema model, then designed DAX-driven KPIs across four interactive Power BI pages using the STAR framework for business storytelling.`,
    findings: [
      `Revenue grew 32.65% YoY to ₹16.9 Cr at a 22.8% margin, though margin itself was flat (-0.04% vs PY).`,
      `Kerala leads at ₹5.00 Cr (26.7% of revenue) but sits at Medium delivery-risk (5.43% delay); Assam is highest-risk at 7.92%.`,
      `Monsoon cuts regional revenue concentration by ~79.6–79.9% vs. non-monsoon periods; Onam drives a matching demand spike.`,
      `90 products flagged low-margin, concentrated in the Accessories line.`
    ],
    impact: {
      heading: `Business Impact & Recommendations`,
      text: `Reducing delivery delay by 2% in the highest-risk states (Assam, Maharashtra, Bihar, Kerala) is modeled to recover ≈₹0.08 Cr — dashboard also flags increasing inventory ahead of Onam and prioritizing FMCG strategy during monsoon.`
    }
  },
  {
    title: `RavenStack — Subscription Intelligence & Revenue Recovery Platform`,
    tags: [`Python`, `SQL Server`, `Power BI`],
    dataset: `Public dataset`,
    image: `images/cover-ravenstack.webp`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/ravenstack-subscription-intelligence`,
    problem: `Identify which subscription accounts were at risk of churning and prioritize retention outreach by revenue impact.`,
    scope: `500 accounts, 5,000 subscription records, 25,000 usage events and 2,000 support tickets — a synthetic, fully anonymized SaaS dataset ("RavenStack" by River @ Rivalytics, no PII). Modeled in SQL Server, analyzed in Python, reported in Power BI.`,
    process: `Cleaned 5 relational tables, engineered a 0–100 Customer Health Score from usage/support/tenure signals, built a subscription funnel and 24-month cohort retention heatmap, then ranked active accounts by revenue-at-risk for a save campaign.`,
    findings: [
      `₹12.19L total MRR across 454 active accounts, with ₹5.36L (≈44%) flagged at risk — a 22% churn rate.`,
      `90.5% average cohort retention across 24 monthly cohorts, with no single month showing systemic collapse.`,
      `316 accounts needed action, including 18 High Risk accounts representing ₹4.65L in actionable revenue at risk.`
    ],
    rigor: {
      heading: `Analytical Rigor`,
      text: `A logistic-regression churn model returned a weak AUC of 0.58. Rather than force-fit or hide that, further analysis showed churn reasons split almost evenly across 6 causes (15–19% each) — confirming churn here is fragmented, not driven by one fixable lever. That finding directly shaped the product: instead of a single blanket retention play, the Save Campaign Prioritizer assigns account-specific recommended actions.`
    },
    impact: {
      heading: `Business Impact`,
      text: `Modeled a renewal-improvement scenario projecting ≈₹26.8K/month (~₹3.2L annualized) in recoverable revenue; the prioritizer ranks accounts by revenue-at-risk and recommends "Standard Retention Outreach" or "Escalate to CS Manager" per account.`
    }
  },
  {
    title: `Marketing Intelligence Analytics`,
    tags: [`SQL Server`, `T-SQL`, `Excel`],
    dataset: `Public dataset — Maven Analytics`,
    image: `images/cover-marketing.webp`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/marketing-intelligence-analytics`,
    problem: `Evaluate marketing campaign performance to understand how customer segments were actually responding.`,
    scope: `Public "Marketing Campaign" dataset (Jack Daoud, via Maven Analytics) — 2,240 customers, 28 fields, joined into a star schema in SQL Server. The dataset has no campaign cost data, so this project reports response/revenue impact only, not ROI or CAC.`,
    process: `Built an RFM (Recency, Frequency, Monetary) segmentation model in T-SQL using NTILE(5), then joined segment membership to campaign response and spend to test whether segment predicted response.`,
    findings: [
      `Champions + Loyal Customers are 46% of customers but generate 84% of total revenue.`,
      `Campaign2 converted at just 1.34% — roughly 5× lower than the next-worst campaign (6.43%–14.91% for the other five).`,
      `RFM segment predicted response directly: Champions 32.73% vs. At Risk 4.33% vs. Lost 0.00%.`,
      `Customers who accepted ≥1 campaign spent 2.19× more on average (₹1,001 vs. ₹458) — a correlation, not proof campaigns caused the extra spend.`,
      `Wine spend (₹6.8L) nearly equals all other five categories combined; Spain alone is 49% of the customer base.`
    ],
    impact: {
      heading: `Recommendation`,
      text: `Protect the Champion/Loyal segment (46% of customers, 84% of revenue) with retention priority over broad discounting; investigate Campaign2's targeting and offer before reusing it; and use RFM segment as a targeting filter going forward — Champions respond at 7.6× the rate of At Risk customers.`
    }
  },
  {
    // ⚠️ TWO PLACEHOLDERS BELOW — this card will look broken until both are fixed:
    //   1. `image`  — upload a cover file to images/ using this exact filename,
    //      or change the filename here to match whatever you upload.
    //   2. `github` — replace the placeholder text with the real repo URL.
    //      Do NOT leave it as-is or guess a URL — an unclicked/wrong link is
    //      worse than no link at all.
    title: `Bank Loan Risk Intelligence`,
    tags: [`Python`, `SQL Server`, `Power BI`],
    dataset: `Public dataset — Kaggle (LendingClub)`,
    image: `images/cover-bankrisk.webp`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/bank-loan-risk-Intelligence`,
    problem: `Give a consumer lending team a way to see how portfolio risk is moving, whether an independently-built model adds real value beyond the lender's own underwriting, and where risk concentrates — feeding into an actionable approval-cutoff decision rather than just descriptive charts.`,
    scope: `150,000 real, resolved LendingClub loans (2015–2018 vintages, Fully Paid or Charged Off), via Kaggle — 21.55% overall default rate in this analysis set, elevated relative to a live book since filtering to resolved loans excludes safer, still-current recent loans. Borrower, loan-term and bureau-style fields modeled in a SQL Server star schema.`,
    process: `Built an 8-feature WOE/IV credit scorecard in Python — deliberately excluding LendingClub's own interest-rate/grade fields to avoid leaking the answer — validated it out-of-time (trained 2015–2017, tested 2017–2018), then benchmarked it against LendingClub's real A–G grade in SQL Server before building a 3-page Power BI dashboard with a live approval-cutoff simulator.`,
    findings: [
      `An independent scorecard (AUC 0.671, KS 24.06, PSI 0.087) discriminates risk within every single LendingClub grade — within Grade B alone, model sub-grades span 8.1%–21.7% default, a 2.7× spread hidden inside one lender grade.`,
      `No single feature dominates: bureau score is the strongest signal at IV 0.133, still only "Medium" strength — risk is spread thin across 8 weak-to-medium factors.`,
      `CA, TX, NY and FL together hold ~38% of total portfolio exposure; small business loans carry a 35.1% default rate — the highest of any purpose category with a reliable sample size.`,
      `DTI risk decile alone separates default rate from 30.9% (riskiest) to 16.0% (safest).`
    ],
    rigor: {
      heading: `Analytical Rigor`,
      text: `The raw vintage default-rate trend appears to decline sharply toward 2018 — an artifact of the resolved-loans-only filter, not real improvement. The reliable window is 2015–early 2017, where default rate actually rose from ~20.8% to a peak of ~27.09%. Separately, the revol_util coefficient came out sign-flipped from a known multicollinearity effect — retained and flagged as unstable rather than deleted.`
    },
    impact: {
      heading: `Business Impact`,
      text: `Because no single feature dominates, a one-lever underwriting fix wouldn't meaningfully sharpen approval decisions — reflected in the dashboard's third page, which pairs segmentation with a live score-cutoff simulator showing the real trade-off between bad loans declined and good loans lost at any threshold.`
    }
  }
];

/* ============================================================
   RENDERER
   ------------------------------------------------------------
   Builds the same case-card markup and CSS classes the site
   already uses, straight from PROJECTS above. Uses textContent
   (not innerHTML) for every piece of your written text, so
   normal characters — &, <, quotes, apostrophes — always
   display correctly and can never be interpreted as HTML.
   The only innerHTML in this file is the one fixed, hand-
   written SVG icon below — never user-editable text.
============================================================ */
(function () {
  var GITHUB_ICON_SVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>';

  function el(tag, opts) {
    var node = document.createElement(tag);
    opts = opts || {};
    if (opts.className) node.className = opts.className;
    if (typeof opts.text === 'string') node.textContent = opts.text;
    return node;
  }

  function buildField(headingText, body, opts) {
    opts = opts || {};
    var field = el('div', { className: 'case-field' + (opts.full ? ' full' : '') });
    field.appendChild(el('h4', { text: headingText }));

    if (Array.isArray(body)) {
      var ul = document.createElement('ul');
      body.forEach(function (line) {
        ul.appendChild(el('li', { text: line }));
      });
      field.appendChild(ul);
    } else if (opts.callout) {
      field.appendChild(el('div', { className: 'case-finding', text: body }));
    } else {
      field.appendChild(el('p', { text: body }));
    }
    return field;
  }

  function buildCard(p) {
    var article = el('article', { className: 'case-card reveal' });

    // ---- head: title, tags, dataset badge, repo link ----
    var head = el('div', { className: 'case-head' });
    var headLeft = document.createElement('div');
    headLeft.appendChild(el('h3', { text: p.title }));

    var tagsRow = el('div', { className: 'case-tags' });
    (p.tags || []).forEach(function (t) {
      tagsRow.appendChild(el('span', { text: t }));
    });
    if (p.dataset) {
      tagsRow.appendChild(el('span', { className: 'dataset-tag', text: p.dataset }));
    }
    headLeft.appendChild(tagsRow);
    head.appendChild(headLeft);

    var link = el('a', { className: 'case-link' });
    link.href = p.github;
    link.target = '_blank';
    link.rel = 'noopener';
    link.innerHTML = GITHUB_ICON_SVG + ' View Repository';
    head.appendChild(link);
    article.appendChild(head);

    // ---- decorative cover image ----
    var coverWrap = el('div', { className: 'case-cover-simple' });
    var img = document.createElement('img');
    img.src = p.image;
    img.alt = '';
    img.setAttribute('role', 'presentation');
    coverWrap.appendChild(img);
    article.appendChild(coverWrap);

    // ---- structured case-study body ----
    var body = el('div', { className: 'case-body' });
    body.appendChild(buildField('Business Problem', p.problem));
    body.appendChild(buildField('Data & Scope', p.scope));
    body.appendChild(buildField('Process', p.process));
    body.appendChild(buildField('Key Findings', p.findings));
    if (p.rigor) {
      body.appendChild(buildField(p.rigor.heading, p.rigor.text, { full: true, callout: true }));
    }
    if (p.impact) {
      body.appendChild(buildField(p.impact.heading, p.impact.text, { full: true, callout: true }));
    }
    article.appendChild(body);

    return article;
  }

  function render() {
    var mount = document.getElementById('caseList');
    if (!mount) return;
    mount.innerHTML = '';
    PROJECTS.forEach(function (p) {
      mount.appendChild(buildCard(p));
    });
  }

  render();
})();
