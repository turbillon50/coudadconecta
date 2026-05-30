import Image from "next/image";
import { Icon } from "./Icon";
import type { Business } from "@/lib/types";

export function BusinessCard({ business }: { business: Business }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-surface-container-high bg-white shadow-sm transition-shadow hover:shadow-ambient">
      <div className="relative aspect-video">
        <Image
          src={business.image}
          alt={business.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          aria-label="Guardar"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/70 text-on-surface-variant backdrop-blur-md transition-colors hover:text-error"
        >
          <Icon name="favorite" size={20} />
        </button>
        {business.open ? (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-label-sm font-bold text-on-primary">
            Abierto
          </span>
        ) : (
          <span className="absolute left-4 top-4 rounded-full bg-surface-container-high px-3 py-1 text-label-sm font-bold text-on-surface-variant">
            Cerrado
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h4 className="text-body-lg font-bold text-on-surface">{business.name}</h4>
          <div className="flex shrink-0 items-center gap-1 rounded-lg bg-surface-container-high px-2 py-1">
            <Icon name="star" filled size={16} className="text-primary" />
            <span className="text-label-sm font-bold">{business.rating}</span>
          </div>
        </div>
        <p className="mb-4 text-label-md text-on-surface-variant">
          {business.categoryLabel} • {business.priceLevel}
        </p>
        <div className="flex items-center gap-4 text-label-sm text-outline">
          <span className="flex items-center gap-1">
            <Icon name="distance" size={16} /> {business.distanceKm} km
          </span>
          <span className="flex items-center gap-1">
            <Icon name="timer" size={16} /> {business.etaMin} min
          </span>
          <span className="flex items-center gap-1">
            <Icon name="reviews" size={16} /> {business.reviews}
          </span>
        </div>
      </div>
    </article>
  );
}
