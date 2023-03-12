import Image from "next/image";
import Link from "next/link";

import tab1 from "public/images/Page6/illustration-features-tab-1.svg"
import tab2 from "public/images/Page6/illustration-features-tab-2.svg"
import tab3 from "public/images/Page6/illustration-features-tab-3.svg"
import { useState } from "react";

const tabs = [
        {
            id: "tab1",
            active: true,
            title: "Simple Bookmarking",
            img: tab1,
            panel: "Bookmark in one click",
            paragraph: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        },
        {
            id: "tab2",
            active: false,
            title: "Speedy Searching",
            img: tab2,
            panel: "Intelligent search",
            paragraph: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        },
        {
            id: "tab3",
            active: false,
            title: "Easy Sharing",
            img: tab3,
            panel: "Share your bookmarks",
            paragraph: "Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button."
        }
]


const Tabs = () => {
    const [tabsState, setTabs] = useState(tabs)

    const changeTabClick = (event) => {
        const nextTabState = tabsState.map((prevTabState) => {
            if (event.target.id === prevTabState.id){
                prevTabState.active = true
            } else {
                prevTabState.active = false
            }
            return {
                ...prevTabState,
                active: prevTabState.active,
            }
        })
        
        setTabs(nextTabState)
    }

    return (
        <>
            {/* Features Tabs */}
            <section id="tabs">
                {/* Tabs/Panels Container */}
                <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
                    <div className="bg-tabs"></div>
                    <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
                        {/* Tab */}
                        {tabsState.map((tab) => {
                            return (
                                <div key={tab.id} className="flex justify-center text-center text-gray-600 border-b md:border-0 hover:text-softRed md:w-1/3">
                                    <div id={tab.id} className={`py-5 border-b-4 cursor-pointer ${tab.active && "border-softRed"}`}
                                         onClick={changeTabClick}>
                                        {tab.title}
                                    </div>
                                </div>                                
                            )
                        })}
                    </div>
                    <section id="panels" className="container mx-auto">
                        {/* Panel */}
                        {tabsState.map((tab) => {
                            if (tab.active === true)
                                return (
                                    <div key={tab.id} className="flex flex-col py-5 md:flex-row md:space-x-7">
                                    {/* Panel Image */}
                                        <div className="flex justify-center md:w-1/2">
                                            <Image src={tab.img} alt="" className="relative z-10"/>
                                        </div>
                                        {/* Panel Content */}
                                        <div className="flex flex-col space-y-8 md:w-1/2">
                                            <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                                                {tab.panel}
                                            </h3>
                                            <p className="max-w-md text-center text-grayishBlue md:text-left">
                                                {tab.paragraph}
                                            </p>
                                            <div className="mx-auto md:mx-0">
                                                <Link href={"#"} className="px-6 py-3 mx-auto mt-4 font-semibold text-white border-2 
                                                                            border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue
                                                                            hover:border-softBlue hover:border-2">
                                                    MoreInfo
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                        })}
                    </section>
                </div>
            </section>
        </>

    );
}

export default Tabs;