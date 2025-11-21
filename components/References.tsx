'use client'
import { refs } from "@/libs/consts"
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const References = () => {

    
    return (
        <section id="references" className="p-5 mt-5">
            <div className="m-5 p-3 border-b border-gray-400">
                <h1 className="text-3xl lg:text-5xl text-center font-bold p-3 poppins-regular">RÉFÉRENCES</h1>
                <p className="text-gray-500 text-2xl lg:text-3xl story-script-regular text-center mt-3 lg:w-[50%] mx-auto">
                    Ils nous font confiance. Découvrez une sélection de nos références clients.
                </p>
            </div>
            <Swiper slidesPerView={1} spaceBetween={30} modules={[Pagination, Autoplay, Navigation]} navigation autoplay={{delay: 3000}} pagination={{ clickable: true }} loop={true}>
                {refs.map((ref, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="lg:grid lg:grid-cols-2 p-3 lg:h-[70vh]">
                            <div className="my-3 lg:my-auto">
                                <img className="mx-auto" src={ref.logo} alt={ref.name.replaceAll(' ', '_').toLocaleLowerCase()+'_logo'}></img>
                            </div>
                            <div className="my-auto lg:px-5">
                                <div className="my-3 lg:pt-5">
                                    <h3 className="text-4xl xl:text-5xl font-semibold poppins-regular text-center">
                                        {ref.name}
                                    </h3>
                                </div>
                                <div className="my-3 lg:pt-5">
                                    <p className="text-gray-500 font-semibold montserrat-regular">
                                        {ref.title}
                                    </p>
                                </div>
                                <div className="px-5 my-3">
                                    <ul className="list-disc">
                                        {ref.description.map((desc, index)=>{
                                            return(
                                                <li key={index}>
                                                    <p className="text-gray-500 font-semibold montserrat-regular">
                                                        {desc}
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>        
                    </SwiperSlide>
                )
            })}
            </Swiper>
        </section>
    )
}

export default References