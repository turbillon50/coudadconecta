import type { Metadata } from "next";
import { MobileHeader } from "@/components/MobileHeader";
import { ExplorarClient } from "./ExplorarClient";

export const metadata: Metadata = {
  title: "Explorar",
  description: "Explora el directorio de negocios locales de México por categoría.",
};

export default function ExplorarPage() {
  return (
    <>
      <MobileHeader title="Explorar" />
      <ExplorarClient />
    </>
  );
}
