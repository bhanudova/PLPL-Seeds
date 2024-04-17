import Image from "next/image";
import { GiVibratingSmartphone, GiSettingsKnobs, GiBoxTrap } from 'react-icons/gi';

export default function FertilizersRawMaterial() {
    return (
        <>
            <div>
                <div className="relative w-full h-full">
                    <Image src={'/images/GreenHarvest_Banner.jpg'} width={500} height={500} alt="GreenHarvest_Banner" className="w-full h-[20rem] md:h-[28rem] object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/75"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="w-[24rem] md:w-[50rem] lg:w-[60rem]">
                            <h3 className="text-white font-bold text-2xl md:text-5xl lg:text-6xl">
                                Fertilizers Raw Material
                            </h3>
                            <p className="text-white font-medium mt-4 text-sm md:text-xl lg:text-2xl mx-2 md:mx-0">
                                Discover the finest raw materials for crafting our premium fertilizers. Our commitment to quality ensures the optimal growth and health of your crops.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center bg-white text-black px-4 md:px-10 py-10 md:py-20">
                    <div>
                        <div className="grid grid-rows-1 md:grid-cols-2 gap-6 w-full md:w-[45rem] lg:w-[60rem]">
                            <div className="flex justify-center items-center">
                                <Image src={'/images/premium_fertilizer_ingredients.jpg'} width={500} height={500} alt="premium_fertilizer_ingredients" className="w-[30rem] h-[20rem] object-cover" />
                            </div>
                            <div>
                                <h2 className="font-bold text-xl md:text-3xl">Fertilizers Raw Material</h2>
                                <h4 className="font-bold text-sm">Crafting Nutrient-Rich Blends for Your Crops</h4>
                                <p className="text-sm mt-2">
                                    At GreenHarvest, we take pride in formulating precision-crafted fertilizers. Our commitment to excellence drives us to select the finest raw materials, ensuring nutrient-rich blends for the optimal growth and vitality of your crops.

                                    Meticulously choosing premium ingredients, including organic compounds and essential minerals, we provide a balanced mix of nutrients for each stage of plant growth. Emphasizing sustainability, our eco-friendly practices contribute to environmentally conscious agriculture.

                                    Dedicated to innovation, we continuously refine our fertilizers to meet the evolving needs of modern farming. Elevate your farming practices with GreenHarvest fertilizers, crafted with dedication to quality, precision, and a commitment to enhancing agricultural outcomes. Experience the impact of premium raw materials on the success of your crops.
                                </p>

                            </div>
                        </div>
                        <p className="w-full md:w-[45rem] lg:w-[60rem] font-medium mt-2">
                            At our fertilizer production facility, we take pride in sourcing the highest quality raw materials to create nutrient-rich blends for your crops. Our team carefully selects premium ingredients, including organic compounds and essential minerals, to ensure optimal plant growth and yield.
                            We prioritize sustainability in our raw material choices, supporting eco-friendly practices and reducing environmental impact. Each component in our fertilizers is scientifically chosen to provide a balanced mix of nutrients, promoting healthy soil and robust crop development.
                            Whether it&#39;s nitrogen for leafy green growth, phosphorus for strong root development, or potassium for overall plant resilience, our fertilizers are designed to meet the specific needs of your crops at every stage of growth.
                            By choosing our fertilizers, you are investing in a product crafted with precision, quality, and a commitment to enhancing agricultural practices. Experience the difference that premium raw materials can make in the success of your crops.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-10 text-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-4xl font-bold">Why Choose Our Raw Materials?</h2>
                            <p className="text-base my-2 font-semibold">Discover the Benefits</p>
                        </div>
                        <div className="flex justify-center items-center mt-6">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full">
                                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg p-6">
                                    <h2 className="font-bold text-2xl lg:text-5xl mb-2 text-center">1</h2>
                                    <div>
                                        <h3 className="font-semibold text-xl md:text-2xl mb-2 text-center">Premium Quality</h3>
                                        <p className="font-medium text-center text-xs md:text-base">
                                            Our fertilizers are made from high-quality raw materials, ensuring the best nutrients for your crops.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg p-6 mt-4 md:mt-0">
                                    <h2 className="font-bold text-2xl lg:text-5xl mb-2 text-center">2</h2>
                                    <div>
                                        <h3 className="font-semibold text-xl md:text-2xl mb-2 text-center">Scientifically Formulated</h3>
                                        <p className="font-medium text-center text-xs md:text-base">
                                            We use a precise and scientific formulation process to create a balanced and effective fertilizer blend.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg p-6 mt-4 md:mt-0">
                                    <h2 className="font-bold text-2xl lg:text-5xl mb-2 text-center">3</h2>
                                    <div>
                                        <h3 className="font-semibold text-xl md:text-2xl mb-2 text-center">Environmentally Friendly</h3>
                                        <p className="font-medium text-center text-xs md:text-base">
                                            Our raw materials are sourced with environmental sustainability in mind, promoting eco-friendly agriculture practices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center bg-gray-100  items-center p-6 md:p-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="mt-8 mb-8 text-center">
                            <h2 className="text-2xl md:text-4xl text-red-500 font-bold">Maximize Crop Yield with Premium Raw Materials</h2>
                            <p className="text-sm md:text-base my-2 font-semibold">
                                Elevate your agriculture practices and achieve optimal harvests.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border rounded-lg overflow-hidden bg-[#1F324E] text-white flex justify-center items-center">
                                <div className="p-4">
                                    <h2 className="text-xl md:text-3xl font-bold mb-2">Premium Raw Materials</h2>
                                    <p className="font-medium text-xs">
                                        Superior ingredients for robust and healthy crops.
                                    </p>
                                </div>
                            </div>
                            <div className="border rounded-lg overflow-hidden bg-[#C2D3EB] text-black">
                                <div className="p-4">
                                    <div className="flex justify-center items-center mb-4">
                                        <span className="flex justify-center items-center bg-black p-2 rounded-full">
                                            <GiVibratingSmartphone className="text-5xl text-white" />
                                        </span>
                                    </div>
                                    <h2 className="text-xl md:text-3xl font-bold mb-2">Tech-Enhanced Cultivation</h2>
                                    <p className="font-medium text-xs">
                                        Elevate your farming with technology-driven practices.
                                    </p>
                                </div>
                            </div>
                            <div className="border rounded-lg overflow-hidden">
                                <Image src={'/images/fertilizer_production.png'} width={500} height={500} alt="fertilizer_production" className="w-full h-full object-cover" />
                            </div>
                            <div className="border rounded-lg overflow-hidden bg-[#EFF4FA] text-black">
                                <div className="p-4">
                                    <div className="flex justify-center items-center mb-4">
                                        <span className="flex justify-center items-center bg-black p-2 rounded-full">
                                            <GiSettingsKnobs className="text-5xl text-white" />
                                        </span>
                                    </div>
                                    <h2 className="text-xl md:text-3xl font-bold mb-2">Sustainable Agriculture</h2>
                                    <p className="font-medium text-xs">
                                        Environmentally friendly practices for a greener future.
                                    </p>
                                </div>
                            </div>
                            <div className="border rounded-lg overflow-hidden">
                                <Image src={'/images/fertilizer_blend.png'} width={500} height={500} alt="fertilizer_blend" className="w-full h-full object-cover" />
                            </div>
                            <div className="border rounded-lg overflow-hidden bg-[#EFF4FA] text-black">
                                <div className="p-4">
                                    <div className="flex justify-center items-center mb-4">
                                        <span className="flex justify-center items-center bg-black p-2 rounded-full">
                                            <GiBoxTrap className="text-5xl text-white" />
                                        </span>
                                    </div>
                                    <h2 className="text-xl md:text-3xl font-bold mb-2">Tailored Fertilizer Blends</h2>
                                    <p className="font-medium text-xs">
                                        Customized solutions to meet your crop&#39;s unique needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
