import Image from "next/image";

export default function TissueCulturePrinciples() {
    return (<>
        <div>
            <Image src={'/images/tissueculture_principles_banner.jpg'} width={500} height={500} alt="tissueculture_principles_banner" className="w-screen h-[250px] md:h-[300px] lg:h-[500px] object-cover" />
        </div>

        <div className="flex justify-center items-center bg-white p-4 py-10">
            <div>
                <h2 className="text-center font-bold text-3xl text-black">Welcome to the world of<span className="text-[#90a93d]">TissueCulture Principles</span></h2>
                <p className="text-center px-0 md:px-[120px] my-2 text-base text-black">
                    Discover the incredible journey of plant cell regeneration and the foundational principles behind it. Explore how totipotency, controlled environments, aseptic techniques, and differentiation contribute to the marvels of plant tissue culture.
                </p>
            </div>
        </div>

        <div className="flex justify-center items-center bg-[#f7fff0] p-6  text-black">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-end items-center ">
                    <div>
                        <h2 className="text-3xl font-semibold">Plant propagation</h2>
                        <p className="w-full lg:w-[500px]">
                            Welcome to Tissue Culture Principles! We are passionate about unraveling the wonders of plant tissue culture and its transformative impact on plant regeneration. Our mission is to delve into the realms of totipotency, controlled environments, aseptic techniques, and differentiation to foster a deeper understanding of this fascinating field. Join us on this journey as we explore the intricacies and possibilities of plant cell regeneration.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-8">
                    <div>
                        <Image src={'/images/plant_propagation.jpg'} width={500} height={500} alt="demo" className="w-[300px] h-[300px] rounded-tl-[70px] rounded-tr-3xl rounded-br-[70px] rounded-bl-3xl " style={{ boxShadow: '6px 8px 10px black' }} />
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-center font-bold text-2xl pt-10">TissueCulture Principles</h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 lg:px-28 pt-20 pb-10">
                    <div className="flex justify-center items-center mt-2 md:mt-0">
                        <div className="border bg-white text-black p-3 shadow rounded-lg">
                            <div className="flex justify-center items-center">
                                <Image src={'/images/tissue_culture_totipotency.jpg'} width={500} height={500} className="w-[120px] h-[120px] border p-1 rounded-full mt-[-80px] shadow-md" alt="tissue_culture_totipotency" />
                            </div>
                            <div className="my-2">
                                <h2 className="text-center text-green-800 font-semibold my-2">Totipotency</h2>
                                <p className="text-sm">
                                    PLPL Seeds harnesses the transformative power of totipotency, empowering us to cultivate robust plant varieties through plant tissue culture, fostering a world of agricultural abundance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-20 md:mt-0">
                        <div className="border bg-white text-black p-3 shadow rounded-lg">
                            <div className="flex justify-center items-center">
                                <Image src={'/images/tissue_culture_aseptictechnique.jpg'} width={500} height={500} className="w-[120px] h-[120px] border p-1 rounded-full mt-[-80px] shadow-md" alt="tissue_culture_aseptictechnique" />
                            </div>
                            <div className="my-2">
                                <h2 className="text-center text-green-800 font-semibold my-2">Aseptic technique</h2>
                                <p className="text-sm">
                                    It is essential for preventing contamination of the culture by microorganisms. All instruments, containers, and media must be sterilized, and the culture must be handled in a sterile environment, such as a laminar flow hood.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-20">
                        <div className="border bg-white text-black p-3 shadow rounded-lg">
                            <div className="flex justify-center items-center">
                                <Image src={'/images/tissue_culture_controlled_environment.jpg'} width={500} height={500} className="w-[120px] h-[120px] border p-1 rounded-full mt-[-80px] shadow-md" alt="tissue_culture_controlled_environment" />
                            </div>
                            <div className="my-2">
                                <h2 className="text-center text-green-800 font-semibold my-2">Controlled environment</h2>
                                <p className="text-sm">
                                    The culture must be grown in a controlled environment with the appropriate temperature, light, and humidity. The culture medium must also provide the necessary nutrients, hormones, and other growth factors.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center  mt-20">
                        <div className="border bg-white text-black p-3 shadow rounded-lg">
                            <div className="flex justify-center items-center">
                                <Image src={'/images/tissue_culture_differentiation.jpg'} width={500} height={500} className="w-[120px] h-[120px] border p-1 rounded-full mt-[-80px] shadow-md" alt="tissue_culture_differentiation" />
                            </div>
                            <div className="my-2">
                                <h2 className="text-center text-green-800 font-semibold my-2">Differentiation</h2>
                                <p className="text-sm">
                                    At PLPL Seeds, we harness the intricate process of plant cell differentiation, guided by plant hormones and other regulatory factors, to cultivate robust and resilient plant varieties.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}