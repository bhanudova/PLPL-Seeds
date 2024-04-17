import Image from "next/image";

export default function HomeWhoWeAre({ whoWeAre }: any) {
    return (
        <div>
            <div className="bg-secondary text-primary-content mt-[-8px] p-6 pt-16 pb-16 flex items-center justify-center">
                {
                    whoWeAre && whoWeAre.map(({ id, title, paragraph, image }: any) => (
                        <div key={id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Image src={image} width={1000} height={1000} alt={image} className="w-full h-[20rem] md:h-[30rem] rounded-md object-cover" />
                            </div>
                            <div className="flex justify-center items-center text-center">
                                <div>
                                    <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl ">{title}</h2>
                                    <p className="mt-2 text-xs md:text-base lg:text-lg">
                                        {paragraph}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}
