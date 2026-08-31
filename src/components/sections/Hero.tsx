import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import maskImg from "@/../public/images/mask_img.png";
import heroImg from "@/../public/images/franck_andritina_web_developpeur.webp";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24  "
      id="hero"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* --- CONTENT (LEFT) --- */}
          <div className="flex-1 mb-10 lg:mb-0 text-center lg:text-left z-10">
            <p className="font-handwritten text-xl md:text-3xl text-primary mb-4">
              {t("greeting")} {t("person")}{" "}
            </p>
            <h1 className="font-handwritten text-4xl md:text-7xl font-bold mb-2 leading-[1.1] text-balance inline-flex flex-nowrap gap-4">
              <span className="text-primary drop-shadow-sm">Franck</span>
              <span className="text-text-main"> Andritina</span>
            </h1>
            <svg
              className="w-full h-5 md:h-6 mb-6 max-w-md"
              viewBox="0 0 300 20"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="
                        M2 12
                        C40 10, 75 11, 105 10
                        C140 9, 170 11, 205 11
                        C235 10, 265 12, 298 13
                      "
                stroke="#2563eb"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <p className="text-base md:text-lg text-text-muted mb-10 max-w-xl leading-relaxed font-body">
              {t.rich("subtitle", {
                em: (chunks) => (
                  <em className="text-text-main font-semibold font-handwritten">
                    <mark className="bg-yellow-300/50 rounded-md px-1 py-0.5">
                      {chunks}
                    </mark>
                  </em>
                ),
              })}
            </p>

            <div className="flex flex-col md:flex-row md:justify-center md:gap-8 lg:justify-start items-center gap-6">
              <Link
                href="/projects"
                className="w-3/4 md:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold text-base hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 text-center"
              >
                {t("cta_projects")}
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-2 text-bases text-text-main font-bold hover:text-primary transition-colors py-2"
              >
                <span>{t("contact_cta")}</span>
                <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative flex-1 w-full max-w-125 group ">
            <div className="relative z-10 group   flex justify-center items-center rotate-5 ">
              {/* <div className="w-md h-md aspect-square bg-linear-0 from-blue-400 via-purple-500 to-pink-500 border border-primary rounded-md" /> */}
              <Image
                src="/images/franck_andritina_web_developpeur.webp"
                alt="Photo of Franck Andritina, web and mobile developer"
                width={300}
                height={300}
                priority
                
                className="w-full md:w-sm h-auto object-contain shadow-xl  pt-4 border border-primary/20 bg-primary/20  drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 animate-float "
              />
              
              {/* Decorative stamp */}
              <div className="absolute top-4 -right-10 md:-right-8 w-[40%] h-[10%] bg-yellow-200/95  shadow-md rotate-45 "/>
              <div className="absolute top-4 -left-10 md:-left-8 w-[40%] h-[10%] bg-yellow-200/95  shadow-md -rotate-45 "/>
              <div className="absolute bottom-4 -right-10 md:-right-8 w-[40%] h-[10%] bg-yellow-200/95  shadow-md -rotate-45 "/>
              <div className="absolute bottom-4 -left-10 md:-left-8 w-[40%] h-[10%] bg-yellow-200/95  shadow-md rotate-45 "/>
              
            </div>
            
            {/* <div className="relative z-10 group rounded-full  flex justify-center items-center overflow-hidden">
              {/* <div className="w-md h-md aspect-square bg-linear-0 from-blue-400 via-purple-500 to-pink-500 border border-primary rounded-md" /> 
              <Image
                src="/images/franck_andritina_web_developpeur.webp"
                alt="Photo of Franck Andritina, web and mobile developer"
                width={300}
                height={300}
                priority
                style={{
                  maskImage: `url(${maskImg.src})`,
                  
                }}
                className="w-full md:w-sm h-auto object-contain mask-cover mask-center  pt-4  bg-primary/20  drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 animate-float "
              />
              
            </div> */}
            
            {/* <Image
              src="icons/decorative_image.svg"
              alt="Decorative Image"
              width={80}
              height={80}
              className="absolute -bottom-4 -left-4 z-0 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />

              <Image
              src="icons/decorative_image.svg"
              alt="Decorative Image"
              width={80}
              height={80}
              className="absolute -top-4 -right-4 z-0 rotate-180 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"
              /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
