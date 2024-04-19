import Image from "next/image";

export default function TissueCultureWhyChooseUs() {
    return (<>
        <div className="bg-accent text-primary-content py-12 mt-[-1rem] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto">
                <div>
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl uppercase text-blue-600 font-bold">Why Choose Us</h2>
                        <p className="mt-2 leading-5 md:leading-6 lg:leading-8 text-xs md:text-sm lg:text-base font-medium">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, eius, fugit excepturi molestiae autem dolores quisquam et tempora dicta sed similique sequi libero earum deserunt quaerat quae reiciendis nihil voluptas.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, eius, fugit excepturi molestiae autem dolores quisquam et tempora dicta sed similique sequi libero earum deserunt quaerat quae reiciendis nihil voluptas.
                            Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a. Lorem ipsum dolor sit. ipsum dolor sit amet consectetur, adipisicing elit. Culpa, eius, fugit excepturi molestiae autem dolores quisquam et tempora dicta sed similique sequi libero earum deserunt quaerat quae reiciendis nihil voluptas.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white py-4 shadow-md rounded-md">
                        <div className="flex items-center justify-center">
                            <Image src="/images/tissueculture_why_terrific_plants.png" width={600} height={600} alt="" className="w-20 h-20" />
                        </div>
                        <p className="text-base md:text-lg lg:text-xl font-semibold text-green-800 text-center">We offer terrific plants to our growers</p>
                    </div>

                    <div className="bg-white py-4 shadow-md rounded-md">
                        <div className="flex items-center justify-center">
                            <Image src="/images/tissueculture_why_catalog_includes.png" width={600} height={600} alt="" className="w-20 h-20" />
                        </div>
                        <p className="text-base md:text-lg lg:text-xl font-semibold text-green-800 text-center">Our Catalog includes new introductions</p>
                    </div>

                    <div className="bg-white py-4 shadow-md rounded-md">
                        <div className="flex items-center justify-center">
                            <Image src="/images/tissueculture_why_hybrid_plant.jpg" width={600} height={600} alt="" className="w-20 h-20" />
                        </div>
                        <p className="text-base md:text-lg lg:text-xl font-semibold text-green-800 text-center">Hybrid plant production lines</p>
                    </div>

                    <div className="bg-white py-4 shadow-md rounded-md">
                        <div className="flex items-center justify-center">
                            <Image src="/images/tissueculture_why_micropopagation.png" width={600} height={600} alt="" className="w-20 h-20" />
                        </div>
                        <p className="text-base md:text-lg lg:text-xl font-semibold text-green-800 text-center">Tailored plant micropropagation</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}