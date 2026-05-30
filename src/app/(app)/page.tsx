import Image from "next/image";
import { MobileHeader } from "@/components/MobileHeader";
import { SearchBar } from "@/components/SearchBar";
import { CategoryScroller } from "@/components/CategoryScroller";
import { SectionHeader } from "@/components/SectionHeader";
import { BusinessCard } from "@/components/BusinessCard";
import { PromoCard } from "@/components/PromoCard";
import { EventCard } from "@/components/EventCard";
import { businesses, events, promotions } from "@/lib/data";

export default function HomePage() {
  const trending = businesses.filter((b) => b.trending);
  const nearbyPromos = promotions.slice(0, 4);

  return (
    <>
      <MobileHeader />

      <div className="space-y-stack-lg px-container-margin">
        <SearchBar />

        {/* Hero */}
        <section className="group relative h-48 w-full overflow-hidden rounded-xl shadow-lg md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&w=1400&q=70"
            alt="Vista del Caribe en Cancún"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-6">
            <h2 className="mb-1 text-headline-md font-semibold text-white md:text-headline-lg">
              Descubre lo mejor de tu ciudad
            </h2>
            <p className="text-label-md text-white/80">Explora destinos locales únicos en Cancún</p>
          </div>
        </section>
      </div>

      {/* Categorías */}
      <section className="mt-stack-lg">
        <SectionHeader title="Categorías" action="Ver todas" className="px-container-margin" />
        <CategoryScroller />
      </section>

      {/* Promociones cerca de ti */}
      <section className="mt-stack-lg">
        <SectionHeader title="Promociones cerca de ti" action="Ver ofertas" className="px-container-margin" />
        <div className="no-scrollbar flex gap-4 overflow-x-auto px-container-margin pb-2">
          {nearbyPromos.map((promo) => (
            <div key={promo.id} className="w-72 shrink-0">
              <PromoCard promo={promo} />
            </div>
          ))}
        </div>
      </section>

      {/* Lugares Tendencia */}
      <section className="mt-stack-lg px-container-margin">
        <SectionHeader title="Lugares Tendencia" action="Explorar" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trending.map((b) => (
            <BusinessCard key={b.id} business={b} />
          ))}
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="mt-stack-lg">
        <SectionHeader title="Próximos Eventos" action="Ver calendario" className="px-container-margin" />
        <div className="no-scrollbar flex gap-4 overflow-x-auto px-container-margin pb-2">
          {events.map((event) => (
            <div key={event.id} className="w-80 shrink-0">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
