import { Camera } from "lucide-react";

const photos = [
  { rotate: "-rotate-3", label: "Sree Revathi", tint: "from-[color:var(--maroon)]/15 to-[color:var(--gold)]/10" },
  { rotate: "rotate-2", label: "Praveen Kumar", tint: "from-[color:var(--gold)]/20 to-[color:var(--maroon)]/10" },
  { rotate: "-rotate-1", label: "Together", tint: "from-[color:var(--maroon)]/10 to-[color:var(--gold)]/15" },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {photos.map((p, i) => (
        <div
          key={i}
          className={`${p.rotate} ${i === 2 ? "col-span-2" : ""} transition-transform hover:rotate-0 hover:scale-[1.02]`}
        >
          <div className="rounded-sm bg-white p-2 pb-6 shadow-[0_6px_18px_-8px_rgba(127,29,29,0.35)] ring-1 ring-[color:var(--gold)]/20">
            <div className={`flex aspect-[4/5] items-center justify-center rounded-sm bg-gradient-to-br ${p.tint}`}>
              <Camera className="h-6 w-6 text-[color:var(--maroon)]/50" />
            </div>
            <p className="mt-2 text-center font-serif text-xs text-[color:var(--maroon)]">{p.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
