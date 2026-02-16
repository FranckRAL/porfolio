import Image from 'next/image';
import Link from 'next/link';
import { ProjectFromDB } from '@/types/types';
import { useTranslations, useLocale } from 'next-intl';
import { XCircleIcon, ExternalLink, Github, ChevronRight } from 'lucide-react';

const ProjectModal = ({ project, onClose }: { project: ProjectFromDB, onClose: () => void }) => {
  const t = useTranslations('Projects');
  const locale = useLocale() as 'fr' | 'en';

  // Extraction sécurisée des données JSON selon la locale
  const title = project.title[locale] || project.title['en'];
  const description = project.description[locale] || project.description['en'];
  const features = project.features[locale] || project.features['en'] || [];
  const challenge = project.challenges ? (project.challenges[locale] || project.challenges['en']) : null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10">
      {/* Backdrop Abyss avec flou profond */}
      <div className="absolute inset-0 bg-abyss-950/90 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-bg-page border border-primary/20 rounded-[2.5rem] shadow-2xl shadow-primary/10 animate-in zoom-in-95 duration-300">
        
        {/* Bouton Fermer flottant */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-10 text-text-muted hover:text-primary transition-colors bg-bg-page/50 p-1 rounded-full backdrop-blur-md"
        >
          <XCircleIcon size={32} />
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-12">
          
          {/* --- COLONNE GAUCHE : VISUELS --- */}
          <div className="space-y-6">
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-3xl border border-primary/10">
              <Image 
                src={project.imageUrl} 
                className="object-cover" 
                alt={title} 
                fill
                priority
              />
            </div>
            
            {/* Affichage de la Stack complète dans le modal */}
            <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10">
              <h4 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-4">
                {project.stack.map((tech) => (
                  <div key={tech.slug} className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-abyss-900 rounded-xl border border-primary/20 group-hover:border-primary transition-colors">
                      <Image src={tech.logoUrl} alt={tech.slug} width={24} height={24} className="grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <span className="text-[10px] text-text-muted group-hover:text-primary">{tech.slug}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- COLONNE DROITE : CONTENU --- */}
          <div className="space-y-8 py-2">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                  {project.category}
                </span>
                <span className="text-text-muted font-mono text-sm">{project.year}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-title text-text-main">{title}</h2>
              <p className="text-sm text-primary/60 font-medium mt-1">{project.role}</p>
            </div>

            <p className="text-text-muted leading-relaxed text-lg italic">
              &apos;{description}&apos;
            </p>

            {/* Features (Depuis JSON) */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-text-main flex items-center gap-2">
                <ChevronRight className="text-primary" size={20} />
                {t('features_title')}
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-muted bg-primary/5 p-3 rounded-xl border border-primary/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenge technique (Optionnel) */}
            {challenge && (
              <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-3xl">
                <h4 className="text-sm font-bold text-orange-400 uppercase mb-2">Technical Challenge</h4>
                <p className="text-sm text-text-muted leading-relaxed">{challenge}</p>
              </div>
            )}

            {/* Actions / Liens */}
            <div className="flex flex-wrap gap-4 pt-6">
              {project.liveUrl && (
                <Link 
                  href={project.liveUrl} 
                  target="_blank"
                  className="flex items-center gap-2 bg-primary text-abyss-950 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </Link>
              )}
              {project.githubUrl && (
                <Link 
                  href={project.githubUrl} 
                  target="_blank"
                  className="flex items-center gap-2 border border-primary/20 bg-primary/5 text-text-main px-8 py-4 rounded-2xl font-bold hover:bg-primary/10 transition-all"
                >
                  <Github size={18} />
                  Source Code
                </Link>
              )}
              {!project.liveUrl && !project.githubUrl && (
                <Link href="#contact" onClick={onClose} className="bg-primary text-abyss-950 px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity">
                  {t('cta_contact')}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;