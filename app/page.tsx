import Carousel from "@/components/Carousel"
import FadeUpOnScroll from "@/components/FadeUpOnScroll"
import MainSection from "@/components/MainSection"
import References from "@/components/References"


const Home = ()=>{
    return(
        <main className="">
            <Carousel></Carousel>
            <MainSection></MainSection>
            <FadeUpOnScroll>
                <References></References>
            </FadeUpOnScroll>
        </main>
    )
}

export default Home