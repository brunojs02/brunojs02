import type { ReactNode } from 'react';

export function Prompt({ children }: { children?: ReactNode }) {
  return (
    <>
      <span style={{ color: 'var(--tm-accent)' }}>bruno@dev</span>
      <span style={{ color: 'var(--tm-muted)' }}>:</span>
      <span style={{ color: 'var(--tm-cyan)' }}>~</span>
      <span style={{ color: 'var(--tm-muted)' }}>$ </span>
      {children}
    </>
  );
}
