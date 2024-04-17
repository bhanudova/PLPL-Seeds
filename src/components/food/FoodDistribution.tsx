import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
export default function FoodDistribution() {
    return (<>
        <div>
            <div className="relative w-full h-[28rem]">
                <Image src={'/images/food_production_distribution.jpg'} width={500} height={500} alt="food_production_distribution" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <div className="w-[20rem] md:w-[45rem] lg:w-[60rem]">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                            Food Distribution
                        </h3>
                        <p className="text-sm md:text-lg lg:text-xl font-bold mt-4">
                            PLPL Seeds is dedicated to transforming agriculture by providing top-quality seeds and embracing sustainable practices in food distribution. Join us in our commitment to build a greener and more sustainable future.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 ">
                <div className="bg-white p-6 flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="flex justify-center items-center">
                            <div>
                                <div className="flex justify-center items-center ">
                                    <Image src={'/images/food_distribution.jpg'} width={500} height={500} alt="food_distribution" className="rounded-full w-[20rem] h-[20rem] shadow-xl  p-4 bg-blue-50" />
                                </div>
                                <div className="mt-2">
                                    <h2 className="text-3xl font-bold">Our Dedicated Team</h2>
                                    <p>
                                        At PLPL Seeds, we take pride in our dedicated team of agricultural experts and professionals. Together, we are committed to advancing the field of agriculture and ensuring a sustainable future.
                                    </p>
                                    <p className="mt-4">
                                        Our team believes in the importance of quality seeds and innovative farming practices to contribute to the well-being of farmers and the environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10 md:mt-0">
                            <div>
                                <div className="mb-4">
                                    <div className="p-6 bg-[#F2F2F2]">
                                        <h1 className="font-bold text-5xl text-sky-400">01</h1>
                                        <p className="font-semibold">
                                            Quality Seeds for Sustainable Agriculture
                                        </p>
                                        <p>
                                            PLPL Seeds is dedicated to providing farmers with top-quality seeds, ensuring bountiful harvests and sustainable agriculture practices. Our commitment to quality is unwavering.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="p-6 bg-[#F2F2F2]">
                                        <h1 className="font-bold text-5xl text-sky-400">02</h1>
                                        <p className="font-semibold">
                                            Sustainable Farming for a Greener Tomorrow
                                        </p>
                                        <p>
                                            We actively promote and implement sustainable farming practices that contribute to a greener and healthier environment. PLPL Seeds believes in responsible agriculture for a better tomorrow.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="p-6 bg-[#F2F2F2]">
                                        <h1 className="font-bold text-5xl text-sky-400">03</h1>
                                        <p className="font-semibold">
                                            Innovation Driving Agricultural Excellence
                                        </p>
                                        <p>
                                            Innovation is at the heart of PLPL Seeds. We continuously explore new ways to enhance agricultural practices, driving excellence in the field and contributing to the prosperity of farmers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-[#2544B8] px-10 pt-10 text-white flex justify-center items-center">
                        <div>
                            <h2 className="text-2xl py-2 font-bold">Quality Seed Varieties</h2>
                            <p className="font-semibold text-sm">
                                PLPL Seeds offers a diverse range of high-quality seed varieties meticulously curated to meet the unique needs of farmers. Our commitment to excellence ensures a reliable source for superior seeds.
                            </p>
                            <div>
                                <MdOutlineArrowRightAlt className="text-8xl font-light" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#616BE8] px-10 pt-10 text-white">
                        <div>
                            <h2 className="text-2xl py-2 font-bold">Sustainable Agriculture Solutions</h2>
                            <p className="font-semibold text-sm">
                                Explore sustainable agriculture solutions with PLPL Seeds. Our practices prioritize environmental health, promoting soil fertility, water conservation, and biodiversity for a sustainable farming ecosystem.
                            </p>
                            <div>
                                <MdOutlineArrowRightAlt className="text-8xl font-light" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#36B1E1] px-10 pt-10 text-white">
                        <div>
                            <h2 className="text-2xl py-2 font-bold">Innovative Farming Techniques</h2>
                            <p className="font-semibold text-sm">
                                PLPL Seeds leads the way in adopting innovative farming techniques. From precision agriculture to smart farming technologies, we empower farmers with the tools to enhance productivity and efficiency.
                            </p>
                            <div>
                                <MdOutlineArrowRightAlt className="text-8xl font-light" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#5ee136] px-10 pt-10 text-white">
                        <div>
                            <h2 className="text-2xl py-2 font-bold">Community and Environmental Impact</h2>
                            <p className="font-semibold text-sm">
                                Join PLPL Seeds in making a positive impact on communities and the environment. Our initiatives focus on community welfare, sustainable farming, and environmental conservation for a better tomorrow.
                            </p>
                            <div>
                                <MdOutlineArrowRightAlt className="text-8xl font-light" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </>)
}