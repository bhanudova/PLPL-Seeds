import Image from "next/image";

export default function FoodCounter() {
    return (<>
        <div className="bg-accent-content w-full text-primary-content">
            <div className="flex justify-center items-center py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    <div>
                        <div className="flex justify-center">
                            <Image src="/images/seeds_count1.png" width={1000} height={1000} alt="Counter1" className="w-16 h-16 bg-green-700 rounded-full p-4"/>
                        </div>
                        <h2 className="text-[#4BC714] text-xl md:text-2xl lg:text-2xl font-extrabold text-center my-0 md:my-3">1MT/hour</h2>
                        <p className="text-lg md:text-xl lg:text-xl text-center font-semibold">Vegetable cutting  machine</p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <Image src="/images/seeds_count2.png" width={1000} height={1000} alt="Counter2" className="w-16 h-16 bg-green-700 rounded-full p-4"/>
                        </div>
                        <h2 className="text-[#4BC714] text-xl md:text-2xl lg:text-2xl font-extrabold text-center my-0 md:my-3">5MT/hour</h2>
                        <p className="text-lg md:text-xl lg:text-xl text-center font-semibold">Multi-fruit washer</p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <Image src="/images/seeds_count3.png" width={1000} height={1000} alt="Counter3"  className="w-16 h-16 bg-green-700 rounded-full p-4"/>
                        </div>
                        <h2 className="text-[#4BC714] text-xl md:text-2xl lg:text-2xl font-extrabold text-center my-0 md:my-3">10,000MT</h2>
                        <p className="text-lg md:text-xl lg:text-xl text-center font-semibold">Cold storage</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}