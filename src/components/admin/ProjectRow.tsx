import { useState } from "react";
import { ProjectView } from "@/types";
import { FaEdit, FaTrash } from "react-icons/fa";
import Image from "next/image";
import ToggleButton from "../pieces/ToggleButton";
import { deleteProject, updateProject } from "@/actions/project";

const ProjectRow = ({
  project,
  handleEdit,
}: {
  project: ProjectView;
  handleEdit: (project: ProjectView) => void;
}) => {
  const [isActive, setIsActive] = useState(project.isActive || false);

  const handleActiveStateToggle = async (newState: boolean) => {
    const previousState = isActive;

    setIsActive(newState);

    try {
      await updateProject(project.id, {
        isActive: newState,
      });
    } catch (error) {
      setIsActive(previousState);
      console.error(error);
    }
  };

  return (
    <tr key={project.id} className="hover:bg-primary/5 transition-colors group">
      <td className="p-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl overflow-hidden border border-primary/10 relative">
          <Image src={project.imageUrl} alt="" fill className="object-cover" />
        </div>
        <div>
          <p className="text-text-main font-bold font-title italic">
            {project.title["en"] || project.title["fr"]}
          </p>
          <p className="text-[10px] text-text-muted font-mono uppercase">
            {project.year}
          </p>
        </div>
      </td>
      <td className="p-6">
        <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
          {project.category}
        </span>
      </td>
      <td className="p-6">
        <div className="flex gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] text-text-muted bg-bg-card px-2 py-0.5 rounded border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </td>
      <td className="p-6 text-right">
        <div className="flex justify-end gap-3 items-center">
          <ToggleButton checked={isActive} onChange={handleActiveStateToggle} />

          <button
            onClick={() => handleEdit(project)}
            className="p-2 text-text-muted hover:text-primary transition-colors"
          >
            <FaEdit size={18} />
          </button>
          <button
            onClick={async () => {
              if (confirm("Delete this project?"))
                await deleteProject(project.id);
            }}
            className="p-2 text-text-muted hover:text-red-500 transition-colors"
          >
            <FaTrash size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProjectRow;
