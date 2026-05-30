# CiudadConecta

**Tu ciudad, conectada.** PWA de descubrimiento de negocios, promociones y eventos locales — un concierge digital para Cancún.

Construida a partir de una entrega visual de Google Stitch (4 mockups HTML + design system "Urban Connectivity Framework") y convertida en una aplicación real, navegable y lista para producción en Vercel.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS 3** con los tokens de diseño extraídos del Stitch (paleta Material 3: turquesa + azul profundo)
- **PWA**: `manifest.webmanifest`, service worker (offline shell), íconos maskable, theme-color
- **next/image** para imágenes optimizadas
- Datos **mock** tipados (`src/lib/`) listos para conectar a un backend real

## Estructura

```
src/
├── app/
│   ├── (app)/                 # Shell de consumidor (top nav desktop + bottom nav mobile)
│   │   ├── page.tsx           # Inicio
│   │   ├── explorar/          # Directorio de negocios con filtros
│   │   ├── mapa/              # Mapa interactivo con pines (mock)
│   │   ├── promociones/       # Cupones con cuenta regresiva
│   │   └── perfil/            # Perfil de usuario
│   ├── negocio/               # Panel de negocio (sidebar desktop + bottom nav)
│   ├── login/  registro/      # Autenticación visual (usuario / negocio)
│   ├── error.tsx  not-found.tsx
│   ├── robots.ts  sitemap.ts
│   └── layout.tsx             # Metadata, PWA, fuentes
├── components/                # UI reutilizable (cards, navs, estados)
└── lib/                       # Tipos + datos mock + utils
```

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint
```

## Variables de entorno

Copia `.env.example` → `.env.local`. La app funciona en **modo demo** sin ninguna variable.
Integraciones preparadas (placeholders): Clerk (auth), Neon PostgreSQL, Resend, Mercado Pago,
Stripe, Google Maps, Twilio/WhatsApp, almacenamiento de archivos.

## Deploy en Vercel

El proyecto está en la **raíz del repositorio**, así que Vercel detecta Next.js automáticamente.

1. Importa el repo en [vercel.com/new](https://vercel.com/new).
2. **Framework Preset:** Next.js · **Root Directory:** `./` · **Build:** `next build` · **Output:** `.next` (por defecto).
3. Agrega las variables de entorno necesarias (ver `.env.example`).
4. Deploy.

O con la CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # producción
```

> Nota: la entrega original de Stitch quedó archivada en `design-reference/` como referencia visual.
