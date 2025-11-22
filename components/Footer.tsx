import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaFacebook } from "react-icons/fa"
const Footer = ()=>{
    return (
        <footer className="bg-[#FBAB21] text-sm lg:text-lg montserrat-regular mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 pt-3">
                    <div className="flex flex-col">
                        <Link className="mx-auto" href="/">
                            <img
                                className="h-20 w-auto object-contain"
                                src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759798025/logo-modified_g9f8cq.png'}
                                alt="EBHC Logo"
                            />
                        </Link>
                        <p className="montserrat-regular text-center font-bold">Entreprise Ben Hammed de Construction</p>
                    </div>
                    <div className="mt-3 lg:m-auto">
                        <h4 className="text-center font-bold">Contact</h4>
                        <ul className="font-semibold">
                        <li className="text-center">Rue des Eaux El Hanaya, 1100, Zaghouan</li>
                        <li><Link className="flex justify-center" href={"mailto:helmi1benhammed@yahoo.com"}><MdEmail className="my-auto" />helmi1benhammed@yahoo.com</Link></li>
                        <li><Link className="flex justify-center" href={"tel:+21652029998"}><FaPhoneAlt className="my-auto" />(+216) 52 029 998</Link></li>
                        <li><Link className="flex justify-center" href={'https://www.facebook.com/helmi.benhammed'} target="_blank"><FaFacebook className="my-auto" />Facebook</Link></li>
                    </ul>
                    </div>
                    <div className="mt-3 mx-auto lg:my-auto font-semibold">
                        <div>
                            <h4 className="text-center font-bold">Plan du site</h4>
                        </div>
                        <ul>
                            <li>
                                <Link href="/">- Accueil</Link>
                            </li>
                            <li><Link href="/#services">- Services</Link></li>
                            <li><Link href="/#projets">- Projets</Link></li>
                            <li><Link href="/about">- A propos</Link></li>
                            <li><Link href="/#contact">- Contact</Link></li>
                            <li><Link href="/#references">- Références</Link></li>
                        </ul>
                    </div>
                </div>
            <div className="mt-3">
                <p className="text-center font-bold p-2 montserrat-regular">© 2025 EBHC. Tous droits réservés.</p>
            </div>
        </footer>
    )
}

export default Footer
