import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { businessStats, recentActivity, promotions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Panel de negocio",
  description: "Administra tu negocio: estadísticas, promociones y actividad reciente.",
};

const quickActions = [
  { label: "Publicar Promo", icon: "campaign" },
  { label: "Subir Fotos", icon: "add_a_photo" },
  { label: "Horarios", icon: "schedule" },
  { label: "Ver Reseñas", icon: "star_rate" },
];

export default function NegocioDashboard() {
  const featured = promotions[2];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <header className="mb-stack-lg flex items-center justify-between">
        <div>
          <h1 className="text-headline-md font-semibold text-on-surface">Hola, Café Central</h1>
          <p className="text-label-md text-on-surface-variant">Bienvenido a tu panel de administración.</p>
        </div>
        <div className="flex items-center gap-stack-md">
          <button
            type="button"
            aria-label="Notificaciones"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:bg-surface-container-high"
          >
            <Icon name="notifications" />
          </button>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-container bg-primary text-on-primary">
            <Icon name="storefront" filled />
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="mb-section-gap grid grid-cols-1 gap-gutter md:grid-cols-3">
        {businessStats.map((stat, i) => (
          <div
            key={stat.id}
            className="animate-fade-in rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-stack-md shadow-sm"
            style={{ animationDelay: `${0.1 * (i + 1)}s` }}
          >
            <div className="mb-stack-sm flex items-start justify-between">
              <span className={`rounded-xl p-3 ${stat.trendColor}`}>
                <Icon name={stat.icon} />
              </span>
              <span className={`rounded-full px-2 py-1 text-label-sm ${stat.trendColor}`}>{stat.delta}</span>
            </div>
            <h3 className="text-label-md text-on-surface-variant">{stat.label}</h3>
            <p className="mt-2 text-headline-lg font-bold">{stat.value}</p>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
        {/* Columna principal */}
        <div className="flex flex-col gap-gutter lg:col-span-8">
          {/* Acciones rápidas */}
          <section className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-stack-lg">
            <h2 className="mb-stack-md text-title-lg font-semibold">Acciones Rápidas</h2>
            <div className="grid grid-cols-2 gap-stack-md md:grid-cols-4">
              {quickActions.map((a) => (
                <button
                  key={a.label}
                  type="button"
                  className="group flex flex-col items-center justify-center rounded-xl bg-surface-container-low p-stack-md transition-all hover:bg-primary-container/20"
                >
                  <Icon name={a.icon} className="mb-2 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-center text-label-sm">{a.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Actividad reciente */}
          <section className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-stack-lg">
            <div className="mb-stack-md flex items-center justify-between">
              <h2 className="text-title-lg font-semibold">Actividad Reciente</h2>
              <button type="button" className="text-label-md text-primary hover:underline">
                Ver todo
              </button>
            </div>
            <div className="flex flex-col">
              {recentActivity.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b border-outline-variant/10 py-4 last:border-0"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <div className="flex-1">
                    <p className="text-body-md text-on-surface">{item.title}</p>
                    <p className="text-label-sm text-on-surface-variant">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Columna lateral */}
        <div className="flex flex-col gap-gutter lg:col-span-4">
          {/* Completar perfil */}
          <section className="glass-card rounded-xl border border-outline-variant/20 p-stack-lg shadow-ambient">
            <h2 className="mb-stack-md text-title-lg font-semibold">Perfil del Negocio</h2>
            <div className="flex items-center justify-between text-label-md">
              <span>Completado</span>
              <span className="font-bold text-primary">85%</span>
            </div>
            <div className="my-3 h-3 w-full overflow-hidden rounded-full bg-surface-container">
              <div className="h-full w-[85%] rounded-full bg-primary" />
            </div>
            <p className="text-label-sm leading-relaxed text-on-surface-variant">
              Agrega tus <b>Redes Sociales</b> para llegar al 100% y obtener mayor visibilidad en el mapa.
            </p>
            <button
              type="button"
              className="mt-stack-md w-full rounded-full bg-secondary py-3 font-bold text-on-secondary shadow-md transition-transform hover:scale-[1.02]"
            >
              Editar Perfil
            </button>
          </section>

          {/* Promo destacada */}
          <section className="group relative h-64 overflow-hidden rounded-xl shadow-lg">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-stack-md">
              <span className="mb-2 w-fit rounded-full bg-primary-container px-3 py-1 text-label-sm text-on-primary-container">
                Promo Activa
              </span>
              <h4 className="text-headline-md font-semibold text-white">{featured.title}</h4>
              <p className="text-label-sm text-white/80">{featured.business}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
