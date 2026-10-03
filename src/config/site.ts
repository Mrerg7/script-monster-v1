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
  hero: "https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/09c1cbc2-2946-4c89-a700-4c68a42e1b00/public",
  heroAlt:
    "A brass film reel holding pages of a screenplay, with loose film and leather gloves on a writing desk.",
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
