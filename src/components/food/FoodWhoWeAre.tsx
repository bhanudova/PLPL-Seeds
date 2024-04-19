import Image from "next/image"

export default function FoodWhoWeAre() {
    return (<>
        <div className="text-primary-content bg-secondary py-12 mt-[-1rem] ">
            <div className="max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <Image src="/images/food_whoweare.jpg" width={600} height={600} alt="food_whoweare" className="w-full h-full object-cover" />
                </div>
                <div>
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">Who we are</h2>
                        <p className="text-xs md:text-sm lg:text-base">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ab minima quod, quaerat nostrum cumque eum explicabo facilis iusto sequi excepturi animi sunt officia hic voluptatem consequuntur, ut velit at.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ab minima quod, quaerat nostrum cumque eum explicabo facilis iusto sequi excepturi animi sunt officia hic voluptatem consequuntur, ut velit at.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ab minima quod, quaerat nostrum cumque eum explicabo facilis iusto sequi excepturi animi sunt officia hic voluptatem consequuntur, ut velit at.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">OUR USP</h2>
                        <p className="text-xs md:text-sm lg:text-base text-blue-600 font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, neque.</p>
                        <p className="text-xs md:text-sm lg:text-base text-blue-600 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="text-xs md:text-sm lg:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur similique explicabo voluptatem odio deserunt omnis provident.<span className="text-yellow-600 font-bold">“Plough to Plate”</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}