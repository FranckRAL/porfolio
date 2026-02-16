"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


interface ProjectData {
  year: string;
  category: string;
  role: string;
  imageUrl: string;
  stack: { slug: string; logoUrl: string }[]; 
  githubUrl?: string;
  liveUrl?: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  features: { fr: string[]; en: string[] };
  challenges?: { fr: string; en: string };
}

export async function createProject(data: ProjectData) {
  try {
    if (!data.imageUrl) throw new Error("Cover image is required");

    const newProject = await prisma.project.create({
      data: {
        year: data.year,
        category: data.category,
        role: data.role,
        imageUrl: data.imageUrl,
        stack: data.stack,           
        githubUrl: data.githubUrl || null,
        liveUrl: data.liveUrl || null,
        title: data.title,           
        description: data.description, 
        features: data.features,     
        challenges: data.challenges || null, 
      },
    });

    revalidatePaths();
    return { success: true, project: newProject };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: "Sync failed with the abyss." };
  }
}

export async function updateProject(projectId: string, data: Partial<ProjectData>) {
  try {
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

    revalidatePaths();
    return { success: true, project: updatedProject };
  } catch (error) {
    console.error("Update Error:", error);
    return { success: false, error: "Update failed in the depths." };
  }
}

export async function deleteProject(projectId: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { imageUrl: true }
    });

    
    if (project?.imageUrl) {
      const publicId = getPublicIdFromUrl(project.imageUrl);
      await cloudinary.uploader.destroy(publicId);
    }

    await prisma.project.delete({ where: { id: projectId } });

    revalidatePaths();
    return { success: true };
  } catch (error) {
    console.error("Delete Error:", error);
    return { success: false, error: "Could not clear the asset." };
  }
}

function revalidatePaths() {
  revalidatePath("/admin/projects");
  revalidatePath("/[locale]/projects", "layout");
  revalidatePath("/");
}


const getPublicIdFromUrl = (url: string) => {
  try {
    const parts = url.split("/");
    const fileNameWithExtension = parts.pop() || "";
    const uploadIndex = parts.indexOf("upload");
    const folder = parts.slice(uploadIndex + 2).join("/"); 
    const publicId = fileNameWithExtension.split(".")[0];
    return folder ? `${folder}/${publicId}` : publicId;
  } catch (e) {
    return "";
  }
};