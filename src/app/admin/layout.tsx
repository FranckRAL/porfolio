import type { Metadata } from "next";
import SideBar from "@/components/admin/SideBar";

export const metadata: Metadata = {
  title: {
    template: "%s | Abyss Admin",
    default: "Dashboard | Abyss Admin",
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-bg-page text-text-main">
      <SideBar />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}