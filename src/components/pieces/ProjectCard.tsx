import Image from 'next/image';
import { ProjectFromDB } from '@/types/types';
import { useLocale } from 'next-intl';
import {Suspense} from 'react';

const ProjectCard = ({ project, onClick }: {project: ProjectFromDB, onClick: () => void}) => {
  const locale = useLocale();
  
  // Sécurité pour la traduction
  const title = project.title[locale] || project.title['en'];
  console.log(project.imageUrl)

  return (
    <div 
      onClick={onClick}
      className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-4xl border border-primary/10 bg-abyss-900/20 backdrop-blur-sm transition-all hover:border-primary/40"
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
        
        {/* Stack Technique avec Logos du JSON */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.stack.slice(0, 4).map((tech) => (
            <div key={tech.slug} className="relative group/icon">
                <Image 
                    src={tech.logoUrl} 
                    alt={tech.slug} 
                    width={18} 
                    height={18} 
                    className="opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all"
                />
                {/* Tooltip simple au hover */}
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] bg-primary text-abyss-900 px-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity">
                    {tech.slug}
                </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;