/* ============================================================
   PROJECT DATA
   ------------------------------------------------------------
   HOW TO ADD A NEW PROJECT: copy one object, edit it, set
   featured: true, commit. Text uses backticks so apostrophes and
   & are safe. Avoid a literal backtick or ${ inside.

   Fields shown on the CARD:
     tier           `additional` puts the card under "Additional projects" (default: featured)
     cardTitle      title
     label          pill, e.g. `Power BI · SQL · DAX`
     accent         `cyan` or `green`
     categories     filter ids (see CATEGORIES)
     dataType       `real` | `public` | `synthetic`  (data-source tag colour)
     dataLabel      text of the data-source tag
     problemShort   one-line problem statement
     highlight      { heading, text }  2-3 key numbers only
     modelled       true -> adds "modelled estimate" note under highlight
     chips          tool tags
     github         "View Code on GitHub" link
     image          screenshot, e.g. `images/shot-kerala.webp` (card thumbnail + top of case study)
     imageAlt       alt text describing the screenshot
     imageSize      [width, height] in pixels of the file (reserves space so the page does not jump)
     proves         one line on what the project demonstrates (shown on the card)
   Fields shown in the expandable CASE STUDY panel:
     problem, scope, process, findings[], rigor{}, impact{}
============================================================ */

const CATEGORIES = [
  { id: `all`,  label: `All Projects` },
  { id: `sql`,     label: `SQL` },
  { id: `powerbi`, label: `Power BI` },
  { id: `excel`,   label: `Excel` },
  { id: `python`,  label: `Python` }
];

const MODELLED_NOTE = `Project analysis estimate from a practice dataset, not an actual client or business result.`;

const PROJECTS = [
  {
    title: `Bank Loan Risk Intelligence`,
    cardTitle: `Bank Loan Risk Intelligence`,
    label: `Python · Credit Risk · Power BI`,
    accent: `cyan`,
    categories: [`python`, `sql`, `powerbi`],
    dataType: `real`,
    dataLabel: `Real data · LendingClub (Kaggle)`,
    problemShort: `Does an independently built credit scorecard add value beyond the lender's own grading, and where does risk concentrate?`,
    summary: `WOE/IV credit scorecard validated out-of-time and benchmarked against LendingClub grades, with a live approval-cutoff simulator.`,
    highlight: {
      heading: `Key Results`,
      icon: `chart`,
      text: `Out-of-time AUC 0.677 (KS 25.8). Alone it ranks slightly below the lender's own grade (0.681); combined with the grade, AUC rises to 0.701. A score cutoff of 530 approves 54.9% of test loans at an 11.7% default rate, against 18.6% overall.`
    },
    chips: [`Python`, `WOE / IV Scorecard`, `SQL Server`, `Out-of-time Validation`, `Power BI`],
    featured: true,
    tags: [`Python`, `SQL Server`, `Power BI`],
    image: `images/shot-bank-risk.webp`,
    imageSize: [1600, 925],
    imageAlt: `Bank Loan Risk Intelligence dashboard, portfolio page: 150,000 loans, $2.18bn exposure, 21.55% default rate, default rate by LendingClub grade, and default rate by origination quarter for 36-month and 60-month loans with a note on the resolved-loans-only filter`,
    proves: `Credit-risk modelling with out-of-time validation and honestly reported limits.`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/bank-loan-risk-Intelligence`,
    problem: `Give a consumer lending team a way to see how portfolio risk is moving, whether an independently-built model adds real value beyond the lender's own underwriting, and where risk concentrates — feeding into an actionable approval-cutoff decision rather than just descriptive charts.`,
    scope: `150,000 real, resolved LendingClub loans (2015–2018 vintages, Fully Paid or Charged Off), via Kaggle, with a 21.55% default rate in this analysis set. That is not a live-book rate: filtering to resolved loans leaves out loans still being repaid, which are mostly good. Borrower, loan-term and bureau-style fields are modelled in a SQL Server star schema.`,
    process: `Built an 8-feature WOE/IV credit scorecard in Python, deliberately excluding LendingClub's own interest-rate and grade fields to avoid leaking the answer. Trained on 2015-01 to 2017-09 vintages (134,913 loans) and tested out-of-time on 2017-10 to 2018-12 (15,087 loans), benchmarked it against LendingClub's A to G grade in Python and SQL Server, then built a 3-page Power BI dashboard with a live approval-cutoff simulator.`,
    findings: [
      `Out-of-time performance is modest: AUC 0.677, Gini 0.353, KS 25.8, PSI 0.047 (no significant population shift). On its own the model ranks defaults slightly worse than LendingClub's grade (AUC 0.681); adding it to the grade lifts AUC to 0.701 (+0.020).`,
      `The model still ranks risk within every LendingClub grade (AUC 0.57 to 0.62). Inside Grade B alone, default rises from 8.8% for model grade A to 19.9% for model grade F, about a 2.3× spread.`,
      `No single feature dominates: loan term (IV 0.178) and bureau score (IV 0.137) are the only "Medium" signals and nothing is "Strong", so risk is spread across 8 weak-to-medium factors.`,
      `CA, TX, NY and FL hold 38.2% of exposure. Small business loans default at 35.1%, the highest of any purpose with at least 1,000 loans, and 60-month loans default at 34.9% against 17.5% for 36-month loans.`,
      `DTI deciles separate default rate from about 31% (riskiest) to 16% (safest).`
    ],
    rigor: {
      heading: `Analytical Rigor`,
      text: `The raw vintage trend falls sharply toward 2018, an artifact of the resolved-loans-only filter. Only the 2015 to 2016 Q1 vintages (about 20% default) are fully seasoned; after that, a real change in loan quality cannot be separated from the filter, so the later rise should not be read as deterioration. The out-of-time test set is the least seasoned part of the data, which is why its default rate (18.6%) is below the training rate (21.9%). One coefficient, revol_util, has a flipped sign: it overlaps with the bureau score (all variance inflation factors are below 1.5, so this is not severe multicollinearity) and was kept and flagged as unstable rather than deleted.`
    },
    impact: {
      heading: `Business Impact`,
      text: `No single feature dominates and the model's gain over the lender's grade is small, so the useful output is a combined ranking plus an explicit cutoff, not a one-lever underwriting fix. The dashboard's third page pairs segmentation with a live score-cutoff simulator showing the trade-off between bad loans declined and good loans lost. Which cutoff is best is a margin and volume decision the data cannot settle, since it holds no pricing or loss data.`
    }
  },
  {
    title: `Marketing Data Quality & Customer Intelligence`,
    cardTitle: `Marketing Data Quality & Customer Intelligence`,
    label: `SQL Server · Power BI · Data Cleaning`,
    accent: `cyan`,
    categories: [`sql`, `powerbi`],
    dataType: `public`,
    dataLabel: `Public dataset · Maven Analytics`,
    problemShort: `A retail marketing team needed trustworthy customer data and a way to tell which customers to target and which campaigns underperformed.`,
    summary: `SQL data cleaning with an audit trail, validation checks, then RFM and campaign analysis on 2,240 customer records.`,
    highlight: {
      heading: `Key Results`,
      icon: `chart`,
      text: `47 suspected duplicate records excluded and 18 of 18 validation checks passed. Champions + Loyal customers are 46% of 2,193 customers but 83% of revenue; Campaign 2 was accepted by only 1.3% of customers.`
    },
    chips: [`SQL Server`, `T-SQL`, `Data Cleaning`, `Data Validation`, `RFM Segmentation`, `Window Functions`, `Power BI`],
    featured: true,
    tags: [`SQL Server`, `T-SQL`, `Power BI`],
    image: `images/shot-marketing.webp`,
    imageSize: [1600, 900],
    imageAlt: `Marketing Intelligence dashboard: 2,193 customers and 1,329,690 revenue; Champion and Loyal customers are 45.7% of customers and 83.2% of revenue; Campaign 2 was accepted by 1.32% of customers against 6.48% for Campaign 1; final-campaign acceptance is 34.0% for Champions and 4.4% for At Risk customers`,
    proves: `SQL data cleaning with a documented audit trail, then customer and campaign analysis that points to a targeting decision.`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/marketing-intelligence-analytics`,
    problem: `Prepare a marketing dataset for analysis by profiling and cleaning it with documented decisions, then evaluate how customer segments responded to campaigns and produce evidence-based targeting suggestions.`,
    scope: `Public "Marketing Campaign" dataset (Jack Daoud, via Maven Analytics): 2,240 customer records, 28 fields. After cleaning, 2,193 customers were modelled as a star schema (1 dimension, 2 fact tables). The data has no campaign cost information and does not say who received each campaign, so the project reports acceptance rates and spend only, not ROI, CAC or true conversion. The source does not state the currency.`,
    process: `Profiled the raw table in SQL Server (nulls, duplicates, implausible values, category labels, logical consistency), then built a cleaned table with every rule logged: 47 suspected duplicates excluded to a rejected-records table, 3 implausible birth years and 1 extreme income outlier set to NULL and flagged, 7 invalid marital labels standardised. 18 validation checks reconciled rows, spend and campaign totals back to the raw table and confirmed that only the logged values changed. RFM scoring used NTILE(5) with a deterministic tie-breaker and was re-tested without 6 inconsistent records. A one-page Power BI dashboard (DAX measures, Country slicer) was built on two SQL views, with every number reconciled to the SQL results.`,
    findings: [
      `Champion + Loyal customers are 45.7% of customers but 83.2% of revenue. This is partly built in, since spend is one of the RFM inputs; the segments were unchanged (329 and 673 customers) when 6 inconsistent records were excluded.`,
      `Campaign 2 was accepted by 1.32% of customers against 6.5% to 15% for the other campaigns; the gap to Campaign 1 is statistically clear (McNemar paired test, chi-square = 86.5).`,
      `Final-campaign acceptance rises with RFM segment: Champions 34.04%, At Risk 4.37%, Lost 0.00%. This is an association at one point in time, not a prediction.`,
      `Customers who accepted at least one campaign spend 2.19x more on average (1,002.67 vs 458.08 currency units).`,
      `827 customers (37.7%) account for 80% of revenue, and higher-value segments buy more by catalog (27% of Champion purchases vs 8% for At Risk).`
    ],
    rigor: {
      heading: `Limits`,
      text: `No campaign cost or targeting data exists, so ROI, CAC and true conversion are not calculated; acceptance rates are shares of all customers. The spend gap and segment response are correlations, not proof that campaigns caused them. Duplicate exclusion and the Alone to Single relabel are analyst decisions recorded in the cleaning log. Missing income is concentrated in Australia (13 of 160 customers) and is not random across countries, so it was flagged and not imputed. Recency looks uniformly generated, so findings describe this dataset and may not transfer to a live customer base.`
    },
    impact: {
      heading: `Recommendation`,
      text: `Prioritise retention for the Champion and Loyal segments over broad discounting, review Campaign 2's targeting and offer before reusing it, and use RFM segment as a targeting filter. Treat these as hypotheses to test, since the data cannot show cause.`
    }
  },
  {
    title: `Kerala Essential Commodities: Price-Risk MIS`,
    cardTitle: `Kerala Essential Commodities: Price-Risk MIS`,
    label: `Advanced Excel · MIS · Python`,
    accent: `green`,
    categories: [`excel`, `python`],
    dataType: `real`,
    dataLabel: `Real data · Govt. of Kerala (Economics & Statistics)`,
    problemShort: `Which essential commodities and districts show the strongest price pressure, and where should analysts focus attention each month?`,
    summary: `Monthly price-pressure monitoring MIS pack in Excel: composite risk score, exception report, district comparisons and a one-page dashboard.`,
    highlight: {
      heading: `Key Results`,
      icon: `chart`,
      text: `701,948 daily price records (14 districts, 72 commodities, Jan 2023 to Feb 2026) turned into a 0 to 100 risk score. In Feb 2026, dry chillies was the only Red alert: +15.0% month on month and +41.9% year on year. A backtest shows the score marks spikes in progress, not coming surges.`
    },
    chips: [`Advanced Excel`, `MIS Reporting`, `Python / Pandas`, `Risk Scoring`, `Backtesting`, `KPI Dashboard`],
    featured: true,
    tags: [`Excel`, `Python`, `MIS`],
    image: `images/shot-kerala.webp`,
    imageSize: [744, 973],
    imageAlt: `Excel MIS dashboard for Kerala essential commodity prices: KPI cards, top 10 price-risk alerts, risk score charts and management commentary`,
    proves: `Advanced Excel MIS reporting on 700K+ rows, cross-checked against pandas and backtested.`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/kerala-commodity-price-risk-mis`,
    problem: `Give analysts a monthly view of price pressure across Kerala's essential commodities, so attention goes to the items and districts most likely to need it. The score is a prices-only indicator of current pressure, not a shortage forecast.`,
    scope: `Daily retail prices from the Department of Economics and Statistics, Government of Kerala: 701,948 records, 3 Jan 2023 to 27 Feb 2026, 14 district headquarters, 70 commodities in 2023 and 72 from 2024. Zero missing prices, zero duplicate rows and zero non-positive prices were found. The cleaning, scoring and workbook are independent work, not official statistics.`,
    process: `Cleaned four yearly source files into a fact table with commodity, district and date dimensions, aggregated daily prices to monthly, and built a 0-100 risk score from seven weighted components (momentum, volatility, deviation from the 12-month average, year-on-year change, district dispersion, breadth of rise, seasonal pressure). Red is 65 or above, Amber 40 or above. Weights, caps and thresholds are editable inputs on an Assumptions sheet. Delivered as an Excel workbook with a month and commodity selector, Top 10 alerts, a Watchlist with suggested actions, a group heatmap and a district view.`,
    findings: [
      `Feb 2026: dry chillies was the only Red alert (score about 75), with all 14 districts more than 10% above their own 12-month averages, a statewide pattern. Garlic and Ladies Finger were Amber.`,
      `Coconut oil rose from about ₹165/L (Jan 2023) to a peak of about ₹466 (Oct 2025), then eased to about ₹380. Volatility stayed low because the rise was steady, which is why year-on-year change and deviation from the average are scored separately from volatility.`,
      `Most repeatedly flagged commodities (Red months, Jan 2024 to Feb 2026): garlic 8, coconut (per 10 nos) 6, onion big 6, tomato 5.`,
      `Red commodities per month ranged from 0 to 10, peaking in May and Jun 2024, with no Red alerts from Feb to May 2025.`,
      `Backtest on 1,500 scored commodity-months: Red and Amber flags were followed by a 5%+ price rise next month 29.1% and 33.0% of the time, against a 14.7% base rate. A rule using only each commodity's own history does as well, and three months after a Red flag the price was lower in 71% of cases.`
    ],
    rigor: {
      heading: `Validation & Limits`,
      text: `The scoring was built independently in Excel formulas and in pandas, and all 1,560 scored commodity-months matched. About 120,000 formulas recalculated in LibreOffice with zero errors. The backtest is in-sample (weights were calibrated on the same period) and shows little ability to time rises within a commodity or to rank commodities month by month, so the score is a monitoring tool, not a predictor. Other limits: prices only (no arrivals, stock or rainfall), so supply stress is inferred from proxies; 89.0% of daily prices equal the previous record, so some values may be carried forward; 12 of 72 commodities are excluded for thin district coverage; weights are analyst-defined.`
    },
    impact: {
      heading: `Business Use`,
      text: `Gives a monthly exception report that focuses review on a handful of flagged commodities instead of all 72, with the price direction shown beside each score so a spike that is already easing is not mistaken for a new one. Next steps: test the score on data after Feb 2026, backtest the forecasts, add arrivals and rainfall data and district-level risk scores, and build a Power Pivot model with DAX.`
    }
  },
  {
    title: `Business Performance 360 — End-to-End BI & Reporting Dashboard`,
    tier: `additional`,
    cardTitle: `Business Performance 360° Executive Dashboard`,
    label: `Power BI · SQL · DAX`,
    accent: `cyan`,
    categories: [`sql`, `powerbi`, `excel`],
    dataType: `synthetic`,
    dataLabel: `Synthetic data (Python-generated)`,
    problemShort: `Management had no single view of revenue, margin, regional delivery risk and product performance.`,
    summary: `Star-schema Power BI model with DAX KPIs tracking revenue, margin, regional delivery risk and product performance in one place.`,
    highlight: {
      heading: `Key Results`,
      icon: `chart`,
      text: `4-page Power BI report built on 15,000 synthetic orders (Jan 2022 to Dec 2025): star schema, SQL ETL and DAX KPIs. The figures show the dashboard working, not real business results.`
    },
    chips: [`Excel`, `SQL Server`, `Power Query ETL`, `DAX Star Schema`, `Power BI Desktop`],
    featured: false, // hidden: synthetic-data practice build. Set to true to show it again.,
    tags: [`Excel`, `SQL Server`, `ETL`, `Power BI`, `DAX`],
    image: `images/shot-bp360.webp`,
    imageSize: [1600, 999],
    imageAlt: `Business Performance 360 Power BI executive overview: revenue, profit, orders and delivery delay KPIs, monthly revenue trend, top cities and states, and Kerala seasonal impact`,
    proves: `End-to-end BI build: SQL ETL, star schema, DAX KPIs and a four-page Power BI report.`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/business-performance-360-dashboard`,
    problem: `Give management one decision-ready view across executive, geographic, risk & operations, and product-performance domains — instead of scattered source data.`,
    scope: `₹16.9 Cr in revenue across 15,000 orders (Jan 2022 – Dec 2025), spanning FMCG, Electronics and Apparel across 10 Indian states. Built on a synthetic retail dataset generated in Python to simulate a real-world reporting environment — not a real company's data.`,
    process: `Generated and cleaned the dataset in Python, built SQL-based ETL and KPI-engineering workflows on a star-schema model, then designed DAX-driven KPIs across four interactive Power BI pages using the STAR framework for business storytelling.`,
    findings: [
      `Revenue grew 32.65% YoY to ₹16.9 Cr at a 22.8% margin, though margin itself was flat (-0.04% vs PY).`,
      `Kerala leads at ₹5.00 Cr (26.7% of revenue) but sits at Medium delivery-risk (5.43% delay); Assam is highest-risk at 7.92%.`,
      `The dashboard surfaces delivery delay by state and season: delays rise in monsoon months and Onam drives a demand spike. Both patterns were written into the data generator.`,
      `90 products flagged low-margin, concentrated in the Accessories line.`
    ],
    rigor: {
      heading: `Data Honesty`,
      text: `I generated this dataset in Python, so patterns such as monsoon delays and the Onam spike reflect rules I wrote, not discoveries about a real business. The project demonstrates the build (SQL ETL, star schema, DAX, report design), and no business impact is claimed.`
    },
    impact: {
      heading: `What It Demonstrates`,
      text: `How a single reporting layer can put revenue, margin, delivery risk and product performance in front of management, and how the KPIs are defined and reconciled between SQL and DAX.`
    }
  },
  /* NEXT: ACTT clinical trial funnel analysis. Copy one object above, fill every field from the
     finished README (each number must match it), set dataType to `real` or `public` honestly,
     then add featured: true. Keep the Bank, Marketing, Kerala, ACTT order. */
];

/* ============================================================
   RENDERER
   All written text goes through textContent. The only innerHTML
   is fixed, hand-written SVG icons.
============================================================ */
(function () {
  var ICONS = {
    github: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    share: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
    bulb: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 21h6v-1H9v1Zm3-19a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2Z"/></svg>',
    chart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    chevron: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    book: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>'
  };

  function el(tag, opts) {
    var node = document.createElement(tag);
    opts = opts || {};
    if (opts.className) node.className = opts.className;
    if (typeof opts.text === 'string') node.textContent = opts.text;
    return node;
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function shareProject(p, btn) {
    var label = btn.querySelector('.share-label');
    var original = label.textContent;
    function done(msg) {
      label.textContent = msg;
      setTimeout(function () { label.textContent = original; }, 1800);
    }
    var data = { title: p.cardTitle || p.title, text: p.summary || '', url: p.github };
    if (navigator.share) {
      navigator.share(data).catch(function () {});
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(p.github).then(function () { done('Link copied'); },
                                                   function () { done('Copy failed'); });
    } else {
      window.prompt('Copy this link:', p.github);
    }
  }

  function detailBlock(title, text) {
    var d = el('div', { className: 'case-detail-block' });
    d.appendChild(el('h4', { text: title }));
    d.appendChild(el('p', { text: text }));
    return d;
  }

  // Screenshot helper. A missing file removes itself instead of showing a broken-image icon.
  // defer = true keeps the file from loading until the case-study dialog is opened.
  function buildShot(p, tag, cls, defer) {
    if (!p.image) return null;
    var box = el(tag, { className: cls });
    if (tag === 'button') box.type = 'button';
    var img = document.createElement('img');
    if (defer) img.setAttribute('data-src', p.image);
    else { img.src = p.image; img.loading = 'lazy'; }
    img.alt = p.imageAlt || ((p.cardTitle || p.title) + ' dashboard screenshot');
    img.decoding = 'async';
    if (p.imageSize) { img.width = p.imageSize[0]; img.height = p.imageSize[1]; }
    img.addEventListener('error', function () {
      if (box.parentNode) box.parentNode.removeChild(box);
      equalise();
    });
    box.appendChild(img);
    return box;
  }

  function buildDetail(p, id) {
    var wrap = el('div', { className: 'case-detail' });
    var fig = buildShot(p, 'figure', 'case-detail-shot', true);
    if (fig) wrap.appendChild(fig);
    if (p.problem) wrap.appendChild(detailBlock('Problem', p.problem));
    if (p.scope) wrap.appendChild(detailBlock('Data & scope', p.scope));
    if (p.process) wrap.appendChild(detailBlock('Approach', p.process));
    if (p.findings && p.findings.length) {
      var f = el('div', { className: 'case-detail-block' });
      f.appendChild(el('h4', { text: 'Findings' }));
      var ul = el('ul');
      p.findings.forEach(function (t) { ul.appendChild(el('li', { text: t })); });
      f.appendChild(ul);
      wrap.appendChild(f);
    }
    if (p.rigor) wrap.appendChild(detailBlock(p.rigor.heading, p.rigor.text));
    if (p.impact) wrap.appendChild(detailBlock(p.impact.heading, p.impact.text));
    return wrap;
  }

  function buildCard(p, index) {
    var card = el('article', { className: 'case-card reveal' });
    card.setAttribute('data-accent', p.accent || 'cyan');
    card.setAttribute('data-categories', (p.categories || []).join(' '));

    var top = el('div', { className: 'case-top' });
    top.appendChild(el('span', { className: 'case-pill', text: p.label || (p.tags || []).slice(0, 3).join(' · ') }));
    top.appendChild(el('span', { className: 'case-num', text: 'Case Study ' + pad(index + 1) }));
    card.appendChild(top);

    var shot = buildShot(p, 'button', 'case-shot');
    if (shot) {
      shot.setAttribute('aria-haspopup', 'dialog');
      shot.setAttribute('aria-label', 'View case study: ' + (p.cardTitle || p.title));
      shot.addEventListener('click', openDialog);
      card.appendChild(shot);
    }

    card.appendChild(el('h3', { text: p.cardTitle || p.title }));

    if (p.dataLabel) {
      var tag = el('span', { className: 'case-data-tag', text: p.dataLabel });
      tag.setAttribute('data-kind', p.dataType || 'public');
      card.appendChild(tag);
    }

    if (p.problemShort) {
      var prob = el('p', { className: 'case-problem' });
      prob.appendChild(el('strong', { text: 'Problem: ' }));
      prob.appendChild(document.createTextNode(p.problemShort));
      card.appendChild(prob);
    }

    if (p.highlight) {
      var box = el('div', { className: 'case-callout' });
      var head = el('div', { className: 'case-callout-head' });
      var ic = document.createElement('span');
      ic.innerHTML = ICONS[p.highlight.icon] || ICONS.chart;
      ic.style.display = 'inline-flex';
      head.appendChild(ic);
      head.appendChild(el('span', { text: p.highlight.heading + ':' }));
      box.appendChild(head);
      box.appendChild(el('p', { text: p.highlight.text }));
      if (p.modelled) box.appendChild(el('p', { className: 'case-callout-note', text: 'Modelled estimate · ' + MODELLED_NOTE }));
      card.appendChild(box);
    }

    if (p.proves) {
      var pr = el('p', { className: 'case-proves' });
      pr.appendChild(el('strong', { text: 'Shows: ' }));
      pr.appendChild(document.createTextNode(p.proves));
      card.appendChild(pr);
    }

    var chips = el('div', { className: 'case-chips' });
    (p.chips || p.tags || []).forEach(function (c) { chips.appendChild(el('span', { text: c })); });
    card.appendChild(chips);

    var dlg = el('dialog', { className: 'case-dialog' });
    dlg.setAttribute('aria-label', (p.cardTitle || p.title) + ' case study');
    dlg.setAttribute('data-accent', p.accent || 'cyan');
    var dHead = el('div', { className: 'case-dialog-head' });
    dHead.appendChild(el('h3', { text: p.cardTitle || p.title }));
    var closeBtn = el('button', { className: 'case-dialog-close', text: '\u00d7' });
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Close case study');
    closeBtn.addEventListener('click', function () { dlg.close(); });
    dHead.appendChild(closeBtn);
    dlg.appendChild(dHead);
    dlg.appendChild(buildDetail(p));
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', function () { document.documentElement.classList.remove('dialog-open'); });
    card.appendChild(dlg);

    function openDialog() {
      Array.prototype.forEach.call(dlg.querySelectorAll('img[data-src]'), function (im) {
        im.src = im.getAttribute('data-src');
        im.removeAttribute('data-src');
      });
      document.documentElement.classList.add('dialog-open');
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    }

    var foot = el('div', { className: 'case-foot' });
    var actions = el('div', { className: 'case-actions' });

    var toggle = el('button', { className: 'case-toggle' });
    toggle.type = 'button';
    toggle.setAttribute('aria-haspopup', 'dialog');
    toggle.innerHTML = ICONS.book + '<span class="case-toggle-label">View Case Study</span>';
    toggle.addEventListener('click', openDialog);
    actions.appendChild(toggle);

    var link = el('a', { className: 'case-link' });
    link.href = p.github;
    link.target = '_blank';
    link.rel = 'noopener';
    link.innerHTML = ICONS.github + '<span>View Code on GitHub</span>';
    actions.appendChild(link);
    foot.appendChild(actions);

    var share = el('button', { className: 'case-share' });
    share.type = 'button';
    share.setAttribute('aria-label', 'Share ' + (p.cardTitle || p.title));
    share.innerHTML = ICONS.share + '<span class="share-label">Share</span>';
    share.addEventListener('click', function () { shareProject(p, share); });
    foot.appendChild(share);
    card.appendChild(foot);

    return card;
  }

  function visibleCards(grid) {
    return Array.prototype.filter.call(grid.children, function (c) { return !c.hidden; });
  }

  function equalise() {
    var cards = document.querySelectorAll('.case-card');
    Array.prototype.forEach.call(cards, function (c) { c.style.minHeight = ''; });
    if (!window.matchMedia('(min-width: 821px)').matches) return;
    // Equalise each grid on its own. An odd card out stays the same width as the others (no full-width card).
    Array.prototype.forEach.call(document.querySelectorAll('.case-grid'), function (grid) {
      var group = visibleCards(grid);
      var max = 0;
      group.forEach(function (c) { max = Math.max(max, c.getBoundingClientRect().height); });
      if (max) group.forEach(function (c) { c.style.minHeight = Math.ceil(max) + 'px'; });
    });
  }

  function applyFilter(id, grids, filterWrap) {
    grids.forEach(function (grid) {
      Array.prototype.forEach.call(grid.children, function (card) {
        var cats = (card.getAttribute('data-categories') || '').split(' ');
        var show = id === 'all' || cats.indexOf(id) !== -1;
        card.hidden = !show;
        if (show) card.classList.add('in');
      });
    });
    var moreHead = document.getElementById('moreHead');
    var moreGrid = document.getElementById('moreList');
    if (moreHead && moreGrid) {
      var none = visibleCards(moreGrid).length === 0;
      moreHead.hidden = none;
      moreGrid.hidden = none;
    }
    Array.prototype.forEach.call(filterWrap.children, function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-filter') === id ? 'true' : 'false');
    });
    equalise();
  }

  function render() {
    var grid = document.getElementById('caseList');
    var moreGrid = document.getElementById('moreList');
    var filterWrap = document.getElementById('caseFilters');
    if (!grid) return;
    grid.innerHTML = '';
    if (moreGrid) moreGrid.innerHTML = '';

    var n = 0;
    PROJECTS.filter(function (p) { return p.featured && p.tier !== 'additional'; }).forEach(function (p) {
      grid.appendChild(buildCard(p, n++));
    });
    PROJECTS.filter(function (p) { return p.featured && p.tier === 'additional'; }).forEach(function (p) {
      (moreGrid || grid).appendChild(buildCard(p, n++));
    });

    if (filterWrap) {
      var grids = moreGrid ? [grid, moreGrid] : [grid];
      filterWrap.innerHTML = '';
      CATEGORIES.forEach(function (c) {
        var b = el('button', { className: 'case-filter', text: c.label });
        b.type = 'button';
        b.setAttribute('data-filter', c.id);
        b.setAttribute('aria-pressed', c.id === 'all' ? 'true' : 'false');
        b.addEventListener('click', function () { applyFilter(c.id, grids, filterWrap); });
        filterWrap.appendChild(b);
      });
      applyFilter('all', grids, filterWrap);
      grids.forEach(function (g) {
        Array.prototype.forEach.call(g.children, function (c) { c.classList.remove('in'); });
      });
      window.addEventListener('resize', equalise);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(equalise);
      window.addEventListener('load', equalise);
    }
  }

  render();
})();
