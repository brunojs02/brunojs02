export function HeroField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span style={{ color: 'var(--tm-warn)' }}>{label}</span>
      <span style={{ color: 'var(--tm-muted)' }}>:</span>{' '}
      {value}
    </div>
  );
}
