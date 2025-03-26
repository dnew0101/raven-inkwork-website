"use client";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type CarouselProps = {
    children: string[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
}

const Carousel = ({ children: slides, autoSlide, autoSlideInterval }: CarouselProps ) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const prev = () => 
        setCurrentSlide((currentSlide: number) => 
            (currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
        );
    const next = () => setCurrentSlide((currentSlide: number) => 
        (currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
    );

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="overflow-hidden relative w-[100%] h-[100%]">
            <div className="flex transition-transform duration-400 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <img 
                        key={index} 
                        src={slide} 
                        alt="carousel image" 
                        className="w-full" 
                    />
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">

                <button 
                    className="p-1 rounded-full shadow bg-white/80
                     text-black hover:bg-white"
                    onClick={prev}>
                    <BiChevronLeft size={40} />
                </button>

                <button className="p-1 rounded-full shadow bg-white/80
                    text-black hover:bg-white"
                    onClick={next}>
                    <BiChevronRight size={40} />
                </button>

            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2 h-6">
                    {slides.map((_, index) => (
                        <div 
                            key={index} 
                            className={`transition-all duration-400 w-3 h-1 rounded-full bg-white
                            ${index === currentSlide ? 'w-3 h-3' : 'bg-opacity-50'}`}
                        ></div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Carousel