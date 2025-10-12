'use client'
import { ImSpinner2 } from "react-icons/im"
import { FormEvent, useState } from "react"
const Contact = ()=>{


    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsSending(true)
        setError('')
        const formData = new FormData(e.currentTarget)
        try{
            const response = await fetch('/api/contact',{
                method:'POST',
                body:formData
            })
            if(!response.ok){
                setError('Une erreur est survenue, veuillez reessayer')
                setIsSending(false)
                return
            }
            const data = await response.json()
            console.log(data)
            setIsSending(false)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <section className="p-2" id="contact">
            <h1 style={{fontFamily:'roboto'}} className="text-5xl font-bold text-center">CONTACT</h1>
            <form onSubmit={handleSubmit} className="lg:w-1/2 mx-auto">
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
                        {!isSending?<button className="bg-linear-65 from-yellow-500 to-amber-500 text-2xl rounded-lg p-2 hover:bg-linear-65 hover:from-amber-500 hover:to-amber-800 cursor-pointer w-full font-semibold shadow-md " type="submit">Envoyer</button>
                        :<button type="button" className="bg-linear-65 cursor-not-allowed from-amber-500 to-amber-800 text-2xl rounded-lg p-2 w-full font-semibold shadow-md flex items-center justify-center" disabled>  
                            <span>
                                <ImSpinner2 className="mr-3 size-5 animate-spin" />
                            </span>
                            <span>Envoi...</span>
                        </button>}
                    </div>
            </form>
        </section>
    )
}

export default Contact