const Contact = ()=>{
    return (
        <section className="p-2" id="contact">
            <h1 style={{fontFamily:'roboto'}} className="text-5xl font-bold text-center">CONTACT</h1>
            <form className="lg:w-1/2 mx-auto">
                    <div className="mt-3">
                        <label htmlFor="name">Nom</label>
                        <div className="mt-2">
                            <input className="outline-black outline-1 rounded-md focus:outline-2 focus:outline-amber-500 w-full p-2 shadow-md " type="text" placeholder="Votre nom" id="name" name="name" required />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="email">Email</label>
                        <div className="mt-2">
                            <input className="outline-black outline-1 rounded-md focus:outline-2 focus:outline-amber-500 w-full p-2 shadow-md " type="email" placeholder="Votre email" id="email" name="email" required />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="message">Message</label>
                        <div className="mt-2">
                            <textarea className="outline-black outline-1 rounded-md focus:outline-2 focus:outline-amber-500 w-full p-2 shadow-md " rows={5} placeholder="Votre message" id="message" name="message" required />
                        </div>
                    </div>
                    <div className="mt-3">
                        <button className="bg-linear-65 from-purple-500 to-pink-500 text-2xl rounded-lg p-2 hover:bg-linear-to-t hover:from-sky-500 hover:to-indigo-500 cursor-pointer w-full font-semibold shadow-md " type="submit">Envoyer</button>
                    </div>
            </form>
        </section>
    )
}

export default Contact