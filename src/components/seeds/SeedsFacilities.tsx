import Image from "next/image";

export default function SeedsFacilities() {
    return (<>
        {/* Banner Section */}
        <div className="seeds-facilities-banner py-[30px] md:py-[70px] lg:py-[86px]">
            <div className="ml-4 md:ml-20">
                <div className="rounded-md bg-[#22212173] shadow-md w-[300px] md:w-[500px] p-2 md:p-10">
                    <h2 className="text-2xl md:text-5xl text-white font-bold">Powering Seed Excellence</h2>
                    <p className="py-4 text-blue-50">
                        Driving agricultural innovation, our company pioneers resilient crop varieties through cutting-edge R&D.

                    </p>
                    <p className="text-blue-50">
                        Our advanced seed processing facilities ensure superior seed quality and viability, preserving genetic integrity for optimal yields.
                    </p>
                </div>
            </div>
        </div>

        <div className="flex justify-center items-center bg-white text-black p-10 md:py-20 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="w-full lg:w-[24rem] flex justify-center items-center">
                    <div>
                        <h2 className="font-bold text-4xl">Infrastructure</h2>
                        <div className="flex gap-4">
                            <hr className="border-4 w-20 mt-2 border-[#FEBC44]" /><h3 className="font-semibold text-2xl text-[#FEBC44]">Our advantages:</h3>
                        </div>
                        <ul className="list-disc">
                            <li>World Class Equipment</li>
                            <li>Greenhouse, Polyhouse, and Glasshouse facilities enhance R&D precision for seed development</li>
                            <li>Dryer Facilities</li>
                            <li>Storage space</li>
                            <li>Cold Storage</li>
                            <li>Quality Control Laboratory</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div>
                        <div className="bg-[#FEBC44] w-[20rem] h-[20rem] lg:w-[28rem] lg:h-[26rem]"></div>
                        <Image src={'/images/glasshouse_facilities.png'} width={500} height={500} alt="glasshouse_facilities" className="relative mt-[-21rem] right-4 md:right-10 md:mt-[-22rem] lg:mt-[-28rem] w-[20rem] h-[20rem] lg:w-[28rem] lg:h-[26rem] object-cover" />
                    </div>
                </div>

            </div>
        </div>

        <div className="bg-gradient-to-tl text-white pt-20 pb-16  from-[#334d2b] via-[#7efc91] to-black flex justify-center items-center">
            <div>
                <div>
                    <h2 className="font-bold text-2xl mx-4 md:mx-0 md:text-4xl text-center pb-6 ">Essential Facilities for a Seed Company</h2>
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 md:p-10 lg:p-0">
                            <div>
                                <Image src={'/images/essential_facilities_1.png'} width={500} height={500} alt="essential_facilities_1" className="w-[22rem] h-[20rem] md:w-full md:h-[20rem] lg:w-[22rem] lg:h-[25rem] " />
                            </div>
                            <div>
                                <Image src={'/images/essential_facilities_2.png'} width={500} height={500} alt="essential_facilities_2" className="w-[22rem] h-[20rem] md:w-full md:h-[20rem] lg:w-[22rem] lg:h-[25rem] " />
                            </div>
                            <div>
                                <Image src={'/images/essential_facilities_3.png'} width={500} height={500} alt="essential_facilities_3" className="w-[22rem] h-[20rem] md:w-full md:h-[20rem] lg:w-[22rem] lg:h-[25rem] " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-[-80px]">
                    <div className="bg-[#173f23] shadow p-10 w-[20rem] md:w-[40rem] lg:w-[55rem]">
                        <p className="font-semibold font-sans  text-lg md:text-xl">
                            At our seed company, essential facilities drive innovation, ensure seed quality, validate performance, and maintain high standards, crucial pillars supporting our commitment to delivering top-quality seeds. These critical facilities are at the core of our success, ensuring excellence in every seed we provide.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    </>)
}