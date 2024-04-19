import Image from "next/image";

export default function FertilizersWhoWeAre({ whoWeAre }: any) {
    return (<>
        <div className="bg-secondary flex justify-center items-center text-primary-content mt-[-8px]">
            {
                whoWeAre && whoWeAre.map(({ id, image, titleOne, titleTwo, paragraph }: any) => (
                    <div key={id} className="py-6 lg:py-10 max-w-[90%] md:max-w-3xl lg:max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10">
                            <div className="border-2 ">
                                <Image src={image} width={1000} height={1000} alt={image} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex justify-center items-center">
                                <div>
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center lg:text-start">{titleOne} <span className="text-green-600">{titleTwo}</span></h2>
                                    <p className="leading-5 md:leading-6 lg:leading-8 text-xs md:text-sm lg:text-base font-medium w-full text-center lg:text-start">
                                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime amet tenetur labore blanditiis ipsam est corrupti, repudiandae asperiores nemo neque aspernatur, nobis minus. Consequuntur iusto, quam nobis non omnis facere!
                                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime amet tenetur labore blanditiis ipsam est corrupti, repudiandae asperiores nemo neque aspernatur, nobis minus. Consequuntur iusto, quam nobis non omnis facere!
                                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime amet tenetur labore blanditiis ipsam est corrupti, repudiandae asperiores nemo neque aspernatur, nobis minus. Consequuntur iusto, quam nobis non omnis facere!
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