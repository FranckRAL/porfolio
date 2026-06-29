import MessageManager from "@/components/admin/MessageManager";
import  prisma  from "@/lib/db";
import { Mail } from "lucide-react";


export const metadata = {
  title: "Messages ",
};

export default async function MessagesPage() {

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col gap-8 p-8">
      <header className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
          <Mail className="text-primary" size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-text-main font-title">
            Signal Intelligence
          </h1>
          <p className="text-text-muted">Gérez les communications reçues depuis l&apos;abysse.</p>
        </div>
      </header>

      <MessageManager initialMessages={messages} />
    </div>
  );
}