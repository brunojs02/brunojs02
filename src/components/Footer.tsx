import { Prompt } from './Prompt';

export function Footer() {
  return (
    <div style={{ marginTop: 80, paddingTop: 24, borderTop: '1px dashed var(--tm-rule)', color: 'var(--tm-muted)', fontSize: 13 }}>
      <Prompt><span>echo "thanks for visiting"</span></Prompt>
      <div style={{ marginTop: 8 }}>thanks for visiting</div>
    </div>
  );
}
