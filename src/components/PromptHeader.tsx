import { Prompt } from './Prompt';

export function PromptHeader({ cmd, arg }: { cmd: string; arg: string }) {
  return (
    <div style={{ fontSize: 14 }}>
      <Prompt>
        <span className="tm-cmd">{cmd}</span>{' '}
        <span className="tm-flag">{arg}</span>
      </Prompt>
    </div>
  );
}
