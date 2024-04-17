import Image from "next/image";
import { FaSeedling } from "react-icons/fa"

export default function SeedsServices() {
    return (<>
        <div className="p-2 md:p-10 seed-service-main bg-accent-content text-primary-content">
            <div className="flex justify-center items-center">
                <div>
                    <div className="flex justify-center">
                        <div className="flex gap-1">
                            <h2 className="font-bold text-lg md:text-xl lg:text-2xl">Our Services</h2>
                            <span className="mt-1 text-green-500"><FaSeedling size={20} /></span>
                        </div>
                    </div>
                    <span className="flex justify-center">
                        <hr className="mb-3 w-36 md:w-48 border text-primary-content" />
                    </span>
                    <p className="px-2 md:px-20 mb-3 font-semibold text-center">
                        PSPL is not just about selling seeds. We offer a range of services to support you at every stage of your agricultural journey, including crop consulting, sustainable farming practices, access to the latest agricultural technologies, and expert guidance to maximize your crop yields and overall farming success.
                    </p>
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                            <div className="text-black p-3 rounded-md seed-box w-[18rem] bg-[#ffffff]">
                                <div className="flex justify-center">
                                    <Image src="/images/seed_service1.png" width={1000} height={1000} alt="seed_service1" className="w-8 md:w-12" />
                                </div>
                                <div className="text-center">
                                    <h2 className="font-semibold text-sm md:text-base lg:text-lg pt-2">Seed Selection</h2>
                                    <p className="text-xs md:text-xs lg:text-sm">Our experts are here to help you make the right choices.</p>
                                </div>
                            </div>
                            <div className="text-black p-3 rounded-md seed-box w-[18rem] bg-[#ffffff]">
                                <div className="flex justify-center">
                                    <Image src="/images/seed_service3.png" width={1000} height={1000} alt="seed_service3" className="w-8 md:w-12" />
                                </div>
                                <div className="text-center">
                                    <h2 className="font-semibold text-sm md:text-base lg:text-lg pt-2">Crop Management</h2>
                                    <p className="text-xs md:text-xs lg:text-sm">From planting to harvesting, we provide guidance on best practices to maximize your crop yield.</p>
                                </div>
                            </div>
                            <div className="text-black p-3 rounded-md seed-box w-[18rem] bg-[#ffffff]">
                                <div className="flex justify-center">
                                    <Image src="/images/seed_service4.png" width={1000} height={1000} alt="seed_service4" className="w-8 md:w-12" />
                                </div>
                                <div className="text-center">
                                    <h2 className="font-semibold text-sm md:text-base lg:text-lg pt-2">Educational Resources</h2>
                                    <p className="text-xs md:text-xs lg:text-sm">We offer an array of resources, including articles, guides, and videos, to grow and maintain healthy crops.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}