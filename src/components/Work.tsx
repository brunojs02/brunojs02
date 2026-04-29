import { PromptHeader } from './PromptHeader';
import { CommitRow } from './CommitRow';
import { experience } from '../data/experience';

export function Work() {
  return (
    <section id="tm-work" style={{ marginTop: 80 }}>
      <PromptHeader cmd="git" arg="log --oneline --decorate" />
      <div style={{ marginTop: 24 }}>
        {experience.map((j) => <CommitRow key={j.hash} {...j} />)}
      </div>
    </section>
  );
}
