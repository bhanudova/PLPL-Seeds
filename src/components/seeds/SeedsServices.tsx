import Image from "next/image";
import { FaSeedling } from "react-icons/fa"

export default function SeedsServices() {
    return (<>
        <div className="seed-service-main bg-accent-content text-primary-content">
            <div className="flex justify-center items-center py-12 max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto">
                <div>
                    <div className="flex justify-center">
                        <div className="flex gap-1">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">Our Services</h2>
                            <span className="mt-1 text-green-500"><FaSeedling size={20} /></span>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.     PLPL is not just about selling seeds. We offer a range of services to support you at every stage of your agricultural journey, including crop consulting, sustainable farming practices, access to the latest agricultural technologies, and expert guidance to maximize your crop yields and overall farming success.
                    </p>
                    <div className="flex justify-center items-center mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-[90%] md:w-full lg:w-[80%] gap-6">
                            <div className="text-black p-3 rounded-md seed-box bg-[#ffffff]">
                                <div className="flex justify-center">
                                    <Image src="/images/seed_service1.png" width={1000} height={1000} alt="seed_service1" className="w-8 md:w-12" />
                                </div>
                                <div className="text-center">
                                    <h2 className="text-base md:text-lg lg:text-xl font-semibold pt-2">Seed Selection</h2>
                                    <p className="text-xs md:text-sm lg:text-sm font-medium">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, qui!
                                    </p>
                                </div>
                            </div>
                            <div className="text-black p-3 rounded-md seed-box bg-[#ffffff]">
                                <div className="flex justify-center">
                                    <Image src="/images/seed_service3.png" width={1000} height={1000} alt="seed_service3" className="w-8 md:w-12" />
                                </div>
                                <div className="text-center">
                                    <h2 className="text-base md:text-lg lg:text-xl font-semibold pt-2">Crop Management</h2>
                                    <p className="text-xs md:text-sm lg:text-sm font-medium">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, qui!
                                    </p>
                                </div>
                            </div>
                            <div className="text-black p-3 rounded-md seed-box bg-[#ffffff]">
                                <div className="flex justify-center">
                                    <Image src="/images/seed_service4.png" width={1000} height={1000} alt="seed_service4" className="w-8 md:w-12" />
                                </div>
                                <div className="text-center">
                                    <h2 className="text-base md:text-lg lg:text-xl font-semibold pt-2">Educational Resources</h2>
                                    <p className="text-xs md:text-sm lg:text-sm font-medium">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, qui!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}