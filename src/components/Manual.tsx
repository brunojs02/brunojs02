import { commandList } from '../lib/commandMeta';

export function Manual() {
  return (
    <div style={{ fontSize: 14, lineHeight: 1.7 }}>
      <div style={{ color: 'var(--tm-fg)' }}>
        <span style={{ color: 'var(--tm-warn)' }}>brunojs02.dev</span>(1) — interactive CLI portfolio
      </div>

      <div style={{ marginTop: 16, color: 'var(--tm-warn)' }}>NAME</div>
      <div style={{ paddingLeft: 24 }}>
        brunojs02.dev — Bruno Santos · senior software engineer
      </div>

      <div style={{ marginTop: 12, color: 'var(--tm-warn)' }}>SYNOPSIS</div>
      <div style={{ paddingLeft: 24 }}>
        <span className="tm-cmd">{'<command>'}</span>
      </div>

      <div style={{ marginTop: 12, color: 'var(--tm-warn)' }}>COMMANDS</div>
      <div style={{ paddingLeft: 24 }}>
        {commandList.map((c) => (
          <div key={c.name}>
            <span className="tm-cmd" style={{ display: 'inline-block', minWidth: 110 }}>{c.name}</span>
            <span style={{ color: 'var(--tm-muted)' }}>{c.description}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, color: 'var(--tm-muted)' }}>
        <span className="tm-comment">{'// type a command and press enter. ↑/↓ for history, ctrl+l to clear.'}</span>
      </div>
    </div>
  );
}
