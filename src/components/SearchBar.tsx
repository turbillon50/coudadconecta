import { Icon } from "./Icon";

export function SearchBar({ placeholder = "¿Qué estás buscando?" }: { placeholder?: string }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
        <Icon name="search" className="text-outline" />
      </div>
      <input
        type="search"
        placeholder={placeholder}
        className="h-14 w-full rounded-xl border-none bg-surface-container-low pl-12 pr-4 text-body-md shadow-inner transition-all focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
