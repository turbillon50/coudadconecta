"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Inicio", icon: "home" },
  { href: "/explorar", label: "Explorar", icon: "search" },
  { href: "/mapa", label: "Mapa", icon: "map" },
  { href: "/promociones", label: "Promos", icon: "sell" },
];

/** Barra superior solo para desktop (en mobile se usa BottomNav + header). */
export function DesktopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 hidden border-b border-outline-variant/20 bg-surface/80 backdrop-blur-xl md:block">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-container-margin">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-on-primary">
            <Icon name="location_on" filled size={20} />
          </span>
          <span className="text-title-lg font-bold text-primary">CiudadConecta</span>
        </Link>

        <nav className="flex items-center gap-1">
          {items.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-label-md transition-colors",
                  active
                    ? "bg-primary-container/30 font-semibold text-on-primary-container"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                )}
              >
                <Icon name={item.icon} filled={active} size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/negocio"
            className="hidden items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-label-md text-on-surface-variant transition-colors hover:bg-surface-container-high lg:flex"
          >
            <Icon name="storefront" size={20} />
            Para negocios
          </Link>
          <Link
            href="/perfil"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant transition-colors hover:bg-surface-container-highest"
            aria-label="Perfil"
          >
            <Icon name="person" />
          </Link>
        </div>
      </div>
    </header>
  );
}
