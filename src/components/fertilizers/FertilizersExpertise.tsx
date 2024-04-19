import Image from "next/image"

export default function FertilizersExpertise({ expertiseTitle, expertiseBox }: any) {
    return (<>
        <div className="bg-neutral py-10 md:py-20 lg:py-16 ">
            {
                expertiseTitle && expertiseTitle.map(({ id, title }: any) => (
                    <div key={id}>
                        <h2 className="text-center text-primary-content font-bold text-xl md:text-2xl lg:text-3xl uppercase mb-5 md:mb-14 lg:mb-10 w-[90%] mx-auto">{title}</h2>
                    </div>
                ))
            }
            <div className="flex justify-center mb-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {
                        expertiseBox && expertiseBox.map(({ id, image, title, paragraph }: any) => (
                            <div key={id}>
                                <div  className="f-card hover:cursor-pointer w-[320px] h-[250px] md:w-[350px] md:h-[330px] lg:w-[500px]">
                                    <Image src={image} width={1000} height={1000} alt="Card" className="card-Image" />
                                    <div className="card-body flex justify-center items-center">
                                        <div>
                                            <h1 className="card-title text-center text-base md:text-lg lg:text-xl font-extrabold text-white  uppercase mt-[-20px]">{title}</h1>
                                            <p className="card-sub-title text-xs md:text-sm lg:md:text-base text-center">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem ad ipsum pariatur animi blanditiis cum laborum vel. Cumque quis beatae id maxime perferendis incidunt vero exercitationem earum est? Accusamus.
                                            </p>
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