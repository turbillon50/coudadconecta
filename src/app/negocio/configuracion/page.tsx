import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Configuración" };

export default function Page() {
  return (
    <ComingSoon
      icon="settings"
      title="Configuración"
      description="Administra tu plan de suscripción, métodos de pago (Mercado Pago / Stripe), equipo y preferencias de notificaciones."
    />
  );
}
