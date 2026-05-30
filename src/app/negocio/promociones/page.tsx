import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Gestión de promociones" };

export default function Page() {
  return (
    <ComingSoon
      icon="sell"
      title="Mis Promociones"
      description="Crea, programa y mide el rendimiento de tus cupones y descuentos. El editor de promociones estará disponible al conectar el backend."
    />
  );
}
