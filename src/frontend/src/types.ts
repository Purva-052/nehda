// Backend-generated types matching Motoko canister interface

export interface DailyMenuItem {
  id: string;
  name: string;
  description: string;
}

export type AdminResult = { ok: string } | { err: string };
// nkkn123
// Frontend-friendly version with normalized description
export interface DailyMenuItemView {
  id: string;
  name: string;
  description: string | null;
}

export function toDailyMenuItemView(item: DailyMenuItem): DailyMenuItemView {
  return {
    id: item.id,
    name: item.name,
    // Bug fix #4: removed the dead `?? null` — item.description is already
    // confirmed to be a non-empty string at this point, so the nullish
    // coalescing operator never ran. Simplified to a direct assignment.
    description: item.description.length > 0 ? item.description : null,
  };
}

// Nav link definition
export interface NavLink {
  label: string;
  href: string;
}

// Menu plan type
export interface MenuPlan {
  title: string;
  titleGu: string;
  price: string;
  description: string;
  items: string[];
  highlight: boolean;
}

// Gallery image
export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}