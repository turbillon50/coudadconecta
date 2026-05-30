import { Icon } from "./Icon";
import { CITY } from "@/lib/data";

interface MobileHeaderProps {
  title?: string;
}

/** AppBar superior translúcido para vistas mobile. */
export function MobileHeader({ title = CITY }: MobileHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-surface/70 shadow-sm backdrop-blur-xl md:hidden">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-container-margin py-stack-md">
        <div className="flex items-center gap-2">
          <Icon name="location_on" className="text-primary" filled />
          <h1 className="text-title-lg font-bold text-primary">{title}</h1>
        </div>
        <button
          type="button"
          aria-label="Filtros"
          className="flex items-center justify-center rounded-full p-2 text-on-surface-variant transition-colors active:opacity-80 hover:bg-surface-container-high"
        >
          <Icon name="tune" />
        </button>
      </div>
    </header>
  );
}
