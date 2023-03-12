import Link from "next/link";
import Image from "next/image";

import heroImage from "public/images/Page6/illustration-hero.svg"

const Hero = () => {
    return (
        <>
            <section id="hero">
                <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
                    {/* Content */}
                    <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
                        <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">A Simple Bookmark Manager</h1>
                        <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
                        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                        </p>
                        {/* Button */}
                        <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
                            <Link href={"#"} className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue
                                                        md:text-base hover:bg-white hover:text-softBlue ">Get it On Chrome</Link>
                            <Link href={"#"} className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300
                                                        md:text-base hover:bg-white hover:text-gray-600 ">Get it On Firefox</Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
                        <div className="bg-hero"></div>
                        <Image src={heroImage} alt="" className="relative z-10 lg:top-24 xl:top-0"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;