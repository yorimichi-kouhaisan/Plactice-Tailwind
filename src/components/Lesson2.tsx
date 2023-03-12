import Link from "next/link";

const Lesson2 = () => {
    return (
        // Global Container
        <div className="flex items-center justify-center min-h-screen bg-slate-800">
            {/* Inner Container */}
            <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
                {/* Col1 */}
                <div className="bg-slate-700 rounded-xl text-white">
                    {/* Upper Container */}
                    <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
                        <div className="text-center uppercase">Basic</div>
                        <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
                        <h3 className="mt-2 text-center">$1.99/Month</h3>
                        <div className="flex justify-center">
                            <Link href="#" className=" px-10 py-3 my-6 text-center border
                                                      border-violet-600 rounded-lg duration-200 hover:bg-violet-800
                                                      hover:border-violet-800">Purchase</Link>
                        </div>
                    </div>
                    {/* Border */}
                    <div className="border-t border-slate-700"></div>
                    {/* Lower Container */}
                    <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                        <div className="flex flex-col space-y-2">
                            {/* List Item 1 */}
                            <div className="flex justify-center">
                                <span className="text-sm ml-1">100GB of storage</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-sm ml-1">Option to add members</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-sm ml-1">Extra member benefits</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Col2 */}
                <div className="bg-violet-700 rounded-xl text-white">
                    {/* Upper Container */}
                    <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
                        <div className="text-center uppercase">Basic</div>
                        <h2 className="mt-10 font-serif text-5xl text-center">200GB</h2>
                        <h3 className="mt-2 text-center">$3.99/Month</h3>
                        <div className="flex justify-center">
                            <Link href="#" className=" px-10 py-3 my-6 text-center border
                                                      border-violet-600 rounded-lg duration-200 bg-violet-600
                                                      hover:bg-violet-800 hover:border-violet-800">Purchase</Link>
                        </div>
                    </div>
                    {/* Border */}
                    <div className="border-t border-slate-700"></div>
                    {/* Lower Container */}
                    <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                        <div className="flex flex-col space-y-2">
                            {/* List Item 1 */}
                            <div className="flex justify-center">
                                <span className="text-sm ml-1">200GB of storage</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-sm ml-1">Option to add members</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-sm ml-1">Extra member benefits</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Col3 */}
                <div className="bg-slate-700 rounded-xl text-white">
                    {/* Upper Container */}
                    <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
                        <div className="text-center uppercase">Basic</div>
                        <h2 className="mt-10 font-serif text-5xl text-center">2TB</h2>
                        <h3 className="mt-2 text-center">$1.99/Month</h3>
                        <div className="flex justify-center">
                            <Link href="#" className=" px-10 py-3 my-6 text-center border
                                                      border-violet-600 rounded-lg duration-200 hover:bg-violet-800
                                                      hover:border-violet-800">Purchase</Link>
                        </div>
                    </div>
                    {/* Border */}
                    <div className="border-t border-slate-700"></div>
                    {/* Lower Container */}
                    <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                        <div className="flex flex-col space-y-2">
                            {/* List Item 1 */}
                            <div className="flex justify-center">
                                <span className="text-sm ml-1">2TB of storage</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-sm ml-1">Option to add members</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-sm ml-1">Extra member benefits</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lesson2;