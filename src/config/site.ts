export const SITE = {
  name: "script.monster",
  brand: "Desert Rich",
  title: "script.monster | Premium Domain for Sale | Desert Rich",
  description:
    "script.monster is for sale. Asking $125,000. Exact-match premium domain for screenwriters, studios, and story platforms. Buy now, make an offer, or contact the agent. Escrow transfer. Phoenix, Arizona.",
  url: "https://script.monster",
  email: "sales@desertrich.com",
  locale: "en_US",
  location: "Phoenix, Arizona",
  ask: 125000,
  askLabel: "$125,000",
  googleSiteVerification: "t_o0SHGI1TEvtW-uuHpFrHf1YWWr5_Cdo1XfaieQDPo",
  updated: "2026-10-03",
} as const;

export function canonicalUrl(pathname: string): string {
  const normalized =
    pathname === "/" || pathname === ""
      ? "/"
      : pathname.endsWith("/")
        ? pathname
        : `${pathname}/`;
  return new URL(normalized, SITE.url).href;
}

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "script.monster Domain Acquisition Inquiry",
)}&body=${encodeURIComponent(
  "Hello,\n\nI am interested in acquiring script.monster.\n\nPath:\nIntended use:\nBudget range:\n\nThank you.",
)}`;
