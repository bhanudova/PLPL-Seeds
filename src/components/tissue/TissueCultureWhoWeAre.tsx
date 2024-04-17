import Image from "next/image"

export default function TissueCultureWhoWeAre() {
    return (<>
        <div className="flex bg-secondary justify-center p-10 md:p-4 lg:p-10 mt-[-1rem] text-primary-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-0 md:pb-3 lg:pb-0">
                <div className="mt-0 md:mt-0 lg:mt-6">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Who We Are</h2>
                    <p className="w-[20rem] md:w-[20rem] lg:w-[30rem] text-xs md:text-sm lg:text-base">
                        Prasad Groups tissue culture division is the first of its kind in India. The state of art laboratory has installed capacity to produce about  Million Plants per year.
                        We offers superior selections of fruit, flower and foliage plants as well as agriculture crops. Further, highest levels of quality is maintained by continuous product Improvement by way of innovative technology applications.We also provide a diverse range of plant tissue culture kits and plant tissue culture lab equipment.
                    </p>
                    <hr className="my-4" />
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Our Strenghts</h2>
                    <ul className="list-disc ms-6">
                        <li>A dedicated team of employees.</li>
                        <li>Over 30 years of expertise in Commercial Plant Tissue Culture Production.</li>
                        <li>Experience in producing over hybrid products.</li>
                    </ul>
                </div>
                <div className="mt-0 md:mt-16 lg:mt-0 flex justify-center">
                    <Image src="/images/tissueculture_whoweare.jpg" width={1000} height={1000} alt="whoweare" className="w-[20rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem] lg:h-[30rem] rounded-3xl shadow-md" />
                </div>
            </div>
        </div>
    </>)
}