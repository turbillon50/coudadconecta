import type {
  ActivityItem,
  Business,
  BusinessStat,
  Category,
  CityEvent,
  Promotion,
} from "./types";

// -----------------------------------------------------------------------------
// DATOS DEMO
// Capa de datos mock. Sustituir por consultas reales (Neon) detrás de funciones
// async con la misma firma para conectar el backend sin tocar la UI.
// -----------------------------------------------------------------------------

// Imágenes estables de Unsplash (sin claves, optimizadas por next/image).
const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const CITY = "México";

export const categories: Category[] = [
  { id: "restaurantes", label: "Restaurantes", icon: "restaurant", tint: "bg-primary-container/20", color: "text-primary" },
  { id: "cafeterias", label: "Cafeterías", icon: "coffee", tint: "bg-secondary-container/20", color: "text-secondary" },
  { id: "salud", label: "Salud", icon: "medical_services", tint: "bg-tertiary-container/30", color: "text-tertiary" },
  { id: "servicios", label: "Servicios", icon: "build", tint: "bg-primary/10", color: "text-primary" },
  { id: "eventos", label: "Eventos", icon: "event", tint: "bg-secondary/10", color: "text-secondary" },
  { id: "belleza", label: "Belleza", icon: "spa", tint: "bg-primary-container/20", color: "text-primary" },
  { id: "tiendas", label: "Tiendas", icon: "shopping_bag", tint: "bg-secondary-container/20", color: "text-secondary" },
  { id: "hoteles", label: "Hoteles", icon: "hotel", tint: "bg-tertiary-container/30", color: "text-tertiary" },
];

export const businesses: Business[] = [
  {
    id: "luna-rooftop",
    name: "Luna Rooftop Bar",
    category: "restaurantes",
    categoryLabel: "Comida Mediterránea",
    description: "Cocina mediterránea con vista panorámica a la laguna.",
    rating: 4.8, reviews: 312, priceLevel: "$$", distanceKm: 1.2, etaMin: 15,
    image: img("photo-1517248135467-4c7edcad34c4"),
    open: true, trending: true,
    address: "Blvd. Kukulcán km 9, Zona Hotelera",
    map: { top: 28, left: 22 },
  },
  {
    id: "oasis-wellness",
    name: "Oasis Wellness Center",
    category: "salud",
    categoryLabel: "Spa & Yoga",
    description: "Spa holístico, yoga al amanecer y masajes terapéuticos.",
    rating: 4.9, reviews: 198, priceLevel: "$$$", distanceKm: 2.5, etaMin: 20,
    image: img("photo-1544161515-4ab6ce6db874"),
    open: true, trending: true,
    address: "Av. Bonampak 45, SM 12",
    map: { top: 58, left: 64 },
  },
  {
    id: "cafe-central",
    name: "Café Central",
    category: "cafeterias",
    categoryLabel: "Café de especialidad",
    description: "Tueste propio y repostería artesanal en el corazón del centro.",
    rating: 4.7, reviews: 521, priceLevel: "$", distanceKm: 0.3, etaMin: 5,
    image: img("photo-1501339847302-ac426a4a7cbb"),
    open: true, trending: true,
    address: "Av. Yaxchilán 23, SM 22",
    map: { top: 35, left: 30 },
  },
  {
    id: "la-terraza",
    name: "La Terraza",
    category: "restaurantes",
    categoryLabel: "Cocina mexicana",
    description: "Mariscos frescos y cocteles de autor en terraza al aire libre.",
    rating: 4.5, reviews: 274, priceLevel: "$$", distanceKm: 1.2, etaMin: 14,
    image: img("photo-1414235077428-338989a2e8c0"),
    open: true,
    address: "Av. Tulum 180, SM 4",
    map: { top: 50, left: 40 },
  },
  {
    id: "boutique-azul",
    name: "Boutique Azul",
    category: "tiendas",
    categoryLabel: "Moda & accesorios",
    description: "Diseñadores locales y piezas únicas de temporada.",
    rating: 4.9, reviews: 143, priceLevel: "$$", distanceKm: 0.8, etaMin: 10,
    image: img("photo-1441986300917-64674bd600d8"),
    open: false,
    address: "Plaza Las Américas, Local 32",
    map: { top: 66, left: 48 },
  },
  {
    id: "iron-gym",
    name: "Iron Gym",
    category: "salud",
    categoryLabel: "Fitness & entrenamiento",
    description: "Equipo de última generación y clases grupales todo el día.",
    rating: 4.6, reviews: 389, priceLevel: "$$", distanceKm: 1.7, etaMin: 18,
    image: img("photo-1534438327276-14e5300c3a48"),
    open: true,
    address: "Av. Nichupté 8, SM 19",
    map: { top: 42, left: 72 },
  },
];

export const promotions: Promotion[] = [
  {
    id: "burger-2x1",
    title: "2x1 en Hamburguesas Artesanales",
    business: "The Burger Club", businessId: "burger-club",
    badge: "2X1", kind: "2x1", category: "restaurantes",
    conditions: "Válido de lunes a jueves",
    image: img("photo-1568901346375-23c9450c58cd"),
    expiresInHours: 6,
  },
  {
    id: "spa-40",
    title: "40% OFF en Masaje Relajante",
    business: "Zen Spa Center", businessId: "zen-spa",
    badge: "40% OFF", kind: "discount", category: "belleza",
    conditions: "Reserva previa necesaria",
    image: img("photo-1600334129128-685c5582fd35"),
    expiresInHours: 12,
  },
  {
    id: "cafe-gratis",
    title: "Café de Especialidad Gratis",
    business: "Aroma Roast", businessId: "aroma-roast",
    badge: "GRATIS", kind: "free", category: "cafeterias",
    conditions: "En la compra de un postre",
    image: img("photo-1495474472287-4d71bcdd2085"),
    expiresInHours: 4,
  },
  {
    id: "studio-v",
    title: "20% en Corte y Peinado",
    business: "Studio V", businessId: "studio-v",
    badge: "-20%", kind: "discount", category: "belleza",
    conditions: "Solo para nuevos clientes",
    image: img("photo-1560066984-138dadb4c035"),
    expiresInHours: 48,
  },
  {
    id: "gym-mes",
    title: "Mes Gratis de Gimnasio",
    business: "Iron Gym", businessId: "iron-gym",
    badge: "PROMO", kind: "special", category: "salud",
    conditions: "En plan anual",
    image: img("photo-1534438327276-14e5300c3a48"),
    expiresInHours: 72,
  },
  {
    id: "taco-fest",
    title: "Combo Taco Fest - 30% Off",
    business: "Los Primos", businessId: "los-primos",
    badge: "-30%", kind: "discount", category: "restaurantes",
    conditions: "Válido fines de semana",
    image: img("photo-1565299624946-b28f40a0ae38"),
    expiresInHours: 36,
  },
];

export const events: CityEvent[] = [
  {
    id: "jazz-riviera",
    title: "Festival Jazz Riviera",
    venue: "Teatro de la Ciudad",
    date: "15 Oct", time: "20:00",
    image: img("photo-1493676304819-0d7a8d026dcf"),
    category: "Música",
  },
  {
    id: "expo-arte",
    title: "Expo Arte Contemporáneo",
    venue: "Galería del Centro",
    date: "18 Oct", time: "19:00",
    image: img("photo-1536924940846-227afb31e2a5"),
    category: "Cultura",
  },
  {
    id: "mercado-noche",
    title: "Mercado Nocturno Gourmet",
    venue: "Parque Las Palapas",
    date: "22 Oct", time: "18:00",
    image: img("photo-1555396273-367ea4eb4db5"),
    category: "Gastronomía",
  },
];

// --- Panel de negocio ---

export const businessStats: BusinessStat[] = [
  { id: "views", label: "Visitas al perfil", value: "1,245", delta: "+12%", icon: "visibility", trendColor: "text-primary bg-primary/10" },
  { id: "contacts", label: "Contactos", value: "89", delta: "+8%", icon: "chat_bubble", trendColor: "text-secondary bg-secondary/10" },
  { id: "sales", label: "Ventas generadas", value: "$12.4k", delta: "+24%", icon: "payments", trendColor: "text-on-primary-container bg-primary-container/20" },
];

export const recentActivity: ActivityItem[] = [
  { id: "a1", kind: "contact", title: "Ana López te contactó vía WhatsApp", time: "Hace 15 min", icon: "person" },
  { id: "a2", kind: "review", title: "Carlos M. dejó una reseña de 5 estrellas", time: "Hace 2 horas", icon: "star" },
  { id: "a3", kind: "view", title: "Tu promo 2x1 alcanzó 320 vistas", time: "Hace 5 horas", icon: "trending_up" },
  { id: "a4", kind: "promo", title: "Nueva solicitud de reserva para hoy", time: "Ayer", icon: "event_available" },
];
