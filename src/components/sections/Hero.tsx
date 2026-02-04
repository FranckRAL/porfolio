import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24">
      {/* Background Decorative Halos */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-abyss-700/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* --- CONTENT (LEFT) --- */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest">
                Available for new opportunities
              </span>
            </div>

            <h1 className="font-title text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-balance">
              I&apos;m <span className="text-primary drop-shadow-sm">Franck</span> <br />
              <span className="text-text-main">Andritina</span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted mb-10 max-w-xl leading-relaxed font-body">
              A <span className="text-text-main font-semibold">Fullstack Web Developer</span> dedicated to crafting high-performance, 
              scalable, and visually stunning digital solutions that solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="#contact"
                className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 text-center"
              >
                Hire me
              </Link>
              <Link
                href="/cv.pdf"
                className="group flex items-center gap-2 text-text-main font-semibold hover:text-primary transition-colors py-2"
              >
                <span>Download CV</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* --- VISUALS & STATS (RIGHT) --- */}
          <div className="relative flex-1 w-full max-w-125">
            
            {/* Geometric Decors */}
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-primary/20 rounded-3xl rotate-12 -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 border border-abyss-500/30 rounded-4xl -rotate-12 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full -z-20" />

            {/* Main Image Container */}
            <div className="relative z-10 group rounded-[2.5rem] overflow-hidden border border-primary/10 bg-linear-to-br from-abyss-800/20 to-abyss-900/40 p-1 backdrop-blur-sm">
              <Image
                src="/images/franck.png"
                alt="Franck Andritina"
                width={500}
                height={600}
                priority
                className="w-full h-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 animate-float"
              />
            </div>

            {/* --- STATS BOXES --- */}
            
            {/* Projects Stats */}
            <div className="absolute -top-6 -left-8 md:-left-16 z-20 bg-bg-card/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-primary/20 animate-bounce-slow">
              <p className="text-3xl font-bold text-primary font-title">15+</p>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">Success Projects</p>
            </div>

            {/* Experience/Tech Stats */}
            <div className="absolute bottom-10 -right-6 md:-right-12 z-20 bg-bg-card/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-primary/20">
              <p className="text-xl font-bold font-title text-text-main">Web Expert</p>
              <div className="flex gap-1 mt-1">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-primary rounded-full" />)}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;