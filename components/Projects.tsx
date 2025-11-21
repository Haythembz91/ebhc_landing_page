import { projects } from "@/libs/consts"
import Link from "next/link"
import { BsArrowUpRightCircleFill } from "react-icons/bs"
const Projects = ()=>{
    return(
        <section id={"projets"}>
            <div className="m-5 p-3 border-b border-gray-400">
                <h1 className="text-3xl lg:text-5xl text-center font-bold p-3 poppins-regular">NOS PROJETS</h1>
                <p className="text-gray-500 text-2xl lg:text-3xl story-script-regular text-center lg:w-[50%] mt-3 mx-auto">
                    Rénovation, construction et aménagement : voici quelques réalisations qui témoignent de notre maîtrise du métier.
                </p>
            </div>
            <div className="lg:grid lg:grid-cols-2">
                {projects.map((project,index)=>{
                    return(
                       <div key={index} className="p-5">
                            <div className="my-3 overflow-hidden">
                                <img className="transition-transform duration-900 ease-out hover:scale-110" src={project.imageUrl} alt={project.title.replaceAll(' ', '_').toLocaleLowerCase()+'_thumbnail'}></img>
                            </div>
                            <div className="my-auto lg:px-5">
                                <div className="my-3 lg:pt-5">
                                    <h3 className="text-4xl xl:text-5xl font-semibold poppins-regular">
                                        ● {project.title}
                                    </h3>
                                </div>
                                <div className="my-3 lg:pt-5">
                                    <p className="text-gray-500 font-semibold montserrat-regular">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex mt-5 lg:mt-8">
                                    <ul className="navMenu bg-amber-50/30 backdrop-blur-md contactBtn flex space-x-2 mt-3 lg:text-3xl">
                                        <li><Link className="hover:underline" href={"projects/"+project.title.replaceAll(' ', '_').toLocaleLowerCase()}>En savoir plus</Link></li>
                                        <BsArrowUpRightCircleFill className="my-auto" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects