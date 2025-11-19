import { services } from "@/libs/consts"
const Services = ()=>{


    return(
        <section className="relative h-[650vh] p-3">
            <div className="m-5 p-3 border-b border-gray-400">
                <h1 style={{fontFamily:'roboto'}} className="text-3xl lg:text-5xl text-center font-bold p-3">Nos Services</h1>
                <p className="text-gray-500 font-semibold text-2xl lg:text-3xl rouge-script-regular text-center">
                    Découvrez l’ensemble de nos services conçus pour répondre à tous vos besoins en construction, rénovation et aménagement.
                </p>
            </div>
            {services.map((service, index)=>{
                return(
                    <div key={index} style={{ zIndex: 10 * (index + 1), width: `${95+index}%`}} className={`sticky top-3 lg:top-[60px] h-[100vh] bg-white mx-auto my-3`}>
                        <div className="lg:grid lg:grid-cols-2 border border-gray-500 shadow-lg p-3">
                            <div className="my-3 overflow-hidden">
                                <img className="rounded-2xl shadow-lg shadow-black/80 transition-transform duration-900 ease-out hover:scale-110" src={service.imageUrl[0]} alt={service.title.replaceAll(' ', '_').toLocaleLowerCase()+'_thumbnail'}></img>
                            </div>
                            <div className="my-auto lg:px-5">
                                <div className="my-3 lg:pt-5">
                                    <h3 className="text-4xl xl:text-5xl font-semibold text-shadow-lg text-shadow-gray-500">
                                        ● {service.title}
                                    </h3>
                                </div>
                                <div className="my-3 lg:pt-5">
                                    <p className="text-gray-500 font-semibold text-2xl rouge-script-regular">
                                        {service.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Services