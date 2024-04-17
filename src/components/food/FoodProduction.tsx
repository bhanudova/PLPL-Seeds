import Image from "next/image";

export default function FoodProduction() {
    return (<>
        <div>
            {/* Banner Section */}
            <div className="relative w-full h-[28rem]">
                <Image src={'/images/food_production.jpg'} width={500} height={500} alt="CropVitalityBlend_Banner" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <div className="w-[20rem] md:w-[50rem] lg:w-[60rem]">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                            Food Production
                        </h3>
                        <p className="text-sm md:text-xl lg:text-xl font-bold mt-4">
                            Explore a world of culinary delight with PrasadSeeds Food Production. We specialize in crafting high-quality and delicious food products that elevate your dining experience.
                        </p>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center bg-white p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-center lg:justify-end items-center">
                            <Image src={'/images/quality_craftsmanship.jpg'} width={500} height={500} alt="CM15One" className="rounded-full w-[15rem] h-[15rem] md:w-[12rem] md:h-[12rem] bg-blue-50 p-2 object-cover" />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src={'/images/innovative_production.jpg'} width={500} height={500} alt="CM15One" className="rounded-full w-[15rem] h-[15rem] md:w-[12rem] md:h-[12rem] bg-blue-50 p-2 object-cover" />
                        </div>
                        <div className="flex justify-center lg:justify-end items-center">
                            <Image src={'/images/flavorful_creations.jpg'} width={500} height={500} alt="CM15One" className="rounded-full w-[15rem] h-[15rem] md:w-[12rem] md:h-[12rem] bg-blue-50 p-2 object-cover" />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src={'/images/sustainable_ingenuity.jpg'} width={500} height={500} alt="CM15One" className="rounded-full w-[15rem] h-[15rem] md:w-[12rem] md:h-[12rem] bg-blue-50 p-2 object-cover" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-black mt-4 md:mt-10 lg:mt-0">
                        <div>
                            <h2 className="text-3xl font-bold md:text-5xl text-center lg:text-start">Innovation in Every Bite</h2>
                            <p className="w-full md:w-[35rem] text-center lg:text-start mt-2">
                                At PrasadSeeds, we blend innovation with quality craftsmanship in every step of our food production. Explore a world where culinary excellence meets creative innovation, delivering a unique and delightful experience to your plate. Our commitment to using the finest ingredients and cutting-edge techniques ensures that each product is a testament to our passion for creating memorable dining moments. With a focus on flavor, freshness, and sustainability, PrasadSeeds is not just a food producer but a culinary journey you can trust and savor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#133a15] p-10 py-[4rem] text-white">
                <div className="ml-0 md:ml-6 lg:ml-[10rem]">
                    <h2 className="text-3xl md:text-5xl font-bold text-center md:text-start">Sustainable Practices</h2>
                    <p className="w-full md:w-[40rem] mt-2 text-sm text-center md:text-start">
                        At PrasadSeeds, sustainability is at the heart of our operations. We believe in responsible food production that not only delights your taste buds but also cares for the planet. Our commitment to sustainable practices encompasses every aspect of our journey, from sourcing ingredients to minimizing waste. Join us in creating a greener future, one delicious meal at a time.
                    </p>
                </div>
            </div>


            {/* 4th Section */}
            <div className="flex justify-center items-center bg-[#FAF6F5] text-black p-4 md:p-10">
                <div>
                    <div className="flex justify-center items-center">
                        <Image src={'/images/seeds_quality_production.jpg'} width={500} height={500} alt="seeds_quality_production" className="rounded-full w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem]" />
                    </div>
                    <div className="text-center mt-4">
                        <h2 className="text-3xl md:text-4xl font-semibold mx-0 md:mx-[5rem] lg:mx-0">Our Commitment to Seed Quality</h2>
                        <p className="mx-0 lg:mx-[10rem] mt-2 font-medium">
                            Immerse yourself in PrasadSeeds&#39; unwavering commitment to seed quality. Each seed is nurtured, cultivated, and harvested with precision, reflecting our dedication to delivering the highest quality in our food production philosophy.
                        </p>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                        <div className="bg-[#5dcf6e] p-4 text-center">
                            <h2 className="font-bold">Sustainable Seed Farming</h2>
                            <p>
                                Discover our sustainable seed farming practices, where we prioritize eco-friendly methods to cultivate agriculture seeds that not only nourish but also contribute to a healthier planet.
                            </p>
                        </div>
                        <div className="bg-[#9ad181] p-4 text-center">
                            <h2 className="font-bold">Innovative Seed Production</h2>
                            <p>
                                Learn about the innovative seed production techniques we employ, ensuring that each agriculture seed carries the potential to grow into a robust and flavorful ingredient for your culinary creations.
                            </p>
                        </div>
                        <div className="bg-[#7fb85e] p-4 text-center">
                            <h2 className="font-bold">Seeds Diversity</h2>
                            <p>
                                Explore the rich diversity of carefully selected agriculture seeds at PrasadSeeds, offering distinct flavors and unique characteristics for a delightful culinary experience that reflects our commitment to quality ingredients.
                            </p>
                        </div>
                        <div className="bg-[#acccac] p-4 text-center">
                            <h2 className="font-bold">Seeds and Environmental Harmony</h2>
                            <p>
                                Explore how our commitment to seed quality extends beyond taste, contributing to environmental harmony and sustainability in every aspect of our agriculture seed production process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </>)
}