import prisma from "@/lib/db";
import ProjectManager from "@/components/admin/ProjectManager";
import { ProjectView } from "@/types";
import { Project } from "../../../../../generated/prisma/client";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {

  const rawProjects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  const serializeProject = (project: Project): ProjectView => ({
    id: project.id,
    year: project.year,
    category: project.category,
    role: project.role,
    imageUrl: project.imageUrl,
    stack: project.stack as { slug: string; logoUrl: string }[],
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
    <div className="p-4">
      <ProjectManager initialProjects={projects} />
    </div>
  );
}
