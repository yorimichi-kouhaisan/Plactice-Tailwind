import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import footerImg from "public/images/Page6/logo-bookmark-footer.svg"


const Footer = () => {
    return (
        <footer className="py-16 bg-veryDarkBlue">
            {/* Footer Flex Container */}
            <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
                <div className="container flex flex-col items-center justify-start mx-auto
                                space-y-16 px-6 md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
                    <Image src={footerImg} alt="" className="mg-1" />
                    <Link href="#features" className="uppercase">Features</Link>
                    <Link href="#download" className="uppercase">Downloads</Link>
                    <Link href="#faq" className="uppercase">FAQ</Link>
                </div>

                {/* Social Container */}
                <div className="flex space-x-10">
                    <Link href="#">
                        <FontAwesomeIcon icon={faFacebook} className="w-6 text-white hover:text-softRed" />
                    </Link>
                    <Link href="#">
                        <FontAwesomeIcon icon={faTwitter} className="w-6 text-white hover:text-softRed" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;