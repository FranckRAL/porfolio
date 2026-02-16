import { useTranslations } from 'next-intl';
import ServiceList from "@/components/pieces/ServiceList";

const Services = () => {
  const t = useTranslations('Services');

  return (
    <section id="services" className="py-24 bg-bg-page relative overflow-hidden">
      {/* Glow d'arrière-plan thématique */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-title text-text-main">
            {t.rich('title', {
              span: (chunk) => <span className="text-primary italic">{chunk}</span>
            })}
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mt-4" />
          <p className="text-text-muted text-lg leading-relaxed pt-4">
            {t('description')}
          </p>
        </div>

        {/* --- LISTE ANIMÉE --- */}
        <ServiceList  />
      </div>
    </section>
  );
};

export default Services;