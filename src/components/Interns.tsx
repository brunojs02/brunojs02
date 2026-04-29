import { PromptHeader } from './PromptHeader';

const photos = [
  { url: '/assets/1.jpg', name: '1.jpg' },
  { url: '/assets/2.jpeg', name: '2.jpeg' },
  { url: '/assets/3.jpeg', name: '3.jpeg' },
  { url: '/assets/4.jpeg', name: '4.jpeg' },
];

export function Interns() {
  return (
    <section id="tm-interns" style={{ marginTop: 80 }}>
      <PromptHeader cmd="ls" arg="-la ~/interns/" />
      <div style={{ marginTop: 24 }}>
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
          {photos.map((p) => (
            <figure key={p.name} style={{ margin: 0 }}>
              <img
                src={p.url}
                alt={p.name}
                loading="lazy"
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  objectFit: 'cover',
                  display: 'block',
                  border: '1px solid var(--tm-rule)',
                }}
              />
              <figcaption style={{ marginTop: 6, fontSize: 12, color: 'var(--tm-muted)' }}>
                <span>-rw-r--r--</span> {p.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
