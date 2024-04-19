import Image from "next/image"

export default function SeedsWhoWeAre({ whoWeAre, whoWeAreImg }: any) {
    return (<>
        <div className="flex justify-center items-center mt-[-8px] bg-secondary text-primary-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[90%] md:max-w-3xl lg:max-w-6xl gap-4 py-12">
                {
                    whoWeAre && whoWeAre.map(({ id, titleOne, paragraph, titleTwo, description }: any) => (
                        <div key={id}>
                            <div>
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">{titleOne}</h2>
                                <p className="mt-2 leading-5 md:leading-6 lg:leading-7 text-xs md:text-sm lg:text-base font-medium">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium recusandae commodi quod quis eos sit magni veniam, excepturi vel qui? Pariatur sequi vero eius a dignissimos quasi repellat ex?
                                </p>
                            </div>
                            <div className="mt-5">
                                <h2 className="text-base md:text-lg lg:text-xl font-semibold">Our Journey from Seeds to Global Reach</h2>
                                <p className="leading-5 md:leading-6 lg:leading-8 mt-2 text-xs md:text-sm lg:text-sm font-medium">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur adipisci et, quaerat corrupti quidem provident nulla dolores culpa dolorem!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur adipisci et, quaerat corrupti quidem provident nulla dolores culpa dolorem!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur adipisci et, quaerat corrupti quidem provident nulla dolores culpa dolorem!
                                </p>
                            </div>
                        </div>
                    ))
                }
                <div>
                    <Image src="/images/seed_whoweare.jpg" width={1000} height={1000} alt="who_we_are" className="w-full" />
                </div>
            </div>
        </div>
    </>)
}