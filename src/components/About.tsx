import { PromptHeader } from './PromptHeader';

export function About() {
  return (
    <section id="tm-about" style={{ marginTop: 80 }}>
      <PromptHeader cmd="cat" arg="about.md" />
      <div style={{ marginTop: 24, fontSize: 15, lineHeight: 1.8 }}>
        <div style={{ color: 'var(--tm-muted)', fontSize: 13 }}>{'<!-- about.md -->'}</div>
        <h2 style={{ fontSize: 22, margin: '12px 0 16px', fontWeight: 600 }}># About</h2>
        <p style={{ margin: '0 0 16px' }}>
          Senior Software Engineer with 10+ years of experience, mostly in
          frontend development but not limited to it. Expert in mobile
          development with React Native (bare and Expo) and backend work
          with Java (Spring Boot) and Node (Express, Nest).
        </p>
        <p style={{ margin: '0 0 16px' }}>
          I started my career as a freelancer building full web
          applications with PHP (CodeIgniter). Today I work remotely as a
          Frontend Engineer on a Cyber Threat Intelligence solution,
          helping customers learn about surface attacks as early as
          possible.
        </p>
        <p style={{ margin: 0, color: 'var(--tm-muted)' }}>
          <span className="tm-comment">{'// stack: React · microfrontends w/ module federation · Tailwind · Radix'}</span>
        </p>
      </div>
    </section>
  );
}
