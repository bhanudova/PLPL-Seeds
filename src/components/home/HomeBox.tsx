import Image from "next/image";
export default function HomeBox({ HomeBoxData }: any) {
    return (<>
        <div className="bg-primary text-primary-content">
            {
                HomeBoxData && HomeBoxData.map(({ id, image, position, content, title, description }: any) => (
                    <div key={id}>
                        <div className="grid grid-cols-1 w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto pt-12 pb-4">
                            <div className="flex flex-col lg:flex-row gap-8 mb-8 bg-secondary p-2 md:p-4 lg:bg-primary lg:p-0">
                                <div className={`w-full lg:w-[40%] ${position}`}>
                                    <Image width={600} height={600} alt={image} src={image} className="w-full h-full rounded-lg shadow-2xl" />
                                </div>
                                <div className="w-full lg:w-[60%] flex justify-center items-center">
                                    <div>
                                        <h1 className="text-base md:text-lg lg:text-xl font-bold text-center uppercase">{title}</h1>
                                        <p className=" text-center  text-xs md:text-sm lg:text-base font-medium">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolorem quas provident, et quam repudiandae consequuntur, culpa aspernatur possimus nulla ab? Cum cupiditate voluptas vel natus rem temporibus adipisci? Quo, ab quisquam quibusdam quasi et voluptas inventore eaque voluptatem repudiandae.
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolorem quas provident, et quam repudiandae consequuntur, culpa aspernatur possimus nulla ab? Cum cupiditate voluptas vel natus rem temporibus adipisci? Quo, ab quisquam quibusdam quasi et voluptas inventore eaque voluptatem repudiandae.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>)
}