import Image from "next/image";

export default function SeedsOurProducts() {
    return (<>
    {/* Banner Image */}
        <div className="seeds-products-banner py-[30px] md:py-[70px] lg:py-[80px]">
            <div className="ml-4 md:ml-20">
                <div className=" rounded-md bg-[#222121a2] shadow-md w-[300px] md:w-[500px] p-2 md:p-10">
                    <h2 className="text-2xl md:text-5xl text-white font-bold">Seeds of Success</h2>
                    <p className="py-4 text-blue-50">
                        Experience the difference in crop resilience and excellence, driving your agricultural success and contributing to a sustainable future.
                    </p>
                    <p className="text-blue-50">
                        Empower your agricultural endeavors with our premium  seeds. Our seeds are designed to optimize yield and quality, ensuring a successful harvest that meets the demands of modern agriculture. Maximize your investment and profitability with our trusted varieties.
                    </p>
                </div>
            </div>
        </div>

      

        <div className="bg-[#D8DFD0] p-4 flex justify-center items-center py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                <div className="w-full lg:w-[25rem]">
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white">01</h2>
                    <div className="text-black">
                        <h3 className="text-3xl font-bold">Quality Seeds</h3>
                        <p>
                            At PLPL Seeds, we take immense pride in consistently providing the highest quality seeds for your diverse agricultural needs. Our unwavering commitment ensures that every seed you plant is a crucial step towards a bountiful harvest.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-[25rem]">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white">02</h1>
                    <div className="text-black">
                        <h3 className="text-3xl font-bold">Innovation in Agriculture</h3>
                        <p>
                            Embrace innovation with PLPL Seeds. We constantly strive to bring you the latest advancements in agriculture. From cutting-edge technology to sustainable farming practices, we support farmers in cultivating a brighter future.
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <div className="bg-[#E3EFFB] p-10 pt-14 px-6 md:px-10 lg:px-20 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 text-black">
                    <div className="flex justify-center items-center py-4">
                        <Image src={'/images/our_products_corn.jpg'} width={500} height={500} alt="PLPL Seeds - Corn" className="w-[10rem] h-[10rem] rounded-full" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-medium pt-6">Corn</h2>
                        <p className="md:mx-10 lg:mx-14 py-6">
                            Explore PLPL Seeds&#39; extensive range of hybrid corn suited for both temperate and tropical regions. Our corn seed products are customized to meet the specific needs of local farmers.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-4 text-black">
                    <div className="flex justify-center items-center py-4">
                        <Image src={'/images/our_products_paddy.jpg'} width={500} height={500} alt="PLPL Seeds - Paddy" className="w-[10rem] h-[10rem] rounded-full" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-medium pt-6">Paddy</h2>
                        <p className="md:mx-10 lg:mx-14 py-6">
                            Rice is widely regarded as one of the most important crops globally. PLPL Seeds offers a wide range of paddy seeds with different maturities and grain types, focusing on enhancing the value for farmers.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-4 text-black">
                    <div className="flex justify-center items-center py-4">
                        <Image src={'/images/our_products_millets.jpg'} width={500} height={500} alt="PLPL Seeds - Millet" className="w-[10rem] h-[10rem] rounded-full" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-medium pt-6">Millet</h2>
                        <p className="md:mx-10 lg:mx-14 py-6">
                            PLPL Seeds offers a diverse range of hybrid millet seeds designed to produce high yields and superior-quality grains. Our seeds are crafted to thrive in different climatic conditions and soil types.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-4 text-black">
                    <div className="flex justify-center items-center py-4">
                        <Image src={'/images/our_products_sunflower.jpg'} width={500} height={500} alt="PLPL Seeds - Sunflower" className="w-[10rem] h-[10rem] rounded-full" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-medium pt-6">Sunflower</h2>
                        <p className="md:mx-10 lg:mx-14 py-6">
                            PLPL Seeds provides an extensive selection of sunflower hybrids, along with seed treatment choices tailored to your requirements. Delivering top-notch sunflower seeds has always been at the heart of our business.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-4 text-black">
                    <div className="flex justify-center items-center py-4">
                        <Image src={'/images/our_products_cotton.jpg'} width={500} height={500} alt="PLPL Seeds - Cotton" className="w-[10rem] h-[10rem] rounded-full" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-medium pt-6">Cotton</h2>
                        <p className="md:mx-10 lg:mx-14 py-6">
                            PLPL Seeds offers a comprehensive range of hybrid cotton seeds carefully engineered to enhance yield and produce superior-quality fibers. Our seeds are crafted using advanced techniques to optimize cotton growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </>)
}