import React, { useEffect, useRef, useState } from 'react';
import { Prompt } from './Prompt';
import { runCommand } from '../lib/commands';

type Entry = {
  id: number;
  cmd: string;
  output: React.ReactNode;
};

const DEFAULT_COMMAND = 'man brunojs02.dev';

export function Terminal() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const initRef = useRef(false);

  function execute(rawCmd: string) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    const result = runCommand(cmd);

    if (result.clear) {
      setEntries([]);
    } else {
      idRef.current += 1;
      const next: Entry = { id: idRef.current, cmd, output: result.output };
      setEntries((es) => [...es, next]);
    }

    setHistory((h) => (h[h.length - 1] === cmd ? h : [...h, cmd]));
  }

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;
    execute(DEFAULT_COMMAND);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [entries]);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      execute(input);
      setInput('');
      setHistoryIdx(null);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const idx = historyIdx === null ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(idx);
      setInput(history[idx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === null) return;
      const idx = historyIdx + 1;
      if (idx >= history.length) {
        setHistoryIdx(null);
        setInput('');
      } else {
        setHistoryIdx(idx);
        setInput(history[idx]);
      }
    } else if (e.key.toLowerCase() === 'l' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      setEntries([]);
    }
  }

  function focusInput() {
    if (window.getSelection()?.toString()) return;
    inputRef.current?.focus();
  }

  return (
    <div onClick={focusInput} style={{ minHeight: '100%' }}>
      {entries.map((entry) => (
        <div key={entry.id} style={{ marginBottom: 28 }}>
          <div>
            <Prompt><span>{entry.cmd}</span></Prompt>
          </div>
          {entry.output != null && <div style={{ marginTop: 12 }}>{entry.output}</div>}
        </div>
      ))}

      <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap' }}>
        <span style={{ color: 'var(--tm-accent)' }}>bruno@dev</span>
        <span style={{ color: 'var(--tm-muted)' }}>:</span>
        <span style={{ color: 'var(--tm-cyan)' }}>~</span>
        <span style={{ color: 'var(--tm-muted)' }}>$&nbsp;</span>
        <input
          ref={inputRef}
          value={input}
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          aria-label="terminal input"
          style={{
            flex: 1,
            minWidth: 200,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--tm-fg)',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            caretColor: 'var(--tm-accent)',
            padding: 0,
          }}
        />
      </div>

      <div ref={bottomRef} />
    </div>
  );
}
