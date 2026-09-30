import React from 'react';

const SWATCHES: { label: string; value: string }[] = [
  { label: 'bg', value: '#1d2021' },
  { label: 'fl', value: '#cc241d' },
  { label: 'gr', value: '#98971a' },
  { label: 'yl', value: '#d79921' },
  { label: 'bl', value: '#458588' },
  { label: 'mg', value: '#b16286' },
  { label: 'au', value: '#d8a657' },
  { label: 'fg', value: '#d4be98' },
];

const LINES: { n: number; react: React.ReactNode }[] = [
  { n: 24, react: (
    <>
      <span className="tok-kw">from</span> <span className="tok-var">fastapi</span><span className="tok-punc">.</span><span className="tok-var">routing</span> <span className="tok-kw">import</span> <span className="tok-fn">APIRouter</span>
    </>
  )},
  { n: 27, react: (
    <>
      <span className="tok-var">router</span> <span className="tok-punc">=</span> <span className="tok-fn">APIRouter</span><span className="tok-punc">(</span><span className="tok-punc">)</span>
    </>
  )},
  { n: 30, react: (
    <>
      <span className="tok-kw">@router.post</span><span className="tok-punc">(</span><span className="tok-str">"/audit"</span><span className="tok-punc">)</span>
    </>
  )},
  { n: 31, react: (
    <>
      <span className="tok-kw">async def</span> <span className="tok-fn">audit</span><span className="tok-punc">(</span><span className="tok-var">url</span><span className="tok-punc">:</span> <span className="tok-fn">str</span><span className="tok-punc">)</span> <span className="tok-punc">-&gt;</span> <span className="tok-fn">AuditReport</span><span className="tok-punc">:</span>
    </>
  )},
  { n: 32, react: (
    <>
      <span className="tok-com">    # deterministic pass — 80% of the final score</span>
    </>
  )},
  { n: 33, react: (
    <>
      <span className="tok-punc">    </span><span className="tok-var">page</span> <span className="tok-punc">=</span> <span className="tok-kw">await</span> <span className="tok-fn">fetch</span><span className="tok-punc">(</span><span className="tok-var">url</span><span className="tok-punc">,</span> <span className="tok-var">timeout</span><span className="tok-punc">=</span><span className="tok-num">5</span><span className="tok-punc">)</span>
    </>
  )},
  { n: 34, react: (
    <>
      <span className="tok-punc">    </span><span className="tok-var">dom</span> <span className="tok-punc">=</span> <span className="tok-fn">parse</span><span className="tok-punc">(</span><span className="tok-var">page.html</span><span className="tok-punc">,</span> <span className="tok-var">strict</span><span className="tok-punc">=</span><span className="tok-kw">False</span><span className="tok-punc">)</span>
    </>
  )},
  { n: 37, react: (
    <>
      <span className="tok-punc">    </span><span className="tok-var">technical</span> <span className="tok-punc">=</span> <span className="tok-fn">score_technical</span><span className="tok-punc">(</span><span className="tok-var">dom</span><span className="tok-punc">)</span>
    </>
  )},
  { n: 38, react: (
    <>
      <span className="tok-punc">    </span><span className="tok-var">entities</span> <span className="tok-punc">=</span> <span className="tok-fn">score_jsonld</span><span className="tok-punc">(</span><span className="tok-var">dom</span><span className="tok-punc">)</span>
    </>
  )},
  { n: 41, react: (
    <>
      <span className="tok-punc">    </span><span className="tok-kw">if</span> <span className="tok-var">llm_enabled</span><span className="tok-punc">:</span>
    </>
  )},
  { n: 42, react: (
    <>
      <span className="tok-punc">        </span><span className="tok-var">sem</span> <span className="tok-punc">=</span> <span className="tok-kw">await</span> <span className="tok-fn">judge</span><span className="tok-punc">.</span><span className="tok-fn">run</span><span className="tok-punc">(</span><span className="tok-var">dom</span><span className="tok-punc">,</span> <span className="tok-var">fallback</span><span className="tok-punc">=</span><span className="tok-var">heuristic</span><span className="tok-punc">)</span>
    </>
  )},
  { n: 45, react: (
    <>
      <span className="tok-kw">    return</span> <span className="tok-fn">AuditReport.merge</span><span className="tok-punc">(</span><span className="tok-var">technical</span><span className="tok-punc">,</span> <span className="tok-var">entities</span><span className="tok-punc">,</span> <span className="tok-var">sem</span><span className="tok-punc">)</span>
    </>
  )},
];

export const CodeTerminal: React.FC = () => {
  return (
    <div className="term w-full shadow-none">
      {/* Titlebar */}
      <div className="term-bar">
        <div className="flex gap-1.5 flex-none">
          <span className="term-dot" style={{ backgroundColor: '#ea6962' }} />
          <span className="term-dot" style={{ backgroundColor: '#d8a657' }} />
          <span className="term-dot" style={{ backgroundColor: '#a9b665' }} />
        </div>
        <span className="font-mono text-[11px] text-[var(--faint)] truncate flex-1 min-w-0">
          ~/projects/geo-auditor/scoring.py
        </span>
        <span className="hidden sm:inline font-mono text-[10px] text-[var(--faint)] flex-none">utf-8</span>
      </div>

      {/* Body */}
      <div className="overflow-x-auto bg-[var(--surface-2)]">
        <pre className="font-mono text-[11px] sm:text-xs leading-[1.7] py-4 px-0 m-0">
          {LINES.map((line) => (
            <div key={line.n} className="flex whitespace-pre px-3 sm:px-4">
              <span className="select-none text-[var(--faint)] opacity-60 w-6 flex-none text-right mr-4 tabular-nums">
                {line.n}
              </span>
              <span className="min-w-0">{line.react}</span>
            </div>
          ))}
        </pre>
      </div>

      {/* Footer: command + the one place full colour lives */}
      <div className="flex items-center justify-between gap-3 flex-wrap px-3 sm:px-4 py-2.5 border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="font-mono text-[11px] min-w-0 truncate">
          <span className="text-[var(--accent)] font-semibold">$ </span>
          <span className="text-[var(--muted)]">python scoring.py --url example.com</span>
          <span className="text-[var(--faint)]">  </span>
          <span className="text-[var(--ok)] font-semibold">&#8594; 94/100</span>
          <span className="text-[var(--faint)]">  1.2s</span>
        </div>

        <div className="flex items-center gap-[3px] flex-none" aria-hidden="true">
          {SWATCHES.map((s) => (
            <span
              key={s.label}
              title={s.label}
              className="w-3 h-3 rounded-[2px] border border-[var(--border)]"
              style={{ backgroundColor: s.value }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
