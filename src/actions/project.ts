"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";


export async function createProject(data: {
  title: string;
  description: string;
  category: string;
  techStack: string[];
  imageUrl: string; // On reçoit l'URL directement
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
}) {
  try {
    // Validation simple
    if (!data.imageUrl) throw new Error("Image URL is required");

    const newProject = await prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        category: data.category,
        techStack: data.techStack,
        imageUrl: data.imageUrl,
        githubUrl: data.githubUrl || null,
        liveUrl: data.liveUrl || null,
        isFeatured: data.isFeatured,
      },
    });

    // On rafraîchit les pages pour voir le nouveau projet
    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");

    return { success: true, project: newProject };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: "Failed to sync with the abyss database." };
  }
}


cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Extrait le public_id d'une URL Cloudinary
 * Exemple: https://res.cloudinary.com/demo/image/upload/v1234/portfolio/my_image.jpg 
 * donne "portfolio/my_image"
 */
const getPublicIdFromUrl = (url: string) => {
  const parts = url.split("/");
  const fileNameWithExtension = parts.pop() || "";
  const folder = parts.slice(parts.indexOf("upload") + 2).join("/"); // On récupère le chemin après 'upload/vxxx/'
  const publicId = fileNameWithExtension.split(".")[0];
  return folder ? `${folder}/${publicId}` : publicId;
};

export async function deleteProject(projectId: string) {
  try {
    // 1. Récupérer le projet pour avoir l'URL de l'image
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { imageUrl: true }
    });

    if (project?.imageUrl) {
      const publicId = getPublicIdFromUrl(project.imageUrl);
      // 2. Supprimer de Cloudinary
      await cloudinary.uploader.destroy(publicId);
    }

    // 3. Supprimer de la DB
    await prisma.project.delete({ where: { id: projectId } });

    revalidatePath("/admin/projects");
    return { success: true };
  } catch (error) {
    console.error("Cleanup Error:", error);
    return { success: false, error: "Failed to clear the abyss." };
  }
}

export async function updateProject(projectId: string, data: any) {
  try {
    // Si une nouvelle image est envoyée, on supprime l'ancienne
    if (data.imageUrl) {
      const oldProject = await prisma.project.findUnique({
        where: { id: projectId },
        select: { imageUrl: true }
      });

      if (oldProject && oldProject.imageUrl !== data.imageUrl) {
        const oldPublicId = getPublicIdFromUrl(oldProject.imageUrl);
        await cloudinary.uploader.destroy(oldPublicId);
      }
    }

    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: { ...data },
    });

    revalidatePath("/admin/projects");
    return { success: true, project: updatedProject };
  } catch (error) {
    return { success: false, error: "Update failed." };
  }
}