import Image from "next/image";

export default function TissueCultureWhyChooseUs() {
    return (<>
        <div className="flex justify-center bg-accent text-primary-content p-6 py-6 md:py-8 lg:py-16">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-[60%] lg:w-[50%] flex justify-center">
                    <div className="w-full md:w-[500px] mt-0 md:mt-36 lg:mt-0 mb-4 md:mb-0">
                        <h2 className="text-xl md:text-4xl lg:text-4xl text-blue-600 font-bold">Why Choose Us</h2>
                        <p className="mt-2 text-sm md:text-xl">
                            Prasad groups is an International plant tissue culture company with world class infrastructure , that specializes in custom propagation and tissue culture production of choice plants.Our plant catalog includes rare and hard-to-find plants, new introductions and the best of the tried and true, high volume selections. We have a worldwide network of contacts with plant explorers, hybridizers, and introducers who aid us in getting exactly what our customers want. Over the years, we have worked on hundreds and hundreds of different plants for our customers.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center md:justify-center lg:justify-start w-full md:w-[40%] lg:w-[50%]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="bg-white rounded-3xl w-[200px] md:w-[250px] pt-4 shadow-2xl">
                            <div className="flex justify-center items-center">
                                <Image src="/images/tissueculture_why_terrific_plants.png" width={1000} height={1000} alt="terrific_plants" className="w-10 md:w-16" />
                            </div>
                            <p className="text-center my-4 text-xs md:text-lg text-green-800 font-extrabold">We offer terrific plants to our growers</p>
                        </div>
                        <div className="bg-white rounded-3xl w-[200px] md:w-[250px] pt-4 shadow-2xl">
                            <div className="flex justify-center items-center">
                                <Image src="/images/tissueculture_why_catalog_includes.png" width={1000} height={1000} alt="catalog_includes" className="w-10 md:w-16" />
                            </div>
                            <p className="text-center my-4 text-xs md:text-lg text-green-800 font-extrabold">Our Catalog includes new introductions</p>
                        </div>
                        <div className="bg-white rounded-3xl w-[200px] md:w-[250px] pt-4 shadow-2xl">
                            <div className="flex justify-center items-center">
                                <Image src="/images/tissueculture_why_hybrid_plant.jpg" width={1000} height={1000} alt="hybrid_plant" className="w-10 md:w-16" />
                            </div>
                            <p className="text-center my-4 text-xs md:text-lg text-green-800 font-extrabold">Hybrid plant production lines</p>
                        </div>
                        <div className="bg-white rounded-3xl w-[200px] md:w-[250px] pt-4 shadow-2xl">
                            <div className="flex justify-center items-center">
                                <Image src="/images/tissueculture_why_micropopagation.png" width={1000} height={1000} alt="micropopagation" className="w-10 md:w-16" />
                            </div>
                            <p className="text-center my-4 text-xs md:text-lg text-green-800 font-extrabold">Tailored plant micropropagation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}