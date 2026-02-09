// import Image from "next/image";

// export default function About() {
//   return (
//     <section id="about" className="py-24 relative overflow-hidden bg-bg-page transition-colors duration-500">
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col md:flex-row items-center gap-16">
          
//           {/* --- CÔTÉ IMAGE --- */}
//           <div className="w-full md:w-1/2 relative group">
//             {/* Décoration : Cercle Abyss en arrière-plan */}
//             <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
            
//             {/* Carré décoratif asymétrique */}
//             <div className="absolute top-10 -left-6 w-32 h-32 border-2 border-abyss-100/20 rounded-xl rotate-12 group-hover:rotate-0 transition-transform duration-500" />

//             <div className="relative z-10 flex justify-center">
//               <Image
//                 src="/images/franck.png"
//                 alt="Franck Andritina"
//                 width={450}
//                 height={450}
//                 className="drop-shadow-2xl animate-float transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>

//             {/* Badge d'expérience flottant */}
//             <div className="absolute bottom-10 right-0 bg-bg-card/80 backdrop-blur-lg border border-primary/20 p-4 rounded-2xl shadow-xl z-20">
//               <p className="text-primary font-title font-bold text-2xl">2+ Years</p>
//               <p className="text-text-main text-sm">Experience in Tech</p>
//             </div>
//           </div>

//           {/* --- CÔTÉ TEXTE --- */}
//           <div className="w-full md:w-1/2 space-y-6">
//             <div className="space-y-2">
//               <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
//                 Discovery
//               </span>
//               <h2 className="font-title text-4xl md:text-6xl font-bold leading-tight">
//                 Beneath the <span className="text-primary">Surface</span>
//               </h2>
//             </div>

//             <div className="space-y-4 text-text-main/80 text-lg leading-relaxed font-body">
//               <p>
//                 Bonjour ! Je suis <span className="text-text-main font-semibold">Franck Andritina</span>. 
//                 Mon voyage dans le code a commencé avec la rigueur de <b>Django</b>, où j'ai appris à structurer des systèmes complexes.
//               </p>
//               <p>
//                 Aujourd&apos;hui, je plonge dans l&apos;univers de <b>Next.js</b> pour transformer cette logique back-end en expériences front-end fluides, rapides et esthétiques. 
//                 Mon but ? Créer des interfaces qui ne sont pas juste des outils, mais de véritables immersions.
//               </p>
//             </div>

//             {/* Stack technologique rapide */}
//             <div className="flex flex-wrap gap-3 pt-4">
//               {['Next.js 15', 'Tailwind v4', 'Django', 'TypeScript'].map((tech) => (
//                 <span key={tech} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

export default function About() {
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
                 alt="Franck Andritina"
                 width={450}
                height={450}
                 className="drop-shadow-2xl animate-float transition-transform duration-500 group-hover:scale-105"
               />
             </div>

             {/* Badge d'expérience flottant */}
             <div className="absolute bottom-10 right-0 bg-bg-card/80 backdrop-blur-lg border border-primary/20 p-4 rounded-2xl shadow-xl z-20">
               <p className="text-primary font-title font-bold text-2xl">2+ Years</p>
              <p className="text-text-main text-sm">Experience in Tech</p>
             </div>
          </div>

          {/* --- CONTENT SIDE --- */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div className="space-y-2">
              <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
                Biography
              </span>
              <h2 className="font-title text-4xl md:text-6xl font-bold leading-tight">
                Beyond the <span className="text-primary">Code</span>
              </h2>
            </div>

            <div className="space-y-5 text-text-main/80 text-lg leading-relaxed font-body">
              <p>
                Hello! I&apos;m <span className="text-text-main font-semibold">Franck Andritina</span>, a Web Developer who believes that building great software is as much about <b>human connection</b> as it is about syntax.
              </p>
              
              <p>
                My approach goes beyond just writing lines of code. I focus on <b>software craftsmanship</b>—ensuring every solution is scalable, maintainable, and high-performing. For me, quality isn&apos;t an afterthought; it&apos;s the foundation of the entire development process.
              </p>

              <p>
                I thrive in <b>collaborative environments</b>. Whether it&apos;s leading a project, participating in code reviews, or brainstorming with a team, I leverage my <b>soft skills</b> and <b>Agile management</b> experience to bridge the gap between technical requirements and business goals.
              </p>
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Quality First', desc: 'Clean, testable code' },
                { label: 'Team Player', desc: 'Active communicator' },
                { label: 'Project Lead', desc: 'Goal-oriented mindset' }
              ].map((item) => (
                <div key={item.label} className="p-4 bg-primary/5 border border-primary/10 rounded-xl">
                  <h4 className="text-primary font-bold text-sm mb-1 uppercase tracking-wider">{item.label}</h4>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}