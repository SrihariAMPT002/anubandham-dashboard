import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Countdown } from "@/components/wedding/Countdown";
import { Gallery } from "@/components/wedding/Gallery";
import { SidebarContent } from "@/components/wedding/SidebarContent";
import { InvitationCard } from "@/components/wedding/InvitationCard";
import { MusicPlayer } from "@/components/wedding/MusicPlayer";
import { TravelGuide } from "@/components/wedding/TravelGuide";
import { WeddingCalendar } from "@/components/wedding/WeddingCalendar";
import { Button } from "@/components/ui/button";
import { weddingData, type WeddingSideKey } from "@/data/weddingData";
import { getOppositeSide, getSideToggleLabel } from "@/lib/wedding-side";
import {
  DEFAULT_PAGE_DESCRIPTION,
  DEFAULT_PAGE_TITLE,
  getInitialActiveSide,
  getPageTitle,
} from "@/lib/wedding-side";

const contentTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: DEFAULT_PAGE_TITLE },
      { name: "description", content: DEFAULT_PAGE_DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeSide, setActiveSide] = useState<WeddingSideKey>(getInitialActiveSide);

  const sideData = weddingData[activeSide];
  const galleryImages = sideData.heroImages;
  const oppositeSide = getOppositeSide(activeSide);
  const headerNames =
    activeSide === "groomSide" ? "Praveen Kumar & Sree Revathi" : "Sree Revathi & Praveen Kumar";

  useEffect(() => {
    document.title = getPageTitle(activeSide);
  }, [activeSide]);

  const handleSideChange = (side: WeddingSideKey) => setActiveSide(side);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row">
        <aside className="sticky top-0 hidden h-screen w-[340px] shrink-0 border-r border-[color:var(--gold)]/25 bg-gradient-to-b from-[color:var(--cream)] to-white/80 lg:block">
          <SidebarContent activeSide={activeSide} onSideChange={handleSideChange} />
        </aside>

        <main className="flex-1 px-4 py-6 sm:px-8 lg:px-14 lg:py-16">
          <div className="mb-10 space-y-8 lg:hidden">
            <header className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--gold)]/40">
                <Heart className="h-5 w-5 text-[color:var(--maroon)]" fill="currentColor" />
              </div>
              <p className="mt-3 font-serif text-xl text-[color:var(--maroon)]">{headerNames}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
                Shubha Vivaham
              </p>
            </header>

            <section className="text-center">
              <p className="text-[11px] uppercase tracking-[0.4em] text-[color:var(--gold)]">
                A Wedding Invitation
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-tight text-[color:var(--maroon)]">
                A Celebration of Love,
                <br />
                Family & Blessings
              </h1>
              <div className="ornament-divider my-6">
                <span className="font-serif text-xs uppercase tracking-[0.3em]">Welcome</span>
              </div>
              <p className="mx-auto max-w-2xl text-base italic text-muted-foreground">
                &ldquo;{sideData.greetingMessage}&rdquo;
              </p>
            </section>

            <section>
              <h3 className="ornament-divider mb-4 font-serif text-sm uppercase tracking-[0.3em]">
                Countdown
              </h3>
              <Countdown />
            </section>

            <section>
              <h3 className="ornament-divider mb-4 font-serif text-sm uppercase tracking-[0.3em]">
                Invitation View
              </h3>
              <InvitationCard
                index={0}
                invitation={sideData.invitation}
                wishesFrom={sideData.wishesFrom}
                contacts={sideData.contacts}
                entranceAnimation={false}
              />
              <Button
                variant="outline"
                className="mt-4 w-full font-serif border-[color:var(--gold)]/40 text-[color:var(--maroon)] hover:bg-[color:var(--gold)]/10"
                onClick={() => handleSideChange(oppositeSide)}
              >
                {getSideToggleLabel(activeSide)}
              </Button>
            </section>

            <section>
              <h3 className="ornament-divider mb-4 font-serif text-sm uppercase tracking-[0.3em]">
                Calendar
              </h3>
              <WeddingCalendar />
            </section>

            <section>
              <h3 className="ornament-divider mb-4 font-serif text-sm uppercase tracking-[0.3em]">
                How to Reach
              </h3>
              <TravelGuide />
            </section>

            <section>
              <h3 className="ornament-divider mb-4 font-serif text-sm uppercase tracking-[0.3em]">
                Memories
              </h3>
              <Gallery images={galleryImages} />
            </section>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSide}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={contentTransition}
              className="hidden lg:block"
            >
              <section className="mx-auto max-w-3xl text-center">
                <p className="text-[11px] uppercase tracking-[0.4em] text-[color:var(--gold)]">
                  A Wedding Invitation
                </p>
                <h1 className="mt-4 font-serif text-4xl leading-tight text-[color:var(--maroon)] sm:text-5xl lg:text-6xl">
                  A Celebration of Love,
                  <br />
                  Family & Blessings
                </h1>
                <div className="ornament-divider my-6">
                  <span className="font-serif text-xs uppercase tracking-[0.3em]">Welcome</span>
                </div>
                <p className="mx-auto max-w-2xl text-base italic text-muted-foreground sm:text-lg">
                  &ldquo;{sideData.greetingMessage}&rdquo;
                </p>
              </section>

              <div className="mx-auto mt-12 max-w-2xl">
                <InvitationCard
                  index={0}
                  invitation={sideData.invitation}
                  wishesFrom={sideData.wishesFrom}
                  contacts={sideData.contacts}
                  entranceAnimation={false}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mx-auto mt-16 max-w-2xl text-center"
          >
            <div className="ornament-divider mb-4" />
            <p className="font-serif text-lg italic text-[color:var(--maroon)]">
              Your presence is the greatest blessing.
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
              25 · 06 · 2026
            </p>
          </motion.footer>
        </main>
      </div>
      <MusicPlayer />
    </div>
  );
}
