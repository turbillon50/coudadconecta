import Image from "next/image";
import { Icon } from "./Icon";
import type { CityEvent } from "@/lib/types";

export function EventCard({ event }: { event: CityEvent }) {
  return (
    <article className="group relative aspect-[4/3] overflow-hidden rounded-xl">
      <Image
        src={event.image}
        alt={event.title}
        fill
        sizes="(max-width: 768px) 80vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
        <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-label-sm text-white backdrop-blur-md">
          <Icon name="calendar_today" size={14} /> {event.date}, {event.time}
        </div>
        <h4 className="text-title-lg font-bold text-white">{event.title}</h4>
        <p className="text-label-md text-white/70">{event.venue}</p>
      </div>
    </article>
  );
}
