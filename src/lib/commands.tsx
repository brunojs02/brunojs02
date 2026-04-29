import type { ReactNode } from 'react';
import { Manual } from '../components/Manual';
import { Whoami } from '../components/Whoami';
import { About } from '../components/About';
import { Work } from '../components/Work';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Interns } from '../components/Interns';
import { Contact } from '../components/Contact';
import { downloadResumePdf } from './downloadResumePdf';

export type CommandResult = {
  output: ReactNode | null;
  clear?: boolean;
};

export function runCommand(raw: string): CommandResult {
  const parts = raw.trim().split(/\s+/);
  const name = (parts[0] ?? '').toLowerCase();

  switch (name) {
    case '':
      return { output: null };

    case 'man':
    case 'help':
      return { output: <Manual /> };

    case 'whoami':
      return { output: <Whoami /> };

    case 'about':
      return { output: <About /> };

    case 'work':
      return { output: <Work /> };

    case 'skills':
      return { output: <Skills /> };

    case 'edu':
      return { output: <Education /> };

    case 'interns':
      return { output: <Interns /> };

    case 'contact':
      return { output: <Contact /> };

    case 'resume':
      downloadResumePdf();
      return {
        output: (
          <span style={{ color: 'var(--tm-muted)' }}>
            <span className="tm-cmd">resume.pdf</span> saved to ~/downloads
          </span>
        ),
      };

    case 'clear':
      return { output: null, clear: true };

    default:
      return {
        output: (
          <span style={{ color: 'var(--tm-muted)' }}>
            command not found: <span style={{ color: 'var(--tm-warn)' }}>{name}</span>. type{' '}
            <span className="tm-cmd">man</span> for the list of commands.
          </span>
        ),
      };
  }
}
