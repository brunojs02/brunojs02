import React from 'react';
import { PromptHeader } from './PromptHeader';
import { contactEntries } from '../data/contact';
import { downloadResumePdf } from '../lib/downloadResumePdf';

export function Contact() {
  const onDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await downloadResumePdf();
  };

  return (
    <section id="tm-contact" style={{ marginTop: 80 }}>
      <PromptHeader cmd="cat" arg="contact.json" />
      <div style={{ marginTop: 24, fontSize: 14, lineHeight: 1.9 }}>
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

      <div style={{ marginTop: 32 }}>
        <a href="#" onClick={onDownload} className="tm-resume-btn">
          $ wget resume.pdf
        </a>
      </div>
    </section>
  );
}
