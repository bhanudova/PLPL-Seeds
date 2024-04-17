import { FaTruck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTractor } from "react-icons/tb";

import { GiBoxUnpacking } from "react-icons/gi";
import { LuPackageOpen } from "react-icons/lu";
import Image from "next/image";
export default function FoodPackaging() {
    return (<>
        <div>
            {/* Section 1 */}
            <div className="relative w-full h-[28rem]">
                <Image src={'/images/food_production_packaging.jpg'} width={500} height={500} alt="food_production_packaging" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <div className="w-[20rem] md:w-[45rem] lg:w-[60rem]">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                            Preserve Nature’s Freshness
                        </h3>
                        <p className="text-sm md:text-xl lg:text-xl font-bold mt-4">
                            PLPL Seeds offers peak taste and nutrition with expertly preserved frozen fruits and vegetables. Our advanced techniques, from rapid freezing to meticulous blanching, ensure freshness. Experience culinary excellence with PLPL Seeds Food Processing, redefining perfection in every step.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex justify-center items-center p-4 md:p-10 bg-[#F2F2F2] text-black">
                <div className="flex flex-col md:flex-row md:gap-8 gap-0">
                    <div className="w-full md:w-[30%] flex justify-center items-center">
                        <Image src={'/images/food_packing_freshness.jpg'} width={500} height={500} className=" p-2 bg-green-100  shape-border" alt="food_packing_freshness" />
                    </div>
                    <div className="flex justify-center items-center w-full md:w-[70%] mt-10 md:mt-0">
                        <div>
                            <div className="ml-0 md:ml-10">
                                <h2 className="text-4xl font-bold">Where Freshness Never Fades, Enduringly Pure.</h2>
                                <p className="mt-4 font-semibold w-full lg:w-[40rem]">
                                    Our commitment to rapid freezing, precise packaging, and quality assurance guarantees optimal taste and nutrition in every portion. Indulge in nature&#39;s goodness, preserved at its finest with us.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 mt-4">
                                <div className="bg-[#F1C50E] p-4">
                                    <div className="bg-white text-black p-6">
                                        <h2 className="font-bold">Techniques</h2>
                                        <p>
                                            We use the IQF freezing,plate frozen, and blast frozen methods to preserve the natural essence of each fruit, safeguarding taste, texture, and nutrition.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-4 flex justify-center items-center">
                                    <div >
                                        <h2 className="font-bold">Preservation Mastery</h2>
                                        <p>
                                            Preserve freshness in every glass jar, packet, and pouch with our meticulous packing methods for frozen produce. Quality sealed for lasting taste and convenience across various packaging options.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex justify-center items-center bg-[#1A1A1A] text-white py-10 lg:py-0">
                <div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-[40%] px-6 md:px-10 flex justify-center items-center">
                            <div>
                                <h5 className="text-2xl font-light">Freshness Locked</h5>
                                <h2 className="text-3xl font-bold">Innovative Packing for Frozen Produce</h2>
                                <p className="text-xl font-light">
                                    Celebrate peak freshness with our frozen fruits and vegetables, meticulously packed to preserve flavors and nutrients. Our innovative freezing methods ensure each piece retains its natural essence. Choose from a range of packaging options, from convenient pouches to secure glass jars, all designed to maintain quality. Discover the convenience and goodness locked in every pack, promising a burst of freshness in every bite.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-[70%] mt-10 lg:mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 mx-8 md:mx-10 lg:mx-10">
                                <div className="relative">
                                    <Image src={'/images/arctic_harvest_packaging.jpg'} width={500} height={500} alt="arctic_harvest_packaging" className="w-full h-[18rem] object-cover" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                        <h2 className="text-3xl font-bold">ArcticHarvest Packaging</h2>
                                        <span className="flex justify-center items-center text-yellow-400"><LuPackageOpen className="text-8xl transform scale-x-[-1]" /></span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Image src={'/images/frost_shield_containers.jpg'} width={500} height={500} alt="frost_shield_containers" className="w-full h-[18rem] object-cover" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                        <h2 className="text-3xl font-bold">FrostShield Containers</h2>
                                        <span className="flex justify-center items-center text-yellow-400">
                                            <GiBoxUnpacking className="text-8xl" />
                                        </span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Image src={'/images/chillCraft _crates.jpg'} width={500} height={500} alt="chillCraft _crates" className="w-full h-[18rem] object-cover" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                        <h2 className="text-3xl font-bold">ChillCraft Crates</h2>
                                        <span className="flex justify-center items-center text-yellow-400">
                                            <GiBoxUnpacking className="text-8xl" />
                                        </span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Image src={'/images/IceLock_pouches.jpg'} width={500} height={500} alt="IceLock_pouches" className="w-full h-[18rem] object-cover" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                        <h2 className="text-3xl font-bold">IceLock Pouches</h2>
                                        <span className="flex justify-center items-center text-yellow-400">
                                            <LuPackageOpen className="text-8xl" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center pb-10">
                <div className="px-10 md:px-20 lg:px-56 pt-10">
                    <h2 className="text-center text-3xl px-0 md:px-20 font-bold">Innovative Packaging Solutions for Frozen Food Preservation and Shelf Life</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 text-justify gap-10 pt-10">
                        <div>
                            <p>
                                At FrostGuard, innovation defines our insulation technology, ensuring optimal temperature control for frozen produce in the FrostGuard Pack. Its multi-layered design prevents freezer burn, securing flavors and nutrients with an airtight seal. Meanwhile, Arctic Seal Packaging offers unparalleled freezing solutions by combining durable materials and cutting-edge sealing, preserving produce integrity throughout storage.
                            </p>
                        </div>
                        <div>
                            <p>
                                ChillSafeguard Containers emphasize convenience without compromising freshness, boasting user-friendly design while extending the lifespan of frozen produce with consistent temperature maintenance. On the other hand, IceLock Pouches, known for flexibility and space efficiency, prevent moisture and freezer damage with airtight sealing. Their adaptable design caters to diverse freezing needs, maintaining top-tier preservation standards.
                            </p>
                        </div>
                    </div>
                    <div className="pt-4">
                        <Image src={'/images/frozen_food_preservation.jpg'} width={500} height={500} alt="frozen_food_preservation" className="w-full h-[25rem] object-cover" />
                    </div>
                </div>
            </div>

        </div>
    </>)
}