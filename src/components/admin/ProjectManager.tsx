"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ProjectModal from "@/components/admin/ProjectModal";
import { ProjectView } from "@/types";
import ProjectRow from "./ProjectRow";

interface ProjectManagerProps {
  initialProjects: ProjectView[];
}

export default function ProjectManager({
  initialProjects,
}: ProjectManagerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectView | null>(
    null,
  );

  const handleEdit = (project: ProjectView) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-main font-title tracking-tight">
            Project Assets
          </h1>
          <p className="text-text-muted text-xs uppercase tracking-[0.2em] mt-1">
            Portfolio Command Center
          </p>
        </div>
        <button
          onClick={handleCreate}
          className="bg-primary text-white cursor-pointer px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all"
        >
          <FaPlus size={20} /> Deploy New Projects
        </button>
      </div>

      <div className="bg-bg-card border border-primary/10 rounded-3xl overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-abyss-900/50 text-text-muted text-[10px] uppercase tracking-widest font-bold">
            <tr>
              <th className="p-6">Project</th>
              <th className="p-6">Domain</th>
              <th className="p-6">Stack</th>
              <th className="p-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/5">
            {initialProjects.map((project) => (
              <ProjectRow key={project.id} project={project} handleEdit={handleEdit}/>
            ))}
          </tbody>
        </table>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectToEdit={selectedProject}
      />
    </div>
  );
}
