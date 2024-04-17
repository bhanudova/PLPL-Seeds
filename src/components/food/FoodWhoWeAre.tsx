import Image from "next/image"

export default function FoodWhoWeAre() {
    return (<>
        <div className="flex justify-center p-10 md:p-4 lg:p-10 text-primary-content bg-secondary mt-[-1rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-0 md:pb-3 lg:pb-0">
                <div className="mt-0 md:mt-16 lg:mt-0 flex justify-center">
                    <Image src="/images/food_whoweare.jpg" width={1000} height={1000} alt="food_whoweare" className="w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem] lg:h-[30rem] rounded-full" />
                </div>
                <div className="mt-0 md:mt-0 lg:mt-6">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Who We Are</h2>
                    <p className="w-[20rem] md:w-[20rem] lg:w-[30rem] text-xs md:text-sm lg:text-base">
                        Prasad Groups provides a wide range of fruits and vegetables by procuring them fresh from farmers, selecting the best, storing the fresh produce in world class cold storage units at the right temperature, and delivering them at fair prices.
                        Our World class Cold Chain Infrastructure has the ability to service large volumes with controlled temperatures ranging from + 5 to -22 degrees. Our qualified team with best of the world practices and production protocols undertakes 24/7 end to end services, be it storage, packaging & labelling and Transportation.
                    </p>
                    <hr className="my-4" />
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold">OUR USP</h2>
                    <p className="w-[20rem] md:w-[20rem] lg:w-[30rem] text-xs md:text-sm lg:text-base text-blue-600 font-semibold">Unparalleled access across entire F&V value chain</p>
                    <p className="w-[20rem] md:w-[20rem] lg:w-[30rem] text-xs md:text-sm lg:text-base text-blue-600 font-semibold">Expert backing of a 4 decade AGRI Infrastructure major</p>
                    <p className="w-[20rem] md:w-[20rem] lg:w-[30rem] text-xs md:text-sm lg:text-base">We stand by our farmers as much as we stand by our customers - from <span className="text-yellow-600 font-bold">“Plough to Plate”</span>.</p>
                </div>
            </div>
        </div>
    </>)
}