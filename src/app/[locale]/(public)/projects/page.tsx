import ProjectsSection from "@/components/sections/Project";
import prisma from "@/lib/db";
import { ProjectView } from "@/types";
import {Project } from "../../../../../generated/prisma/client";


const page = async () => {
    const rawProjects = await prisma.project.findMany({
    orderBy: { year: "desc" },
    take: 6,
    where: { isActive: true },
  });

  const serializeProject = (project: Project): ProjectView => ({
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

  const projects: ProjectView[] = rawProjects.map(serializeProject);

  return (
    <>
    <ProjectsSection projects={projects} />

    </>
  )
}

export default page