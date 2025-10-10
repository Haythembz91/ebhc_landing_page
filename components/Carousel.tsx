'use client'
import { useState, useEffect } from 'react'

const Carousel = () => {
  const images = [
        'https://res.cloudinary.com/dmgfsayir/image/upload/v1759972470/3_dngn0c.jpg',
        'https://res.cloudinary.com/dmgfsayir/image/upload/v1759973122/WhatsApp_Image_2025-10-05_%C3%A0_18.04.51_82c9a429_ljf9zv.jpg',
        'https://res.cloudinary.com/dmgfsayir/image/upload/v1759973555/WhatsApp_Image_2025-10-05_%C3%A0_23.15.40_4b4eeb39_yzbsgo.jpg'
    ]

    const titles = [
        'Protégez votre bâtiment grâce à une étanchéité durable.',
        'Des menuiseries adaptées à tous vos besoins.',
        'Votre partenaire en construction et rénovation.'
    ]

  const [current, setCurrent] = useState(0)

  // optional auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(timer)
  }, [current])

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="relative w-full overflow-hidden z-0">
      {/* slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="w-full flex-shrink-0 lg:object-cover lg:h-screen"
          />
        ))}
      </div>

      {/* prev/next buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 text-white text-7xl hover:text-blue-100 px-3 py-2 rounded-full h-full cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 text-white text-7xl hover:text-blue-100 px-3 py-2 rounded-full h-full cursor-pointer"
      >
        ›
      </button>

      <div className='absolute left-1/2 bottom-1/8 -translate-x-1/2 w-3/4'>
        <p className="text-[#FBAB21] text-xl sm:text-3xl lg:text-5xl font-bold leading-normal">
          {titles[current]}
        </p>
      </div>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-white' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
