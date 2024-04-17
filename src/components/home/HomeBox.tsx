import Image from "next/image";
export default function HomeBox({ HomeBoxData }: any) {
    return (<>
        <div className="bg-primary text-primary-content">
            {
                HomeBoxData && HomeBoxData.map(({ id, image, position, content, title, description }: any) => (
                    <div key={id} className="flex justify-center pt-10 md:pt-16 lg:pt-5">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-3 md:py-3 lg:py-10">
                            <div className={`flex justify-center ${position}`}>
                                <Image width={1000} height={1000} alt={image} src={image} className="max-w-xs md:max-w-xl lg:max-w-xl rounded-lg shadow-2xl" />
                            </div>
                            <div className={`flex justify-center items-center ${content}`}>
                                <div className="w-[310px] md:w-[580px] lg:w-[610px]">
                                    <h1 className="text-xl md:text-2xl lg:text-2xl font-bold text-center">{title}</h1>
                                    <p className=" text-center  text-xs md:text-base lg:text-base font-semibold whitespace-normal">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>)
}