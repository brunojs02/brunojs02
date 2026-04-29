export function NavBar() {
  return (
    <div className="tm-noprint" style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'var(--tm-bg)',
      borderBottom: '1px solid var(--tm-rule)',
    }}>
      <div style={{ padding: '12px 32px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: 6, background: '#e96b5a' }} />
          <span style={{ width: 11, height: 11, borderRadius: 6, background: '#e8b56a' }} />
          <span style={{ width: 11, height: 11, borderRadius: 6, background: '#9bd87a' }} />
        </div>
        <div style={{ color: 'var(--tm-muted)', fontSize: 12, flex: 1, textAlign: 'center' }}>
          ~/brunojs02 — zsh — 92×40
        </div>
        <div style={{ color: 'var(--tm-muted)', fontSize: 12 }}>
          <span className="tm-comment">type</span>{' '}
          <span className="tm-cmd">man</span>{' '}
          <span className="tm-comment">for help</span>
        </div>
      </div>
    </div>
  );
}
