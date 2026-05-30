"use client";

import { useEffect } from "react";
import { Icon } from "@/components/Icon";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // En producción: enviar a un servicio de observabilidad (Sentry, etc.)
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-background px-container-margin text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-error-container text-on-error-container">
        <Icon name="error" size={40} filled />
      </span>
      <h1 className="mt-6 text-headline-lg font-semibold text-on-surface">Algo salió mal</h1>
      <p className="mt-2 max-w-sm text-body-md text-on-surface-variant">
        Tuvimos un problema al cargar esta sección. Inténtalo de nuevo.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-label-md font-semibold text-on-primary transition-all hover:bg-primary/90"
      >
        <Icon name="refresh" size={20} /> Reintentar
      </button>
    </main>
  );
}
