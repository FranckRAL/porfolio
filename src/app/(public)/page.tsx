import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import ProjectsSection from "@/components/sections/Project"; // Renommé pour plus de clarté
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import prisma from '@/lib/db';
import { SerializedProject } from '@/types/types';

export default async function Home() {
    
    const rawProjects = await prisma.project.findMany({
        orderBy: { createdAt: 'desc' }
    });

    const projects: SerializedProject[] = rawProjects.map((project) => ({
        ...project,
        createdAt: project.createdAt.toISOString(),
        updatedAt: project.updatedAt.toISOString(),
        githubUrl: project.githubUrl || undefined,
        liveUrl: project.liveUrl || undefined,
    }));

    return (
        <div className="bg-bg-page min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <ProjectsSection projects={projects} />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}