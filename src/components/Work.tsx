import { CommitRow } from './CommitRow';
import { experience } from '../data/experience';

export function Work() {
  return (
    <div>
      {experience.map((j) => <CommitRow key={j.hash} {...j} />)}
    </div>
  );
}
