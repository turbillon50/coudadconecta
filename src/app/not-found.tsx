import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-background px-container-margin text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-container/30 text-primary">
        <Icon name="explore_off" size={40} filled />
      </span>
      <h1 className="mt-6 text-display-md font-bold text-on-surface">404</h1>
      <p className="mt-2 max-w-sm text-body-lg text-on-surface-variant">
        No encontramos esta página. Quizás el lugar que buscas se mudó.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-label-md font-semibold text-on-primary transition-all hover:bg-primary/90"
      >
        <Icon name="home" size={20} /> Volver al inicio
      </Link>
    </main>
  );
}
