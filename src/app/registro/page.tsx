import type { Metadata } from "next";
import { AuthShell } from "@/components/AuthShell";
import { RegistroForm } from "./RegistroForm";

export const metadata: Metadata = {
  title: "Crear cuenta",
  description: "Regístrate en CiudadConecta como usuario o negocio.",
};

export default function RegistroPage() {
  return (
    <AuthShell>
      <RegistroForm />
    </AuthShell>
  );
}
