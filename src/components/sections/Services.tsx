import { useTranslations } from 'next-intl';
import ServiceList from "@/components/pieces/ServiceList";
import SectionTitle from '../pieces/SectionTitle';

const Services = () => {
  const t = useTranslations('Services');

  return (
    <section id="services" className="py-20  relative overflow-hidden">
      {/* Glow d'arrière-plan thématique */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-primary/5 blur-[120px] rounded-full -z-10" /> */}

      <div className="container mx-auto px-6">
        {/* --- HEADER --- */}
        <SectionTitle translationContext="Services" />
        
        <ServiceList  />

      </div>
    </section>
  );
};

export default Services;