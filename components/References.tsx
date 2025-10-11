

const References = () => {

    const refs = [
        'https://res.cloudinary.com/dmgfsayir/image/upload/v1760147942/WhatsApp_Image_2025-10-07_%C3%A0_14.38.53_5a1a952d_uz3qje.jpg',
        'https://res.cloudinary.com/dmgfsayir/image/upload/v1760147940/WhatsApp_Image_2025-10-07_%C3%A0_14.38.14_eccbd933_xfhvw4.jpg',
        'https://res.cloudinary.com/dmgfsayir/image/upload/v1760147939/WhatsApp_Image_2025-10-07_%C3%A0_14.39.56_b0754ef6_ivicqa.jpg'
    ]
    return (
        <section id="references">
            <h1 style={{fontFamily:'roboto'}} className="text-5xl font-bold text-center">RÉFÉRENCES</h1>
            <div className="grid grid-cols-3 gap-4 place-items-center">
                {refs.map((ref,index) => {
                return <img className="object-contain" key={index} src={ref} alt={'ref'+index} />
                })}
            </div>
        </section>
    )
}

export default References