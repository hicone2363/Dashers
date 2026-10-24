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
    enabled: boolean;
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
    name: "Marc D.",
    role: "Independent Courier & Data Analyst",
    bio: "Active food delivery courier and independent analyst tracking vehicle operating costs, delivery algorithms, and real net pay.",
    url: "/about/"
  },
  disclaimer:
    "DasherMath is an independent informational and research resource. We are not affiliated with, endorsed by, or sponsored by DoorDash, Inc. Calculators and guides provide estimates for educational purposes and do not constitute legal, tax, or investment advice. Always verify standard deductions at IRS.gov.",
  contactEmail: "support@dashermath.com",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/earn-by-time-doordash/" },
    { label: "About", href: "/about/" }
  ],
  adSlots: {
    enabled: false, // Hidden until display network approval (AdSense / Mediavine)
    leaderboard: { height: "90px", width: "728px" },
    inlineRectangle: { height: "250px", width: "300px" },
    mobileBanner: { height: "100px", width: "320px" }
  },
  analytics: {
    googleAnalyticsId: import.meta.env.PUBLIC_GA_ID || "",
    googleSearchConsoleVerification: import.meta.env.PUBLIC_GSC_VERIFICATION || ""
  },
  rates: ratesData
};

export default SITE_CONFIG;
