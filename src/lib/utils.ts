import { Project } from "@/../../generated/prisma/client";
import { ProjectView } from "@/types";

export const serializeProject = (project: Project): ProjectView => ({
  id: project.id,
  year: project.year,
  category: project.category,
  role: project.role,
  imageUrl: project.imageUrl,
  stack: project.stack,
  liveUrl: project.liveUrl ?? null,
  githubUrl: project.githubUrl ?? null,
  title: project.title as Record<string, string>,
  description: project.description as Record<string, string>,
  features: project.features as Record<string, string[]>,
  challenges: project.challenges
    ? (project.challenges as Record<string, string>)
    : null,
  createdAt: project.createdAt.toISOString(),
  updatedAt: project.updatedAt.toISOString(),
});
