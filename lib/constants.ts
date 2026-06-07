export interface SocialLink {
  label: string;
  href: string;
  isExternal: boolean;
}

export const socialLinks: SocialLink[] = [
  { label: 'GITHUB', href: 'https://github.com/Faraz-Aamir', isExternal: true },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/faraz-aamir', isExternal: true },
  { label: 'EMAIL', href: 'mailto:farazaamir126@gmail.com', isExternal: false },
];
