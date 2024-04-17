import Image from "next/image";

export default function FertilizersWhoWeAre({ whoWeAre }: any) {
    return (<>
        <div className="bg-secondary flex justify-center items-center text-primary-content mt-[-8px]">
            {
                whoWeAre && whoWeAre.map(({ id, image, titleOne, titleTwo, paragraph }: any) => (
                    <div key={id} className="p-6 md:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10">
                            <div className="border-2 ">
                                <Image src={image} width={1000} height={1000} alt={image} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex justify-center items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-start">{titleOne} <span className="text-green-600">{titleTwo}</span></h2>
                                    <p className="text-base w-full text-center lg:text-start">
                                        {paragraph}
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