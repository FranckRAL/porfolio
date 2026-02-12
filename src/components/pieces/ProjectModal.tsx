import Image from 'next/image';
import Link from 'next/link'
import {SerializedProject} from '@/types/types';
import {useTranslations} from 'next-intl';
import { XCircleIcon } from 'lucide-react';

const ProjectModal = ({ project, onClose }: {project: SerializedProject, onClose: () => void}) => {

  const t = useTranslations('Projects');
  const features = ['Feature 1', 'Feature 2', 'Feature 3']

  return (
    <div className={`fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg-page/90 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-bg-page border border-primary/20 rounded-[3rem] shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-text-muted hover:text-primary"><XCircleIcon size={24} /></button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12">
          <Image src={project.imageUrl} className="rounded-2xl w-full sticky top-0" alt={project.title} width={400} height={400}/>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold font-title text-primary">{project.title}</h2>
            <p className="text-text-muted leading-relaxed">{project.description}</p>
            
            <div>
              <h4 className="font-bold mb-3">{t('features_title')}</h4>
              <ul className="list-disc list-inside text-text-muted space-y-1">
                {features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>

            <div className="flex gap-4 pt-6">
              {
                project.liveUrl && <Link href={project.liveUrl} className="bg-primary text-white px-8 py-3 rounded-full font-bold">Live Demo</Link>
              }
              {
                project.githubUrl && <Link href={project.githubUrl} className="border border-primary/20 px-8 py-3 rounded-full font-bold hover:bg-primary/10">Code</Link>
              }
              {
                !project.liveUrl && !project.githubUrl && <Link href="#contact" className="bg-primary text-white px-8 py-3 rounded-full font-bold">{t('cta_contact')}</Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;