import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

import img1 from "/public/images/lesson5/facebook.png"
import img2 from "/public/images/lesson5/google.png"
import img3 from "/public/images/lesson5/image.jpg"

const Lesson5 = () => {
    return (
        // Global Container
        <div className="flex items-center justify-center min-h-screen">
            {/* Card Container */}
            <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl
                            rounded-2xl md:flex-row md:space-y-0 md:m-0">
                {/* Left Side */}
                <div className="p-6 md:p-20">
                    {/* Top Content */}
                    <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
                    <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
                        Log in to your account to upload or download pictures,
                        videos or music.
                    </p>
                    <input type="text" className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                           placeholder="Enter your email address">
                    </input>

                    {/* Middle Content */}
                    <div className="flex flex-col items-center justify-between mt-6 space-y-6 space-x-2 md:flex-row md:space-y-0">
                        <div className="font-thin text-cyan-700">Forgot passward</div>
                        <button className="w-full md:w-auto flex items-center justify-center p-6 space-x-4 font-sans
                                           font-bold text-white rounded-md px-9 bg-cyan-700 shadow-cyan-100
                                           hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5">
                            <span>Next</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>

                    {/* Border */}
                    <div className="mt-12 border-b border-b-gray-300"></div>
                    <p className="py-6 text-sm font-thin text-center text-gray-400">or log in with</p>
                    
                    {/* Bottom Buttons Container */}
                    <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                        <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm
                                    hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 duration-200 md:w-1/2 hover:scale-105">
                            <Image src={img1} alt="" className="w-9"/>
                            <span className="font-thin">Facebook</span>
                        </button>
                        <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm
                                    hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 duration-200 md:w-1/2 hover:scale-105">
                            <Image src={img2} alt="" className="w-9"/>
                            <span className="font-thin">Google</span>
                        </button>
                    </div>

                </div>
                {/* Right Side */}
                <Image src={img3} alt="" className="hidden md:block max-w-[430px]"/>
            </div>
        </div>
    );
}

export default Lesson5;