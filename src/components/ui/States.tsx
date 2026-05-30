import { Icon } from "../Icon";

export function EmptyState({
  icon = "search_off",
  title,
  description,
  action,
}: {
  icon?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-outline-variant/50 bg-surface-container-low/50 px-6 py-16 text-center">
      <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant">
        <Icon name={icon} size={32} />
      </span>
      <h3 className="text-title-lg font-semibold text-on-surface">{title}</h3>
      {description ? (
        <p className="mt-1 max-w-sm text-body-md text-on-surface-variant">{description}</p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-surface-container-high bg-white">
      <div className="aspect-video w-full animate-pulse bg-surface-container-high" />
      <div className="space-y-3 p-5">
        <div className="h-5 w-2/3 animate-pulse rounded bg-surface-container-high" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-surface-container" />
        <div className="h-4 w-1/3 animate-pulse rounded bg-surface-container" />
      </div>
    </div>
  );
}

export function Spinner() {
  return (
    <div
      role="status"
      aria-label="Cargando"
      className="h-8 w-8 animate-spin rounded-full border-4 border-surface-container-high border-t-primary"
    />
  );
}
