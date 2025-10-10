import FadeUpOnScroll from "./FadeUpOnScroll"


const MainSection = () => {
    const services = [
        {
            text:'Nos services de plomberie couvrent tous vos besoins : installation, réparation et entretien. Que ce soit pour une fuite d’eau, un problème de canalisation ou la mise en place d’équipements sanitaires, notre équipe qualifiée intervient rapidement pour vous garantir confort et tranquillité.',
            icon:'https://res.cloudinary.com/dmgfsayir/image/upload/v1760059568/plomberie_jhrxjy.png',
            imageUrl:''
        },
        {
            text:'Apportez fraîcheur et modernité à vos espaces avec nos services de peinture intérieure et extérieure. Nous assurons une finition soignée et durable, adaptée à tous types de surfaces et styles.',
            icon:'https://res.cloudinary.com/dmgfsayir/image/upload/v1760059573/peinture-au-rouleau_ytphhv.png',
            imageUrl:''
        },
        {
            text:'Nous réalisons des travaux de plafonnage et de plâtrerie pour des finitions nettes et durables. Que ce soit pour la rénovation ou la construction, nous apportons élégance et solidité à vos plafonds et murs.',
            icon:'https://res.cloudinary.com/dmgfsayir/image/upload/v1760060133/plafond_z1z0ga.png',
            imageUrl:''
        },
        {
            text:'Nous réalisons tous vos travaux de maçonnerie avec précision et solidité : construction, rénovation, réparation de murs, fondations, cloisons, dallage, pavage, revêtement et autres structures. Notre savoir-faire garantit des ouvrages durables et esthétiques, adaptés à vos besoins.',
            icon:'https://res.cloudinary.com/dmgfsayir/image/upload/v1760059572/maconnerie_r8ww3z.png',
            imageUrl:''
        },
        {
            text:'Assurez la durabilité et la sécurité de vos bâtiments grâce à nos solutions d’étanchéité professionnelles. Nous intervenons rapidement pour protéger vos toitures, terrasses, façades et fondations contre les infiltrations d’eau, l’humidité et les dommages structurels.',
            icon:'',
            imageUrl:''
        },
        {
            text:'Spécialistes en solutions sur mesure, nous concevons et installons des menuiseries qui allient robustesse, durabilité et design moderne. Fenêtres, portes, portails ou structures métalliques : notre savoir-faire garantit des réalisations adaptées à tous vos projets de construction ou de rénovation.',
            icon:'https://res.cloudinary.com/dmgfsayir/image/upload/v1760059572/les-fenetres_jfsoh4.png',
            imageUrl:''
        }
        ]

    return(
        <section className="m-5">
            <FadeUpOnScroll>
                <div style={{fontFamily:'roboto'}}>
                    <p className="text-2xl font-bold p-2">
                        Pourquoi choisir EBHC ?
                    </p>
                    <ul className="list-disc">
                        <li>Ingénierie, pilotage et exécution</li>
                        <li>Équipe expérimentée et qualifiée</li>
                        <li>Pilotage et conseils techniques sur mesure</li>
                        <li>Matériaux de qualité</li>
                        <li>Interventions rapides et garanties</li>
                        <li>Devis gratuit et personnalisé</li>
                    </ul>
                </div>
            </FadeUpOnScroll>
            {services.map((service,index)=>{
                return(
                    <FadeUpOnScroll key={index}>
                        <div className="py-6 lg:grid lg:grid-cols-2" style={{fontFamily:'roboto'}}>
                            <div className="my-auto">
                                <img className="w-10" src={service.icon}></img>
                                <p className="lg:text-2xl p-2">
                                {service.text}
                            </p>
                            </div>
                            <img src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759972470/3_dngn0c.jpg'}></img>
                        </div>
                    </FadeUpOnScroll>
                )
            })}
        </section>
    )
}

export default MainSection