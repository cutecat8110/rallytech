export interface ContactPageHeroImageAsset {
  src: string
  alt: string
  label: string
  source: string
  sourceReference: string
  licenseNote: string
  notes: string
  objectPosition: string
}

export const contactPageHeroImage: ContactPageHeroImageAsset = {
  src: '/images/stock/contact/contact-hero-control-room-team.jpg',
  alt: '',
  label: 'Contact Page Hero Stock Image',
  source: 'Pexels',
  sourceReference:
    'https://www.pexels.com/photo/engineers-using-simulator-3862132/',
  licenseNote: 'Pexels License',
  notes:
    'Selected for the contact-page hero to keep the reference page-title structure while adding a stronger control-room collaboration signal for Rally Technology.',
  objectPosition: 'center 42%'
}

export function getContactPageHeroImageEntry() {
  return contactPageHeroImage
}
