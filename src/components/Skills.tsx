import { skillGroups } from '../data/skills';

export function Skills() {
  const total = skillGroups.reduce((a, g) => a + g.items.length, 0);
  return (
    <div>
      <div style={{ color: 'var(--tm-muted)', fontSize: 13, marginBottom: 12 }}>total {total}</div>
      {skillGroups.map((g) => (
        <div key={g.title} style={{ marginBottom: 24 }}>
          <div style={{ color: 'var(--tm-cyan)', fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
            drwxr-xr-x  bruno  staff  {g.title.toLowerCase()}/
          </div>
          <div style={{ paddingLeft: 24 }}>
            {g.items.map((s) => (
              <div key={s} style={{ display: 'inline-block', marginRight: 16, color: 'var(--tm-fg)' }}>
                <span style={{ color: 'var(--tm-muted)' }}>-rw-r--r--</span>{' '}
                <span>{s.padEnd(14, ' ')}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
