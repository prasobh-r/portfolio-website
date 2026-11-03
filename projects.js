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
  { id: `bi`,   label: `Business Intelligence` },
  { id: `ml`,   label: `Python & ML` },
  { id: `risk`, label: `Risk & Marketing` }
];

const MODELLED_NOTE = `Project analysis estimate from a practice dataset, not an actual client or business result.`;

const PROJECTS = [
  {
    title: `Bank Risk Intelligence`,
    cardTitle: `Bank Risk Intelligence`,
    label: `Python · Credit Risk · Power BI`,
    accent: `cyan`,
    categories: [`ml`, `risk`],
    dataType: `real`,
    dataLabel: `Real data · LendingClub (Kaggle)`,
    problemShort: `Does an independently built credit scorecard add value beyond the lender's own grading, and where does risk concentrate?`,
    summary: `WOE/IV credit scorecard validated out-of-time and benchmarked against LendingClub grades, with a live approval-cutoff simulator.`,
    highlight: {
      heading: `Key Results`,
      icon: `chart`,
      text: `Scorecard AUC 0.671 / KS 24.06 out-of-time. Exposed a 2.7× default-rate spread (8.1%–21.7%) hidden inside LendingClub Grade B alone.`
    },
    chips: [`Python`, `WOE / IV Scorecard`, `SQL Server`, `Out-of-time Validation`, `Power BI`],
    featured: true,
    tags: [`Python`, `SQL Server`, `Power BI`],
    image: `images/shot-bank-risk.webp`,
    imageSize: [1600, 925],
    imageAlt: `Bank Loan Risk Intelligence dashboard: AUC, Gini, KS and PSI cards, top features by information value, and default rates by LendingClub grade against model grade`,
    proves: `Credit-risk modelling with out-of-time validation and honestly reported limits.`,
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
      text: `The raw vintage default-rate trend appears to decline sharply toward 2018 — an artifact of the resolved-loans-only filter, not real improvement. The reliable window is 2015–early 2017, where default rate rose from ~20.8% to a peak of ~27.09%. Separately, the revol_util coefficient came out sign-flipped from a known multicollinearity effect — retained and flagged as unstable rather than deleted.`
    },
    impact: {
      heading: `Business Impact`,
      text: `Because no single feature dominates, a one-lever underwriting fix wouldn't meaningfully sharpen approval decisions. The dashboard's third page pairs segmentation with a live score-cutoff simulator showing the trade-off between bad loans declined and good loans lost at any threshold.`
    }
  },
  {
    title: `Kerala Essential Commodities — Price & Supply-Stress Intelligence`,
    cardTitle: `Kerala Essential Commodities: Price & Supply-Stress Intelligence`,
    label: `Advanced Excel · MIS · Python`,
    accent: `green`,
    categories: [`bi`, `risk`],
    dataType: `real`,
    dataLabel: `Real data · Govt. of Kerala (Economics & Statistics)`,
    problemShort: `Which essential commodities and districts show the strongest price pressure, and where should analysts look first to catch spikes early?`,
    summary: `Monthly price-risk early-warning MIS pack in Excel: composite risk index, exception report, district comparisons and a one-page dashboard.`,
    highlight: {
      heading: `Key Results`,
      icon: `chart`,
      text: `701,948 daily price records (14 districts, 72 commodities, Jan 2023 to Feb 2026) turned into a 0-100 risk index. In Feb 2026, dry chillies was the only Red alert: +15.0% month on month and +41.9% year on year.`
    },
    chips: [`Advanced Excel`, `MIS Reporting`, `Python / Pandas`, `Risk Scoring`, `Exception Reporting`, `KPI Dashboard`],
    featured: true,
    tags: [`Excel`, `Python`, `MIS`],
    image: `images/shot-kerala.webp`,
    imageSize: [744, 973],
    imageAlt: `Excel MIS dashboard for Kerala essential commodity prices: KPI cards, top 10 price-risk alerts, risk score charts and management commentary`,
    proves: `Advanced Excel MIS reporting on 700K+ rows, cross-checked against pandas.`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/kerala-commodity-price-risk-mis`,
    problem: `Give analysts a monthly early-warning view of price pressure across Kerala's essential commodities, so attention goes to the items and districts most likely to need it. The score is a prices-only indicator, not a shortage forecast.`,
    scope: `Daily retail prices from the Department of Economics and Statistics, Government of Kerala: 701,948 records, 3 Jan 2023 to 27 Feb 2026, 14 district headquarters, 70 commodities in 2023 and 72 from 2024. Zero missing prices, zero duplicate rows and zero non-positive prices were found. The cleaning, scoring and workbook are independent work, not official statistics.`,
    process: `Cleaned four yearly source files into a fact table with commodity, district and date dimensions, aggregated daily prices to monthly, and built a 0-100 risk score from seven weighted components (momentum, volatility, deviation from the 12-month average, year-on-year change, district dispersion, breadth of rise, seasonal pressure). Red is 65 or above, Amber 40 or above. Weights, caps and thresholds are editable inputs on an Assumptions sheet. Delivered as an Excel workbook with a month and commodity selector, Top 10 alerts, a Watchlist with suggested actions, a group heatmap and a district view.`,
    findings: [
      `Feb 2026: dry chillies was the only Red alert (score about 75), with all 14 districts more than 10% above their own 12-month averages, a statewide pattern. Garlic and Ladies Finger were Amber.`,
      `Coconut oil rose from about ₹165/L (Jan 2023) to a peak of about ₹466 (Oct 2025), then eased to about ₹380. Volatility stayed low because the rise was steady, which is why year-on-year change and deviation from the average are scored separately from volatility.`,
      `Most repeatedly flagged commodities (Red months, Jan 2024 to Feb 2026): garlic 8, coconut (per 10 nos) 6, onion big 6, tomato 5.`,
      `Red commodities per month ranged from 0 to 10, peaking in May and Jun 2024, with no Red alerts from Feb to May 2025.`
    ],
    rigor: {
      heading: `Validation & Limits`,
      text: `The scoring was built independently in Excel formulas and in pandas, and all 1,560 scored commodity-months matched. About 120,000 formulas recalculated in LibreOffice with zero errors. Limits: prices only (no arrivals, stock or rainfall), so supply stress is inferred from proxies; 88.9% of daily prices equal the previous record, so some values may be carried forward; 12 of 72 commodities are excluded for thin district coverage; weights are analyst-defined; and no backtest has yet tested whether high scores precede later price spikes.`
    },
    impact: {
      heading: `Business Use`,
      text: `Gives a monthly exception report that focuses review on a handful of flagged commodities instead of all 72. Next steps are a forecast backtest, arrivals and rainfall data, district-level risk scores and a Power Pivot model with DAX.`
    }
  },
  {
    title: `Business Performance 360 — End-to-End BI & Reporting Dashboard`,
    cardTitle: `Business Performance 360° Executive Dashboard`,
    label: `Power BI · SQL · DAX`,
    accent: `cyan`,
    categories: [`bi`],
    dataType: `synthetic`,
    dataLabel: `Synthetic data (Python-generated)`,
    problemShort: `Management had no single view of revenue, margin, regional delivery risk and product performance.`,
    summary: `Star-schema Power BI model with DAX KPIs tracking revenue, margin, regional delivery risk and product performance in one place.`,
    highlight: {
      heading: `Key Results`,
      icon: `chart`,
      text: `₹16.9 Cr revenue across 15,000 orders (+32.65% YoY). Cutting delivery delay by 2% in the highest-risk states is modelled to recover ≈₹0.08 Cr.`
    },
    modelled: true,
    chips: [`Excel`, `SQL Server`, `Power Query ETL`, `DAX Star Schema`, `Power BI Desktop`],
    featured: true,
    tags: [`Excel`, `SQL Server`, `ETL`, `Power BI`, `DAX`],
    image: `images/shot-bp360.webp`,
    imageSize: [1600, 999],
    imageAlt: `Business Performance 360 Power BI executive overview: revenue, profit, orders and delivery delay KPIs, monthly revenue trend, top cities and states, and Kerala seasonal impact`,
    proves: `End-to-end BI: SQL ETL, DAX KPIs and a four-page Power BI report.`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/business-performance-360-dashboard`,
    problem: `Give management one decision-ready view across executive, geographic, risk & operations, and product-performance domains — instead of scattered source data.`,
    scope: `₹16.9 Cr in revenue across 15,000 orders (Jan 2022 – Dec 2025), spanning FMCG, Electronics and Apparel across 10 Indian states. Built on a synthetic retail dataset generated in Python to simulate a real-world reporting environment — not a real company's data.`,
    process: `Generated and cleaned the dataset in Python, built SQL-based ETL and KPI-engineering workflows on a star-schema model, then designed DAX-driven KPIs across four interactive Power BI pages using the STAR framework for business storytelling.`,
    findings: [
      `Revenue grew 32.65% YoY to ₹16.9 Cr at a 22.8% margin, though margin itself was flat (-0.04% vs PY).`,
      `Kerala leads at ₹5.00 Cr (26.7% of revenue) but sits at Medium delivery-risk (5.43% delay); Assam is highest-risk at 7.92%.`,
      `Delivery delays increased during monsoon periods, and high-risk states were identified through delay analysis; Onam drives a matching demand spike.`,
      `90 products flagged low-margin, concentrated in the Accessories line.`
    ],
    impact: {
      heading: `Business Impact & Recommendations`,
      text: `Reducing delivery delay by 2% in the highest-risk states (Assam, Maharashtra, Bihar, Kerala) is modelled to recover ≈₹0.08 Cr. The dashboard also flags increasing inventory ahead of Onam and prioritizing FMCG strategy during monsoon.`
    }
  },
  {
    title: `Marketing Intelligence Analytics`,
    cardTitle: `Marketing Intelligence Analytics`,
    label: `SQL Server · T-SQL · Excel`,
    accent: `cyan`,
    categories: [`risk`],
    dataType: `public`,
    dataLabel: `Public dataset · Maven Analytics`,
    problemShort: `A retail marketing team had no systematic way to tell which customers to target or which campaigns actually converted.`,
    summary: `RFM segmentation and campaign-response analysis in T-SQL on a star schema of 2,240 customers.`,
    highlight: {
      heading: `Key Results`,
      icon: `chart`,
      text: `Champions + Loyal customers are 46% of the base but 84% of revenue. Campaign 2 converted at just 1.34% against 6–15% for the other five campaigns.`
    },
    chips: [`SQL Server`, `T-SQL`, `RFM Segmentation`, `Window Functions`, `Excel`],
    featured: true,
    tags: [`SQL Server`, `T-SQL`, `Excel`],
    image: `images/shot-marketing.webp`,
    imageSize: [1430, 804],
    imageAlt: `SQL Server Management Studio showing T-SQL queries and results for the Marketing Intelligence database: total customers, spend by product category and customers by country`,
    proves: `T-SQL customer and campaign analysis that points to a targeting decision.`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/marketing-intelligence-analytics`,
    problem: `Evaluate marketing campaign performance to understand how customer segments were actually responding, and produce evidence-based targeting recommendations.`,
    scope: `Public "Marketing Campaign" dataset (Jack Daoud, via Maven Analytics) — 2,240 customers, 28 fields, modelled as a star schema (1 dimension, 2 fact tables) in SQL Server. The dataset has no campaign cost data, so this project reports response and revenue impact only, not ROI or CAC.`,
    process: `Ran data-quality checks (0 duplicates, 1.1% missing income), built an RFM segmentation in T-SQL using NTILE(5), then joined segment membership to campaign response and spend. Also covered Pareto revenue concentration, reusable views and a stored procedure.`,
    findings: [
      `Champions + Loyal Customers are 46% of customers but generate 84% of total revenue.`,
      `Campaign 2 converted at 1.34% — roughly 5× lower than the next-worst campaign (6.43%–14.91% for the other five).`,
      `RFM segment predicted response directly: Champions 32.73% vs. At Risk 4.33% vs. Lost 0.00% (Champions respond at 7.6× the rate of At Risk).`,
      `Customers who accepted at least one campaign spent 2.19× more on average (₹1,001 vs. ₹458).`,
      `843 customers (37.63%) account for 80% of revenue; Spain alone is 49% of the customer base.`
    ],
    rigor: {
      heading: `Limits`,
      text: `No campaign cost data exists, so ROI and CAC are not calculated. The 2.19× spend gap is a correlation — Champions may simply be both bigger spenders and likelier responders — not proof that campaigns caused the extra spend.`
    },
    impact: {
      heading: `Recommendation`,
      text: `Protect the Champion/Loyal segment with retention priority over broad discounting, investigate Campaign 2's targeting and offer before reusing it, and use RFM segment as a targeting filter going forward.`
    }
  },
  {
    title: `RavenStack — Subscription Intelligence & Revenue Recovery Platform`,
    tier: `additional`,
    cardTitle: `RavenStack Subscription Intelligence & Revenue Recovery`,
    label: `Python · SQL · Power BI`,
    accent: `cyan`,
    categories: [`bi`, `ml`, `risk`],
    dataType: `synthetic`,
    dataLabel: `Synthetic SaaS dataset (Rivalytics)`,
    problemShort: `Which subscription accounts are likely to churn, why, and which should the retention team call first?`,
    summary: `Customer health scoring, cohort retention and a Save Campaign Prioritizer that ranks accounts by revenue at risk.`,
    highlight: {
      heading: `Key Results`,
      icon: `chart`,
      text: `₹5.36L monthly recurring revenue flagged at risk across 316 active accounts. A 5% renewal-rate improvement is modelled at ≈₹3.2L/year recoverable.`
    },
    modelled: true,
    chips: [`Python`, `SQL Server`, `Customer Health Score`, `Cohort Retention`, `Power BI`],
    featured: true,
    tags: [`Python`, `SQL Server`, `Power BI`],
    image: `images/shot-ravenstack.webp`,
    imageSize: [1600, 925],
    imageAlt: `Power BI save campaign prioritizer: accounts needing action, revenue at risk and a ranked table of top accounts with recommended retention actions`,
    proves: `Churn and revenue-at-risk analysis turned into a ranked retention action list.`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/ravenstack-subscription-intelligence`,
    problem: `Identify which subscription accounts were at risk of churning and prioritize retention outreach by revenue impact.`,
    scope: `500 accounts, 5,000 subscription records, 25,000 usage events, 2,000 support tickets and 600 churn events — a synthetic, fully anonymized SaaS dataset ("RavenStack" by River @ Rivalytics, no PII). Modeled in SQL Server, analyzed in Python, reported in Power BI.`,
    process: `Cleaned 5 relational tables, engineered a 0–100 Customer Health Score from usage/support/tenure signals, built a subscription funnel and 24-month cohort retention heatmap, then ranked active accounts by revenue-at-risk for a save campaign.`,
    findings: [
      `₹10.78L total MRR across 500 accounts; ₹5.36L of it sits with 316 active accounts flagged at risk, and 22% of accounts have churned.`,
      `90.5% average retention across 24 monthly cohorts, with no single month showing systemic collapse.`,
      `Churn reasons are almost evenly split across six causes (15–19% each), so no single retention lever fixes it.`
    ],
    rigor: {
      heading: `Analytical Rigor`,
      text: `A logistic-regression churn model returned a weak AUC of 0.58. Rather than force-fit or hide that, further analysis showed churn reasons split almost evenly across six causes — confirming churn here is fragmented, not driven by one fixable lever. That finding shaped the product: instead of a blanket retention play, the Save Campaign Prioritizer assigns account-specific recommended actions.`
    },
    impact: {
      heading: `Business Impact`,
      text: `A what-if simulator models a 5% renewal-rate improvement recovering ≈₹26.8K/month (~₹3.2L annualized). The prioritizer ranks at-risk accounts by revenue impact with a rules-based action per account, e.g. "Escalate to CS Manager".`
    }
  },
  {
    title: `HR Attrition Analytics — Workforce Insights Dashboard`,
    tier: `additional`,
    cardTitle: `HR Attrition Analytics Dashboard`,
    label: `Python · SQL · Power BI`,
    accent: `cyan`,
    categories: [`bi`],
    dataType: `public`,
    dataLabel: `Public dataset · Saudi Employee Attrition (Mendeley)`,
    problemShort: `Which workforce segments show the highest attrition and merit further investigation?`,
    summary: `Workforce attrition analysis across engagement, work-life balance and experience bands using Python, SQL and DAX.`,
    highlight: {
      heading: `Key Results`,
      icon: `chart`,
      text: `43.24% overall attrition across 1,191 employee records, rising to 61.06% in the difficult job-engagement group (an association, not proof of cause).`
    },
    chips: [`Python Pandas`, `SQL`, `DAX`, `Power Query`, `Power BI`],
    featured: true,
    tags: [`Python`, `SQL`, `Power BI`, `DAX`, `Power Query`],
    image: `images/shot-hr.webp`,
    imageSize: [1600, 1212],
    imageAlt: `Power BI Employee Attrition and Workforce Analytics dashboard: 1,191 employees, 43.24% attrition rate, and attrition by gender, age and sector`,
    proves: `Power BI KPI dashboard with filters for sector, department, age and experience.`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/HR-Attrition-Analytics`,
    problem: `Analyze employee attrition patterns and identify workforce segments that may need further investigation to support evidence-informed HR decisions.`,
    scope: `1,191 survey records (515 attrition, 676 active) from the Saudi Employee Attrition Dataset on Mendeley Data, covering job-related factors, engagement and work-life balance.`,
    process: `Used Python and Pandas for data cleaning and exploratory analysis, SQL for structured analysis, and Power BI with DAX to present workforce KPIs and attrition patterns.`,
    findings: [
      `The dataset shows an overall attrition rate of 43.24%.`,
      `The difficult job-engagement category shows a 61.06% attrition rate.`,
      `The difficult work-life-balance category shows a 59.91% attrition rate.`,
      `Employees in the 5–10 years experience band show a 53.20% attrition rate.`
    ],
    rigor: {
      heading: `Interpretation`,
      text: `These figures describe associations in survey data. They do not establish that any single factor causes employee attrition.`
    },
    impact: {
      heading: `Business Recommendations`,
      text: `Use the dashboard to investigate engagement, work-life balance, job satisfaction and mid-career retention, then validate findings with additional workforce evidence.`
    }
  },
  {
    title: `Healthcare ED Throughput Optimization`,
    tier: `additional`,
    cardTitle: `Healthcare ED Throughput Optimization`,
    label: `SQL Server · Python · Power BI`,
    accent: `cyan`,
    categories: [`bi`, `ml`],
    dataType: `synthetic`,
    dataLabel: `Dataset source unverified · may be simulated`,
    problemShort: `Where do ED patients wait, and what patterns sit behind patients who leave without being seen (LWBS)?`,
    summary: `Patient-flow intervals, LWBS patterns and statistical significance tests on 200,000 ED visits, reconciled between SQL Server and Power BI.`,
    highlight: {
      heading: `Key Results`,
      icon: `chart`,
      text: `200,000 ED visits (2019–2025), with 9.94% leaving without being seen. Five significance tests found no statistically significant link between LWBS and triage score, year, arrival hour or wait time (all p > 0.05).`
    },
    chips: [`SQL Server`, `Python`, `SciPy / Statsmodels`, `Hypothesis Testing`, `Power BI`, `DAX`],
    featured: true,
    tags: [`SQL Server`, `Python`, `Power BI`],
    image: `images/shot-ed.webp`,
    imageSize: [1600, 922],
    imageAlt: `Power BI Healthcare ED Throughput executive overview: total visits, LWBS rate by year, visits by disposition and a data-quality investigation flag`,
    proves: `Statistical testing and data-quality scepticism on operational data.`,
    github: `https://github.com/prasobh-r/Data_Analyst_Projects/tree/main/healthcare-ed-throughput`,
    problem: `Understand how patients move through the Emergency Department, how long they wait between care stages, what patterns appear in LWBS visits, and whether observed LWBS differences are statistically significant — while documenting how timestamp quality affects operational reporting.`,
    scope: `200,000 visit-level ED records (49,059 distinct patients) from January 2019 to December 2025: 99,845 discharged, 80,283 admitted and 19,872 LWBS (9.94%). The dataset's original source and licence have not been verified and it may be simulated, so this is an analytical demonstration, not evidence of real hospital performance.`,
    process: `Validated record counts and timestamp sequences in SQL Server, built analytical views and care-interval calculations, ran chi-square and Mann–Whitney tests in Python (SciPy, Statsmodels) at α = 0.05, reconciled SQL results with Power BI KPIs, and built a four-page Power BI report (overview, patient flow, LWBS deep dive, data quality and limits).`,
    findings: [
      `Average care intervals: arrival to triage 32.04 min, triage to doctor 66.87 min, doctor to disposition 164.37 min (each on its own eligible records).`,
      `LWBS rate by arrival hour ranges from 9.37% (8 AM) to 10.54% (11 AM); by wait-time band, only 9.73%–10.02%.`,
      `All five significance tests returned p > 0.05, so no statistically significant differences were detected at the 5% level.`,
      `Data-quality issues: 9,909 visits missing a triage timestamp, 10,000 missing a doctor-seen timestamp, 1,947 with triage before arrival and 920 with disposition before doctor-seen (counts may overlap).`
    ],
    rigor: {
      heading: `Data Honesty`,
      text: `18,871 of the 19,872 LWBS records carry a doctor-seen timestamp, which questions the source's LWBS classification and is documented as a concern rather than assumed wrong. A p-value above 0.05 does not prove that no relationship exists, and the analysis shows association, not causation.`
    },
    impact: {
      heading: `Takeaway`,
      text: `Reliable ED reporting depends on valid timestamps. Before drawing operational conclusions, the LWBS classification rules need clarifying, and bed-level occupancy and financial data would be needed. No financial impact is estimated.`
    }
  }
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
