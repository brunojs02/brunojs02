import { useEffect, useState } from 'react';
import { shellStyle, themeVars } from './theme';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { downloadResumePdf } from './lib/downloadResumePdf';

type SectionId = 'about' | 'work' | 'skills' | 'edu' | 'contact';

export default function TerminalPortfolio() {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        void downloadResumePdf();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const onNavigate = (id: SectionId) => {
    const el = document.getElementById('tm-' + id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="tm-printroot" style={{ ...shellStyle, ...themeVars }}>
      <style>{`
        .tm-link { color: var(--tm-accent); text-decoration: none; }
        .tm-link:hover { text-decoration: underline; text-underline-offset: 3px; }
        .tm-cmd { color: var(--tm-cyan); }
        .tm-flag { color: var(--tm-warn); }
        .tm-comment { color: var(--tm-muted); }
        .tm-key { color: var(--tm-accent); }
        .tm-cursor::after {
          content: '▊';
          margin-left: 4px;
          color: var(--tm-accent);
          animation: tm-blink 1s steps(2) infinite;
        }
        @keyframes tm-blink { 50% { opacity: 0; } }
        .tm-navbtn { cursor: pointer; padding: 2px 8px; border-radius: 3px; transition: background .12s; }
        .tm-navbtn:hover { background: var(--tm-rule); color: var(--tm-accent); }
        .tm-row { padding: 16px 0; border-bottom: 1px dashed var(--tm-rule); }
        .tm-row:last-child { border-bottom: none; }
        .tm-resume-btn {
          display: inline-block;
          padding: 10px 18px;
          border: 1px solid var(--tm-accent);
          color: var(--tm-accent);
          text-decoration: none;
          font-size: 13px;
          cursor: pointer;
          transition: background .15s, color .15s;
        }
        .tm-resume-btn:hover {
          background: var(--tm-accent);
          color: var(--tm-bg);
        }
      `}</style>

      <NavBar onNavigate={onNavigate} />

      <div style={{ maxWidth: 920, margin: '0 auto', padding: '40px 32px 80px' }}>
        <Hero now={now} />
        <About />
        <Work />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
