"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/negocio", label: "Panel de Control", icon: "dashboard" },
  { href: "/negocio/estadisticas", label: "Estadísticas", icon: "analytics" },
  { href: "/negocio/promociones", label: "Promociones", icon: "sell" },
  { href: "/negocio/perfil", label: "Mi Perfil", icon: "storefront" },
  { href: "/negocio/configuracion", label: "Configuración", icon: "settings" },
];

export function BusinessSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-dvh w-64 flex-col border-r border-outline-variant/30 bg-surface-container-lowest px-stack-md py-stack-lg md:flex">
      <Link href="/" className="mb-stack-lg flex items-center gap-3 px-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-on-primary">
          <Icon name="business_center" filled />
        </span>
        <span className="text-title-lg font-bold text-primary">CiudadConecta</span>
      </Link>

      <nav className="flex flex-1 flex-col gap-2">
        {nav.map((item) => {
          const active = item.href === "/negocio" ? pathname === "/negocio" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 rounded-full px-4 py-3 text-label-md transition-all",
                active
                  ? "bg-primary-container font-bold text-on-primary-container"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              )}
            >
              <Icon name={item.icon} filled={active} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl border border-secondary-fixed bg-secondary-fixed/30 p-4">
        <p className="mb-2 text-label-sm font-medium text-secondary">Plan Pro Activo</p>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
          <div className="h-full w-4/5 rounded-full bg-secondary" />
        </div>
        <p className="mt-2 text-[10px] opacity-70">22 de 30 días restantes</p>
      </div>
    </aside>
  );
}

const mobileNav = [
  { href: "/negocio", label: "Panel", icon: "dashboard" },
  { href: "/negocio/estadisticas", label: "Stats", icon: "analytics" },
  { href: "/negocio/promociones", label: "Promos", icon: "sell" },
  { href: "/negocio/perfil", label: "Perfil", icon: "storefront" },
];

export function BusinessBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-outline-variant/20 bg-surface/80 px-4 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-2xl md:hidden">
      {mobileNav.map((item) => {
        const active = item.href === "/negocio" ? pathname === "/negocio" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center py-2 transition-transform active:scale-95",
              active ? "font-bold text-primary" : "text-on-surface-variant/60"
            )}
          >
            <Icon name={item.icon} filled={active} />
            <span className="mt-1 text-[10px] uppercase tracking-tight">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
