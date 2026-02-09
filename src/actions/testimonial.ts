"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createTestimonial(data: {
    name: string;
    role: string;
    content: string;
    avatarUrl: string | null;
    company: string | null;
    rating: number;
}){
    try{
        const newTestimonial = await prisma.testimonial.create({
            data: {
                name: data.name,
                role: data.role,
                content: data.content,
                avatarUrl: data.avatarUrl,
                company: data.company,
                rating: data.rating,
            }
        });
        revalidatePath("/admin/testimonials");
        return { success: true, testimonial: newTestimonial };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, error: "Failed to sync with the abyss database." };
    }
}

export async function deleteTestimonial(testimonialId: string) {
    try {
        await prisma.testimonial.delete({ where: { id: testimonialId } });
        revalidatePath("/admin/testimonials");
        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, error: "Failed to sync with the abyss database." };
    }
}

export async function updateTestimonial(testimonialId: string, data: any){
    try {
        const updatedTestimonial = await prisma.testimonial.update({
            where: { id: testimonialId },
            data: { ...data },
    });
        revalidatePath("/admin/testimonials");
        return { success: true, testimonial: updatedTestimonial };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, error: "Failed to sync with the abyss database." };
    }
}