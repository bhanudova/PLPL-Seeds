import Image from "next/image";

export default function FoodExpertise() {
    return (<>
        <div className="flex justify-center pb-4 md:pb-2 bg-secondary text-primary-content">
            <div>
                <h2 className="text-center text-xl md:text-2xl lg:md:text-3xl font-bold mt-6 md:mt-10 ">We have expertise in these areas</h2>
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-6 lg:p-10 gap-4 md:gap-6 lg:gap-10 w-full">
                        <div className="bg-green-900/20 rounded-lg">
                            <div className="p-4 md:p-6">
                                <div>
                                    <Image src="/images/food_box1.jpg" width={1000} height={1000} alt="food_box1" />
                                </div>
                                <h2 className=" font-bold text-base md:text-lg lg:text-xl mt-2 md:mt-2">Harvesting Excellence</h2>
                                <p className="text-xs md:text-sm lg:text-base">
                                    Our journey begins in the fields, where we meticulously harvest the finest fruits and vegetables at their peak ripeness. Our expert teams carefully select and pick each item to maintain quality and taste.
                                </p>
                            </div>
                        </div>
                        <div className="bg-green-900/20 rounded-lg">
                            <div className="p-4 md:p-6">
                                <div>
                                    <Image src="/images/food_box2.jpg" width={1000} height={1000} alt="food_box2" />
                                </div>
                                <h2 className=" font-bold text-base md:text-lg lg:text-xl mt-2 md:mt-2">Precise Sorting and Grading</h2>
                                <p className="text-xs md:text-sm lg:text-base">
                                    After harvest, the produce goes through a rigorous sorting and grading process. Our state-of-the-art technology and skilled workforce meticulously remove any imperfections or undesirable items, ensuring only the best reach our processing facilities.
                                </p>
                            </div>
                        </div>
                        <div className="bg-green-900/20 rounded-lg">
                            <div className="p-4 md:p-6">
                                <div>
                                    <Image src="/images/food_box3.jpg" width={1000} height={1000} alt="food_box3" />
                                </div>
                                <h2 className=" font-bold text-base md:text-lg lg:text-xl mt-2 md:mt-2">Impeccable Cleaning and Washing</h2>
                                <p className="text-xs md:text-sm lg:text-base">
                                    To guarantee cleanliness and safety, our produce undergoes thorough cleaning and washing procedures, utilizing advanced techniques and eco-friendly solutions at a rate of 5 metric tons per hour, effectively eliminating dirt and contaminants and leaving the produce in its purest form.
                                </p>
                            </div>
                        </div>
                        <div className="bg-green-900/20 rounded-lg">
                            <div className="p-4 md:p-6">
                                <div>
                                    <Image src="/images/food_box4.jpg" width={1000} height={1000} alt="food_box4" />
                                </div>
                                <h2 className=" font-bold text-base md:text-lg lg:text-xl mt-2 md:mt-2">Craftsmanship in Cutting and Peeling</h2>
                                <p className="text-xs md:text-sm lg:text-base">
                                    Depending on the product requirements, our skilled artisans, supported by cutting-edge equipment capable of processing up to 1 metric ton per hour, expertly cut, slice, or peel the produce, ensuring precision tailored to the specific needs of our various product lines
                                </p>
                            </div>
                        </div>
                        <div className="bg-green-900/20 rounded-lg">
                            <div className="p-4 md:p-6">
                                <div>
                                    <Image src="/images/food_box5.jpg" width={1000} height={1000} alt="food_box5" />
                                </div>
                                <h2 className=" font-bold text-base md:text-lg lg:text-xl mt-2 md:mt-2">Preservation and Processing Excellence</h2>
                                <p className="text-xs md:text-sm lg:text-base">
                                    At this stage, we deploy cutting-edge preservation methods, including canning, freezing, drying, and juicing, with a processing capacity of 1.5 metric tons per hour. Our team follows precise protocols to maintain freshness and nutritional value, ensuring that every product meets our stringent quality standards.
                                </p>
                            </div>
                        </div>
                        <div className="bg-green-900/20 rounded-lg">
                            <div className="p-4 md:p-6">
                                <div>
                                    <Image src="/images/food_box6.jpg" width={1000} height={1000} alt="food_box6" />
                                </div>
                                <h2 className=" font-bold text-base md:text-lg lg:text-xl mt-2 md:mt-2">Packaging</h2>
                                <p className="text-xs md:text-sm lg:text-base">
                                    The final touch is our meticulous packaging process. We select appropriate containers and packaging methods, from cans and jars to specialized pouches and frozen bags, always with an emphasis on quality, safety, and appealing presentation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}