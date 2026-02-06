"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createService(data: {
    title: string;
    description: string;
    icon: string;
}) {
    try {
        const newService = await prisma.service.create({
            data: {
                title: data.title,
                description: data.description,
                icon: data.icon,
            },
        });
        revalidatePath("/admin/services");
        return { success: true, service: newService };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, error: "Failed to sync with the abyss database." };
    }
}

export async function deleteService(serviceId: string) {
    try {
        await prisma.service.delete({
            where: { id: serviceId },
        });
        revalidatePath("/admin/services");
        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, error: "Failed to sync with the abyss database." };
    }
}

export async function updateService(serviceId: string, data: any) {
    try {
        const updatedService = await prisma.service.update({
            where: { id: serviceId },
            data: data,
        });
        revalidatePath("/admin/services");
        return { success: true, service: updatedService };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, error: "Failed to sync with the abyss database." };
    }
}