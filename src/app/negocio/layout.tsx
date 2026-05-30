import { BusinessSidebar, BusinessBottomNav } from "@/components/BusinessSidebar";

export default function NegocioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-surface">
      <BusinessSidebar />
      <main className="px-container-margin pb-28 pt-6 md:ml-64 md:pb-12">{children}</main>
      <BusinessBottomNav />
    </div>
  );
}
