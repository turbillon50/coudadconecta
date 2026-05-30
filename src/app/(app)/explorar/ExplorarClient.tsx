"use client";

import { useMemo, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { BusinessCard } from "@/components/BusinessCard";
import { EmptyState } from "@/components/ui/States";
import { Icon } from "@/components/Icon";
import { businesses, categories } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { CategoryId } from "@/lib/types";

export function ExplorarClient() {
  const [active, setActive] = useState<CategoryId | "todas">("todas");

  const filtered = useMemo(
    () => (active === "todas" ? businesses : businesses.filter((b) => b.category === active)),
    [active]
  );

  return (
    <div className="space-y-stack-lg px-container-margin">
      <header className="hidden md:block">
        <h1 className="text-headline-lg font-semibold text-on-surface">Explorar negocios</h1>
        <p className="mt-1 text-body-md text-on-surface-variant">
          {businesses.length} negocios verificados en Cancún
        </p>
      </header>

      <SearchBar placeholder="Busca restaurantes, spas, tiendas…" />

      {/* Filtros por categoría */}
      <div className="no-scrollbar -mx-container-margin flex gap-2 overflow-x-auto px-container-margin pb-1">
        <FilterChip label="Todas" icon="apps" active={active === "todas"} onClick={() => setActive("todas")} />
        {categories.slice(0, 6).map((cat) => (
          <FilterChip
            key={cat.id}
            label={cat.label}
            icon={cat.icon}
            active={active === cat.id}
            onClick={() => setActive(cat.id)}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="Sin resultados"
          description="No encontramos negocios en esta categoría todavía. Prueba con otra."
          action={
            <button
              type="button"
              onClick={() => setActive("todas")}
              className="rounded-md bg-primary px-5 py-2.5 text-label-md font-semibold text-on-primary"
            >
              Ver todos
            </button>
          }
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((b) => (
            <BusinessCard key={b.id} business={b} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-label-md transition-all",
        active
          ? "bg-primary text-on-primary shadow-sm"
          : "border border-outline-variant/30 bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
      )}
    >
      <Icon name={icon} size={18} />
      {label}
    </button>
  );
}
