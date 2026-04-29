export type ContactEntry = {
  key: string;
  label: string;
  href: string;
};

export const contactEntries: ContactEntry[] = [
  { key: 'email', label: '"bruno.js02@gmail.com"', href: 'mailto:bruno.js02@gmail.com' },
  { key: 'github', label: '"github.com/brunojs02"', href: 'https://github.com/brunojs02' },
  { key: 'linkedin', label: '"in/brunojs02"', href: 'https://www.linkedin.com/in/brunojs02/' },
  { key: 'twitter', label: '"@brunojs02"', href: 'https://twitter.com/brunojs02' },
  { key: 'bluesky', label: '"brunojs02.dev"', href: 'https://bsky.app/profile/brunojs02.dev' },
  { key: 'instagram', label: '"@bruno.js02"', href: 'https://www.instagram.com/bruno.js02/' },
];
