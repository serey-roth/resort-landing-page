import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const slides = [
    {
        url: 'https://images.pexels.com/photos/5472425/pexels-photo-5472425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'town',
    },
    {
        url: 'https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'sunset',
    }, 
    {
        url: 'https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'hammock'
    },
    {
        url: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'overwater villas',
    },
    {
        url: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'pool',
    }, 
    {
        url: 'https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'resort'
    }
]

const ImageSlider = () => {
    const [index, setIndex] = useState(0);

    const handleNextImage = () => {
        setIndex(prevIndex => (prevIndex + 1) % slides.length)
    }

    const handlePreviousImage = () => {
        setIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex);
    }

    const handleGoToImage = (index) => {
        setIndex(index);
    }

    return (
        <div className='group max-w-[1300px] h-[600px] w-full m-auto py-16 px-4 relative'>
            <div
                className='w-full h-full rounded-2xl bg-bottom bg-cover duration-500'
                style={{ backgroundImage: `url(${slides[index].url})`}}
            ></div>

            <div
            className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2
            group-hover:bg-black/20 text-white ease-in duration-200 cursor-pointer'
            onClick={handlePreviousImage}>
                <BsChevronCompactLeft 
                size={30}
                 />
            </div>
            <div 
            className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2
            group-hover:bg-black/20 text-white ease-in duration-200 cursor-pointer'
            onClick={handleNextImage}>
                <BsChevronCompactRight size={30} />
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <RxDotFilled 
                    key={slideIndex}
                    size={20} 
                    className={`cursor-pointer ${index === slideIndex ? 'opacity-100' : 'opacity-30'}`}
                    onClick={() => handleGoToImage(slideIndex)} />
                ))}
            </div>
        </div>
    )
}

export default ImageSlider