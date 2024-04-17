import Image from "next/image";

export default function FoodProcessing() {
    return (<>
        <div>
            <div className="relative w-full h-[28rem]">
                <Image src={'/images/food_production_processing.jpg'} width={500} height={500} alt="food_production_processing" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <div className="w-[20rem] md:w-[45rem] lg:w-[60rem]">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                            PrasadSeeds Food Processing
                        </h3>
                        <p className="text-sm md:text-xl lg:text-xl font-bold mt-4">
                            Elevate your culinary experience with PrasadSeeds Food Processing. We redefine excellence in every step of the process.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#292D33] p-4 md:p-8 flex justify-center items-center pb-16">
                <div>
                    <div className="text-center text-white">
                        <h2 className="text-3xl md:text-4xl mx-0 lg:mx-[15rem] font-bold mt-10">Explore PrasadSeeds Food Processing Excellence</h2>
                        <p className="font-medium text-xl mx-0 md:mx-4 lg:mx-[16rem] mt-4">
                            Immerse yourself in the artistry of PrasadSeeds Food Processing. Uncover the excellence we bring to every culinary creation.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pb-16">
                        <div className="bg-white text-black p-6 rounded">
                            <div className="flex justify-center items-center">
                                <Image src={'/images/high_quality_ingredients.jpg'} width={500} height={500} alt="high_quality_ingredients" className="w-[12rem] h-[12rem] rounded-full bg-blue-50 p-2 object-cover" />
                            </div>
                            <div className="text-center mt-2">
                                <h2 className="text-2xl font-bold">High-Quality Ingredients</h2>
                                <p className="font-serif">
                                    Elevate your dishes with our carefully selected, high-quality ingredients sourced for perfection.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white text-black p-6 rounded">
                            <div className="flex justify-center items-center">
                                <Image src={'/images/innovative_processing_techniques.jpg'} width={500} height={500} alt="innovative_processing_techniques" className="w-[12rem] h-[12rem] rounded-full bg-blue-50 p-2 object-cover" />
                            </div>
                            <div className="text-center mt-2">
                                <h2 className="text-2xl font-bold">Innovative Processing Techniques</h2>
                                <p className="font-serif">
                                    Experience culinary innovation with our state-of-the-art processing techniques, ensuring uniqueness in every bite.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white text-black p-6 rounded">
                            <div className="flex justify-center items-center">
                                <Image src={'/images/tailored_culinary_solutions.jpg'} width={500} height={500} alt="tailored_culinary_solutions" className="w-[12rem] h-[12rem] rounded-full bg-blue-50 p-2 object-cover" />
                            </div>
                            <div className="text-center mt-2">
                                <h2 className="text-2xl font-bold">Tailored Culinary Solutions</h2>
                                <p className="font-serif">
                                    We understand your unique needs. Our tailored culinary solutions ensure a perfect fit for your business or event.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white text-black p-6 rounded">
                            <div className="flex justify-center items-center">
                                <Image src={'/images/exceptional_taste_quality.jpg'} width={500} height={500} alt="exceptional_taste_quality" className="w-[12rem] h-[12rem] rounded-full bg-blue-50 p-2 object-cover" />
                            </div>
                            <div className="text-center mt-2">
                                <h2 className="text-2xl font-bold">Exceptional Taste and Quality</h2>
                                <p className="font-serif">
                                    Our commitment to exceptional taste and quality ensures a delightful culinary experience for your customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-10 lg:pb-[35rem] bg-white text-black">
                <div className="bg-[#8cc597] pb-[20rem] lg:pb-0 h-full lg:h-[30rem]  flex justify-center items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10 lg:mt-[33rem]">
                        <div className="flex justify-center items-center">
                            <div className="w-full lg:w-[25rem] m-4 md:m-10 lg:m-0">
                                <div className="bg-white p-5 rounded-md">
                                    <div>
                                        <Image src={'/images/seed_to_plate_quality.jpg'} width={500} height={500} className="w-full h-[16rem] md:h-[34rem] lg:h-[18rem] rounded-xl object-cover" alt="Seed to Plate Quality" />
                                    </div>
                                    <p className="text-lg md:text-3xl lg:text-lg">
                                        Elevate your culinary experience with PrasadSeeds Food Processing. Our commitment to quality extends from seed to plate, ensuring excellence in every stage of food processing.
                                    </p>
                                </div>
                                <div>
                                    <div className="mt-10 bg-white p-4 rounded-md">
                                        <Image src={'/images/commitment_to_excellence.jpg'} width={500} height={500} className="h-[18rem] md:h-[34rem] md:w-full lg:h-[18rem] rounded-xl object-cover" alt="Commitment to Excellence" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[25rem] hidden lg:block">
                            <h1 className="text-4xl font-bold text-white mt-4 mb-[2rem]">Our Commitment to Quality</h1>
                            <div className="bg-white p-5 rounded-md">
                                <div>
                                    <Image src={'/images/meticulous_processing.jpg'} width={500} height={500} className="h-[25rem] rounded-xl object-cover" alt="Meticulous Processing" />
                                </div>
                                <p className="text-lg md:text-2xl lg:text-lg">
                                    At PrasadSeeds, quality is not just a promise it&#39;s a commitment. Explore the meticulous processes that ensure top-notch food products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full block lg:hidden mt-[-20rem]">
                    <div className="flex justify-center items-centers m-4 md:m-10">
                        <div>
                            <h1 className="text-3xl md:text-6xl font-bold text-white mt-4 mb-[2rem]">Quality Breads are baked daily</h1>
                            <div className="bg-white p-5 rounded-md">
                                <div>
                                    <Image src={'/images/meticulous_processing.jpg'} width={500} height={500} className="h-[22rem] md:h-[40rem] w-full rounded-xl object-cover" alt="Meticulous Processing" />
                                </div>
                                <p className="text-lg md:text-3xl lg:text-lg">
                                    Elevate your culinary creations with PrasadSeeds. Our commitment to quality ensures that quality breads are baked daily, delivering an exceptional taste and experience for our customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}