"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Star, Code, Layers } from "lucide-react";
import ProjectModal from "@/components/admin/ProjectModal";
import { deleteProject } from "@/actions/project";
import Image from "next/image";
import { SerializedProject } from "@/types/types";

interface ProjectManagerProps {
  initialProjects: SerializedProject[];
}

export default function ProjectManager({ initialProjects }: ProjectManagerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<SerializedProject | null>(null);

  const handleEdit = (project: SerializedProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header Section - Stacked on Mobile */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-main font-title tracking-tight">
            Manage Projects
          </h1>
          <p className="text-text-muted text-[10px] sm:text-xs uppercase tracking-widest mt-1">
            Abyss Asset Command
          </p>
        </div>
        <button 
          onClick={handleCreate}
          className="w-full sm:w-auto bg-primary text-abyss-900 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg active:scale-95"
        >
          <Plus size={20} /> Deploy New Asset
        </button>
      </div>

      {initialProjects.length === 0 ? (
        <div className="text-center py-20 bg-bg-card/30 border border-dashed border-abyss-800 rounded-2xl text-text-muted">
          No projects found.
        </div>
      ) : (
        <>
          {/* --- MOBILE VIEW: Cards (Hidden on Desktop) --- */}
          <div className="grid grid-cols-1 gap-4 lg:hidden">
            {initialProjects.map((project) => (
              <div key={project.id} className="bg-bg-card border border-abyss-800 rounded-2xl p-4 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg overflow-hidden border border-abyss-800 shrink-0">
                    <Image src={project.imageUrl} alt="" width={56} height={56} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-text-main font-bold font-title truncate">{project.title}</h3>
                    <p className="text-text-muted text-xs flex items-center gap-1">
                      <Layers size={12} /> {project.category}
                    </p>
                  </div>
                  {project.isFeatured && <Star size={16} className="text-primary fill-primary animate-pulse shrink-0" />}
                </div>
                
                <div className="flex items-center gap-2 text-xs text-text-muted bg-abyss-900/50 p-2 rounded-lg">
                  <Code size={14} className="shrink-0" />
                  <span className="truncate">{project.techStack.join(" • ")}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <button 
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-abyss-800 text-text-main py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold hover:bg-abyss-700 transition-colors"
                  >
                    <Edit2 size={16} /> Edit
                  </button>
                  <button 
                    onClick={async () => { if(confirm("Sink this project?")) await deleteProject(project.id) }}
                    className="flex-1 bg-red-500/10 text-red-500 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold hover:bg-red-500/20 transition-colors"
                  >
                    <Trash2 size={16} /> Sink
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* --- DESKTOP VIEW: Table (Hidden on Mobile) --- */}
          <div className="hidden lg:block bg-bg-card border border-abyss-800 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead className="bg-abyss-900/50 text-text-muted text-[10px] uppercase tracking-widest font-bold">
                <tr>
                  <th className="p-5 border-b border-abyss-800">Asset</th>
                  <th className="p-5 border-b border-abyss-800">Category</th>
                  <th className="p-5 border-b border-abyss-800">Stack</th>
                  <th className="p-5 border-b border-abyss-800 text-center">Status</th>
                  <th className="p-5 border-b border-abyss-800 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-abyss-800">
                {initialProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-primary/5 transition-colors group">
                    <td className="p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-abyss-800 group-hover:border-primary/50 transition-colors">
                        <Image src={project.imageUrl} alt="" width={48} height={48} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-text-main font-semibold font-title italic truncate max-w-[150px]">{project.title}</span>
                    </td>
                    <td className="p-5">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-abyss-800 text-text-muted border border-abyss-700">
                        {project.category}
                      </span>
                    </td>
                    <td className="p-5 text-text-muted text-sm font-mono max-w-[200px] truncate">
                      {project.techStack.join(" • ")}
                    </td>
                    <td className="p-5 text-center">
                      {project.isFeatured && <Star size={18} className="text-primary fill-primary animate-pulse mx-auto" />}
                    </td>
                    <td className="p-5 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => handleEdit(project)} className="p-2 text-text-muted hover:text-primary hover:bg-primary/10 rounded-lg transition-all"><Edit2 size={18} /></button>
                        <button onClick={async () => { if(confirm("Sink this project?")) await deleteProject(project.id) }} className="p-2 text-text-muted hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projectToEdit={selectedProject} 
      />
    </div>
  );
}