import Image from "next/image";
import { TiTick } from "react-icons/ti";

export default function TissueCultureEquipment() {
    return (<>
        <div>
            <div>
                <Image src={'/images/tissueculture_equipment_banner.jpg'} width={500} height={500} alt="tissueculture_principles_banner" className="w-screen h-[250px] md:h-[300px] lg:h-[500px] object-cover" />
            </div>

            <div>
                <div className="flex justify-center items-center  bg-white p-6 ">
                    <div>
                        <div className="md:p-10 text-center w-full md:w-[45rem] lg:w-[70rem] text-black">
                            <h2 className="text-3xl md:text-5xl font-bold">Plant Research Evolution</h2>
                            <p className="text-sm mt-6">
                                Welcome to the forefront of tissue culture equipment innovation. We specialize in delivering advanced solutions that redefine botanical laboratory procedures and expedite groundbreaking plant research. Our dedication to precision and innovation ensures top-tier equipment designed to meet the unique demands of modern plant tissue studies. Explore our array of pioneering equipment, from specialized bioreactors to meticulous sterilization systems and automated imaging tools. Revolutionize your plant research endeavors with our cutting-edge equipment, enabling superior results and optimized laboratory workflows.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center bg-[#F2F2F2] text-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 gap-2">
                        <div className="flex justify-center items-center">
                            <div className="w-[25rem]">
                                <h2 className="text-2xl font-bold">
                                    Experience matters in plant tissue culture.
                                    Our collaboration spans the industry&#39;s pioneers
                                </h2>
                                <p>
                                    Utmost precision in every equipment - vital for fostering plant growth. Empowering cultivators with efficient tools, revolutionizing botanical studies. Advancing plant research, our solutions resonate. Cutting-edge technologies redefine plant propagation and experimentation, nurturing the growth journey. Trust our expertise in the roots of this field.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0 ms-0 md:ms-6">
                            <Image src={'/images/experience_matters_in_plant_tissue_cultur.jpg'} width={500} height={500} alt="experience_matters_in_plant_tissue_cultur" className="w-full h-[20rem] object-cover rounded" />
                        </div>

                        <div className="p-6 md:p-10">
                            <Image src={'/images/established_expertise_Trust_forged_throug.jpg'} width={500} height={500} alt="CM19One" className="w-[25rem] h-[15rem] md:w-[20rem] md:h-[25rem] object-cover" />
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-[25rem]">
                                <h2 className="text-2xl font-bold">
                                    Established expertise. Trust forged through experience and proficiency.
                                    Our Offerings in Plant Tissue Culture Equipment
                                </h2>
                                <p className="flex mt-6">
                                    <TiTick size={25} />Cultivation Chambers and Bioreactors
                                </p>
                                <p className="flex">
                                    <TiTick size={25} />Specialized Plant Cultivation Systems
                                </p>
                                <p className="flex">
                                    <TiTick size={25} />Precision Cutting Tools for Tissue Sampling
                                </p>
                                <p className="flex">
                                    <TiTick size={25} />Automated Imaging and Analysis Systems
                                </p>
                                <p className="flex">
                                    <TiTick size={25} />Handling Solutions for Fragile Plant Specimens
                                </p>
                                <p className="flex">
                                    <TiTick size={25} />Innovative Waste Management Solutions
                                </p>
                                <p className="flex">
                                    <TiTick size={25} />Advanced Surfaces for Tissue Culturing
                                </p>
                                <p className="flex">
                                    <TiTick size={25} />Consultancy for Lab Layout
                                </p>
                                <p className="flex">
                                    <TiTick size={25} />Production Optimization
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}