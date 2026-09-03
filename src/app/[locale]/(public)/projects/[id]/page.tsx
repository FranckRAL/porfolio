import ProjectDetails from "@/components/pieces/ProjectDetails";
import db from "@/lib/db";
import { useLocale } from 'next-intl';
import { serializeProject } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {

  const { id } = await params;


  const rawProject = await db.project.findUnique({
    where: { id },
    // include: {
    //   stack: true,
    // },
  });

  const project = rawProject ? serializeProject(rawProject) : null;

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <h1 className="font-kalam text-3xl">
          Project not found
        </h1>
      </section>
    );
  }

  return (
    <div className="min-h-screen">
      <ProjectDetails
        project={project}
      />
    </div>
  );
}