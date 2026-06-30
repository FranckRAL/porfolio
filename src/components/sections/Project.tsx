"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectView } from "@/types/types";
import type { Project } from "@/../../generated/prisma/client";
import ProjectCard from "@/components/pieces/ProjectCard";
import ProjectModal from "@/components/pieces/ProjectModal";
import ProjectFilter from "@/components/pieces/ProjectFilter";
import { useTranslations, useLocale } from "next-intl";
import prisma from "@/lib/db";

const Projects = ({projects}: {projects: ProjectView[]}) => {

  const t = useTranslations("Projects");
  const locale = useLocale();
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectView | null>(
    null,
  );


  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      className="py-24 bg-bg-page relative overflow-hidden"
      id="projects"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
            {t("subtitle")}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-title text-text-main">
            {t.rich("title", {
              em: (chunk) => <em className="text-primary italic">{chunk}</em>,
            })}
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mt-4" />
          <p className="text-text-muted text-lg leading-relaxed pt-4">
            {t("description")}
          </p>
        </div>

        <ProjectFilter filter={filter} setFilter={setFilter} />

        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
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
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
