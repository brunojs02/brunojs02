import React from 'react';
import { contactEntries } from '../data/contact';

export function Contact() {
  return (
    <div style={{ fontSize: 14, lineHeight: 1.9 }}>
      <pre style={{ margin: 0, fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>
        <span style={{ color: 'var(--tm-muted)' }}>{'{'}</span>{'\n'}
        {contactEntries.map((c, i) => (
          <React.Fragment key={c.key}>
            {'  '}
            <span style={{ color: 'var(--tm-warn)' }}>{`"${c.key}"`}</span>
            <span style={{ color: 'var(--tm-muted)' }}>:</span>{' '}
            <a className="tm-link" href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a>
            {i < contactEntries.length - 1 ? ',' : ''}
            {'\n'}
          </React.Fragment>
        ))}
        <span style={{ color: 'var(--tm-muted)' }}>{'}'}</span>
      </pre>
    </div>
  );
}
