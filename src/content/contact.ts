/** Official public contact channels, carried over from the main INBS website. */
export const companyContact = {
  phones: [
    { kind: 'mobile', label: '+971 50 886 6555', href: 'tel:+971508866555' },
    { kind: 'landline', label: '+971 4 221 9222', href: 'tel:+97142219222' },
  ],
  emails: [
    { kind: 'official', label: 'info@inbsrealestate.com', href: 'mailto:info@inbsrealestate.com' },
    { kind: 'additional', label: 'jalal.omar2021@gmail.com', href: 'mailto:jalal.omar2021@gmail.com' },
  ],
  address: {
    en: 'Office 1720, ParkLane Tower, Business Bay, Dubai',
    ar: 'مكتب 1720، برج بارك لين، الخليج التجاري، دبي',
  },
  mapUrl: 'https://www.google.com/maps?q=Park+Lane+Tower+-+Business+Bay+-+Dubai',
} as const;

export const socialLinks = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/international-network-businessmen-services/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/inbs_business/' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100089453280961' },
] as const;
