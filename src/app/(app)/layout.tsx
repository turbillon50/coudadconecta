import { DesktopNav } from "@/components/DesktopNav";
import { BottomNav } from "@/components/BottomNav";

/** Shell de la app de consumidor: nav desktop arriba, bottom nav en mobile. */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <DesktopNav />
      <main className="mx-auto max-w-7xl pb-28 pt-20 md:pb-12 md:pt-8">{children}</main>
      <BottomNav />
    </div>
  );
}
