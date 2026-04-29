import { HeroField } from './HeroField';

export function Whoami() {
  return (
    <div style={{ fontSize: 15, lineHeight: 1.8, maxWidth: 720 }}>
      <HeroField label="name" value="Bruno José dos Santos Rubio da Silva" />
      <HeroField label="role" value="Senior Software Engineer" />
      <HeroField label="loc" value="Araraquara, São Paulo — Brazil" />
      <HeroField label="exp" value="10+ years" />
      <div>
        <span style={{ color: 'var(--tm-warn)' }}>status</span><span style={{ color: 'var(--tm-muted)' }}>:</span>{' '}
        <span style={{ color: 'var(--tm-accent)' }}>● open_to_opportunities</span>
      </div>
      <div>
        <span style={{ color: 'var(--tm-warn)' }}>site</span><span style={{ color: 'var(--tm-muted)' }}>:</span>{' '}
        <a className="tm-link" href="https://brunojs02.dev" target="_blank" rel="noopener noreferrer">brunojs02.dev</a>
      </div>
    </div>
  );
}
