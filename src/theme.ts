import type { CSSProperties } from 'react';

export const shellStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  fontFamily: '"JetBrains Mono", "Berkeley Mono", ui-monospace, "SF Mono", Menlo, monospace',
  fontSize: 14,
  lineHeight: 1.7,
  color: 'var(--tm-fg)',
  background: 'var(--tm-bg)',
  transition: 'background .25s, color .25s',
  scrollBehavior: 'smooth',
};

export const themeVars = {
  '--tm-bg': '#0d0e0c',
  '--tm-panel': '#15161310',
  '--tm-fg': '#d4d4cc',
  '--tm-muted': '#6c6f66',
  '--tm-dim': '#3d3f3a',
  '--tm-rule': 'rgba(212,212,204,0.1)',
  '--tm-accent': '#9bd87a',
  '--tm-warn': '#e8b56a',
  '--tm-cyan': '#7dc7d4',
} as CSSProperties;
