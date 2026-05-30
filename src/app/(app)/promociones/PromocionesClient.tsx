"use client";

import { useMemo, useState } from "react";
import { PromoCard } from "@/components/PromoCard";
import { EmptyState } from "@/components/ui/States";
import { promotions } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { CategoryId } from "@/lib/types";

const filters: { id: CategoryId | "todas"; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "restaurantes", label: "Comida" },
  { id: "belleza", label: "Belleza" },
  { id: "servicios", label: "Servicios" },
  { id: "salud", label: "Salud" },
  { id: "cafeterias", label: "Café" },
];

export function PromocionesClient() {
  const [active, setActive] = useState<CategoryId | "todas">("todas");

  const filtered = useMemo(
    () => (active === "todas" ? promotions : promotions.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="px-container-margin">
      <header className="mb-stack-lg">
        <h1 className="text-headline-md font-semibold text-on-surface md:text-headline-lg">
          Promociones y Cupones
        </h1>
        <p className="mt-1 text-body-md text-on-surface-variant">
          Encuentra los mejores descuentos en tu ciudad.
        </p>
      </header>

      <nav className="no-scrollbar -mx-container-margin mb-stack-lg flex gap-2 overflow-x-auto px-container-margin pb-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={cn(
              "whitespace-nowrap rounded-full px-6 py-2.5 text-label-md transition-all",
              active === f.id
                ? "bg-primary text-on-primary"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            )}
          >
            {f.label}
          </button>
        ))}
      </nav>

      {filtered.length === 0 ? (
        <EmptyState
          icon="local_offer"
          title="Sin promociones activas"
          description="No hay cupones en esta categoría por ahora. Vuelve pronto, ¡agregamos ofertas a diario!"
        />
      ) : (
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
      )}
    </div>
  );
}
