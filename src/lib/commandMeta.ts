export type CommandMeta = { name: string; description: string };

export const commandList: CommandMeta[] = [
  { name: 'man', description: 'show this help page' },
  { name: 'whoami', description: 'print user identity' },
  { name: 'about', description: 'cat about.md' },
  { name: 'work', description: 'git log --oneline experience' },
  { name: 'skills', description: 'ls -la ~/skills' },
  { name: 'edu', description: 'cat education.txt' },
  { name: 'interns', description: 'ls -la ~/interns' },
  { name: 'contact', description: 'cat contact.json' },
  { name: 'resume', description: 'wget resume.pdf' },
  { name: 'clear', description: 'clear the screen' },
];
