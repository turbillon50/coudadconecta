import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Estadísticas del negocio" };

export default function Page() {
  return (
    <ComingSoon
      icon="analytics"
      title="Estadísticas"
      description="Pronto verás aquí reportes detallados de visitas, conversiones y comportamiento de tus clientes, conectados a tu base de datos."
    />
  );
}
