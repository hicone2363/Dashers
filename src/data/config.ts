import ratesData from './rates.json';

export interface SiteConfig {
  siteName: string;
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  author: {
    name: string;
    role: string;
    bio: string;
    url: string;
  };
  disclaimer: string;
  contactEmail: string;
  navItems: Array<{ label: string; href: string }>;
  adSlots: {
    leaderboard: { height: string; width: string };
    inlineRectangle: { height: string; width: string };
    mobileBanner: { height: string; width: string };
  };
  analytics: {
    googleAnalyticsId?: string;
    googleSearchConsoleVerification?: string;
  };
  rates: typeof ratesData;
}

export const SITE_CONFIG: SiteConfig = {
  siteName: "DasherMath",
  siteTitle: "DasherMath | Independent DoorDash Pay Calculators & Driver Guides",
  siteDescription:
    "Data-driven calculators, net pay formulas, and unbiased guides for US DoorDash drivers. Calculate real hourly earnings, gas costs, and order profitability.",
  siteUrl: "https://dashermath.com",
  author: {
    name: "DasherMath Research Team",
    role: "Independent Delivery Economics Researcher",
    bio: "Independent courier economics research group focusing on driver net profits, vehicle operating costs, and mileage efficiency.",
    url: "/about/"
  },
  disclaimer:
    "DasherMath is an independent informational and research resource. We are not affiliated with, endorsed by, or sponsored by DoorDash, Inc. Calculators and guides provide estimates for educational purposes and do not constitute legal, tax, or investment advice. Always verify standard deductions at IRS.gov.",
  contactEmail: "support@dashermath.com",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Order Calculator", href: "/tools/is-this-order-worth-it/" },
    { label: "Earn by Time", href: "/earn-by-time-doordash/" },
    { label: "Pay Per Delivery", href: "/doordash-pay-per-delivery/" },
    { label: "Hourly Pay", href: "/does-doordash-pay-hourly/" },
    { label: "Gas Pay", href: "/does-doordash-pay-for-gas/" },
    { label: "About", href: "/about/" }
  ],
  adSlots: {
    leaderboard: { height: "90px", width: "728px" },
    inlineRectangle: { height: "250px", width: "300px" },
    mobileBanner: { height: "100px", width: "320px" }
  },
  analytics: {
    // Loaded optionally from environment variables (e.g. Netlify/Cloudflare build vars)
    googleAnalyticsId: import.meta.env.PUBLIC_GA_ID || "",
    googleSearchConsoleVerification: import.meta.env.PUBLIC_GSC_VERIFICATION || ""
  },
  rates: ratesData
};

export default SITE_CONFIG;
