const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const DAYS_IN_JUNE = 30;
const START_DAY_INDEX = 1; // June 1, 2026 is a Monday

const HIGHLIGHTS: Record<number, "prathanam" | "sumuhurtham" | "reception"> = {
  24: "prathanam",
  25: "sumuhurtham",
  28: "reception",
};

const LEGEND = [
  { label: "Prathanam", className: "bg-[color:var(--maroon)]/12 text-[color:var(--maroon)] ring-[color:var(--maroon)]/20" },
  { label: "Sumuhurtham", className: "bg-[color:var(--maroon)] text-white ring-[color:var(--maroon)]/80" },
  { label: "Reception", className: "bg-[color:var(--gold)]/18 text-[color:var(--maroon)] ring-[color:var(--gold)]/40" },
];

export function WeddingCalendar() {
  const cells: Array<number | null> = [
    ...Array.from({ length: START_DAY_INDEX }, () => null),
    ...Array.from({ length: DAYS_IN_JUNE }, (_, i) => i + 1),
  ];

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return (
    <div className="rounded-2xl border border-[color:var(--gold)]/25 bg-white/70 p-4 shadow-[0_10px_30px_-20px_rgba(127,29,29,0.5)] backdrop-blur-sm">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[color:var(--gold)]">Event Calendar</p>
        <h4 className="mt-1 font-serif text-2xl text-[color:var(--maroon)]">June 2026</h4>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-[0.18em] text-[color:var(--gold)]">
        {DAYS.map((day) => (
          <div key={day} className="py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-1">
        {cells.map((day, index) => {
          if (!day) {
            return <div key={`pad-${index}`} className="h-10 rounded-lg" />;
          }

          const highlight = HIGHLIGHTS[day];
          const isMain = highlight === "sumuhurtham";
          const styles =
            highlight === "prathanam"
              ? "bg-[color:var(--maroon)]/12 text-[color:var(--maroon)] ring-[color:var(--maroon)]/20"
              : highlight === "sumuhurtham"
                ? "bg-[color:var(--maroon)] text-white ring-[color:var(--maroon)]/80 shadow-[0_8px_18px_-10px_rgba(127,29,29,0.7)]"
                : highlight === "reception"
                  ? "bg-[color:var(--gold)]/18 text-[color:var(--maroon)] ring-[color:var(--gold)]/40"
                  : "bg-white/80 text-foreground ring-black/5";

          return (
            <div
              key={day}
              className={`flex h-10 items-center justify-center rounded-lg text-sm font-medium ring-1 ${styles} ${isMain ? "scale-[1.04]" : ""}`}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="mt-4 space-y-2 border-t border-[color:var(--gold)]/15 pt-4">
        {LEGEND.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className={`h-3.5 w-3.5 rounded-full ring-1 ${item.className}`} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
