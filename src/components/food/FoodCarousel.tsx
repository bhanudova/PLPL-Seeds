import Image from "next/image";

export default function FoodCarousel() {
    return (<>
        <div>
            <div className="carousel w-full h-[300px] md:w-full md:h-[450px] lg:w-full lg:h-[550px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <Image width={1000} height={1000} alt="seeds_banner1" src="/images/food_banner1.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[64%] md:top-1/2">
                        <a href="#slide3" className="btn btn-circle text-primary-content border-none bg-accent-content">❮</a>
                        <a href="#slide2" className="btn btn-circle text-primary-content border-none bg-accent-content">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image width={1000} height={1000} alt="seeds_banner2" src="/images/food_banner2.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[64%] md:top-1/2">
                        <a href="#slide1" className="btn btn-circle text-primary-content border-none bg-accent-content">❮</a>
                        <a href="#slide3" className="btn btn-circle text-primary-content border-none bg-accent-content">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image width={1000} height={1000} alt="seeds_banner3" src="/images/food_banner3.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[64%] md:top-1/2">
                        <a href="#slide2" className="btn btn-circle text-primary-content border-none bg-accent-content">❮</a>
                        <a href="#slide1" className="btn btn-circle text-primary-content border-none bg-accent-content">❯</a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}