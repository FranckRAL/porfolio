import {SerializedService} from "@/types/types";
import prisma from "@/lib/db";
import  IconRenderer  from "@/components/pieces/IconRenderer";

const Services = async () => {
  const rawServices = await prisma.service.findMany();
  const services: SerializedService[]  = rawServices.map(service => ({
    ...service,
    createdAt: service.createdAt.toISOString(),
    updatedAt: service.updatedAt.toISOString(),
  }));

  return (
    <section id="services" className="py-24 bg-bg-page relative overflow-hidden">
      {/* Subtle background glow to enhance centering */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        
        {/* --- CENTERED HEADER SECTION --- */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
            Specialized Solutions
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-title text-text-main">
            Crafting Digital <span className="text-primary italic">Excellence</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mt-4" /> {/* Small accent line */}
          <p className="text-text-muted text-lg leading-relaxed pt-4">
            Beyond just writing code, I build scalable digital ecosystems. 
            From architecting robust backends to designing immersive user experiences, 
            I focus on delivering high-performance solutions tailored to your unique vision.
          </p>
        </div>
        {/* ------------------------------- */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div 
                key={index} 
                className="group p-8 rounded-4xl bg-abyss-900/10 border border-primary/5 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
                  <IconRenderer name={service.icon} className="w-6 h-6 drop-shadow-[0_0_8px_rgba(var(--color-primary),0.5)]" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;