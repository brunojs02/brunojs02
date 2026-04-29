import { Prompt } from './Prompt';
import { HeroField } from './HeroField';

export function Hero({ now }: { now: Date }) {
  return (
    <section>
      <div style={{ color: 'var(--tm-muted)', fontSize: 13 }}>
        <span className="tm-comment"># Last login: {now.toLocaleString()}</span>
      </div>
      <div style={{ marginTop: 8 }}>
        <Prompt><span className="tm-cmd">whoami</span></Prompt>
      </div>

      <div style={{ marginTop: 40, fontSize: 15, lineHeight: 1.8, maxWidth: 720 }}>
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

      <div style={{ marginTop: 40 }}>
        <Prompt><span className="tm-cursor" /></Prompt>
      </div>
    </section>
  );
}
