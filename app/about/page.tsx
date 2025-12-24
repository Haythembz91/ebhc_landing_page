const Home = ()=>{


    return(
        <section className="lg:grid lg:grid-cols-2 pt-20">
            <div className="mx-auto">
                <img src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759798025/logo-modified_g9f8cq.png'} alt="EBHC Logo"></img>
            </div>
            <div className="p-5 mt-3">
                <h2 className="text-3xl font-bold poppins-regular">À propos de notre entreprise :</h2>
                <p className="mt-3">
                    Fondée en 2020, notre entreprise s’est rapidement imposée comme un acteur de confiance dans le domaine de la construction et des travaux publics. Grâce à notre savoir-faire et à notre engagement envers la qualité, nous proposons une gamme complète de services pour répondre à tous vos besoins de construction et de rénovation.
                </p>
                <p className="mt-3">Nos services incluent :</p>
                <ul className="mt-3 list-disc ps-5">
                    <li><strong>Bâtiments et travaux publics :</strong> construction, aménagement et infrastructures.</li>
                    <li><strong>Peinture :</strong> intérieure et extérieure, finition de haute qualité.</li>
                    <li><strong>Plomberie :</strong> installation, réparation et maintenance.</li>
                    <li><strong>Étanchéité :</strong> protection contre l’eau et l’humidité pour tous types de bâtiments.</li>
                    <li><strong>Plafonnage et plâtrerie :</strong> réalisation de plafonds, cloisons et finitions murales.</li>
                    <li><strong>Menuiserie :</strong> bois, fer forgé et aluminium, sur mesure pour portes, fenêtres et mobiliers.</li>
                </ul>
                <p className="mt-3">
                    Notre mission est de fournir des solutions fiables, durables et esthétiques, tout en respectant les délais et les budgets de nos clients. Depuis notre création, nous avons bâti notre réputation sur la qualité du travail, le professionnalisme et la satisfaction client.
                </p>
            </div>
        </section>
    )
}

export default Home