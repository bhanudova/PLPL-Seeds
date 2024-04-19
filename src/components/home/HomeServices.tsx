"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function HomeServices({ services, servicesHeader }: any) {
    const router = useRouter();
    return (<>
        <div>
            <div className="flex justify-center items-center py-10 bg-secondary-content text-primary-content">
                <div>
                    {
                        servicesHeader && servicesHeader.map(({ logo, title_one, title_two, id }: any) => (
                            <div key={id} className="text-center">
                                <div className="flex justify-center">
                                    <Image width={1000} height={1000} src={logo} alt="Rice_Logo" className="w-10 border rounded-full" />
                                </div>
                                <h2 className="text-xl md:text-2xl lg:text-3xl uppercase font-bold text-[#255946]">{title_two}</h2>
                            </div>
                        ))
                    }
                    <div className="flex justify-center items-center mt-3 md:mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                            {
                                services && services.map(({ id, link, cardImage, cardLogo, title, description }: any) => (
                                    <div onClick={() => { router.push(`${link}`) }} key={id} className="card w-72 md:w-72 lg:w-60   shadow-xl box bg-secondary">
                                        <figure><Image width={1000} height={1000} src={cardImage} alt={cardImage} /></figure>
                                        <div className="text-center p-4 md:p-4 lg:p-3">
                                            <div className="flex justify-center items-center">
                                                <div className="bg-blue-50 rounded-full mt-[-50px] w-20 p-3">
                                                    <Image src={cardLogo} width={1000} height={1000} alt={cardLogo} />
                                                </div>
                                            </div>
                                            <h2 className="text-base md:text-lg lg:text-xl font-semibold">{title}</h2>
                                            <p className="text-xs md:text-sm lg:text-base">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio fugit pariatur quaerat. Doloribus commodi recusandae ratione, amet unde sit.
                                            </p>
                                        </div>
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