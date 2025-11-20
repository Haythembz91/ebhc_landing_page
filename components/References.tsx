

const References = () => {

    const refs = [
        'https://res.cloudinary.com/dmgfsayir/image/upload/v1760147942/WhatsApp_Image_2025-10-07_%C3%A0_14.38.53_5a1a952d_uz3qje.jpg',
        'https://res.cloudinary.com/dmgfsayir/image/upload/v1760147940/WhatsApp_Image_2025-10-07_%C3%A0_14.38.14_eccbd933_xfhvw4.jpg',
        'https://res.cloudinary.com/dmgfsayir/image/upload/v1760147939/WhatsApp_Image_2025-10-07_%C3%A0_14.39.56_b0754ef6_ivicqa.jpg'
    ]
    return (
        <section id="references" className="p-5 mt-5">
            <div className="m-5 p-3 border-b border-gray-400">
                <h1 className="text-3xl lg:text-5xl text-center font-bold p-3 poppins-regular">RÉFÉRENCES</h1>
                <p className="text-gray-500 text-2xl lg:text-3xl story-script-regular text-center mt-3 lg:w-[50%] mx-auto">
                    Ils nous font confiance. Découvrez nos références clients.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-4 place-items-center mt-3">
                {refs.map((ref,index) => {
                return <img className="object-contain" key={index} src={ref} alt={'ref'+index} />
                })}
            </div>
        </section>
    )
}

export default References