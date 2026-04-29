import type { Job } from '../data/experience';

export function CommitRow({ hash, period, role, company, blurb }: Job) {
  return (
    <div className="tm-row" style={{ display: 'grid', gridTemplateColumns: '90px 1fr 140px', gap: 16, alignItems: 'baseline', fontSize: 14 }}>
      <span style={{ color: 'var(--tm-warn)' }}>{hash}</span>
      <div>
        <div>
          <span style={{ color: 'var(--tm-fg)', fontWeight: 500 }}>{role}</span>
          <span style={{ color: 'var(--tm-muted)' }}> @ </span>
          <span style={{ color: 'var(--tm-cyan)' }}>{company}</span>
        </div>
        {blurb && <div style={{ color: 'var(--tm-muted)', fontSize: 13, marginTop: 4 }}>{`// ${blurb}`}</div>}
      </div>
      <span style={{ color: 'var(--tm-muted)', fontSize: 12, textAlign: 'right' }}>{period}</span>
    </div>
  );
}
