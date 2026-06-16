import type { HeroImage } from "@/data/weddingData";

const ROTATIONS = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-1"];

type Props = {
  images: HeroImage[];
};

export function Gallery({ images }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((image, i) => (
        <div
          key={image.id}
          className={`${ROTATIONS[i % ROTATIONS.length]} ${i === images.length - 1 && images.length % 2 !== 0 ? "col-span-2" : ""} transition-transform hover:rotate-0 hover:scale-[1.02]`}
        >
          <div className="rounded-sm bg-white p-2 pb-6 shadow-[0_6px_18px_-8px_rgba(127,29,29,0.35)] ring-1 ring-[color:var(--gold)]/20">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={image.url}
                alt={image.label}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
