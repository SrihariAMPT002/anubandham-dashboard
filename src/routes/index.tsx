import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { SidebarContent } from "@/components/wedding/SidebarContent";
import { InvitationCard } from "@/components/wedding/InvitationCard";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { weddingData, type WeddingSideKey } from "@/data/weddingData";
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
  const [open, setOpen] = useState(false);
  const [activeSide, setActiveSide] = useState<WeddingSideKey>(getInitialActiveSide);

  const sideData = weddingData[activeSide];

  useEffect(() => {
    document.title = getPageTitle();
  }, []);

  const handleSideChange = (side: WeddingSideKey) => {
    setActiveSide(side);
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[color:var(--gold)]/25 bg-background/85 px-4 py-3 backdrop-blur-md lg:hidden">
          <div>
            <p className="font-serif text-lg text-[color:var(--maroon)] leading-none">Praveen & Revathi</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold)]">25 June 2026</p>
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-[color:var(--gold)]/40 text-[color:var(--maroon)]">
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[88vw] max-w-sm bg-background p-0">
              <SidebarContent activeSide={activeSide} onSideChange={handleSideChange} />
            </SheetContent>
          </Sheet>
        </header>

        <aside className="sticky top-0 hidden h-screen w-[340px] shrink-0 border-r border-[color:var(--gold)]/25 bg-gradient-to-b from-[color:var(--cream)] to-white/80 lg:block">
          <SidebarContent activeSide={activeSide} onSideChange={handleSideChange} />
        </aside>

        <main className="flex-1 px-4 py-10 sm:px-8 lg:px-14 lg:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSide}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={contentTransition}
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
    </div>
  );
}
