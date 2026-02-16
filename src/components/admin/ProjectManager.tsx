"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import ProjectModal from "@/components/admin/ProjectModal";
import { deleteProject } from "@/actions/project";
import Image from "next/image";
import { ProjectFromDB } from "@/types/types";

interface ProjectManagerProps {
  initialProjects: ProjectFromDB[];
}

export default function ProjectManager({ initialProjects }: ProjectManagerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectFromDB | null>(null);

  const handleEdit = (project: ProjectFromDB) => {
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
          <h1 className="text-3xl font-bold text-text-main font-title tracking-tight">Project Assets</h1>
          <p className="text-text-muted text-xs uppercase tracking-[0.2em] mt-1">Abyss Command Center</p>
        </div>
        <button 
          onClick={handleCreate}
          className="bg-primary text-abyss-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all"
        >
          <Plus size={20} /> Deploy New Vessel
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
              <tr key={project.id} className="hover:bg-primary/5 transition-colors group">
                <td className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-primary/10 relative">
                    <Image src={project.imageUrl} alt="" fill className="object-cover" />
                  </div>
                  <div>
                    {/* Fallback auto sur EN car l'admin n'est pas localisée */}
                    <p className="text-text-main font-bold font-title italic">
                      {project.title['en'] || project.title['fr']}
                    </p>
                    <p className="text-[10px] text-text-muted font-mono uppercase">{project.year}</p>
                  </div>
                </td>
                <td className="p-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
                    {project.category}
                  </span>
                </td>
                <td className="p-6">
                  <div className="flex gap-2">
                    {project.stack.slice(0, 3).map(s => (
                      <span key={s.slug} className="text-[10px] text-text-muted bg-abyss-800 px-2 py-0.5 rounded border border-white/5">
                        {s.slug}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-6 text-right">
                  <div className="flex justify-end gap-3">
                    <button onClick={() => handleEdit(project)} className="p-2 text-text-muted hover:text-primary transition-colors"><Edit2 size={18} /></button>
                    <button 
                      onClick={async () => { if(confirm("Sink this project?")) await deleteProject(project.id) }} 
                      className="p-2 text-text-muted hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
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