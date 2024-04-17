import Image from "next/image";

export default function SeedsProcessing() {
    return (<>
        <div className="seeds-processing-banner py-[30px] md:py-[70px] lg:py-[80px]">
            <div className="ml-4 md:ml-20">
                <div className="rounded-md bg-[#22212173] shadow-md w-[300px] md:w-[500px] p-2 md:p-10">
                    <h2 className="text-2xl md:text-5xl text-white font-bold">Field to Future Harvest</h2>
                    <p className="py-4 text-blue-50">
                        our seeds undergo a rigorous process ensuring top-tier quality.
                    </p>
                    <p className="text-blue-50">
                        Our meticulous process ensures purity and resilience.Preserved in state-of-the-art facilities, guaranteeing unmatched performance in every planting.
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-[#D8DFD0] text-black p-10 py-20  flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="w-full lg:w-[28rem]">
                    <h2 className="text-3xl font-bold">Advanced Seed Processing</h2>
                    <p className="mt-4 text-base">
                        Customer satisfaction is paramount to us. We continuously engage with farmers, agricultural experts, and researchers to gather insights and feedback, enabling us to refine our processes and offerings. This collaborative approach ensures that our seeds not only meet but anticipate the evolving demands of modern agriculture, empowering farmers for sustained success.
                    </p>
                </div>
                <div className="w-full lg:w-[28rem]">
                    <p className="mt-4 text-base">
                        At our state-of-the-art processing facility, we meticulously handle each stage of seed processing to ensure top-notch quality and viability for your agricultural needs. Our commitment to innovation drives us to constantly explore new methodologies and technologies, ensuring that our seed processing remains at the forefront of industry standards. Your trust in our seeds is our motivation to exceed expectations, delivering seeds that embody reliability, performance, and sustainability.
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-white text-black p-10 pt-28 pb-16 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10">
                <div>
                    <div>
                        <Image src={'/images/processing_harvesting.jpg'} width={500} height={500} alt="CM5One" className="w-[20rem] h-[15rem] md:w-[20rem] md:h-[10rem] lg:w-[20rem] lg:h-[15rem] " />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl mt-4">Harvesting</h2>
                        <p className="w-full lg:w-[20rem]  text-base mt-2">
                            We begin by meticulously collecting mature seeds from plants, employing either manual or mechanical harvesting methods tailored to each crop&#39;s needs.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={'/images/processing_cleaning.jpg'} width={500} height={500} alt="CM5One" className="w-[20rem] h-[15rem] md:w-[20rem] md:h-[10rem] lg:w-[20rem] lg:h-[15rem] " />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl mt-4">Cleaning</h2>
                        <p className="w-full lg:w-[20rem]  text-base mt-2">
                            Once harvested, our seeds undergo a thorough cleaning process to eliminate impurities like plant debris, stones, and other foreign materials. We utilize cutting-edge machinery like air screen cleaners, gravity separators, and indents for this purpose.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={'/images/processing_dryers.jpg'} width={500} height={500} alt="CM5One" className="w-[20rem] h-[15rem] md:w-[20rem] md:h-[10rem] lg:w-[20rem] lg:h-[15rem] " />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl mt-4">Drying</h2>
                        <p className="w-full lg:w-[20rem]  text-base mt-2">
                            Post-cleaning, we prioritize reducing seed moisture content to prevent mold and deterioration. Our seed dryers and specialized drying equipment create optimal conditions for controlled drying, preserving seed integrity.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={'/images/processing_threshing.jpg'} width={500} height={500} alt="CM5One" className="w-[20rem] h-[15rem] md:w-[20rem] md:h-[10rem] lg:w-[20rem] lg:h-[15rem] " />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl mt-4">Threshing</h2>
                        <p className="w-full lg:w-[20rem]  text-base mt-2">
                            Our mechanized threshers efficiently separate seeds from residual plant materials like husks or pods, ensuring an effective separation process.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={'/images/processing_conditioning.jpg'} width={500} height={500} alt="CM5One" className="w-[20rem] h-[15rem] md:w-[20rem] md:h-[10rem] lg:w-[20rem] lg:h-[15rem] " />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl mt-4">Conditioning</h2>
                        <p className="w-full lg:w-[20rem]  text-base mt-2">
                            Optimizing seed moisture and temperature is crucial for long-term viability. At PLPL, we utilize techniques like seed tempering to enhance germination rates and overall seed quality.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={'/images/processing_treatment.jpg'} width={500} height={500} alt="CM5One" className="w-[20rem] h-[15rem] md:w-[20rem] md:h-[10rem] lg:w-[20rem] lg:h-[15rem] " />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl mt-4">Treatment</h2>
                        <p className="w-full lg:w-[20rem]  text-base mt-2">
                            When necessary, seeds undergo treatment with fungicides, insecticides, or other enhancements to bolster their resistance to diseases and pests, fostering successful germination and robust crop establishment.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={'/images/processing_grading.jpg'} width={500} height={500} alt="CM5One" className="w-[20rem] h-[15rem] md:w-[20rem] md:h-[10rem] lg:w-[20rem] lg:h-[15rem] " />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl mt-4">Separation and Grading</h2>
                        <p className="w-full lg:w-[20rem]  text-base mt-2">
                            Through specialized equipment like seed graders, we meticulously separate and grade seeds based on size, weight, and other attributes, ensuring uniformity 	and superior quality in the final product.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={'/images/processing_packing.jpg'} width={500} height={500} alt="CM5One" className="w-[20rem] h-[15rem] md:w-[20rem] md:h-[10rem] lg:w-[20rem] lg:h-[15rem] " />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl mt-4">Packaging and Labeling</h2>
                        <p className="w-full lg:w-[20rem]  text-base mt-2">
                            Following these rigorous processing steps, our seeds are carefully packaged in containers designed for optimal storage and transportation. Detailed labels 	provide essential information such as seed variety, lot number, processing date, and other relevant details.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={'/images/processing_storage.jpg'} width={500} height={500} alt="CM5One" className="w-[20rem] h-[15rem] md:w-[20rem] md:h-[10rem] lg:w-[20rem] lg:h-[15rem] " />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl mt-4">Storage</h2>
                        <p className="w-full lg:w-[20rem]  text-base mt-2">
                            We maintain state-of-the-art storage facilities equipped with precise temperature, humidity, and ventilation controls. This environment safeguards seed viability, ensuring they&#39;re primed for future planting endeavors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}