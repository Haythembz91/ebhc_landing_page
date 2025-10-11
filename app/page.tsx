import Carousel from "@/components/Carousel"
import Contact from "@/components/Contact"
import MainSection from "@/components/MainSection"
import References from "@/components/References"


const Home = ()=>{
    return(
        <main className="">
            <Carousel></Carousel>
            <MainSection></MainSection>
            <References></References>
            <Contact></Contact>
        </main>
    )
}

export default Home