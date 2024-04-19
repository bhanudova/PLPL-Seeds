import Image from "next/image";

export default function SeedsCounter() {
    return (<>
        <div className=" bg-secondary-content">
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-5 md:gap-5 lg:gap-0 p-3 md:p-11 max-w-[90%] md:max-w-3xl lg:max-w-7xl m-auto ">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex gap-3 md:gap-0">
                                <div>
                                    <Image src="/images/home_firework.png" width={1000} height={1000} alt="home_firework" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-xl md:text-3xl lg:text-3xl text-primary-content text-center">120,000 tons</h2>
                                    <p className="font-bold text-xs md:text-sm lg:text-sm text-primary-content ms-0 md:ms-3 text-center md:text-start">Corn Cob drying capacity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <div className="flex gap-3 md:gap-0">
                                <div>
                                    <Image src="/images/home_tractor.png" width={1000} height={1000} alt="home_cow" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-xl md:text-3xl lg:text-3xl  text-primary-content text-center">110,000 tons</h2>
                                    <p className="font-bold text-xs md:text-sm lg:text-sm text-primary-content ms-0 md:ms-3 text-center md:text-start">Seed conditioning and packaging</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}