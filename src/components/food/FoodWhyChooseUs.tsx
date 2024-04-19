import Image from "next/image";

export default function FoodWhyChooseUs() {
    return (<>
        <div className="flex justify-center items-center text-primary-content bg-accent">
            <div className="p-6 pb-10">
                <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold uppercase  text-blue-400">Why Choose Us</h2>
                <p className="text-center mb-6 md:mb-6 lg:mb-6 mt-0 md:mt-1 px-0 md:px-4 lg:px-20  text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum repellat laudantium est itaque ut esse culpa doloremque hic omnis eligendi delectus rerum, nobis excepturi fugit facilis? Sit, velit magnam?
                </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                        <div className="flex justify-center">
                            <div className="border shadow-xl w-[250px] md:w-[230px] lg:w-[350px]">
                                <div>
                                    <Image src="/images/food_why_quality.jpg" width={1000} height={1000} alt="food_why_logo1" className="h-[180px] md:h-[180px] lg:h-[250px]" />
                                </div>
                                <div className="w-full md:w-full lg:w-80 p-2 md:p-3">
                                    <h2 className="text-base md:text-xl font-semibold">Quality</h2>
                                    <p className="text-xs md:text-sm lg:text-sm font-medium my-1 md:my-2">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem facere eligendi veritatis cupiditate error ea!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border shadow-xl w-[250px] md:w-[230px] lg:w-[350px]">
                            <div>
                                <Image src="/images/food_why_nutrient.jpg" width={1000} height={1000} alt="food_why_logo2" className="h-[180px] md:h-[180px] lg:h-[250px]" />
                            </div>
                            <div className="w-full md:w-full lg:w-80 p-2 md:p-3">
                                <h2 className="text-base md:text-xl font-semibold">Nutrient</h2>
                                <p className="text-xs md:text-sm lg:text-sm font-medium my-1 md:my-2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem facere eligendi veritatis cupiditate error ea!
                                </p>
                            </div>
                        </div>
                        <div className="border shadow-xl w-[250px] md:w-[230px] lg:w-[350px]">
                            <div>
                                <Image src="/images/food_why_fresh.jpg" width={1000} height={1000} alt="food_why_logo3" className="h-[180px] md:h-[180px] lg:h-[250px]" />
                            </div>
                            <div className="w-full md:w-full lg:w-80 p-2 md:p-3">
                                <h2 className="text-base md:text-xl font-semibold">Freshness Maximization</h2>
                                <p className="text-xs md:text-sm lg:text-sm font-medium my-1 md:my-2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem facere eligendi veritatis cupiditate error ea!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}