import FadeUpOnScroll from "./FadeUpOnScroll"
import { services, plomberie } from "../libs/consts"

const MainSection = () => {
    

    return(
        <section id="services" className="m-5">
            <div id="apropos" className="py-6 lg:grid lg:grid-cols-2" style={{fontFamily:'roboto'}}>
                    <div className="m-auto lg:w-3/4">
                        <p className="text-2xl font-bold p-2">
                        Pourquoi choisir EBHC ?
                        </p>
                        <ul className="list-disc lg:text-2xl">
                            <li>Ingénierie, pilotage et exécution</li>
                            <li>Équipe expérimentée et qualifiée</li>
                            <li>Pilotage et conseils techniques sur mesure</li>
                            <li>Matériaux de qualité</li>
                            <li>Interventions rapides et garanties</li>
                            <li>Devis gratuit et personnalisé</li>
                        </ul>
                    </div>
                    <img className="mx-auto" src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759798025/logo-modified_g9f8cq.png'}></img>
            </div>
            <h1 style={{fontFamily:'roboto'}} className="text-3xl lg:text-5xl text-center font-bold p-3">NOS SERVICES</h1>
            {services.map((service,index)=>{
                return(
                    <FadeUpOnScroll key={index}>
                        <div className="py-6 lg:grid lg:grid-cols-2 border-b border-gray-400" style={{fontFamily:'roboto'}}>
                            <div className="m-auto lg:w-3/4">
                                <div className="flex justify-center">
                                    <img className="w-10" src={service.icon} alt={"icon"+index}></img>
                                    <p className="text-3xl font-semibold p-2">{service.title}</p>
                                </div>
                                <p className="lg:text-2xl p-2 lg:leading-10">
                                {service.text}
                                </p>
                            </div>
                            <div className="m-auto grid grid-cols-2">
                                {service.imageUrl?.map((imageUrl,index)=>{
                                return (<div className="p-2" key={index}>
                                    <img className="rounded-2xl shadow-lg shadow-black" alt={'image'+index} src={imageUrl}></img>
                                </div>)
                            })}
                            </div>
                        </div>
                    </FadeUpOnScroll>
                )
            })}
            <FadeUpOnScroll>
                <div className="py-6 lg:grid lg:grid-cols-2 border-b border-gray-400" style={{fontFamily:'roboto'}}>
                    <div className="m-auto lg:w-3/4">
                        <div className="flex justify-center">
                            <img className="w-10" src={plomberie[0].icon} alt={"icon"}></img>
                            <p className="text-3xl font-semibold p-2">{plomberie[0].title}</p>
                        </div>
                        <p className="lg:text-2xl p-2 lg:leading-10">
                        {plomberie[0].text}
                        </p>
                    </div>
                    <div>
                        <div className="p-2">
                            <img className="rounded-2xl shadow-lg shadow-black" alt="image" src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759975685/WhatsApp_Image_2025-10-05_%C3%A0_18.04.51_1eca8269_mtonbf.jpg'}></img>
                        </div>
                        <div className="m-auto grid grid-cols-2">
                            {plomberie[0].imageUrl?.map((imageUrl,index)=>{
                            return (<div className="p-2" key={index}>
                                <img className="rounded-2xl shadow-lg shadow-black" alt={'image'+index} src={imageUrl}></img>
                        </div>)
                    })}
                    </div>
                    </div>
                </div>
            </FadeUpOnScroll>
        </section>
    )
}

export default MainSection