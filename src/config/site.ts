export const SITE = {
  name: 'script.monster',
  title: 'script.monster • Premium Domain for Sale | Unleash the Monster',
  description:
    'script.monster — The premium domain for screenwriters, novelists, filmmakers, and storytellers. A foundational brand asset for the creator economy. Available for strategic acquisition.',
  url: 'https://script.monster',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Arizona',
  googleSiteVerification: '',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '8b4611d5-4e7c-4d6a-7e4e-d663754a5400',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('script.monster Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring script.monster.\n\nIntended use:\nBudget range:\n\nThank you.')}`;
