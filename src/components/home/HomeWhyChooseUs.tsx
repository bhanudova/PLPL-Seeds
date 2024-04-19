import Image from "next/image";

export default function HomeWhyChooseUs({ WhyChooseUs, WhyChooseGridOne, WhyChooseGridTwo }: any) {
    return (<>
        <div>
            {/* <div className="bg-secondary text-primary-content flex justify-center items-center">
                <div className="flex flex-col lg:flex-row ">
                    <div className="w-full lg:w-[60%] p-4 py-10 lg:py-20 md:p-16 ">
                        {
                            WhyChooseUs && WhyChooseUs.map(({ id, titleOne, titleTwo, paragraph }: any) => (
                                <div key={id}>
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center lg:text-start">{titleOne} <span className="text-green-600">{titleTwo}</span></h2>
                                    <p className="text-xs md:text-sm lg:text-base font-medium w-full lg:w-[70%] text-center lg:text-start mt-2 lg:mt-2">
                                        {paragraph}
                                    </p>
                                </div>
                            ))
                        }
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                            {
                                WhyChooseGridOne && WhyChooseGridOne.map(({ id, image, title, description }: any) => (
                                    <div key={id} className="p-4 py-8 lg:py-6 bg-primary p-4">
                                        <div className="flex flex-row gap-2">
                                            <div className="w-[20%]">
                                                <Image src={image} width={1000} height={1000} alt={image} className="w-20 rounded-full" />
                                            </div>
                                            <div className="w-[80%]">
                                                <h2 className="text-base md:text-lg lg:text-xl font-semibold">{title}</h2>
                                                <p className="text-xs md:text-sm lg:text-sm font-medium">
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%] hidden lg:block">
                        {
                            WhyChooseGridTwo && WhyChooseGridTwo.map(({ id, image }: any) => (
                                <div key={id}>
                                    <Image src={image} width={1000} height={1000} alt="Growing" className="w-full h-full" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div> */}

            <div className="bg-secondary text-primary-content ">
                <div className="flex flex-col lg:flex-row gap-4 md:max-w-3xl max-w-[90%] lg:max-w-6xl mx-auto py-6 md:py-12">
                    <div className="w-full lg:w-[60%]">
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center lg:text-start">Why <span className="text-green-600">Choose Us</span></h2>
                            <p className="text-xs md:text-sm lg:text-base font-medium w-full lg:w-[80%] text-center lg:text-start ">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nostrum officia ab enim beatae obcaecati laudantium dolorum. Accusantium perspiciatis eveniet numquam placeat voluptas laborum optio possimus consequatur, natus illo repellendus!
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-primary p-4">
                                <div className="flex flex-row gap-2">
                                    <div className="w-[20%]">
                                        <Image src={'/images/home_why_high-quality.png'} width={1000} height={1000} alt={'home_why_high-quality'} className="w-20 rounded-full" />
                                    </div>
                                    <div className="w-[80%]">
                                        <h2 className="text-base md:text-lg lg:text-xl font-semibold">High-quality</h2>
                                        <p className="text-xs md:text-sm lg:text-sm font-medium">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary p-4">
                                <div className="flex flex-row gap-2">
                                    <div className="w-[20%]">
                                        <Image src={'/images/home-why-expertise.jpg'} width={1000} height={1000} alt={'home_why_high-quality'} className="w-20 rounded-full" />
                                    </div>
                                    <div className="w-[80%]">
                                        <h2 className="text-base md:text-lg lg:text-xl font-semibold">Expertise</h2>
                                        <p className="text-xs md:text-sm lg:text-sm font-medium">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary p-4">
                                <div className="flex flex-row gap-2">
                                    <div className="w-[20%]">
                                        <Image src={'/images/home_why_customer.png'} width={1000} height={1000} alt={'home_why_high-quality'} className="w-20 rounded-full" />
                                    </div>
                                    <div className="w-[80%]">
                                        <h2 className="text-base md:text-lg lg:text-xl font-semibold">Customer focus</h2>
                                        <p className="text-xs md:text-sm lg:text-sm font-medium">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary p-4">
                                <div className="flex flex-row gap-2">
                                    <div className="w-[20%]">
                                        <Image src={'/images/home_why_global-network.png'} width={1000} height={1000} alt={'home_why_high-quality'} className="w-20 rounded-full" />
                                    </div>
                                    <div className="w-[80%]">
                                        <h2 className="text-base md:text-lg lg:text-xl font-semibold">Global reach</h2>
                                        <p className="text-xs md:text-sm lg:text-sm font-medium">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%]">
                        <Image src={'/images/home-why-choose.jpg'} width={600} height={600} alt="why choose us" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}