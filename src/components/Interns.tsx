import { useEffect, useState } from 'react';

const photos = [
  { url: '/assets/1.jpg', name: '1.jpg' },
  { url: '/assets/2.jpeg', name: '2.jpeg' },
  { url: '/assets/3.jpeg', name: '3.jpeg' },
  { url: '/assets/4.jpeg', name: '4.jpeg' },
];

export function Interns() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIdx(null);
      else if (e.key === 'ArrowRight') setActiveIdx((i) => (i === null ? null : (i + 1) % photos.length));
      else if (e.key === 'ArrowLeft') setActiveIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIdx]);

  const active = activeIdx !== null ? photos[activeIdx] : null;

  return (
    <div>
      <div style={{ color: 'var(--tm-muted)', fontSize: 13, marginBottom: 16 }}>
        total {photos.length}{' '}
        <span className="tm-comment">
          {'// my interns — follow '}
          <a className="tm-link" href="https://www.instagram.com/toby.e.lucky/" target="_blank" rel="noopener noreferrer">@toby.e.lucky</a>
          {' on instagram'}
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 12,
      }}>
        {photos.map((p, i) => (
          <figure key={p.name} style={{ margin: 0 }}>
            <img
              src={p.url}
              alt={p.name}
              loading="lazy"
              onClick={() => setActiveIdx(i)}
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                display: 'block',
                border: '1px solid var(--tm-rule)',
                cursor: 'zoom-in',
              }}
            />
            <figcaption style={{ marginTop: 6, fontSize: 12, color: 'var(--tm-muted)' }}>
              <span>-rw-r--r--</span> {p.name}
            </figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setActiveIdx(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(13, 14, 12, 0.92)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            cursor: 'zoom-out',
          }}
        >
          <img
            src={active.url}
            alt={active.name}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '100%',
              maxHeight: 'calc(100vh - 80px)',
              objectFit: 'contain',
              border: '1px solid var(--tm-rule)',
              cursor: 'default',
            }}
          />
          <div style={{ marginTop: 12, color: 'var(--tm-muted)', fontSize: 13 }}>
            <span>-rw-r--r--</span> {active.name}
            <span style={{ marginLeft: 16 }} className="tm-comment">
              {'// '}
              <span className="tm-cmd">esc</span> close · <span className="tm-cmd">←</span>/<span className="tm-cmd">→</span> navigate
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
