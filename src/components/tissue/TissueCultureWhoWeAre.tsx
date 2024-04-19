import Image from "next/image"

export default function TissueCultureWhoWeAre() {
    return (<>
        <div className="bg-secondary py-12 text-primary-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto">
                <div>
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">Who We Are</h2>
                        <p className="text-xs md:text-sm lg:text-base font-medium">
                          
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, deserunt in rem dicta porro libero amet. Aliquid quidem debitis natus eligendi! Quos rem provident tenetur suscipit ratione dolor, alias incidunt.
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, deserunt in rem dicta porro libero amet. Aliquid quidem debitis natus eligendi! Quos rem provident tenetur suscipit ratione dolor, alias incidunt.
                          </p>
                    </div>
                    <div>
                        <hr className="my-4" />
                        <h2 className="text-base md:text-lg lg:text-xl font-semibold">Our Strenghts</h2>
                        <ul className="list-disc lg:leading-7 ms-6 text-xs md:text-sm lg:text-sm font-medium">
                            <li>Lorem, ipsum dolor sit amet consectetur sit amet consectetur  adipisicing elit. Ipsam, dolorem.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolorem.</li>
                            <li>Lorem, ipsum dolor sit amet sit amet consectetur consectetur adipisicing elit. Ipsam, dolorem.</li>
                            <li>Lorem, ipsum dolor sit amet sit amet consectetursit amet consectetur consectetur adipisicing elit. Ipsam, dolorem.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Image src="/images/tissueculture_whoweare.jpg" width={1000} height={1000} alt="whoweare" className="w-full h-full rounded-3xl shadow-md object-cover" />
                </div>
            </div>
        </div>
    </>)
}