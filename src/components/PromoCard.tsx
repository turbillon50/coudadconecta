"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { formatCountdown } from "@/lib/utils";
import type { Promotion } from "@/lib/types";

export function PromoCard({ promo }: { promo: Promotion }) {
  const [remaining, setRemaining] = useState(promo.expiresInHours * 3600);

  useEffect(() => {
    const t = setInterval(() => setRemaining((r) => (r > 0 ? r - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-surface-container-high bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-ambient">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={promo.image}
          alt={promo.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full border border-white/40 bg-white/70 px-3 py-1 backdrop-blur-md">
          <Icon name="timer" filled size={16} className="text-primary" />
          <span className="font-mono text-label-sm text-primary tabular-nums">
            {formatCountdown(remaining)}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-title-lg font-semibold leading-tight text-on-surface">{promo.title}</h3>
          <span className="shrink-0 rounded-full bg-primary-container px-3 py-1 text-label-sm font-bold text-on-primary-container">
            {promo.badge}
          </span>
        </div>
        <p className="mb-4 text-body-md text-on-surface-variant">
          {promo.business} — {promo.conditions}
        </p>
        <div className="mt-auto flex items-center gap-3">
          <button
            type="button"
            className="flex-1 rounded-md bg-primary py-3 text-label-md font-semibold text-on-primary transition-all hover:bg-primary/90 active:scale-95"
          >
            Ver oferta
          </button>
          <button
            type="button"
            aria-label="Guardar cupón"
            className="rounded-md border border-outline-variant p-3 text-primary transition-colors hover:bg-primary-container/10"
          >
            <Icon name="bookmark" size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
