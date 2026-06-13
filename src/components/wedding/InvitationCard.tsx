import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Event = {
  label: string;
  date: string;
  time?: string;
  venue: string;
};

type Props = {
  index: number;
  side: "bride" | "groom";
  intro: string;
  primaryName: string;
  primaryTitle: string;
  primaryParents?: string;
  partnerLabel: string;
  partnerName: string;
  partnerTitle: string;
  partnerParents?: string;
  events: Event[];
  invitingFamily?: string;
  compliments: string;
};

export function InvitationCard(props: Props) {
  const { index, side, intro, primaryName, primaryTitle, primaryParents, partnerLabel, partnerName, partnerTitle, partnerParents, events, invitingFamily, compliments } = props;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="invitation-card relative overflow-hidden rounded-2xl p-6 sm:p-10"
    >
      {/* corner ornaments */}
      <div className="pointer-events-none absolute inset-3 rounded-xl border border-[color:var(--gold)]/30" />
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[color:var(--gold)]/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[color:var(--maroon)]/10 blur-2xl" />

      <header className="relative text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold)] sm:tracking-[0.3em] sm:text-xs">
          <span>Srirasthu</span>
          <span className="text-[color:var(--maroon)]/50">◆</span>
          <span>Shubhamasthu</span>
          <span className="text-[color:var(--maroon)]/50">◆</span>
          <span>Avighnamasthu</span>
        </div>

        <div className="mt-5 inline-flex items-center gap-3">
          <Sparkles className="h-4 w-4 text-[color:var(--gold)]" />
          <h2 className="font-serif text-3xl text-[color:var(--maroon)] sm:text-4xl">
            Wedding Invitation
          </h2>
          <Sparkles className="h-4 w-4 text-[color:var(--gold)]" />
        </div>

        <p className="mx-auto mt-4 max-w-md text-sm italic text-muted-foreground sm:text-[15px]">
          {intro}
        </p>
      </header>

      <div className="ornament-divider my-6 text-xs">
        <span className="font-serif uppercase tracking-[0.3em]">
          {side === "bride" ? "Bride" : "Groom"}
        </span>
      </div>

      <div className="text-center">
        <h3 className="font-serif text-2xl text-[color:var(--maroon)] sm:text-3xl">{primaryName}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">{primaryTitle}</p>
        {primaryParents && (
          <p className="mt-3 text-sm text-muted-foreground">{primaryParents}</p>
        )}
      </div>

      <div className="my-6 flex items-center justify-center">
        <span className="font-serif text-2xl italic text-[color:var(--gold)]">with</span>
      </div>

      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">{partnerLabel}</p>
        <h3 className="mt-1 font-serif text-2xl text-[color:var(--maroon)] sm:text-3xl">{partnerName}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">{partnerTitle}</p>
        {partnerParents && (
          <p className="mt-3 text-sm text-muted-foreground">{partnerParents}</p>
        )}
      </div>

      <div className="ornament-divider my-8 text-xs">
        <span className="font-serif uppercase tracking-[0.3em]">Events</span>
      </div>

      <div className="space-y-4">
        {events.map((ev) => {
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.venue)}`;
          return (
            <div
              key={ev.label}
              className="rounded-lg border border-[color:var(--gold)]/25 bg-white/60 p-4 backdrop-blur-sm"
            >
              <p className="font-serif text-lg text-[color:var(--maroon)]">{ev.label}</p>
              <div className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
                <span className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                  {ev.date}{ev.time ? ` · ${ev.time}` : ""}
                </span>
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--gold)]" />
                  <span>{ev.venue}</span>
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button asChild size="sm" variant="outline" className="h-8 border-[color:var(--gold)]/40 text-[color:var(--maroon)] hover:bg-[color:var(--gold)]/10">
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-1.5 h-3.5 w-3.5" /> Open in Google Maps
                  </a>
                </Button>
                <Button asChild size="sm" variant="ghost" className="h-8 text-[color:var(--maroon)] hover:bg-[color:var(--maroon)]/10">
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Share2 className="mr-1.5 h-3.5 w-3.5" /> Share Location
                  </a>
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {invitingFamily && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          <span className="font-serif text-[color:var(--maroon)]">Inviting Family:</span> {invitingFamily}
        </p>
      )}

      <div className="mt-8 flex justify-center">
        <Button
          variant="outline"
          className="border-[color:var(--gold)]/50 text-[color:var(--maroon)] hover:bg-[color:var(--gold)]/10"
          onClick={() => alert("Official invitation card download will be available soon.")}
        >
          <Download className="mr-2 h-4 w-4" /> Download Official Invitation
        </Button>
      </div>

      <footer className="mt-8 border-t border-[color:var(--gold)]/25 pt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
          With best compliments from
        </p>
        <p className="mt-2 font-serif text-sm text-[color:var(--maroon)]">{compliments}</p>
      </footer>
    </motion.article>
  );
}
