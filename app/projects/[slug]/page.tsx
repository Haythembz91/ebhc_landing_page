'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = ()=>{

    return (
        <section className='pt-20'>
            <div className='lg:grid lg:grid-cols-2 p-3'>
                <div>
                <Swiper slidesPerView={1} spaceBetween={30} modules={[Pagination, Autoplay, Navigation]} navigation autoplay={{delay: 3000}} pagination={{ clickable: true }} loop={true}>
                   <SwiperSlide><img src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759972469/1_mapwbh.jpg'}></img></SwiperSlide>
                   <SwiperSlide><img src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759972469/1_mapwbh.jpg'}></img></SwiperSlide> 
                   <SwiperSlide><img src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759972469/1_mapwbh.jpg'}></img></SwiperSlide>
                   <SwiperSlide><img src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759972469/1_mapwbh.jpg'}></img></SwiperSlide>   
                </Swiper>
                </div>
                <div className='my-auto'>
                    <p className='p-5 poppins-regular lg:text-2xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem voluptatibus nihil facilis obcaecati eveniet molestias dolores adipisci accusamus delectus eius architecto consectetur dignissimos atque, dicta qui quas minima pariatur.
                    </p>
                </div>
            </div>  
        </section>
    )
}

export default Home