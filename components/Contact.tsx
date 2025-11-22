'use client'
import { ImSpinner2 } from "react-icons/im"
import { FormEvent, useState, useRef } from "react"


function validateEmail(email:string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const Contact = ()=>{


    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const formRef = useRef<HTMLFormElement>(null)
    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsSending(true)
        setError('')
        setSuccess('')
        const formData = new FormData(e.currentTarget)
        if(!validateEmail(formData.get('email') as string)){
            setError('Invalid email')
            setIsSending(false)
            return
        }
        try{
            const response = await fetch('/api/contact',{
                method:'POST',
                body:formData
            })
            if(!response.ok){
                const data = await response.json()
                setError(data.error)
                setIsSending(false)
                setSuccess('')
                return
            }
            const data = await response.json()
            setSuccess(data.message)
            setIsSending(false)
            setError('')
            formRef.current?.reset()
        }catch(e){
            console.log(e)
        }
    }

    return (
        <section className="p-2" id="contact">
            <div className="m-5 p-3 border-b border-gray-400">
                <h1 className="text-3xl lg:text-5xl text-center font-bold p-3 poppins-regular">CONTACT</h1>
                <p className="text-gray-500 text-2xl lg:text-3xl story-script-regular text-center lg:w-[50%] mx-auto mt-3">
                    Besoin d’un renseignement ou d’un devis ? Contactez-nous, notre équipe vous répondra rapidement.
                </p>
            </div>
            <form onSubmit={handleSubmit} ref={formRef} className="lg:w-1/2 mx-auto montserrat-regular">
                    <div className="mt-3">
                        <label htmlFor="name">Nom:</label>
                        <div className="mt-2">
                            <input className="outline-black outline-1 rounded-md focus:outline-2 focus:outline-amber-500 w-full p-2 shadow-md shadow-gray-400 " type="text" placeholder="Votre nom" id="name" name="name" required />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="email">Email:</label>
                        <div className="mt-2">
                            <input className="outline-black outline-1 rounded-md focus:outline-2 focus:outline-amber-500 w-full p-2 shadow-md shadow-gray-400 " type="email" placeholder="Votre email" id="email" name="email" required />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="message">Message:</label>
                        <div className="mt-2">
                            <textarea className="outline-black outline-1 rounded-md focus:outline-2 focus:outline-amber-500 w-full p-2 shadow-md shadow-gray-400 " rows={5} placeholder="Votre message" id="message" name="message" required />
                        </div>
                    </div>
                    {error&&<div className="mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md shadow-md">
                        <p className="">{error}</p>
                        </div>}
                        {success&&<div className="mt-3 bg-teal-100 border border-teal-500 text-teal-900 px-4 py-3 rounded-md shadow-md">
                        <p className="">{success}</p>
                        </div>}
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