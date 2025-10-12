import { title } from "process"
import FadeUpOnScroll from "./FadeUpOnScroll"


const MainSection = () => {
    const services = [
        {
            text:'Nos services de plomberie couvrent tous vos besoins : installation, réparation et entretien. Que ce soit pour une fuite d’eau, un problème de canalisation ou la mise en place d’équipements sanitaires, notre équipe qualifiée intervient rapidement pour vous garantir confort et tranquillité.',
            icon:'https://res.cloudinary.com/dmgfsayir/image/upload/v1760059568/plomberie_jhrxjy.png',
            imageUrl:'https://res.cloudinary.com/dmgfsayir/image/upload/v1759975545/WhatsApp_Image_2025-10-05_%C3%A0_18.04.52_2a2d2d8e_ai9iry.jpg',
            title:'POLOMBERIE'
        },
        {
            text:'Apportez fraîcheur et modernité à vos espaces avec nos services de peinture intérieure et extérieure. Nous assurons une finition soignée et durable, adaptée à tous types de surfaces et styles.',
            icon:'https://res.cloudinary.com/dmgfsayir/image/upload/v1760059573/peinture-au-rouleau_ytphhv.png',
            imageUrl:'https://res.cloudinary.com/dmgfsayir/image/upload/v1759973556/WhatsApp_Image_2025-10-05_%C3%A0_23.15.40_a3d5acf7_nnoy8t.jpg',
            title:'PEINTURE'
        },
        {
            text:'Nous réalisons des travaux de plafonnage et de plâtrerie pour des finitions nettes et durables. Que ce soit pour la rénovation ou la construction, nous apportons élégance et solidité à vos plafonds et murs.',
            icon:'https://res.cloudinary.com/dmgfsayir/image/upload/v1760060133/plafond_z1z0ga.png',
            imageUrl:'https://res.cloudinary.com/dmgfsayir/image/upload/v1759976648/WhatsApp_Image_2025-10-05_%C3%A0_18.04.54_38991e13_mhtri5.jpg',
            title:'PLAFONNAGE'
        },
        {
            text:'Nous réalisons tous vos travaux de maçonnerie avec précision et solidité : construction, rénovation, réparation de murs, fondations, cloisons, dallage, pavage, revêtement et autres structures. Notre savoir-faire garantit des ouvrages durables et esthétiques, adaptés à vos besoins.',
            icon:'https://res.cloudinary.com/dmgfsayir/image/upload/v1760059572/maconnerie_r8ww3z.png',
            imageUrl:'https://res.cloudinary.com/dmgfsayir/image/upload/v1759976582/WhatsApp_Image_2025-10-04_%C3%A0_10.59.05_ff08338f_jv76sh.jpg',
            title:'MACONNERIE'
        },
        {
            text:'Assurez la durabilité et la sécurité de vos bâtiments grâce à nos solutions d’étanchéité professionnelles. Nous intervenons rapidement pour protéger vos toitures, terrasses, façades et fondations contre les infiltrations d’eau, l’humidité et les dommages structurels.',
            icon:'https://res.cloudinary.com/dmgfsayir/image/upload/v1760110821/waterproof_wztwnx.png',
            imageUrl:'https://res.cloudinary.com/dmgfsayir/image/upload/v1759972469/2_syma27.jpg',
            title:'ETANCHÉITE'
        },
        {
            text:'Spécialistes en solutions sur mesure, nous concevons et installons des menuiseries qui allient robustesse, durabilité et design moderne. Fenêtres, portes, portails ou structures métalliques : notre savoir-faire garantit des réalisations adaptées à tous vos projets de construction ou de rénovation.',
            icon:'https://res.cloudinary.com/dmgfsayir/image/upload/v1760059572/les-fenetres_jfsoh4.png',
            imageUrl:'https://res.cloudinary.com/dmgfsayir/image/upload/v1759973119/WhatsApp_Image_2025-10-05_%C3%A0_18.04.51_8c3c1368_h5e7iz.jpg',
            title:'MENUISERIE'
        }
        ]

    return(
        <section id="services" className="m-5">
            <div className="py-6 lg:grid lg:grid-cols-2" style={{fontFamily:'roboto'}}>
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
                        <div className="py-6 lg:grid lg:grid-cols-2" style={{fontFamily:'roboto'}}>
                            <div className="m-auto lg:w-3/4">
                                <div className="flex justify-center">
                                    <img className="w-10" src={service.icon} alt={"icon"+index}></img>
                                    <p className="text-2xl p-2">{service.title}</p>
                                </div>
                                <p className="lg:text-2xl p-2">
                                {service.text}
                                </p>
                            </div>
                            <img className="rounded-3xl" alt={'image'+index} src={service.imageUrl}></img>
                        </div>
                    </FadeUpOnScroll>
                )
            })}
        </section>
    )
}

export default MainSection