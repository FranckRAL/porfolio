import prisma from "@/lib/db";
import ServiceManager from "@/components/admin/ServiceManager";

// Force le rendu dynamique pour refléter les changements instantanément
export const dynamic = "force-dynamic";

export default async function ServicesAdminPage() {
  const servicesBruts = await prisma.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const serializedServices = servicesBruts.map((service) => ({
    ...service,
    createdAt: service.createdAt.toISOString(),
    updatedAt: service.updatedAt.toISOString(),
  }));

  return (
    <div className="p-4 sm:p-8">
      <ServiceManager initialServices={serializedServices} />
    </div>
  );
}