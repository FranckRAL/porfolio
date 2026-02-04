import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Project from "@/components/sections/Project"
import Services from "@/components/sections/Services"
import Skills from "@/components/sections/Skills"
import Footer from "@/components/sections/Footer"

export default function Home() {
    return(
        <>
            <Header />
            <Hero />
            <About />
            <Services />
            <Project />
            <Skills />
            <Contact />
            <Footer />
        </>
    )
    
}
