"use client"
import Image from "next/image";
import { useState } from "react";

export default function SeedsCarousel({bannerImages}:any) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentSlide - 1 + bannerImages.length) % bannerImages.length;
        goToSlide(prevIndex);
    };

    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % bannerImages.length;
        goToSlide(nextIndex);
    };
    return (<>
        <div>
            <div className="carousel w-full h-[300px] md:w-full md:h-[450px] lg:w-full lg:h-[550px] bg-base-100">
                {bannerImages && bannerImages.map((img: string, i: number) => (
                    <div key={i} id={`slide${i}`} className={`carousel-item relative w-full`}>
                        <Image width={1000} height={1000} alt="Banner" src={img} className="w-full object-cover" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[64%] md:top-1/2">
                            <a href={`#slide${(i - 1 + bannerImages.length) % bannerImages.length}`} onClick={prevSlide} className="btn btn-circle bg-base-100 border-none text-primary-content">❮</a>
                            <a href={`#slide${(i + 1) % bannerImages.length}`} onClick={nextSlide} className="btn btn-circle bg-base-100 border-none text-primary-content">❯</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>)
}