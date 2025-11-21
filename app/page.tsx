import Contact from "@/components/Contact"
import FadeUpOnScroll from "@/components/FadeUpOnScroll"
import Projects from "@/components/Projects"
import References from "@/components/References"
import Services from "@/components/Services"
import Stats from "@/components/Stats"
import Banner from "@/components/Banner"


const Home = ()=>{
    return(
        <main className="">
            <Banner></Banner>
            <FadeUpOnScroll>
                <Stats></Stats>
            </FadeUpOnScroll>
            <Services/>
            <Projects></Projects>
            <References></References>
            <Contact></Contact>
        </main>
    )
}

export default Home