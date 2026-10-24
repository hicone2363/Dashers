# DasherMath 🚗

> **Independent, data-driven calculators and pay guides for US DoorDash drivers (Dashers).**

DasherMath is an ultra-fast, static, SEO-first website built with Astro, Tailwind CSS, TypeScript, and vanilla JavaScript. It helps delivery couriers calculate their real net hourly profit after deducting gas, depreciation, and vehicle maintenance, and provides unbiased guides on DoorDash pay structures.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [Astro](https://astro.build/) (Static Site Generation `output: 'static'`)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (mobile-first, high-contrast, prefers-color-scheme light/dark support)
- **Calculators:** Zero-framework, pure vanilla TypeScript/JavaScript with `aria-live` real-time updating
- **Content:** Markdown with Astro Content Collections and strict Zod validation schema
- **SEO & Structured Data:** Automatic XML Sitemap (`@astrojs/sitemap`), dynamic `robots.txt`, and automated JSON-LD (`Organization`, `WebSite`, `Article`, `FAQPage`, `BreadcrumbList`)
- **Layout Shift (CLS) Defense:** Fixed-height reserved containers for display ads

---

## 📁 Project Directory Structure

```text
├── public/
│   └── favicon.svg             # SVG brand icon
├── src/
│   ├── components/
│   │   ├── AdSlot.astro        # CLS-free fixed-height ad placeholders
│   │   ├── Breadcrumbs.astro   # Semantic navigation trail with schema support
│   │   ├── FaqAccordion.astro  # Accessible <details>/<summary> FAQ component
│   │   ├── Footer.astro        # Trust footer with IRS rates and legal disclaimers
│   │   ├── Header.astro        # High-contrast mobile-friendly navigation
│   │   ├── JsonLd.astro        # Structured schemas (Article, FAQPage, Org, etc.)
│   │   ├── OrderCalculator.astro # Vanilla JS "Is This Order Worth It?" engine
│   │   ├── RelatedGuides.astro # Cross-linking module
│   │   ├── SEO.astro           # Canonical, Open Graph, Twitter, and meta tags
│   │   ├── SourcesList.astro   # Government & official citation block
│   │   └── TableOfContents.astro # Auto-generated headings navigation
│   ├── content/
│   │   ├── config.ts           # Zod schema for Content Collections
│   │   └── guides/             # MD guide pages
│   │       ├── earn-by-time-doordash.md
│   │       ├── doordash-pay-per-delivery.md
│   │       ├── does-doordash-pay-hourly.md
│   │       └── does-doordash-pay-for-gas.md
│   ├── data/
│   │   ├── config.ts           # Site-wide single-source-of-truth configuration
│   │   └── rates.json          # IRS mileage rate, gas prices & thresholds
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Global HTML shell, SEO, Header, Footer
│   │   └── GuideLayout.astro   # Standardized guide template
│   ├── pages/
│   │   ├── [...slug].astro     # Dynamic route generating guide pages
│   │   ├── 404.astro           # Search-friendly 404 error page
│   │   ├── about.astro         # E-E-A-T publisher trust page
│   │   ├── contact.astro       # Reader inquiries & formula feedback
│   │   ├── disclaimer.astro    # Strict independence & financial disclaimer
│   │   ├── editorial-policy.astro # Fact-checking & sourcing standards
│   │   ├── index.astro         # Homepage with value proposition & tool
│   │   ├── privacy-policy.astro# Zero client tracking policy
│   │   ├── robots.txt.ts       # Dynamic robots.txt endpoint
│   │   └── tools/
│   │       └── is-this-order-worth-it.astro # Dedicated calculator page
│   └── styles/
│       └── global.css          # Tailwind base & markdown prose styles
├── astro.config.mjs            # Astro configuration with sitemap & Tailwind
├── tailwind.config.mjs         # Tailwind configuration & high-contrast palette
├── tsconfig.json               # TypeScript compiler config
└── package.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.17+ or 20+ (tested on Node 24)
- `pnpm` (recommended) or `npm`

### 2. Setup & Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd Dashers

# Install dependencies
pnpm install
```

### 3. Local Development Server
```bash
pnpm run dev
```
The site will run at `http://localhost:4321`.

### 4. Build for Production
```bash
pnpm run build
```
Outputs static HTML/CSS/JS files to the `/dist` directory.

### 5. Preview Production Build
```bash
pnpm run preview
```

---

## ⚙️ Updating Rates & Constants (`src/data/rates.json`)

**NEVER hardcode mileage, gas prices, or pay figures inside page components.**

All calculations and benchmarks are controlled centrally in `/src/data/rates.json`:

```json
{
  "_comment": "TODO: Verify current IRS standard mileage rate at IRS.gov (https://www.irs.gov/tax-professionals/standard-mileage-rates) before filing or making tax deductions. REVIEW LOCAL RATES: Seattle in January, NYC in April.",
  "irsMileageRateYear": 2026,
  "irsStandardMileageRate": 0.76,
  "irsStandardMileageRateJanToJun": 0.725,
  "irsMileageRateSource": "https://www.irs.gov/tax-professionals/standard-mileage-rates",
  "ratesLastUpdated": "2026-10-24",
  "defaultFuelPricePerGallon": 3.45,
  "defaultVehicleMpg": 26,
  "defaultMaintenanceDepreciationPerMile": 0.15,
  "thresholds": {
    "worthItMinHourly": 20.00,
    "borderlineMinHourly": 12.00
  },
  "localMinimums": {
    "nyc": {
      "perHour": 22.13,
      "effective": "2026-04-01",
      "excludesTips": true,
      "source": "https://www.nyc.gov/site/dca/workers/Delivery-Worker-Public-Hearing-Minimum-Pay-Rate.page"
    },
    "seattle": {
      "perMinute": 0.47,
      "perMile": 0.80,
      "perOffer": 5.34,
      "effective": "2026-01-01",
      "source": "https://seattle.gov/laborstandards/ordinances/app-based-worker-ordinances/app-based-worker-minimum-payment-ordinance"
    }
  }
}
```

### Statutory Rates Review Calendar:
1. **Annually in December / January:** Check the new federal [IRS Standard Mileage Rates](https://www.irs.gov/tax-professionals/standard-mileage-rates) and the updated Seattle OLS app-based worker rates.
2. **Annually in March / April:** Check NYC DCWP delivery worker statutory minimum wage updates.
3. Update `src/data/rates.json` and rebuild (`pnpm run build`). All calculators, footers, and guide callouts will update site-wide automatically.

---

## 📝 How to Add a New Guide Page

Every guide uses Astro's Content Collection located in `src/content/guides/`.

### 1. Create a Markdown File
Create a new file: `src/content/guides/<your-slug>.md` (e.g., `src/content/guides/doordash-acceptance-rate.md`).

### 2. Add Required Frontmatter
All fields are strictly validated by Zod in `src/content/config.ts`:

```markdown
---
title: "DoorDash Acceptance Rate: Does It Actually Matter in 2024?"
description: "Everything you need to know about DoorDash acceptance rate requirements, Tiered Dasher rewards, and deactivation rules."
mainKeyword: "DoorDash Acceptance Rate"
secondaryKeywords:
  - "can you get deactivated for low acceptance rate"
  - "DoorDash top dasher vs tiered program"
updated: "2024-10-24"
directAnswer: "DoorDash acceptance rate measures the percentage of delivery offers you accept. Under DoorDash's Independent Contractor Agreement, couriers cannot be deactivated for low acceptance rates. However, maintaining higher rates may be required to access priority high-pay offers or Dash Now privileges in certain Tiered Rewards markets [VERIFY: local market tier requirements]."
embedCalculator: false
sources:
  - name: "DoorDash Deactivation Policy"
    url: "https://help.doordash.com"
    note: "[VERIFY: Official acceptance rate contract clauses]"
faq:
  - question: "Can DoorDash fire you for declining too many orders?"
    answer: "No. You are an independent contractor and have the legal right to decline any offer."
  - question: "What is a good acceptance rate for profitability?"
    answer: "Most profit-focused drivers maintain between 15% and 40%, accepting only orders that beat their dollar-per-mile thresholds."
---

## First Main Section (H2)

Content here...

### Sub-section (H3)

Sub-content here...
```

### 3. Editorial Guidelines:
- **Do NOT invent DoorDash policies or earnings claims:** Use `[VERIFY: ...]` tags for any claim that requires regional verification or ongoing monitoring.
- **Featured Snippet Direct Answer:** Keep the `directAnswer` field between 2 and 3 concise, factual sentences answering the primary query directly.
- **Embedded Calculator:** Set `embedCalculator: true` to inject the interactive "Is This Order Worth It?" calculator directly into the guide (e.g. for fuel or vehicle cost guides).

---

## ☁️ Deployment Guide

### Cloudflare Pages
1. Connect your Git repository in the Cloudflare Dashboard (`Workers & Pages` > `Create application` > `Pages`).
2. Build Settings:
   - **Framework Preset:** `Astro`
   - **Build Command:** `pnpm run build`
   - **Build Output Directory:** `dist`
3. Optional Environment Variables:
   - `PUBLIC_GA_ID`: (e.g. `G-XXXXXXXXXX`)
   - `PUBLIC_GSC_VERIFICATION`: (Search Console token)

### Netlify
1. Connect Git repository in Netlify.
2. Build Settings:
   - **Build Command:** `pnpm run build`
   - **Publish Directory:** `dist`
3. Netlify will automatically detect Astro's static output.

---

## 🛡️ Legal and Independence Notice

**DasherMath is an independent informational project.** It is not affiliated with, endorsed by, or sponsored by DoorDash, Inc. All calculators and guides provide estimates for educational purposes and do not constitute formal tax, legal, or financial advice.
