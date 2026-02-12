import Image from "next/image";
import {useTranslations} from 'next-intl';

export default function About() {

  const t = useTranslations('About');
  const highlights = [
    { id: 'quality' },
    { id: 'team' },
    { id: 'lead' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-page transition-colors duration-500">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- VISUAL SIDE --- */}
          <div className="w-full md:w-1/2 relative group">
             {/* Décoration : Cercle Abyss en arrière-plan */}
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
            
            {/* Carré décoratif asymétrique */}
           <div className="absolute top-10 -left-6 w-32 h-32 border-2 border-abyss-100/20 rounded-xl rotate-12 group-hover:rotate-0 transition-transform duration-500" />

             <div className="relative z-10 flex justify-center">
              <Image
                src="/images/franck.png"
                 alt="Franck Andritina photo, web developper and software engineer passionated with python and javascript"
                 width={450}
                height={450}
                 className="drop-shadow-2xl animate-float transition-transform duration-500 group-hover:scale-105"
               />
             </div>

             {/* Badge d'expérience flottant */}
             <div className="absolute bottom-10 right-0 bg-bg-card/80 backdrop-blur-lg border border-primary/20 p-4 rounded-2xl shadow-xl z-20">
               <p className="text-primary font-title font-bold text-2xl">{t('years_experience')}</p>
              <p className="text-text-main text-sm">{t('experience_domain')}</p>
             </div>
          </div>

          {/* --- CONTENT SIDE --- */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div className="space-y-2">
              <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
                {t('subtitle')}
              </span>
              <h2 className="font-title text-4xl md:text-6xl font-bold leading-tight">
                {
                  t.rich('title',{
                    em: (chunk) => <em className="text-primary">{chunk}</em>
                  })
                }
              </h2>
            </div>

            <div className="space-y-5 text-text-main/80 text-lg leading-relaxed font-body">
            {
              t.rich('description', {
                strong: (chunk) => <strong className="text-text-main font-semibold">{chunk}</strong>,
                b: (chunk) => <b className="text-text-main font-semibold">{chunk}</b>,
                 em: (chunk) => <em className="text-text-main font-semibold">{chunk}</em>,
                 p: (chunk) => <p>{chunk}</p>
              })
            }
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item) => (
                <div key={item.id} className="p-4 bg-primary/5 border border-primary/10 rounded-xl">
                  <h4 className="text-primary font-bold text-sm mb-1 uppercase tracking-wider">{t(`highlights.${item.id}.label`)}</h4>
                  <p className="text-xs text-text-muted">{t(`highlights.${item.id}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}