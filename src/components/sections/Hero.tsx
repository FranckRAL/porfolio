import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24 bg-bg-page/50 "
      id="hero"
    >
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-abyss-700/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* --- CONTENT (LEFT) --- */}
          <div className="flex-1 mb-10 lg:mb-0 text-center lg:text-left z-10">
            <h1 className="font-title text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-balance">
              {t("person")}{" "}
              <span className="text-primary drop-shadow-sm">Franck</span>
              <span className="text-text-main"> Andritina</span>
            </h1>

            <p className="text-base md:text-lg text-text-muted mb-10 max-w-xl leading-relaxed font-body">
              {t.rich("subtitle", {
                em: (chunks) => (
                  <em className="text-text-main font-semibold">{chunks}</em>
                ),
              })}
            </p>

            <div className="flex flex-col md:flex-row md:justify-center md:gap-8 lg:justify-start items-center gap-6">
              <Link
                href="#projects"
                className="w-3/4 md:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold text-base hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 text-center"
              >
                {t("cta_projects")}
              </Link>
              <Link 
              href="#contact"
              className="group flex items-center gap-2 text-bases text-text-main font-bold hover:text-primary transition-colors py-2">
                <span>{t('contact_cta')}</span>
                  <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>
          </div>

          <div className="relative flex-1 w-full max-w-125 ">

            {/* Geometric Decors */}
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-primary/20 rounded-3xl rotate-12 -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 border border-abyss-500/30 rounded-4xl -rotate-12 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full -z-20" />

            {/* Main Image Container */}
            <div className="relative z-10 group rounded-[2.5rem] overflow-hidden border border-primary/10 bg-linear-to-br from-abyss-800/20 to-abyss-900/40 dark:border-primary/30 dark:from-abyss-800/40 dark:to-abyss-900/60 pt-10  backdrop-blur-sm">
              <Image
                src="/images/franck_andritina_web_developpeur.webp"
                alt="Franck Andritina"
                width={400}
                height={400}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 animate-float"
              />
            </div>

            {/* Stats */}
            <div className="absolute -bottom-8 -left-4 -right-4 flex justify-center items-start  z-20 bg-bg-card/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-primary/20 animate-bounce-slow">
              <div className="flex flex-col items-center justify-center border-e border-e-primary/50 px-4">
                <p className="text-2xl font-bold text-primary font-title text-center">
                  5+
                </p>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60 text-center">
                  {t("stat_success_projects")}
                </p>
              </div>
              <div className=" flex flex-col items-center justify-center  px-4">
                <p className="text-2xl font-bold text-primary font-title text-center">
                  10+
                </p>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60 text-center">
                  {t('stat_technologies')}
                </p>
              </div>
              <div className=" flex flex-col items-center justify-center border-s border-s-primary/50 px-4">
                <p className="text-2xl font-bold text-primary font-title text-center">
                  2+ 
                </p>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60 text-center">
                  {t('stat_year_of_experience')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
