import Image from "next/image"

export default function FertilizersServices({ servicesMain, serviceBox }: any) {
    return (<>
        <div className="flex justify-center py-20 mt-[-5px] bg-secondary-content text-primary-content">
            <div className="text-center max-w-[90%] md:max-w-3xl lg:max-w-6xl ">
                {
                    servicesMain && servicesMain.map(({ id, title, paragraph }: any) => (
                        <div key={id}>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">{title}</h2>
                            <p className="text-xs md:text-sm lg:text-base font-semibold ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nihil!
                            </p>
                        </div>
                    ))
                }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-6">
                    {
                        serviceBox && serviceBox.map(({ id, image, title, paragraph }: any) => (
                            <div key={id} className="flex justify-center items-center">
                                <div className="p-3 shadow-lg rounded-md w-[70%] md:w-[90%] cardF bg-accent">
                                    <div>
                                        <div className="flex justify-center pb-3">
                                            <Image src={image} width={1000} height={1000} alt={image} className="w-14 h-14" />
                                        </div>
                                        <div>
                                            <h2 className="text-base md:text-lg lg:text-xl font-semibold pb-1 h-full lg:h-[60px]">{title}</h2>
                                            <p className="text-xs md:text-sm lg:text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nisi?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>)
}