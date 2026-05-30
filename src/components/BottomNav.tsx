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
  { href: "/perfil", label: "Perfil", icon: "person" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-outline-variant/20 bg-surface/80 px-4 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] backdrop-blur-2xl md:hidden">
      {items.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex scale-90 flex-col items-center justify-center rounded-full p-2 transition-all duration-200 active:scale-100",
              active ? "font-bold text-primary" : "text-on-surface-variant/60 hover:bg-primary-container/20"
            )}
          >
            <Icon name={item.icon} filled={active} className="mb-1" />
            <span className="text-label-sm">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
