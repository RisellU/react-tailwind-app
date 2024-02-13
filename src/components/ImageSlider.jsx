import React, { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";

const ImageSlider = () => {

    const slides = [
        {
          url: 'https://images.pexels.com/photos/18015000/pexels-photo-18015000/free-photo-of-plato-hierbas-fotografia-de-comida-salsa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Pork',
        },
        {
          url: 'https://images.pexels.com/photos/5602477/pexels-photo-5602477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Pasta',
        },
        {
          url: 'https://images.pexels.com/photos/8934917/pexels-photo-8934917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Ceviche',
        },
        {
          url: 'https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Meat',
        },
        {
            url: 'https://images.pexels.com/photos/3620705/pexels-photo-3620705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Sushi',
          },
      ];

      const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlide = () => {
        const isFirstSlide =  currentIndex === 0;
        const newIndex= isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
      }

      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      }
    return (
        <div className="max-w[1400px] h-[680px] w-full m-auto py-16 px-4 relative group">
            <div 
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500" 
                style={{backgroundImage :  `url(${slides[currentIndex].url})`}}>
            </div>
            {/* Left Arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
                <HiOutlineChevronLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
                <HiOutlineChevronRight onClick={nextSlide} size={30} />
            </div>

            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div 
                        className="text-2xl cursor-pointer"
                        key={slideIndex} 
                        onClick={() => goToSlide(slideIndex)}>
                        <GoDotFill />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider