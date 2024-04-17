import Image from "next/image";

export default function SeedsWhyChooseUs() {
    return (<>
        <div className="bg-accent h-full md:h-full lg:h-[610px] text-primary-content pt-14 pb-10 md:pb-20 lg:pb-0">
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="flex justify-end p-5">
                        <div className="w-[600px]">
                            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
                            <p className="py-4 font-semibold text-base">Enhancing the Quality and Performance of Seeds for a Thriving Agricultural Landscape</p>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div>
                                    <div className="flex gap-1">
                                        <div className="rounded-full p-2 bg-yellow-500">
                                            <Image src="/images/seeds_why_logo1.png" width={1000} height={1000} alt="seeds_why_logo1" className="w-7 h-7" />
                                        </div>
                                        <h2 className="font-bold text-xl">Quality Assurance</h2>
                                    </div>
                                    <div className="flex justify-center md:justify-end mt-[-5px]">
                                        <p className="w-[250px]">We maintain strict quality control throughout the seed processing journey, rigorously testing germination rates, purity, and overall seed health to ensure only the best reach farmers.</p>
                                    </div>
                                </div>
                                <div className="mt-8 md:mt-0">
                                    <div className="flex gap-1">
                                        <div className="rounded-full p-2 bg-yellow-500">
                                            <Image src="/images/seeds_why_logo2.png" width={1000} height={1000} alt="2" className="w-7 h-7" />
                                        </div>
                                        <h2 className="font-bold text-xl">Cleaning</h2>
                                    </div>
                                    <div className="flex justify-center md:justify-end mt-[-5px]">
                                        <p className="w-[250px]">We thoroughly remove impurities and debris from harvested seeds, ensuring their purity and preventing disease spread.</p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="flex gap-1">
                                        <div className="rounded-full p-2 bg-yellow-500">
                                            <Image src="/images/seeds_why_logo3.png" width={1000} height={1000} alt="seeds_why_logo4" className="w-7 h-7" />
                                        </div>
                                        <h2 className="font-bold text-xl">Grading</h2>
                                    </div>
                                    <div className="flex justify-center md:justify-end mt-[-5px]">
                                        <p className="w-[250px]">We carefully sort seeds based on size, shape, and density for uniform germination and growth, leading to consistent crop development.</p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="flex gap-1">
                                        <div className="rounded-full p-2 bg-yellow-500">
                                            <Image src="/images/seeds_why_logo4.png" width={1000} height={1000} alt="seeds_why_logo4" className="w-7 h-7" />
                                        </div>
                                        <h2 className="font-bold text-xl">Drying</h2>
                                    </div>
                                    <div className="flex justify-center md:justify-end mt-[-5px]">
                                        <p className="w-[250px]">We precisely lower seed moisture content to optimal levels for extended shelf life and viability in subsequent planting seasons.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-center lg:justify-normal">
                        <div className="mt-10 md:mt-20 m-6 md:m-0">
                            <div className="bg-white w-full h-[280px] md:w-[570px] md:h-[400px] lg:w-[500px] lg:h-[420px] p-2">
                                <Image src="/images/seeds_why.jpg" width={1000} height={1000} alt="WhyChooseUs" className="w-full h-full md:w-[570px] md:h-[385px] lg:w-[485px] lg:h-[385px] pt-0 md:pt-4 ms-[0px] md:ms-[-20px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}