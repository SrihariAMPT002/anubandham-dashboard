import { MapPin, Car, Bus, Train, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const VENUES = [
  {
    id: "peddakothapally",
    title: "Peddakothapally · Prathanam & Wedding",
    query: "P.M.R. Gardens, Peddakothapally, Nagar Kurnool",
    modes: [
      { icon: Car, label: "By Car", text: "Take the Kalwakurthi Road to reach Peddakothapally directly." },
      { icon: Bus, label: "By Bus", text: "Go to MGBS (Hyderabad), Platform 34, board a Kollapur-bound bus, request a drop at Peddakothapally." },
    ],
  },
  {
    id: "kamareddy",
    title: "Kamareddy · Reception",
    query: "Taher Gardens, Kamareddy",
    modes: [
      { icon: Car, label: "By Car", text: "Take NH44 for a direct route." },
      { icon: Train, label: "By Train", text: "Train from Kacheguda Station directly to Kamareddy Station." },
    ],
  },
];

export function TravelGuide() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2 rounded-md border border-[color:var(--gold)]/30 bg-[color:var(--maroon)]/[0.04] px-3 py-2 text-[color:var(--maroon)]">
        <MapPin className="h-4 w-4 text-[color:var(--gold)]" />
        <span className="text-xs">Tap a venue to open in Google Maps</span>
      </div>

      <Accordion type="single" collapsible defaultValue="peddakothapally" className="w-full">
        {VENUES.map((v) => {
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.query)}`;
          return (
            <AccordionItem key={v.id} value={v.id} className="border-[color:var(--gold)]/25">
              <AccordionTrigger className="font-serif text-[color:var(--maroon)] hover:no-underline">
                {v.title}
              </AccordionTrigger>
              <AccordionContent className="space-y-3 text-sm">
                {v.modes.map((m) => (
                  <div key={m.label} className="flex gap-3">
                    <m.icon className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                    <p>
                      <span className="font-medium maroon-text">{m.label}:</span> {m.text}
                    </p>
                  </div>
                ))}
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="mt-2 w-full border-[color:var(--gold)]/40 text-[color:var(--maroon)] hover:bg-[color:var(--gold)]/10"
                >
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Open in Google Maps
                  </a>
                </Button>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
