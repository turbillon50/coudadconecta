import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Perfil del negocio" };

export default function Page() {
  return (
    <ComingSoon
      icon="storefront"
      title="Perfil del Negocio"
      description="Edita la información pública de tu negocio: fotos, horarios, contacto de WhatsApp, ubicación en el mapa y redes sociales."
    />
  );
}
