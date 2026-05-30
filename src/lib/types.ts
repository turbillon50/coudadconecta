// Modelo de dominio de CiudadConecta.
// Tipado pensado para mapear 1:1 con tablas de Neon/PostgreSQL en el futuro.

export type CategoryId =
  | "restaurantes"
  | "cafeterias"
  | "salud"
  | "servicios"
  | "eventos"
  | "belleza"
  | "tiendas"
  | "hoteles";

export interface Category {
  id: CategoryId;
  label: string;
  icon: string; // Material Symbols name
  tint: string; // clase tailwind de fondo
  color: string; // clase tailwind de texto/icono
}

export type PriceLevel = "$" | "$$" | "$$$";

export interface Business {
  id: string;
  name: string;
  category: CategoryId;
  categoryLabel: string;
  description: string;
  rating: number;
  reviews: number;
  priceLevel: PriceLevel;
  distanceKm: number;
  etaMin: number;
  image: string;
  open: boolean;
  trending?: boolean;
  address: string;
  // posición relativa sobre el mapa (0-100%) para el mock visual
  map: { top: number; left: number };
}

export type PromoKind = "discount" | "2x1" | "free" | "special";

export interface Promotion {
  id: string;
  title: string;
  business: string;
  businessId: string;
  badge: string;
  kind: PromoKind;
  category: CategoryId;
  conditions: string;
  image: string;
  expiresInHours: number;
}

export interface CityEvent {
  id: string;
  title: string;
  venue: string;
  date: string;
  time: string;
  image: string;
  category: string;
}

export interface BusinessStat {
  id: string;
  label: string;
  value: string;
  delta: string;
  icon: string;
  trendColor: string;
}

export interface ActivityItem {
  id: string;
  kind: "contact" | "review" | "promo" | "view";
  title: string;
  time: string;
  icon: string;
}
