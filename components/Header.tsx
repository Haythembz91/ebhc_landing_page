'use client'
import Link from "next/link";
import { useState } from "react"
import { HiOutlineMenu } from "react-icons/hi";
const Header = ()=>{

    const [showMenu, setShowMenu] = useState(false);
    return(
        <header className="bg-[#FBAB21] px-4 py-1 sticky top-0 z-[999]">
            <nav className="flex justify-between">
                <Link href="#">
                    <img className="h-20 w-auto object-contain" src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759798025/logo-modified_g9f8cq.png'}></img>
                </Link>
                <div className="hidden lg:flex items-center">
                    <ul className="flex space-x-4 font-bold">
                        <li><Link className="hover:underline" href="/">ACCEUIL</Link></li>
                        <li><Link className="hover:underline" href="#apropos">À PROPOS</Link></li>
                        <li><Link className="hover:underline" href="#services">NOS SERVICES</Link></li>
                        <li><Link className="hover:underline" href="#references">RÉFÉRENCES</Link></li>
                        <li><Link className="hover:underline" href="#contact">CONTACT</Link></li>
                    </ul>
                </div>
                <div onClick={()=>setShowMenu(p=>!p)} className="flex items-center lg:hidden">
                    <HiOutlineMenu className="text-3xl"></HiOutlineMenu>
                </div>
            </nav>
            {showMenu&&<div className="lg:hidden p-y-3">
                    <ul className="flex flex-col space-x-4 space-y-3 font-bold">
                        <li><Link onClick={()=>setShowMenu(false)} className="hover:underline" href="/">ACCEUIL</Link></li>
                        <li><Link onClick={()=>setShowMenu(false)} className="hover:underline" href="#apropos">À PROPOS</Link></li>
                        <li><Link onClick={()=>setShowMenu(false)} className="hover:underline" href="#services">NOS SERVICES</Link></li>
                        <li><Link onClick={()=>setShowMenu(false)} className="hover:underline" href="#references">RÉFÉRENCES</Link></li>
                        <li><Link onClick={()=>setShowMenu(false)} className="hover:underline" href="#contact">CONTACT</Link></li>
                    </ul>
                </div>}
        </header>
    )
}

export default Header