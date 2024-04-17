import Image from "next/image"

export default function FertilizersWhyChooseUs({ whyChooseUs, whyChooseUsBox }: any) {
    return (<>
        <div className="bg-accent-content text-primary-content mt-[-8px] py-16">
            <div className="flex justify-center items-center">
                <div>
                    {
                        whyChooseUs && whyChooseUs.map(({ id, title, paragraph }: any) => (
                            <div key={id}>
                                <h2 className="font-bold text-xl md:text-3xl text-center">{title}</h2>
                                <p className="text-center mt-1 md:mt-3 text-sm md:text-base px-5 md:px-10 lg:px-72 font-semibold">
                                    {paragraph}
                                </p>
                            </div>
                        ))
                    }
                    <div className="flex justify-center mt-5 md:mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-2">
                            {
                                whyChooseUsBox && whyChooseUsBox.map(({ id, image, title, paragraph }: any) => (
                                    <div key={id} className="text-center">
                                        <div className="flex justify-center">
                                            <Image src={image} width={1000} height={1000} alt="quality" className="w-24 h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 p-4 md:p-4 lg:p-1 rounded-full border-[8px] border-[#BAC543]" />
                                        </div>
                                        <h2 className="font-semibold text-xl md:text-xl my-2">{title}</h2>
                                        <p className="px-12 md:px-5 text-sm md:text-base">
                                            {paragraph}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}