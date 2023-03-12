import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Tabs from "./Tabs";
import DownLoadBoxes from "./DownLoadBoxes";
import Accordion from "./Accordion";

const Page6 = () => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewpoint" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link
                href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap"
                rel="stylesheet"
                />
            </Head>
            
            <main className="overflow-x-hidden font-sans">
                {/* Navigation */}
                <Header />

                {/* Hero Section */}
                <Hero />

                {/* Feature Heading */}
                <section id="features">
                    <div className="flex flex-col items-center justify-center mt-16 px-6">
                        <h2 className="mb-6 text-4xl font-semibold">Features</h2>
                        <p className="max-w-md text-center text-grayishBlue">
                        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                        </p>
                    </div>
                </section>

                {/* Features Tabs */}
                <Tabs />

                {/* Download Heading */}
                <section id="download">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-6 text-3xl font-semibold text-center">
                            Download the extension
                        </h2>
                        <p className="max-w-lg mx-auto text-center text-grayishBlue">
                            We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
                        </p>
                    </div>
                </section>

                {/* Download Boxes */}
                <DownLoadBoxes />

                {/* FAQ Heading */}
                <section id="faq">
                    <div className="container mx-auto">
                        <h2 className="mb-6 text-3xl font-semibold text-center">
                            Frequently Asked Questions
                        </h2>
                        <p className="max-w-lg mx-auto text-center text-grayishBlue">
                            Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
                        </p>
                    </div>
                </section>

                {/* FAQ Accordion */}
                <Accordion />

                {/* Newsletter Section */}
                <section id="newsletter" className="bg-softBlue">
                    {/* Main Container */}
                    <div className="max-w-lg mx-auto py-24">
                        <p className="mb-6 text-lg tracking-widget text-center text-white uppercase">
                            35,000+ Already Joined
                        </p>
                        <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
                            Stay up-to-date with waht we're doing
                        </h2>

                        {/* Form */}
                        <form className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base md:flex-row md:space-y-0
                                         md:space-x-4 md:px-0">
                            {/* Input Button Container */}
                            <div className="flex flex-col justify-center items-center mx-auto md:flex-row md:mx-0">
                                <input
                                    type="text"
                                    className="px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
                                    placeholder="Enter your email address"
                                />
                                <input
                                    type="submit"
                                    className="px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
                                    value="Contact Us"
                                />
                            </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    );
}

export default Page6;