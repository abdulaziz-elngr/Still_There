export function ProgressIndicator({ current, total }: { current: number; total: number }) {
  return (<div role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={current} aria-label="Journey progress" className="h-px w-full bg-silver/20"><div className="h-px bg-gold" style={{ width: `${(current / total) * 100}%` }} /></div>);
}
