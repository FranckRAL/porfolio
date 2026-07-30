import Image from 'next/image';
import { ProjectView} from '@/types';
import { useLocale } from 'next-intl';
import {Suspense} from 'react';

const ProjectCard = ({ project, onClick }: {project: ProjectView, onClick: () => void}) => {
  const locale = useLocale();
  
const title = project.title[locale as keyof typeof project.title] || project.title['en'];

  return (
    <div 
      onClick={onClick}
      className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-4xl border border-primary/10 bg-abyss-900/10 dark:bg-bg-card/60 backdrop-blur-sm transition-all hover:border-primary/40"
    >
      <div className="relative aspect-video overflow-hidden">
        <Suspense fallback={<div className="animate-pulse bg-abyss-800 rounded-2xl h-64 w-full" />}>
        <Image 
          src={project.imageUrl}
          alt={title}
          width={800}
          height={800}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        </Suspense>
        <div className="absolute inset-0 bg-linear-to-t from-abyss-950 via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            {project.category}
          </span>
          <span className="text-[10px] text-text-muted font-mono">{project.year}</span>
        </div>
        
        <h3 className="text-xl font-bold font-title text-text-main group-hover:text-primary transition-colors">
            {title}
        </h3>
        
        {/* Stack */}
        <div className="flex flex-wrap gap-2 pt-2 ">
          {project.stack.slice(0, 4).map((tech) => (
            <p key={tech} className='px-2 py-1.5 rounded-full 
                 border border-primary/30 bg-bg-card/50 backdrop-blur-md
                 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(var(--color-primary),0.3)]
                 transition-all duration-300 disabled:opacity-70 text-text-main text-xs overflow-hidden'>
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;