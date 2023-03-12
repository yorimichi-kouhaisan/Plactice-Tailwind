import Image from "next/image";
import Link from "next/link";

import img1 from "public/images/Page6/logo-chrome.svg"
import img2 from "public/images/Page6/logo-firefox.svg"
import img3 from "public/images/Page6/logo-opera.svg"

const DownLoadBoxesList = [
    {
        id: "chrome",
        img: img1,
        description: "Add to Chrome",
        minimumVersion: "Minimum Version 62",
    },
    {
        id: "firefox",
        img: img2,
        description: "Add to Firefox",
        minimumVersion: "Minimum Version 55",
    },
    {
        id: "opera",
        img: img3,
        description: "Add to Opera",
        minimumVersion: "Minimum Version 46",
    },
]

const DownLoadBoxes = () => {
    return (
        <>
            <section id="download-boxes" className="py-32">
                <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 
                                md:space-y-0 md:space-x-7 md:flex-row">
                    {DownLoadBoxesList.map((box) => {
                        return (
                            <div  key={box.id} className="flex flex-col items-center py-6 px-6 space-y-4 text-center rounded-lg shadow-lg w-full md:w-1/3">
                                {/* Image */}
                                <Image src={box.img} alt="" />
                                {/* Text */}
                                <h5 className="pt-6 text-xl font-bold">{box.description}</h5>
                                <p className="text-gray-400">{box.description}</p>
                                {/* Dots */}
                                <div className="border-dotted border-b-4 w-40 border-gray-400"></div>                                
                                <Link href={"#"} className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue
                                                            hover:text-softBlue hover:bg-white border-softBlue">
                                    Add & Install Extension
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default DownLoadBoxes;