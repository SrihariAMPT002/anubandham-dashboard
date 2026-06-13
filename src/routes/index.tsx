import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { SidebarContent } from "@/components/wedding/SidebarContent";
import { InvitationCard } from "@/components/wedding/InvitationCard";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praveen weds Sree Revathi · Wedding Invitation" },
      { name: "description", content: "Join us in celebrating the wedding of Praveen Kumar & Sree Revathi on 25 June 2026 at P.M.R. Gardens, Peddakothapally." },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row">
        {/* Mobile top bar */}
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
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </header>

        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-[340px] shrink-0 border-r border-[color:var(--gold)]/25 bg-gradient-to-b from-[color:var(--cream)] to-white/80 lg:block">
          <SidebarContent />
        </aside>

        {/* Main content */}
        <main className="flex-1 px-4 py-10 sm:px-8 lg:px-14 lg:py-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
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
              "With immense joy, I invite you to celebrate the beautiful union of my sibling. Please join us in showering the couple with love and blessings."
            </p>
          </motion.section>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 xl:grid-cols-2">
            <InvitationCard
              index={0}
              side="bride"
              intro="We solicit your gracious presence with family & friends on the auspicious occasion of the marriage of our daughter"
              primaryName="Chi. La. Sow. Sree Revathi"
              primaryTitle="Sub-Inspector of Police"
              primaryParents="Second D/o. Smt. Tagili Lakshmi & Sri Tagili Balaswamy"
              partnerLabel="Groom"
              partnerName="Chi. Praveen Kumar"
              partnerTitle="Sub-Inspector of Police"
              partnerParents="Only S/o. Smt. Namala Bharathi & Sri Namala Dharmapuri"
              events={[
                {
                  label: "Prathanam",
                  date: "Wednesday, 24 June 2026",
                  time: "12:00 p.m. onwards",
                  venue: "Our Residence, Peddakothapally, Nagar Kurnool Dist.",
                },
                {
                  label: 'Sumuhurtham · "Karkataka Lagnam"',
                  date: "Thursday, 25 June 2026",
                  time: "09:12 a.m.",
                  venue: "P.M.R. Gardens, Peddakothapally, Nagar Kurnool Dist.",
                },
              ]}
              compliments="Smt. Maddela Renuka — Sri Maddela Raju, Near & Dear"
            />

            <InvitationCard
              index={1}
              side="groom"
              intro="We solicit your gracious presence with family & friends on the auspicious occasion of the marriage of our only son"
              primaryName="Chi. Praveen Kumar"
              primaryTitle="Sub-Inspector of Police"
              partnerLabel="Bride"
              partnerName="Chi. La. Sow. Sree Revathi"
              partnerTitle="Sub-Inspector of Police"
              partnerParents="Second D/o. Smt. Tagili Lakshmi & Sri Tagili Balaswamy"
              events={[
                {
                  label: 'Sumuhurtham · "Karkataka Lagnam"',
                  date: "Thursday, 25 June 2026",
                  time: "09:12 a.m.",
                  venue: "P.M.R. Gardens, Peddakothapally, Nagar Kurnool Dist.",
                },
                {
                  label: "Reception",
                  date: "Sunday, 28 June 2026",
                  time: "7:00 p.m. onwards",
                  venue: "Taher Gardens, Kamareddy Dist.",
                },
              ]}
              invitingFamily="Smt. Namala Bharathi & Sri Namala Dharmapuri"
              compliments="Smt. Vendi Neeraja & Sri Vendi Naresh, Near & Dear"
            />
          </div>

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
