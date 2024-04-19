import Image from "next/image";

export default function TissueCultureCarousel() {
    return (<>
        <div>
            <div className="carousel w-full h-[300px] md:w-full md:h-[450px] lg:w-full lg:h-[550px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <Image width={1000} height={1000} alt="tissue_culture1" src="/images/tissue_culture_banner1.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[64%] md:top-1/2">
                        <a href="#slide3" className="btn btn-circle border-none text-primary-content">❮</a>
                        <a href="#slide2" className="btn btn-circle border-none text-primary-content">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image width={1000} height={1000} alt="tissue_culture2" src="/images/tissue_culture_banner2.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[64%] md:top-1/2">
                        <a href="#slide1" className="btn btn-circle border-none text-primary-content">❮</a>
                        <a href="#slide3" className="btn btn-circle border-none text-primary-content">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image width={1000} height={1000} alt="tissue_culture3" src="/images/tissue_culture_banner3.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[64%] md:top-1/2">
                        <a href="#slide2" className="btn btn-circle border-none text-primary-content">❮</a>
                        <a href="#slide1" className="btn btn-circle border-none text-primary-content">❯</a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}