import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { GiTestTubes } from "react-icons/gi";
import { GiGreenhouse } from "react-icons/gi";

export default function TissueCultureService() {
    return (<>
        <div className="bg-secondary-content text-primary-content">
            <div className="max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto py-12">
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">Services We Offer</h2>
                    <div className="flex justify-center items-center">
                        <p className="text-xs md:text-sm lg:text-base font-medium text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem error, nam incidunt, placeat ea voluptatibus, eum reiciendis illo sint aut quidem odio ut aliquid commodi. Non veritatis sit labore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem error, nam incidunt, placeat ea voluptatibus, eum reiciendis illo sint aut quidem odio ut aliquid commodi. Non veritatis sit labore.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-4">
                        <div className="bg-white py-6 px-2 rounded-md shadow-md">
                            <div className="text-center ">
                                <div className="flex justify-center items-center ">
                                    <Image src="/images/tissueculture_s_production.png" width={1000} height={1000} alt="tissueculture_s_production.png" className="w-28 bg-green-800 rounded-full p-2" />
                                </div>
                                <h2 className="text-green-600 text-base md:text-lg lg:text-xl font-semibold">Production Inoculation</h2>
                                <p className="text-purple-600 text-xs md:text-sm lg:text-sm font-medium">production of superior quality</p>
                            </div>
                        </div>
                        <div className="bg-white py-6 px-2 rounded-md shadow-md">
                            <div className="text-center ">
                                <div className="flex justify-center items-center ">
                                    <Image src="/images/tissueculture_s_greenhouse.png" width={1000} height={1000} alt="tissueculture_s_greenhouse.png" className="w-28 bg-green-800 rounded-full p-2" />
                                </div>
                                <h2 className="text-green-600 text-base md:text-lg lg:text-xl font-semibold">Green House Services</h2>
                                <p className="text-purple-600 text-xs md:text-sm lg:text-sm font-medium">for acclimatization and hardening</p>
                            </div>
                        </div>
                        <div className="bg-white py-6 px-2 rounded-md shadow-md">
                            <div className="text-center ">
                                <div className="flex justify-center items-center ">
                                    <Image src="/images/tissueculture_s_autoclave.png" width={1000} height={1000} alt="/tissueculture_s_autoclave.png" className="w-28 bg-green-800 rounded-full p-2" />
                                </div>
                                <h2 className="text-green-600 text-base md:text-lg lg:text-xl font-semibold">Autoclave</h2>
                                <p className="text-purple-600 text-xs md:text-sm lg:text-sm font-medium">supply of best quality plant media for production</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}