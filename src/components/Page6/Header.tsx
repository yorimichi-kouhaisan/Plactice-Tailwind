import Image from "next/image";
import Link from "next/link";

import ScrollLink from "./ScrollLink";
import styles from "@/styles/hamburger.module.css"
import logoWhite from "public/images/Page6/logo-bookmark.svg"
import logoBlack from "public/images/Page6/logo-bookmark-footer.svg"
import { useState } from "react";

const Header = () => {
    const [hamburgerIsOpen, setHumbergerIsOpen] = useState(false)
    const hamburgerButtonClick = () => {
        setHumbergerIsOpen(!hamburgerIsOpen)
    }

    return (
        <>
            <header className="container relative mx-auto p-6">
                {/* Flex Container For Nav Items */}
                <div className="flex items-center justify-between space-x-20 my-6">
                    {/* Logo */}
                    <div className="z-30">
                        <Image src={hamburgerIsOpen ? logoBlack : logoWhite} alt="" id="logo"/>
                    </div>
                    {/* Menu Items */}
                    <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
                        <ScrollLink href={"#features"} className="tracking-widest hover:text-softRed">Features</ScrollLink>
                        <ScrollLink href={"#download"} className="tracking-widest hover:text-softRed">Download</ScrollLink>
                        <ScrollLink href={"#faq"} className="tracking-widest hover:text-softRed">FAQ</ScrollLink>
                        <ScrollLink href={"#login"} className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-red-100">Login</ScrollLink>
                    </div>

                    {/* Hamberger */}
                    <button id="menu-btn" onClick={hamburgerButtonClick} className={`${styles.hamburger} ${hamburgerIsOpen ? styles.open : "md:hidden"} z-30 block focus:outline-none`}>
                        <span className={`${styles.hamburgerTop}`}></span>
                        <span className={`${styles.hamburgerMiddle}`}></span>
                        <span className={`${styles.hamburgerBottom}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div id="menu" className={`${hamburgerIsOpen ? "" : "hidden"} fixed inset-0 z-20 flex flex-col items-center self-end w-full h-full min-h-screen
                                          px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500
                                          opacity-90 bg-veryDarkBlue`}>
                    <div className="w-full py-3 text-center hover:text-softRed">
                        <ScrollLink href="#features">Features</ScrollLink>
                    </div>
                    <div className="w-full py-3 text-center hover:text-softRed">
                        <ScrollLink href="#download">Downloads</ScrollLink>
                    </div>
                    <div className="w-full py-3 text-center hover:text-softRed">
                        <ScrollLink href="#faq">FAQ</ScrollLink>
                    </div>
                    <div className="w-full py-3 text-center hover:text-softRed">
                        <ScrollLink href="#">Login</ScrollLink>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;