import Image from "next/image";

export default function TissueCultureCell_Types() {
    return (<>
        <div>
            <div>
                <Image src={'/images/tissueculture_cell_types_banner.jpg'} width={500} height={500} alt="tissueculture_cell_types_banner" className="w-screen h-[250px] md:h-[300px] lg:h-[500px] object-cover" />
            </div>

            <div className="flex justify-center items-center bg-[#FFF6F6] text-black p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="font-bold text-yellow-400 text-xl">WELCOME TO</h2>
                        <h1 className="text-3xl font-bold mt-1">PLANT TISSUE CULTURE</h1>
                        <p className="w-full lg:w-[22rem] mt-4 text-xl font-serif">
                            <i>
                                Cell Types and Techniques
                                Exploring the diverse cell types and advanced techniques in plant tissue culture!
                            </i>
                        </p>
                    </div>
                    <div className="w-full lg:w-[30rem] text-base">
                        <p>
                            Plant tissue culture involves the growth of plant cells, tissues, or organs in a controlled environment. It encompasses various cell types and sophisticated techniques for propagation, breeding, and research purposes.
                        </p>
                        <p className="mt-4">
                            Techniques like micropropagation, callus culture, and somatic embryogenesis offer innovative ways to clone plants, develop disease-free stock, and conduct genetic modifications.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center px-4 py-10 bg-[#FFFFFF] text-black">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-[25%] lg:w-[30%] flex justify-center items-center md:items-start lg:items-center">
                        <div>
                            <h2 className="text-2xl font-bold">Pioneering Plant Tissue Culture Solutions</h2>
                            <p>
                                At PLPL Seeds, we believe that plant cell types hold the key to a sustainable and prosperous future. Through our dedicated research and innovation, we are committed to unlocking their potential to transform agriculture, conserve our planet&#39;s biodiversity, and ensure food security for all.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] lg:w-[40%]">
                        <div className="flex gap-0 md:gap-0 lg:gap-8">
                            <div>
                                <Image src={'/images/pioneering_plant.jpg'} width={500} height={500} alt="pioneering_plants" className="w-[20rem] h-[15rem] object-cover border-2 border-blue-100" />
                            </div>
                            <div className="pt-[10rem] ml-[-10rem]">
                                <Image src={'/images/pioneering_plants.jpg'} width={500} height={500} alt="pioneering_plants" className="w-[20rem] h-[15rem] object-cover  border-2 border-blue-100" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[25%] lg:w-[30%] flex justify-center items-start lg:items-center">
                        <p>
                            These cell types are revolutionizing plant science, offering innovative approaches for cloning, disease resistance, and genetic modifications. They pave the way for sustainable agricultural practices and conservation strategies, shaping the future of plant biology and cultivation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}