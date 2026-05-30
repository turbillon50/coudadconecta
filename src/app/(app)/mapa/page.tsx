import type { Metadata } from "next";
import { MobileHeader } from "@/components/MobileHeader";
import { MapaClient } from "./MapaClient";

export const metadata: Metadata = {
  title: "Mapa interactivo",
  description: "Explora negocios, promociones y eventos de México en el mapa interactivo.",
};

export default function MapaPage() {
  return (
    <>
      <MobileHeader title="Mapa" />
      <MapaClient />
    </>
  );
}
