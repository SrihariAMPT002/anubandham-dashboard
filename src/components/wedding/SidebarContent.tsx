import { Countdown } from "./Countdown";
import { Gallery } from "./Gallery";
import { TravelGuide } from "./TravelGuide";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingData, type WeddingSideKey } from "@/data/weddingData";
import { getOppositeSide, getSideToggleLabel } from "@/lib/wedding-side";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="ornament-divider mb-4 font-serif text-sm uppercase tracking-[0.3em]">
        {title}
      </h3>
      {children}
    </section>
  );
}

type Props = {
  activeSide: WeddingSideKey;
  onSideChange: (side: WeddingSideKey) => void;
};

export function SidebarContent({ activeSide, onSideChange }: Props) {
  const galleryImages = weddingData[activeSide].heroImages;
  const oppositeSide = getOppositeSide(activeSide);

  return (
    <div className="flex h-full flex-col gap-8 overflow-y-auto p-6">
      <div className="text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--gold)]/40">
          <Heart className="h-5 w-5 text-[color:var(--maroon)]" fill="currentColor" />
        </div>
        <p className="mt-3 font-serif text-xl text-[color:var(--maroon)]">Praveen & Revathi</p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
          Shubha Vivaham
        </p>
      </div>

      <Section title="Countdown">
        <Countdown />
      </Section>

      <Section title="How to Reach">
        <TravelGuide />
      </Section>

      <Section title="Memories">
        <Gallery images={galleryImages} />
      </Section>

      <Section title="Invitation View">
        <Button
          variant="outline"
          className="w-full font-serif border-[color:var(--gold)]/40 text-[color:var(--maroon)] hover:bg-[color:var(--gold)]/10"
          onClick={() => onSideChange(oppositeSide)}
        >
          {getSideToggleLabel(activeSide)}
        </Button>
      </Section>
    </div>
  );
}
