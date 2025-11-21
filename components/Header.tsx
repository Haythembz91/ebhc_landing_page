'use client'
import Link from "next/link";
import { useState, useEffect, useRef } from "react"
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLargeLine } from "react-icons/ri";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                // Scrolling down
                setShowHeader(false);
            } else if (currentScrollY < lastScrollY.current) {
                // Scrolling up
                setShowHeader(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-[999] px-4 py-1 bg-amber-50/30 backdrop-blur-lg transition-transform duration-300 ${
            showHeader ? "translate-y-0" : "-translate-y-full"
        }`}>
            <nav className="w-full flex justify-between">
                <Link href="/">
                    <img
                        className="h-20 w-auto object-contain"
                        src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1759798025/logo-modified_g9f8cq.png'}
                        alt="EBHC Logo"
                    />
                </Link>

                <div className="hidden lg:flex items-center mx-auto">
                    <ul className="navMenu flex space-x-8 text-1xl font-bold">
                        <li><Link className="hover:underline" href="/">ACCEUIL</Link></li>
                        <li><Link className="hover:underline" href="/about">À PROPOS</Link></li>
                        <li><Link className="hover:underline" href="/#services">NOS SERVICES</Link></li>
                        <li><Link className="hover:underline" href="/#projets">NOS PROJETS</Link></li>
                        <li><Link className="hover:underline" href="/#references">RÉFÉRENCES</Link></li>
                    </ul>
                </div>

                <div className="hidden navMenu lg:flex items-center">
                    <ul className="navMenu flex space-x-2 text-1xl font-bold contactBtn items-center">
                        <li><Link className="hover:underline" href="/#contact">CONTACT</Link></li>
                        <BsArrowUpRightCircleFill />
                    </ul>
                </div>

                <div onClick={() => setShowMenu(p => !p)} className="flex items-center lg:hidden">
                    {!showMenu ? <HiOutlineMenu className="text-3xl" /> : <RiCloseLargeLine className="text-3xl" />}
                </div>
            </nav>

            {showMenu &&
                <div className="lg:hidden py-3">
                    <ul className="navMenu flex flex-col space-y-3 font-bold">
                        <li className="mx-auto"><Link onClick={() => setShowMenu(false)} className="hover:underline" href="/">ACCEUIL</Link></li>
                        <li className="mx-auto"><Link onClick={() => setShowMenu(false)} className="hover:underline" href="/about">À PROPOS</Link></li>
                        <li className="mx-auto"><Link onClick={() => setShowMenu(false)} className="hover:underline" href="/#services">NOS SERVICES</Link></li>
                        <li className="mx-auto"><Link onClick={() => setShowMenu(false)} className="hover:underline" href="/#projets">NOS PROJETS</Link></li>
                        <li className="mx-auto"><Link onClick={() => setShowMenu(false)} className="hover:underline" href="/#references">RÉFÉRENCES</Link></li>
                        <li className="mx-auto"><Link onClick={() => setShowMenu(false)} className="hover:underline" href="/#contact">CONTACT</Link></li>
                        <li className="mx-auto mt-5 flex"><FaPhoneAlt className="my-auto" /><Link href={"tel:+21652029998"}>(+216) 52 029 998</Link></li>
                        <li className="mx-auto"><Link className="flex" href={"mailto:helmi1benhammed@yahoo.com"}><MdEmail className="my-auto" />helmi1benhammed@yahoo.com</Link></li>
                    </ul>
                </div>
            }
        </header>
    )
}

export default Header;
