import { MapPin, Car, Bus, Train } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TravelGuide() {
  return (
    <div>
      <div className="mb-4 flex aspect-[16/9] items-center justify-center rounded-md border border-dashed border-[color:var(--gold)]/40 bg-gradient-to-br from-[color:var(--maroon)]/5 to-[color:var(--gold)]/5">
        <div className="flex flex-col items-center gap-2 text-[color:var(--maroon)]/60">
          <MapPin className="h-6 w-6" />
          <span className="text-xs uppercase tracking-widest">Map Preview</span>
        </div>
      </div>

      <Accordion type="single" collapsible defaultValue="peddakothapally" className="w-full">
        <AccordionItem value="peddakothapally" className="border-[color:var(--gold)]/25">
          <AccordionTrigger className="font-serif text-[color:var(--maroon)] hover:no-underline">
            Peddakothapally · Prathanam & Wedding
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm">
            <div className="flex gap-3">
              <Car className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <p><span className="font-medium maroon-text">By Car:</span> Take the Kalwakurthi Road to reach Peddakothapally directly.</p>
            </div>
            <div className="flex gap-3">
              <Bus className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <p>
                <span className="font-medium maroon-text">By Bus:</span> Go to MGBS (Mahatma Gandhi Bus Station, Hyderabad), proceed to Platform 34, board a Kollapur-bound bus, and request a drop-off at Peddakothapally.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="kamareddy" className="border-[color:var(--gold)]/25">
          <AccordionTrigger className="font-serif text-[color:var(--maroon)] hover:no-underline">
            Kamareddy · Reception
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm">
            <div className="flex gap-3">
              <Car className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <p><span className="font-medium maroon-text">By Car:</span> Take NH44 for a direct route.</p>
            </div>
            <div className="flex gap-3">
              <Train className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <p><span className="font-medium maroon-text">By Train:</span> Take a train from Kacheguda Station directly to Kamareddy Station.</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
