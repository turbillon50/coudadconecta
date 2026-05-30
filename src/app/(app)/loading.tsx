import { CardSkeleton } from "@/components/ui/States";

export default function Loading() {
  return (
    <div className="px-container-margin pt-20 md:pt-4">
      <div className="mb-stack-lg h-14 w-full animate-pulse rounded-xl bg-surface-container-high" />
      <div className="mb-stack-lg h-48 w-full animate-pulse rounded-xl bg-surface-container-high md:h-80" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
