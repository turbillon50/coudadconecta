import Link from "next/link";
import { Icon } from "../Icon";

export function ComingSoon({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="animate-fade-in">
      <h1 className="mb-stack-lg text-headline-md font-semibold text-on-surface">{title}</h1>
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-outline-variant/40 bg-surface-container-lowest px-6 py-20 text-center">
        <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-container/30 text-primary">
          <Icon name={icon} size={32} filled />
        </span>
        <h2 className="text-title-lg font-semibold text-on-surface">Módulo en construcción</h2>
        <p className="mt-2 max-w-md text-body-md text-on-surface-variant">{description}</p>
        <Link
          href="/negocio"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-label-md font-semibold text-on-primary"
        >
          <Icon name="arrow_back" size={20} /> Volver al panel
        </Link>
      </div>
    </div>
  );
}
