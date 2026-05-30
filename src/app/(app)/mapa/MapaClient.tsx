"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { businesses, categories } from "@/lib/data";
import { cn } from "@/lib/utils";

const mapChips = categories.filter((c) =>
  ["restaurantes", "hoteles", "eventos", "tiendas", "cafeterias"].includes(c.id)
);

export function MapaClient() {
  const [activeChip, setActiveChip] = useState(mapChips[0].id);
  const [selected, setSelected] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const focusBusiness = (id: string) => {
    setSelected(id);
    cardRefs.current[id]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="px-container-margin">
      <div className="relative h-[58dvh] w-full overflow-hidden rounded-xl border border-outline-variant/20 shadow-ambient md:h-[64vh]">
        {/* Lienzo del mapa (mock; reemplazable por Google Maps) */}
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=70"
          alt="Mapa de México"
          fill
          sizes="100vw"
          className="object-cover grayscale-[0.15]"
        />
        <div className="absolute inset-0 bg-secondary/5" />

        {/* Chips de categoría */}
        <div className="no-scrollbar absolute inset-x-0 top-0 z-20 flex gap-2 overflow-x-auto p-4">
          {mapChips.map((chip) => (
            <button
              key={chip.id}
              type="button"
              onClick={() => setActiveChip(chip.id)}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-label-md shadow-sm transition-all active:scale-95",
                activeChip === chip.id
                  ? "bg-primary text-on-primary"
                  : "border border-outline-variant/30 bg-surface/90 text-on-surface-variant backdrop-blur-md"
              )}
            >
              <Icon name={chip.icon} size={18} />
              {chip.label}
            </button>
          ))}
        </div>

        {/* Pines */}
        {businesses.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => focusBusiness(b.id)}
            style={{ top: `${b.map.top}%`, left: `${b.map.left}%` }}
            className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center animate-pulse-pin"
          >
            <span
              className={cn(
                "flex items-center justify-center rounded-full p-2.5 shadow-lg transition-transform group-hover:scale-110",
                selected === b.id ? "bg-secondary text-on-secondary" : "bg-primary text-on-primary"
              )}
            >
              <Icon name="storefront" filled size={20} />
            </span>
            <span className="mt-1 rounded bg-surface/90 px-2 py-0.5 text-label-sm text-on-surface opacity-0 shadow-sm backdrop-blur-md transition-opacity group-hover:opacity-100">
              {b.name}
            </span>
          </button>
        ))}

        {/* Botones flotantes */}
        <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-3">
          <button
            type="button"
            aria-label="Capas"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary shadow-ambient transition-all hover:bg-surface-container-high active:scale-90"
          >
            <Icon name="layers" />
          </button>
          <button
            type="button"
            aria-label="Mi ubicación"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-ambient transition-all hover:brightness-110 active:scale-90"
          >
            <Icon name="my_location" size={26} />
          </button>
        </div>
      </div>

      {/* Resultados */}
      <h2 className="mb-3 mt-stack-lg text-title-lg font-semibold">Resultados cercanos</h2>
      <div className="no-scrollbar -mx-container-margin flex gap-4 overflow-x-auto px-container-margin pb-2">
        {businesses.map((b) => (
          <button
            key={b.id}
            ref={(el) => {
              cardRefs.current[b.id] = el;
            }}
            type="button"
            onClick={() => focusBusiness(b.id)}
            className={cn(
              "flex w-[280px] shrink-0 gap-3 rounded-xl border bg-surface-container-lowest p-3 text-left shadow-sm transition-all",
              selected === b.id ? "border-primary ring-2 ring-primary/40" : "border-surface-container-high"
            )}
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
              <Image src={b.image} alt={b.name} fill sizes="80px" className="object-cover" />
            </div>
            <div className="flex flex-col justify-between py-0.5">
              <div>
                <h3 className="text-body-md font-bold leading-tight text-on-surface">{b.name}</h3>
                <div className="mt-0.5 flex items-center gap-1">
                  <Icon name="star" filled size={14} className="text-primary" />
                  <span className="text-label-sm">{b.rating}</span>
                  <span className="ml-1 text-label-sm text-on-surface-variant/60">• {b.distanceKm} km</span>
                </div>
              </div>
              <span
                className={cn(
                  "text-label-sm font-bold",
                  b.open ? "text-primary" : "text-on-surface-variant/60"
                )}
              >
                {b.open ? "Abierto ahora" : "Cerrado"}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
