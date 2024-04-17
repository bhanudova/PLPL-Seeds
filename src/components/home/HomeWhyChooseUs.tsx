import Image from "next/image";

export default function HomeWhyChooseUs({ WhyChooseUs, WhyChooseGridOne, WhyChooseGridTwo }: any) {
    return (<>
        <div>
            <div className="bg-secondary text-primary-content flex justify-center items-center">
                <div className="flex flex-col lg:flex-row md:gap-1">
                    <div className="w-full lg:w-[60%] p-4 py-10 lg:py-20 md:p-16 ">
                        {
                            WhyChooseUs && WhyChooseUs.map(({ id, titleOne, titleTwo, paragraph }: any) => (
                                <div key={id}>
                                    <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-start">{titleOne} <span className="text-green-600">{titleTwo}</span></h2>
                                    <p className="text-base w-full lg:w-[70%] text-center lg:text-start mt-2 lg:mt-2">
                                        {paragraph}
                                    </p>
                                </div>
                            ))
                        }
                        <div className="flex justify-center lg:justify-normal">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full lg:w-[1000px] mt-6 md:mt-10">
                                {
                                    WhyChooseGridOne && WhyChooseGridOne.map(({ id, image, title, description }: any) => (
                                        <div key={id} className="p-4 py-8 lg:py-6 bg-primary">
                                            <div className="flex flex-row gap-2">
                                                <div className="w-[20%]">
                                                    <Image src={image} width={1000} height={1000} alt={image} className="w-20 rounded-full" />
                                                </div>
                                                <div className="w-[80%]">
                                                    <h2 className="text-base font-semibold">{title}</h2>
                                                    <p className="text-sm">
                                                        {description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%] hidden lg:block">
                        {
                            WhyChooseGridTwo && WhyChooseGridTwo.map(({id,image}:any) => (
                                <div key={id}>
                                    <Image src={image} width={1000} height={1000} alt="Growing" className="w-full h-screen object-cover" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>)
}