import type { WeddingSideKey } from "@/data/weddingData";

export const DEFAULT_PAGE_TITLE = "Sree Revathi & Praveen Kumar - Wedding Invitation";

export const DEFAULT_PAGE_DESCRIPTION =
  "Join us in celebrating the wedding of Sree Revathi & Praveen Kumar on 25 June 2026.";

export function getPageTitle(): string {
  return import.meta.env.VITE_IS_GROOM_SIDE === "true"
    ? "Praveen & Sree Revathi - Wedding Invitation"
    : "Sree Revathi & Praveen - Wedding Invitation";
}

export function getInitialActiveSide(): WeddingSideKey {
  return import.meta.env.VITE_IS_GROOM_SIDE === "true" ? "groomSide" : "brideSide";
}

export function getOppositeSide(side: WeddingSideKey): WeddingSideKey {
  return side === "brideSide" ? "groomSide" : "brideSide";
}

export function getSideToggleLabel(activeSide: WeddingSideKey): string {
  return activeSide === "groomSide"
    ? "View Bride's Side Invitation"
    : "View Groom's Side Invitation";
}
