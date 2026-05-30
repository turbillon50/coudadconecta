import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/AuthShell";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Accede a tu cuenta de CiudadConecta.",
};

export default function LoginPage() {
  return (
    <AuthShell>
      <h1 className="text-headline-lg font-semibold text-on-surface">Bienvenido de nuevo</h1>
      <p className="mt-2 text-body-md text-on-surface-variant">
        Inicia sesión para continuar explorando tu ciudad.
      </p>

      {/* Demo: el formulario es visual. Conectar Clerk para auth real. */}
      <form action="/" className="mt-8 space-y-4">
        <Field label="Correo electrónico" type="email" name="email" placeholder="tu@correo.com" icon="mail" />
        <Field label="Contraseña" type="password" name="password" placeholder="••••••••" icon="lock" />

        <div className="flex items-center justify-between text-label-md">
          <label className="flex items-center gap-2 text-on-surface-variant">
            <input type="checkbox" className="rounded text-primary focus:ring-primary" /> Recordarme
          </label>
          <a href="#" className="font-medium text-primary hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-primary py-3.5 text-label-md font-semibold text-on-primary transition-all hover:bg-primary/90 active:scale-[0.99]"
        >
          Iniciar sesión
        </button>
      </form>

      <Divider />

      <div className="grid grid-cols-2 gap-3">
        <SocialButton icon="google" label="Google" />
        <SocialButton icon="apple" label="Apple" />
      </div>

      <p className="mt-8 text-center text-body-md text-on-surface-variant">
        ¿No tienes cuenta?{" "}
        <Link href="/registro" className="font-semibold text-primary hover:underline">
          Regístrate gratis
        </Link>
      </p>
    </AuthShell>
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

function Divider() {
  return (
    <div className="my-6 flex items-center gap-4">
      <span className="h-px flex-1 bg-outline-variant/40" />
      <span className="text-label-sm text-on-surface-variant">o continúa con</span>
      <span className="h-px flex-1 bg-outline-variant/40" />
    </div>
  );
}

function SocialButton({ icon, label }: { icon: string; label: string }) {
  // marcadores visuales — Material no tiene logos de marca, usamos texto.
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-md border border-outline-variant/40 bg-surface-container-lowest py-3 text-label-md font-medium text-on-surface transition-colors hover:bg-surface-container"
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
        {label[0]}
      </span>
      {label}
    </button>
  );
}
