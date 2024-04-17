import Image from "next/image"

export default function SeedsWhoWeAre({ whoWeAre, whoWeAreImg }: any) {
    return (<>
        <div className="flex justify-center items-center mt-[-8px] bg-secondary text-primary-content">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {
                    whoWeAre && whoWeAre.map(({ id, titleOne, paragraph, titleTwo, description }: any) => (
                        <div key={id} className="p-10">
                            <div>
                                <h2 className="text-xl md:text-3xl lg:text-4xl  font-bold">{titleOne}</h2>
                                <hr className="border-2 border-[#0e2329] w-full md:w-[460px] my-2" />
                                <p className="font-semibold mt-2 text-sm md:text-base lg:text-xl">
                                    Prasad Seeds Pvt. Ltd. (PSPL) is India’s largest outsourced partner in the Seed Processing domain, delivering end-to-end turnkey solutions to global Seed companies.
                                </p>
                            </div>
                            <div className="mt-5">
                                <h2 className="text-lg md:text-2xl lg:text-3xl  font-bold">Our Journey from Seeds to Global Reach</h2>
                                <p className="font-semibold mt-2 text-sm md:text-base lg:text-lg">
                                    Our journey began in 1978, supplying seeds to Indian Public Sector Seed companies. By 1982, we excelled in Jute Seed production and marketing in India and Bangladesh. We expanded into contract seed production and collaborated with Monsanto for modern Corncob processing in 1999. From 2000 to 2014, we established advanced seed processing facilities and R&D capabilities. In 2015, we went global with a high-tech Corncob drying facility in the Philippines and plan further expansion in Southeast Asia. Our journey reflects our commitment to innovative excellence in agriculture, making a positive global impact.
                                </p>
                            </div>
                        </div>
                    ))
                }
                <div className="px-10 md:px-0 mb-10 md:mb-4 m-0 md:m-10 lg:m-0">
                    <Image src="/images/seed_whoweare.jpg" width={1000} height={1000} alt="who_we_are" className="h-[100%]" />
                </div>
            </div>
        </div>
    </>)
}