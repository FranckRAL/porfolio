import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
//import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import ProjectsSection from "@/components/sections/Project";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import prisma from "@/lib/db";
import { ProjectView } from "@/types";
import { Project } from "../../../../generated/prisma/client";
import OceanBackground from "@/components/pieces/OceanBackground";

export default async function Home() {
  const rawProjects = await prisma.project.findMany({
    orderBy: { year: "desc" },
    take: 6,
    where: {isActive: true}
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
    <div className=" min-h-screen">
      <OceanBackground />
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        <Services />
        <ProjectsSection projects={projects} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
