'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams, notFound } from 'next/navigation';
import { projects } from '@/libs/consts';

const Home = ()=>{

    const params : {slug:string} = useParams();
    const slug = decodeURIComponent(params.slug);
    const project = projects.find(project=>project.title===slug);
    if(!project){
        return (
            notFound()
        )
    }
    return (
        <section className='pt-20'>
            <h1 className='text-2xl font-bold p-3 poppins-regular'>{project.title}</h1>
            <div className='lg:grid lg:grid-cols-2 p-3'>
                <div>
                    <Swiper slidesPerView={1} spaceBetween={30} modules={[Pagination, Autoplay, Navigation]} navigation autoplay={{delay: 3000}} pagination={{ clickable: true }} loop={true}>
                        {project.gallery?.map((imageUrl,index)=>{
                            return(
                                <SwiperSlide key={index}><img src={imageUrl}></img></SwiperSlide>
                            )
                        })}  
                    </Swiper>
                </div>
                <div className='my-auto p-5 lg:text-2xl' dangerouslySetInnerHTML={{__html: project.description}}>
                </div>
            </div>  
        </section>
    )
}

export default Home