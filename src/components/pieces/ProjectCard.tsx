import Image from 'next/image';
import {Project} from '@/types/types';

const ProjectCard = ({ project, onClick }: {project: Project, onClick: () => void}) => {
  return (
    <div 
      onClick={onClick}
      className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-4xl border border-primary/10 bg-abyss-900/20 backdrop-blur-sm transition-all hover:border-primary/40"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image 
          src={project.thumbnail} 
          alt={project.title}
          width={800}
          height={800}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-abyss-950 via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 space-y-3">
        <span className="text-xs font-mono text-primary uppercase tracking-widest">
          {project.category}
        </span>
        <h3 className="text-xl font-bold font-title text-text-main">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="text-[10px] bg-primary/10 px-2 py-0.5 rounded text-primary">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;