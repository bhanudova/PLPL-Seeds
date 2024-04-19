import Image from "next/image";

export default function SeedsWhyChooseUs() {
    return (<>
        <div className="bg-accent text-primary-content py-12 mt-[-1rem] ">
            <div className=" max-w-[90%] md:max-w-3xl lg:max-w-[74rem] mx-auto">
                <div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center">Why Choose Us?</h2>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-center">
                        Lorem, ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Nulla, aliquid?
                        Lorem, ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Nulla, aliquid?
                        Lorem, ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Nulla, aliquid?
                        Lorem, ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Nulla, aliquid?
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-center items-center shadow-md p-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <div className=" bg-yellow-500 p-2 rounded-full `">
                                        <Image src="/images/seeds_why_logo1.png" width={1000} height={1000} alt="seeds_why_logo1" className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-base md:text-lg lg:text-xl font-semibold">Quality Assurance</h2>
                                </div>
                                <p className="text-xs md:text-sm lg:text-sm font-medium">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum molestias dolorem at cumque possimus quasi nesciunt?
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center shadow-md p-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <div className=" bg-yellow-500 p-2 rounded-full `">
                                        <Image src="/images/seeds_why_logo2.png" width={1000} height={1000} alt="seeds_why_logo1" className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-base md:text-lg lg:text-xl font-semibold">Cleaning</h2>
                                </div>
                                <p className="text-xs md:text-sm lg:text-sm font-medium">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum molestias dolorem at cumque possimus quasi nesciunt?
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center shadow-md p-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <div className=" bg-yellow-500 p-2 rounded-full `">
                                        <Image src="/images/seeds_why_logo3.png" width={1000} height={1000} alt="seeds_why_logo1" className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-base md:text-lg lg:text-xl font-semibold">Grading</h2>
                                </div>
                                <p className="text-xs md:text-sm lg:text-sm font-medium">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum molestias dolorem at cumque possimus quasi nesciunt?
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center shadow-md p-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <div className=" bg-yellow-500 p-2 rounded-full `">
                                        <Image src="/images/seeds_why_logo4.png" width={1000} height={1000} alt="seeds_why_logo1" className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-base md:text-lg lg:text-xl font-semibold">Drying</h2>
                                </div>
                                <p className="text-xs md:text-sm lg:text-sm font-medium">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum molestias dolorem at cumque possimus quasi nesciunt?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src="/images/seeds_why.jpg" width={600} height={600} alt="WhyChooseUs" className="w-full h-full " />
                    </div>
                </div>
            </div>
        </div>
    </>)
}