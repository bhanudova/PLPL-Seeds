import Image from "next/image";
export default function TissueCultureFacilities() {
    return (<>
        <div>
            <div>
                <Image src={'/images/tissueculture_facilities_banner.jpg'} width={500} height={500} alt="tissueculture_facilities_banner" className="w-screen h-[250px] md:h-[300px] lg:h-[500px] object-cover" />
            </div>

            <div className=" bg-white text-black">
                <div>
                    <div className="text-center pt-10">
                        <h2 className="text-4xl font-medium">Our Tissue Culture Facilities</h2>
                        <p className="px-0 md:px-[8rem] lg:px-[20rem] pt-4 pb-6 font-medium">
                            If you&#39;re interested in exploring our plant tissue culture facilities, we offer cutting-edge infrastructure to support various aspects of plant propagation and development.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-[#133827b6] p-10">
                            <div className="text-white">
                                <div className="flex gap-2"><span className="font-medium mt-2 text-3xl">Climate-controlled chambers</span></div>
                                <h2 className="mt-2">
                                    Controlled environments that regulate temperature
                                </h2>
                            </div>
                        </div>
                        <div className="bg-[#33a864] p-10">
                            <div className="text-white">
                                <div className="flex gap-2"><span className="font-medium mt-2 text-3xl">Laminar Flow Hood</span></div>
                                <h2 className="mt-2">
                                    Providing a sterile environment through controlled, purified airflow.
                                </h2>
                            </div>
                        </div>
                        <div className="bg-[#164912d7] p-10">
                            <div className="text-white">
                                <div className="flex gap-2"><span className="font-medium mt-2 text-3xl">Green House</span></div>
                                <h2 className="mt-2">
                                    Greenhouse is a controlled cultivation environment.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center p-4 lg:p-10 bg-white text-black">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex justify-center">
                        <Image src={'/images/innovation_hubs.jpg'} width={500} height={500} alt="innovation_hubs.jpg" className="md:w-[60rem] md:h-[30rem] lg:w-[30rem] lg:h-[20rem] object-cover" />
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-[30rem] lg:h-[30rem] p-8 lg:p-10 bg-[#F2F2F2]">
                        <div>
                            <h4 className="text-xl font-bold">Cultivating Innovation Hubs</h4>
                            <p>
                                Our state-of-the-art plant tissue culture facilities, featuring the BlossomLab and GrowthHub, serve as the backbone of efficient plant propagation. The BlossomLab specializes in rapid multiplication techniques, while the GrowthHub focuses on cultivating disease-free plant varieties. Together, these facilities play a pivotal role in modern agriculture, contributing to the creation of new plant varieties and disease-resistant plants. The integration of cutting-edge technologies ensures precise environmental control and nutrient delivery, fostering superior plant quality and propelling advancements in agricultural innovation.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-[30rem] lg:h-[30rem] p-8 lg:p-10 bg-[#F2F2F2] mt-0 lg:mt-[-10rem]">
                        <div>
                            <h4 className="text-xl font-bold">Plant Propagation and Development</h4>
                            <p>
                                Our facilities equipped with advanced technology, foster the growth and development of plant species under controlled conditions. With a dedicated team of experts, we ensure the highest standards in tissue culturing methodologies. Our facilities maintain a sterile environment, necessary for successful plant propagation through tissue culture methods. We adhere strictly to hygiene protocols and utilize cutting-edge technology to create optimal conditions for healthy plant growth. Through innovative techniques and continuous exploration, we strive to revolutionize the field of plant propagation, ensuring more robust and sustainable agricultural practices.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={'/images/tissueculture_facilities_propagation.jpg'} width={500} height={500} alt="tissueculture_facilities_propagation" className="md:w-[60rem] md:h-[30rem] lg:w-[30rem] lg:h-[20rem] object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}