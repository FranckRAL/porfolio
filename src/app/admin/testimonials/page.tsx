import prisma from "@/lib/db";
import TestimonialManager from "@/components/admin/TestimonialManager";

export const dynamic = "force-dynamic";

export default async function TestimonialsAdminPage() {
  const testimonialsBruts = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

  const serializedTestimonials = testimonialsBruts.map((t) => ({
    ...t,
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
  }));

  return (
    <div className="p-4 sm:p-8">
      <TestimonialManager initialTestimonials={serializedTestimonials} />
    </div>
  );
}