import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-25T09:12:00+05:30").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const Cell = ({ v, l }: { v: number; l: string }) => (
    <div className="flex flex-col items-center rounded-md border border-[color:var(--gold)]/30 bg-[color:var(--maroon)]/[0.04] px-2 py-2 min-w-0">
      <span className="font-serif text-2xl leading-none text-[color:var(--maroon)] tabular-nums">
        {String(v).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[color:var(--gold)]">{l}</span>
    </div>
  );

  return (
    <div>
      <p className="text-center text-[11px] uppercase tracking-[0.25em] text-[color:var(--gold)]">
        Sumuhurtham in
      </p>
      <div className="mt-3 grid grid-cols-4 gap-2">
        <Cell v={t.days} l="Days" />
        <Cell v={t.hours} l="Hrs" />
        <Cell v={t.minutes} l="Min" />
        <Cell v={t.seconds} l="Sec" />
      </div>
      <p className="mt-3 text-center text-xs italic text-muted-foreground">
        25 June 2026 · 09:12 AM IST
      </p>
    </div>
  );
}
