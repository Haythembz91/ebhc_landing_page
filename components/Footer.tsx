import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
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
                        <p className="montserrat-regular text-center font-semibold">Entreprise Ben Hammed de Construction</p>
                    </div>
                    <ul className="mt-3 lg:m-auto font-semibold">
                        <li className="text-center">Rue des Eaux El Hanaya, 1100, Zaghouan</li>
                        <li><Link className="flex justify-center" href={"mailto:helmi1benhammed@yahoo.com"}><MdEmail className="my-auto" />helmi1benhammed@yahoo.com</Link></li>
                        <li><Link className="flex justify-center" href={"tel:+21652029998"}><FaPhoneAlt className="my-auto" />(+216) 52 029 998</Link></li>
                    </ul>
                    <div className="mt-3 mx-auto lg:my-auto font-semibold">
                        <Link href={'/plan-du-site'}>Plan du site</Link>
                    </div>
                </div>
            <div className="mt-3">
                <p className="text-center font-bold p-2 montserrat-regular">© 2025 EBHC. Tous droits réservés.</p>
            </div>
        </footer>
    )
}

export default Footer
