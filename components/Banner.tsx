import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";

const Banner = ()=>{


    return(
        <section className="relative pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 space-y-5 absolute bottom-0 lg:bottom-6 p-5 lg:p-8 xl:p-12">
                <div className="lg:col-span-2">
                    <h2 className=" text-4xl sm:text-6xl md:text-8xl lg:text-6xl xl:text-9xl text-white font-semibold mb-0">
                        Votre partenaire en construction et rénovation
                    </h2>
                </div>
                <div className="lg:col-span-1 navMenu my-auto flex flex-col items-start">
                    <p className="text-white sm:text-3xl md:my-3 text-center">
                        Demandez votre devis personnalisé en toute simplicité.
                    </p>
                    <ul className="navMenu flex space-x-2 bg-amber-50/30 backdrop-blur-md font-bold contactBtn items-center mx-auto mt-3 animate-pulse">
                        <li><Link className="hover:underline" href="#contact">Demander un devis</Link></li>
                        <BsArrowUpRightCircleFill />
                    </ul>
                </div>
            </div>
            <picture>
                <source
                    media="(max-width: 1024px)"
                    srcSet="https://res.cloudinary.com/dmgfsayir/image/upload/v1763348486/Gemini_Generated_Image_iiekpeiiekpeiiek_a3tnbb.png"
                />
                <img
                    src="https://res.cloudinary.com/dmgfsayir/image/upload/v1763256683/wuqoN0RyPWJTwAExCpNHNyoTRQ_djut4x.avif"
                    alt="Banner"
                    className="w-full mx-auto"
                />
            </picture>
        </section>
    )
}

export default Banner