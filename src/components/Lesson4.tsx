import Link from "next/link";
import Image from "next/image";

import img1 from "/public/images/lesson4/image1.jpg"
import img2 from "/public/images/lesson4/image2.jpg"
import img3 from "/public/images/lesson4/image3.jpg"
import img4 from "/public/images/lesson4/image4.jpg"
import img5 from "/public/images/lesson4/image5.jpg"
import img6 from "/public/images/lesson4/image6.jpg"
import imgBook from "/public/images/lesson4/bookmark.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Lesson4 = () => {
    return (
        // Global Container
        <div className="flex items-center justify-center min-h-screen bg-cyan-50">
            {/* CardContainer */}
            <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
                {/* MenuContainer */}
                <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8
                                md:mb-24 md:justify-end">
                    {/* Menu Items */}
                    <div className="group">
                        <Link href="#">Vector</Link>
                        <div className="mx-0 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div className="group">
                        <Link href="#">Illustrations</Link>
                        <div className="mx-0 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div className="group">
                        <Link href="#">Images</Link>
                        <div className="mx-0 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div className="group">
                        <Link href="#">Icons</Link>
                        <div className="mx-0 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                </div>
                {/* Search Container */}
                <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
                    {/* Input and SVG Container */}
                    <div className="flex justify-between border-b">
                        <input className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none" placeholder="Search" />
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                    {/* Upload Button */}
                    <button className="py-3 px-14 text-lg font-normal text-white bg-black border-black rounded-md
                                       shadow-2xl duration-200 hover:bg-white hover:text-black">
                        Upload
                    </button>
                </div>

                {/* Gallery Container */}
                <div className="grid gap-4 md:grid-cols-3">
                    {/* Image 1 */}
                    <div className="relative group">
                        <Image src={img1} alt="" className="w-72"/>
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0
                                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex items-center justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 likes -35 Shares</p>
                                </div>
                                <Image src={imgBook} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Image 2 */}
                    <div className="relative group">
                        <Image src={img2} alt="" className="w-72"/>
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0
                                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex items-center justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 likes -35 Shares</p>
                                </div>
                                <Image src={imgBook} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Image 3 */}
                    <div className="relative group">
                        <Image src={img3} alt="" className="w-72"/>
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0
                                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex items-center justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 likes -35 Shares</p>
                                </div>
                                <Image src={imgBook} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Image 4 */}
                    <div className="relative group">
                        <Image src={img4} alt="" className="w-72"/>
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0
                                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex items-center justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 likes -35 Shares</p>
                                </div>
                                <Image src={imgBook} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Image 5 */}
                    <div className="relative group">
                        <Image src={img5} alt="" className="w-72"/>
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0
                                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex items-center justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 likes -35 Shares</p>
                                </div>
                                <Image src={imgBook} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Image 6 */}
                    <div className="relative group">
                        <Image src={img6} alt="" className="w-72"/>
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0
                                        group-hover:opacity-100 bg-opacity-40">
                            <div className="flex items-center justify-between w-full">
                                <div className="font-normal">
                                    <p className="text-sm">Abstract Painting</p>
                                    <p className="text-xs">245 likes -35 Shares</p>
                                </div>
                                <Image src={imgBook} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lesson4;