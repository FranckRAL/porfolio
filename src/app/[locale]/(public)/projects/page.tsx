import ProjectsSection from "@/components/sections/Project";
import prisma from "@/lib/db";
import { ProjectView } from "@/types";
import {serializeProject} from "@/lib/utils";


const page = async () => {
    const rawProjects = await prisma.project.findMany({
    orderBy: { year: "desc" },
    take: 3,
    where: { isActive: true },
  });


  const projects: ProjectView[] = rawProjects.map(serializeProject);

  return (
    <>
    <ProjectsSection projects={projects} />

    </>
  )
}

export default page