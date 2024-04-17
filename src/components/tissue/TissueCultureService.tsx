import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { GiTestTubes } from "react-icons/gi";
import { GiGreenhouse } from "react-icons/gi";

export default function TissueCultureService() {
    return (<>
        <div className="flex justify-center items-center bg-secondary-content text-primary-content">
            <div className="p-10">
                <div className="text-center">
                    <h2 className="font-bold text-3xl">Services We Offer</h2>
                    <div className="flex justify-center items-center">
                        <p className=" w-full lg:w-[35rem] text-center">
                            Our Tissue Culture Services are designed to provide a comprehensive range of offerings, ensuring the highest standards of quality and effectiveness
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-14 md:gap-4">
                        <div className="bg-white py-6 px-2 rounded-md shadow-md">
                            <div className="text-center ">
                                <div className="flex justify-center items-center ">
                                    <Image src="/images/tissueculture_s_production.png" width={1000} height={1000} alt="tissueculture_s_production.png" className="w-28 bg-green-800 rounded-full p-2" />
                                </div>
                                <h2 className="text-green-600 font-bold text-xl">Production Inoculation</h2>
                                <p className="text-purple-600 font-semibold text-sm">production of superior quality</p>
                            </div>
                        </div>
                        <div className="bg-white py-6 px-2 rounded-md shadow-md">
                            <div className="text-center ">
                                <div className="flex justify-center items-center ">
                                    <Image src="/images/tissueculture_s_greenhouse.png" width={1000} height={1000} alt="tissueculture_s_greenhouse.png" className="w-28 bg-green-800 rounded-full p-2" />
                                </div>
                                <h2 className="text-green-600 font-bold text-xl">Green House Services</h2>
                                <p className="text-purple-600 font-semibold text-sm">for acclimatization and hardening</p>
                            </div>
                        </div>
                        <div className="bg-white py-6 px-2 rounded-md shadow-md">
                            <div className="text-center ">
                                <div className="flex justify-center items-center ">
                                    <Image src="/images/tissueculture_s_autoclave.png" width={1000} height={1000} alt="/tissueculture_s_autoclave.png" className="w-28 bg-green-800 rounded-full p-2" />
                                </div>
                                <h2 className="text-green-600 font-bold text-xl">Autoclave</h2>
                                <p className="text-purple-600 font-semibold text-sm">supply of best quality plant media for production</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}