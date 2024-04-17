import Image from "next/image";

export default function SeedsStrengths() {
    return (<>
        <div className="seeds-strengths-banner py-[30px] md:py-[70px] lg:py-[80px]">
            <div className="ml-4 md:ml-20">
                <div className="bg-[#ffffff6b] rounded-md md:bg-[#22212173] shadow-md w-[300px] md:w-[500px] p-2 md:p-10">
                    <h2 className="text-2xl md:text-5xl text-white font-bold">Foundations of Success</h2>
                    <p className="py-4 text-blue-50">
                        Our strengths lie in our commitment to innovation, evident in our high-yield hybrids and rigorous R&D.
                    </p>
                    <p className="text-blue-50">
                        Additionally, our robust infrastructure and extensive network drive agricultural progress and farmer satisfaction.
                    </p>
                </div>
            </div>
        </div>


        <div className="bg-black py-[50px] px-6 md:px-[60px] lg:md:px-[150px]">
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-l md:grid-cols-2 gap-4">
                    <div className="pt-10 flex justify-center items-center">
                        <div className="">
                            <h4 className="text-4xl text-blue-100 font-extrabold">Research & Development</h4>
                            <h1 className="font-bold text-5xl text-yellow-500 py-2">01</h1>
                            <p className="py-4 text-white">
                                Our new hybrids  made significant impact on the farm yield. Besides, a strong pipeline of hybrids is ready to be launched, which are tailored to yield in different environmental 	conditions.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="font-bold text-5xl text-yellow-500 py-2">02</h1>
                            <p className="text-white">
                                We have invested in state-of-the-art biotechnological interventions to enable efficient quality check measures. Besides, our biotechnology lab (enabling smart breeding) has made us the most productive and innovative in the industry; and we continue to strengthen returns, while accelerating the pace of innovation.
                            </p>
                        </div>
                        <div className="mt-10 md:mt-10">
                            <h1 className="font-bold text-5xl text-yellow-500 py-2">03</h1>
                            <p className='text-white'>
                                Through rigorous annual assessment involving around 100 trials per season, our seed company ensures the competitiveness and quality of our products. This robust evaluation process 	instills confidence in the performance and reliability of our offerings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="bg-white p-4 md:py-10 lg:p-20 flex justify-center items-center">
            <div className="flex justify-start items-center">
                <div className="flex flex-col md:flex-row">
                    <div>
                        <div className="w-full h-full md:w-[25rem] md:h-full lg:w-[25rem] lg:h-[30rem] shadow relative">
                            <div className="relative w-full h-full">
                                <Image src={'/images/seeds_strengths_infrastructure.jpg'} width={500} height={500} alt="demo" className="w-full h-full" />
                                {/* Add overlay div */}
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                    <div className="w-full lg:w-[22rem]">
                                        <h3 className="text-white font-bold text-5xl">Infrastructure</h3>
                                        <p className="text-white font-semibold mt-2">
                                            Our infrastructure exemplifies excellence, enabling seamless operations and top-tier quality throughout
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="p-4 md:p-10 w-full md:w-full text-black">
                            <dl className="flex gap-2 mb-6">
                                <dt className="font-bold text-4xl">01</dt>
                                <dd className="font-semibold ">
                                    Turnkey Infrastructure installation and management (from Land acquisition to Capital Equipment Installation)
                                </dd>
                            </dl>
                            <dl className="flex gap-2 mb-6">
                                <dt className="font-bold text-4xl">02</dt>
                                <dd className="font-semibold ">
                                    Toll Manufacturing and Processing (Seeds, Agro-chemicals) Warehousing and Cold Chain infrastructure
                                </dd>
                            </dl>
                            <dl className="flex gap-2 mb-6">
                                <dt className="font-bold text-4xl">03</dt>
                                <dd className="font-semibold ">
                                    R&D infrastructure
                                </dd>
                            </dl>
                            <dl className="flex gap-2 mb-6">
                                <dt className="font-bold text-4xl">04</dt>
                                <dd className="font-semibold ">
                                    120,000 tons Corn Cob drying capacity
                                </dd>
                            </dl>
                            <dl className="flex gap-2 mb-6">
                                <dt className="font-bold text-4xl">05</dt>
                                <dd className="font-semibold ">
                                    110,000 tons Seed conditioning and packaging
                                </dd>
                            </dl>
                            <dl className="flex gap-2 mb-6">
                                <dt className="font-bold text-4xl">06</dt>
                                <dd className="font-semibold ">
                                    Logistics and Distribution infrastructure
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white p-4 md:py-10 lg:p-20 flex justify-center items-center">
            <div className="flex justify-start items-center">
                <div className="flex flex-col md:flex-row">
                    <div className="md:order-2">
                        <div className="w-full h-full md:w-[25rem] md:h-full lg:w-[25rem] lg:h-[30rem] shadow relative">
                            <div className="relative w-full h-full">
                                <Image src={'/images/seeds_strengths_infrastructure_two.jpg'} width={500} height={500} alt="demo" className="w-full h-full" />
                                {/* Add overlay div */}
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                    <div className="w-full lg:w-[22rem]">
                                        <h3 className="text-white font-bold text-5xl">Reach</h3>
                                        <p className="text-white font-semibold mt-2">
                                            Global Impact through Seed Innovation and Extensive Grower Networks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="p-4 md:p-10 w-full md:w-full text-black">
                            <dl className="flex gap-2 mb-6">
                                <dt className="font-bold text-4xl">01</dt>
                                <dd className="font-semibold ">
                                    The Company’s relentless pursuit towards seed innovation has helped agricultural yields and earned the goodwill of farmers and distributors.
                                </dd>
                            </dl>
                            <dl className="flex gap-2 mb-6">
                                <dt className="font-bold text-4xl">02</dt>
                                <dd className="font-semibold ">
                                    Its premier selection of hybrid varieties are at the forefront of the Indian seed market as well as in the farmers fields.
                                </dd>
                            </dl>
                            <dl className="flex gap-2 mb-6">
                                <dt className="font-bold text-4xl">03</dt>
                                <dd className="font-semibold ">
                                    The Company has a dedicated ‘grower’ network of  production growers across different agro-climatic zones.
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}