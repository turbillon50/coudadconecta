import type { Metadata } from "next";
import { MobileHeader } from "@/components/MobileHeader";
import { PromocionesClient } from "./PromocionesClient";

export const metadata: Metadata = {
  title: "Promociones y cupones",
  description: "Encuentra los mejores descuentos y cupones de negocios locales en México.",
};

export default function PromocionesPage() {
  return (
    <>
      <MobileHeader title="Promos" />
      <PromocionesClient />
    </>
  );
}
