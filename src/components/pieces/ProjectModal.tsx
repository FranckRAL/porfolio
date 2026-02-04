import Image from 'next/image';
import {Project} from '@/types/types';

const ProjectModal = ({ project, onClose }: {project: Project, onClose: () => void}) => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg-page/90 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-abyss-900 border border-primary/20 rounded-[3rem] shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-text-muted hover:text-primary">Close ✕</button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12">
          <Image src={project.thumbnail} className="rounded-2xl w-full sticky top-0" alt={project.title} width={400} height={400}/>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold font-title text-primary">{project.title}</h2>
            <p className="text-text-muted leading-relaxed">{project.longDescription}</p>
            
            <div>
              <h4 className="font-bold mb-3">Core Features</h4>
              <ul className="list-disc list-inside text-text-muted space-y-1">
                {project.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>

            <div className="flex gap-4 pt-6">
              <a href={project.link} className="bg-primary text-white px-8 py-3 rounded-full font-bold">Live Demo</a>
              <a href={project.github} className="border border-primary/20 px-8 py-3 rounded-full font-bold hover:bg-primary/10">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;