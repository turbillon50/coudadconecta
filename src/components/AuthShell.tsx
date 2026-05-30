import Link from "next/link";
import { Icon } from "./Icon";

/** Layout dividido para autenticación: panel de marca + formulario. */
export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      {/* Panel de marca */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-primary to-on-primary-container p-12 text-on-primary lg:flex">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #61f9e9 0, transparent 40%), radial-gradient(circle at 80% 70%, #40e0d0 0, transparent 45%)",
          }}
        />
        <Link href="/" className="relative flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
            <Icon name="location_on" filled />
          </span>
          <span className="text-title-lg font-bold">CiudadConecta</span>
        </Link>

        <div className="relative max-w-md">
          <h2 className="text-display-md font-bold leading-tight">Tu ciudad, conectada.</h2>
          <p className="mt-4 text-body-lg text-on-primary/80">
            Descubre los mejores negocios, promociones y eventos locales. Todo en un solo lugar, como un
            concierge digital en tu bolsillo.
          </p>
          <div className="mt-8 flex gap-6">
            <Stat value="1,200+" label="Negocios" />
            <Stat value="350+" label="Promociones" />
            <Stat value="50k+" label="Usuarios" />
          </div>
        </div>

        <p className="relative text-label-sm text-on-primary/60">© 2026 CiudadConecta · Cancún, México</p>
      </div>

      {/* Formulario */}
      <div className="flex items-center justify-center bg-background px-container-margin py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-8 flex items-center gap-2 lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-on-primary">
              <Icon name="location_on" filled />
            </span>
            <span className="text-title-lg font-bold text-primary">CiudadConecta</span>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-headline-md font-bold">{value}</p>
      <p className="text-label-sm text-on-primary/70">{label}</p>
    </div>
  );
}
