"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

type Role = "usuario" | "negocio";

export function RegistroForm() {
  const [role, setRole] = useState<Role>("usuario");

  return (
    <div>
      <h1 className="text-headline-lg font-semibold text-on-surface">Crea tu cuenta</h1>
      <p className="mt-2 text-body-md text-on-surface-variant">
        Únete gratis a la comunidad de CiudadConecta.
      </p>

      {/* Selector de rol */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <RoleCard
          active={role === "usuario"}
          onClick={() => setRole("usuario")}
          icon="person"
          title="Soy usuario"
          subtitle="Descubre y ahorra"
        />
        <RoleCard
          active={role === "negocio"}
          onClick={() => setRole("negocio")}
          icon="storefront"
          title="Soy negocio"
          subtitle="Atrae clientes"
        />
      </div>

      {/* Demo: formulario visual. Conectar Clerk para registro real. */}
      <form action={role === "negocio" ? "/negocio" : "/"} className="mt-6 space-y-4">
        <Field
          label={role === "negocio" ? "Nombre del negocio" : "Nombre completo"}
          name="name"
          icon={role === "negocio" ? "storefront" : "person"}
          placeholder={role === "negocio" ? "Café Central" : "Daniel de la Torre"}
        />
        <Field label="Correo electrónico" type="email" name="email" icon="mail" placeholder="tu@correo.com" />
        {role === "negocio" ? (
          <Field label="WhatsApp de contacto" type="tel" name="phone" icon="call" placeholder="+52 998 000 0000" />
        ) : null}
        <Field label="Contraseña" type="password" name="password" icon="lock" placeholder="Mínimo 8 caracteres" />

        <label className="flex items-start gap-2 text-label-md text-on-surface-variant">
          <input type="checkbox" required className="mt-0.5 rounded text-primary focus:ring-primary" />
          <span>
            Acepto los{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Términos
            </a>{" "}
            y la{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Política de privacidad
            </a>
            .
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-md bg-primary py-3.5 text-label-md font-semibold text-on-primary transition-all hover:bg-primary/90 active:scale-[0.99]"
        >
          {role === "negocio" ? "Registrar mi negocio" : "Crear cuenta"}
        </button>
      </form>

      <p className="mt-8 text-center text-body-md text-on-surface-variant">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}

function RoleCard({
  active,
  onClick,
  icon,
  title,
  subtitle,
}: {
  active: boolean;
  onClick: () => void;
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-start gap-1 rounded-xl border p-4 text-left transition-all",
        active
          ? "border-primary bg-primary-container/15 ring-2 ring-primary/30"
          : "border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container"
      )}
    >
      <span
        className={cn(
          "mb-1 flex h-9 w-9 items-center justify-center rounded-lg",
          active ? "bg-primary text-on-primary" : "bg-surface-container-high text-on-surface-variant"
        )}
      >
        <Icon name={icon} filled={active} size={20} />
      </span>
      <span className="text-label-md font-semibold text-on-surface">{title}</span>
      <span className="text-label-sm text-on-surface-variant">{subtitle}</span>
    </button>
  );
}

function Field({
  label,
  icon,
  ...props
}: { label: string; icon: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-label-md font-medium text-on-surface-variant">{label}</span>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-outline">
          <Icon name={icon} size={20} />
        </span>
        <input
          {...props}
          className="h-12 w-full rounded-md border border-outline-variant/40 bg-surface-container-lowest pl-11 pr-4 text-body-md outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
    </label>
  );
}
