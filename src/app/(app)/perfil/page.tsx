import type { Metadata } from "next";
import Link from "next/link";
import { MobileHeader } from "@/components/MobileHeader";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Mi perfil",
  description: "Tu actividad, cupones guardados y favoritos en CiudadConecta.",
};

const stats = [
  { label: "Favoritos", value: "12", icon: "favorite" },
  { label: "Cupones", value: "5", icon: "confirmation_number" },
  { label: "Reseñas", value: "8", icon: "rate_review" },
];

const menu = [
  { label: "Lugares guardados", icon: "bookmark", href: "/explorar" },
  { label: "Mis cupones", icon: "confirmation_number", href: "/promociones" },
  { label: "Historial de visitas", icon: "history", href: "#" },
  { label: "Notificaciones", icon: "notifications", href: "#" },
  { label: "Métodos de pago", icon: "credit_card", href: "#" },
  { label: "Ayuda y soporte", icon: "help", href: "#" },
];

export default function PerfilPage() {
  return (
    <>
      <MobileHeader title="Perfil" />
      <div className="space-y-stack-lg px-container-margin">
        {/* Cabecera de usuario */}
        <section className="flex items-center gap-4 rounded-xl border border-surface-container-high bg-surface-container-lowest p-6 shadow-sm">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
            <span className="text-headline-md font-bold">DT</span>
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-headline-md font-semibold text-on-surface">Daniel de la Torre</h1>
            <p className="truncate text-body-md text-on-surface-variant">dluisdelatorre@gmail.com</p>
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-label-sm font-medium text-primary">
              <Icon name="verified" size={16} filled /> Miembro verificado
            </span>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-xl border border-surface-container-high bg-surface-container-lowest p-4 text-center shadow-sm"
            >
              <Icon name={s.icon} className="mb-1 text-primary" filled />
              <span className="text-title-lg font-bold text-on-surface">{s.value}</span>
              <span className="text-label-sm text-on-surface-variant">{s.label}</span>
            </div>
          ))}
        </section>

        {/* CTA negocio */}
        <Link
          href="/negocio"
          className="flex items-center gap-4 overflow-hidden rounded-xl bg-gradient-to-r from-secondary to-on-secondary-container p-6 text-on-secondary shadow-ambient transition-transform hover:scale-[1.01]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
            <Icon name="storefront" filled />
          </span>
          <div className="flex-1">
            <h3 className="text-title-lg font-semibold">¿Tienes un negocio?</h3>
            <p className="text-label-md text-white/80">Publícalo gratis y llega a miles de clientes.</p>
          </div>
          <Icon name="arrow_forward" />
        </Link>

        {/* Menú */}
        <section className="overflow-hidden rounded-xl border border-surface-container-high bg-surface-container-lowest shadow-sm">
          {menu.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-container-low ${
                i !== menu.length - 1 ? "border-b border-outline-variant/10" : ""
              }`}
            >
              <Icon name={item.icon} className="text-on-surface-variant" />
              <span className="flex-1 text-body-md text-on-surface">{item.label}</span>
              <Icon name="chevron_right" className="text-outline" />
            </Link>
          ))}
        </section>

        <Link
          href="/login"
          className="flex w-full items-center justify-center gap-2 rounded-md border border-outline-variant py-3 text-label-md font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-high"
        >
          <Icon name="logout" size={20} /> Cerrar sesión
        </Link>
      </div>
    </>
  );
}
