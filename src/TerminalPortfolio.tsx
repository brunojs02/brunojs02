import { shellStyle, themeVars } from './theme';
import { NavBar } from './components/NavBar';
import { Terminal } from './components/Terminal';

export default function TerminalPortfolio() {
  return (
    <div className="tm-printroot" style={{ ...shellStyle, ...themeVars }}>
      <style>{`
        .tm-link { color: var(--tm-accent); text-decoration: none; }
        .tm-link:hover { text-decoration: underline; text-underline-offset: 3px; }
        .tm-cmd { color: var(--tm-cyan); }
        .tm-flag { color: var(--tm-warn); }
        .tm-comment { color: var(--tm-muted); }
        .tm-row { padding: 16px 0; border-bottom: 1px dashed var(--tm-rule); }
        .tm-row:last-child { border-bottom: none; }
      `}</style>

      <NavBar />

      <div style={{ padding: '24px 32px 80px' }}>
        <Terminal />
      </div>
    </div>
  );
}
