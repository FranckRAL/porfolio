"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectView } from "@/types";
import ProjectCard from "@/components/pieces/ProjectCard";
import { useTranslations } from "next-intl";
import SectionTitle from "../pieces/SectionTitle";
import Link from "next/link";

const Projects = ({projects}: {projects: ProjectView[]}) => {

  const t = useTranslations("Projects");
  


  return (
    <section
      className="pt-20 pb-30  relative overflow-hidden"
      id="projects"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-6">

        <SectionTitle translationContext="Projects" />

        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  project={project}
                />
                
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <p className="flex justify-center items-center mt-8">
          <Link href="/projects" className="inline-block  py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/80 transition duration-300">
        {t("view_all_projects")}
        </Link>
        </p>
      </div>
    </section>
  );
};

export default Projects;
