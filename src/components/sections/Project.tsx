"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { projects } from "@/constants/constants";
import ProjectCard from "@/components/pieces/ProjectCard";
import ProjectModal from "@/components/pieces/ProjectModal";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ["All", "Web App", "Mobile App", "Desktop App"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-bg-page relative overflow-hidden" id="projects">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-6">
        
        {/* --- CENTERED HEADER SECTION --- */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-title text-text-main">
            Proven <span className="text-primary italic">Solutions</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mt-4" />
          <p className="text-text-muted text-lg leading-relaxed pt-4">
            A showcase of my recent projects, spanning from complex web architectures 
            to intuitive mobile experiences. Each one is a balance of code quality and user impact.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full border text-sm font-bold transition-all duration-300 ${
                filter === cat 
                ? "bg-primary border-primary text-white shadow-xl shadow-primary/30 scale-105" 
                : "border-primary/10 text-text-muted hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Grid with Animation */}
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

      {/* Detail Modal */}
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