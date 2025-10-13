'use client'
import { useState } from "react"
import { HiOutlineMenu } from "react-icons/hi";
const Header = ()=>{

    const [showMenu, setShowMenu] = useState(false);
    return(
        <header className="bg-[#FBAB21] px-4 py-1 sticky top-0 z-[999]">
            <nav className="flex justify-between">
                <a href="#">
                    <img className="h-20 w-auto object-contain" src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759798025/logo-modified_g9f8cq.png'}></img>
                </a>
                <div className="hidden lg:flex items-center">
                    <ul className="flex space-x-4 font-bold">
                        <li><a className="hover:underline" href="/">ACCEUIL</a></li>
                        <li><a className="hover:underline" href="#apropos">À PROPOS</a></li>
                        <li><a className="hover:underline" href="#services">NOS SERVICES</a></li>
                        <li><a className="hover:underline" href="#references">RÉFÉRENCES</a></li>
                        <li><a className="hover:underline" href="#contact">CONTACT</a></li>
                    </ul>
                </div>
                <div onClick={()=>setShowMenu(p=>!p)} className="flex items-center lg:hidden">
                    <HiOutlineMenu className="text-3xl"></HiOutlineMenu>
                </div>
            </nav>
            {showMenu&&<div className="lg:hidden p-y-3">
                    <ul className="flex flex-col space-x-4 space-y-3 font-bold">
                        <li><a onClick={()=>setShowMenu(false)} className="hover:underline" href="/">ACCEUIL</a></li>
                        <li><a onClick={()=>setShowMenu(false)} className="hover:underline" href="#apropos">À PROPOS</a></li>
                        <li><a onClick={()=>setShowMenu(false)} className="hover:underline" href="#services">NOS SERVICES</a></li>
                        <li><a onClick={()=>setShowMenu(false)} className="hover:underline" href="#references">RÉFÉRENCES</a></li>
                        <li><a onClick={()=>setShowMenu(false)} className="hover:underline" href="#contact">CONTACT</a></li>
                    </ul>
                </div>}
        </header>
    )
}

export default Header