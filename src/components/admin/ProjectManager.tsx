"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Globe, Github, Star } from "lucide-react";
import ProjectModal from "@/components/admin/ProjectModal";
import { deleteProject } from "@/actions/project";
import Image from "next/image";
import { SerializedProject } from "@/types/types";


// On utilise maintenant ce type pour les props
interface ProjectManagerProps {
  initialProjects: SerializedProject[];
}

export default function ProjectManager({ initialProjects }:  ProjectManagerProps ) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<SerializedProject | null >(null);

  const handleEdit = (project: SerializedProject) => {
    setSelectedProject(project); // On passe les données au modal
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setSelectedProject(null); // On vide pour une création
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white font-title">Manage projects</h1>
        <button 
          onClick={handleCreate}
          className="bg-primary text-black px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <Plus size={20} /> Deploy New Asset
        </button>
      </div>

      {
        initialProjects.length === 0 ? (
          <div className="text-center text-gray-400">
            No projects found. Click &quot;Deploy New Asset&quot; to add your first project.
          </div>
        )
      :
      (
      <div className="bg-bg-card/50 border border-primary/30 rounded-2xl overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-bg-page/80 text-blue-300/50 text-xs uppercase tracking-widest font-bold">
            <tr>
              <th className="p-5">Asset</th>
              <th className="p-5">Category</th>
              <th className="p-5">Technologies</th>
              <th className="p-5">Status</th>
              <th className="p-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-900/10">
            {initialProjects.map((project: SerializedProject) => (
              <tr key={project.id} className="hover:bg-blue-500/5 transition-all group">
                <td className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-blue-900/30">
                    <Image src={project.imageUrl} alt={project.title} width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white font-medium">{project.title}</span>
                </td>
                <td className="p-5 text-gray-400 text-sm">{project.category}</td>
                <td className="p-5 text-gray-400 text-sm">{project.techStack.join(", ")}</td>
                <td className="p-5">
                  {project.isFeatured && <Star size={16} className="text-primary fill-primary animate-pulse" />}
                </td>
                <td className="p-5 text-right">
                  <div className="flex justify-end gap-3">
                    <button onClick={() => handleEdit(project)} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg">
                      <Edit2 size={18} />
                    </button>
                    <button 
                      onClick={async () => { if(confirm("Sink this project?")) await deleteProject(project.id) }} 
                      className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg"
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
      )}

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projectToEdit={selectedProject} 
      />
    </div>
  );
}