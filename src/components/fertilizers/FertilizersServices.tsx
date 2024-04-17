import Image from "next/image"

export default function FertilizersServices({ servicesMain, serviceBox }: any) {
    return (<>
        <div className="flex justify-center py-20 mt-[-5px] bg-secondary-content text-primary-content">
            <div className="text-center ">
                {
                    servicesMain && servicesMain.map(({ id, title, paragraph }: any) => (
                        <div key={id}>
                            <h2 className="text-2xl md:text-3xl lg: font-bold ">{title}</h2>
                            <p className="text-base md:text-lg lg:text-lg font-semibold ">{paragraph}</p>
                        </div>
                    ))
                }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-6">
                    {
                        serviceBox && serviceBox.map(({ id, image, title, paragraph }: any) => (
                            <div key={id} className="flex justify-center items-center">
                                <div className="p-3 shadow-lg rounded-md w-[250px] h-[230px] md:w-[250px] md:h-[230px] lg:w-[220px] lg:h-[230px] cardF bg-accent">
                                    <div>
                                        <div className="flex justify-center pb-3">
                                            <Image src={image} width={1000} height={1000} alt={image} className="w-14 h-14" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold pb-1 ">{title}</h2>
                                            <p className="font-semibold text-sm">{paragraph}</p>
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