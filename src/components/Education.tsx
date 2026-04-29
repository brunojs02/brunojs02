import { PromptHeader } from './PromptHeader';

export function Education() {
  return (
    <section id="tm-edu" style={{ marginTop: 80 }}>
      <PromptHeader cmd="cat" arg="education.txt" />
      <div style={{ marginTop: 24, fontSize: 14, lineHeight: 1.8 }}>
        <div>
          <span style={{ color: 'var(--tm-cyan)', fontWeight: 500 }}>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP)</span>
        </div>
        <div style={{ color: 'var(--tm-muted)' }}>
          Technologist Degree — Systems Analysis and Development
          <span style={{ marginLeft: 12, color: 'var(--tm-muted)' }}>—</span>
          <span style={{ marginLeft: 6, color: 'var(--tm-warn)' }}>graduated at 2025</span>
        </div>
      </div>
    </section>
  );
}
