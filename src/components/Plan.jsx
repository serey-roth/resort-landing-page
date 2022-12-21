import React from 'react'
import LoadedImage from './LoadedImage'

const Plan = () => {
    return (
        <div className='max-w-[1300px] m-auto lg:mt-[1%] px-4 grid lg:grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            {/* eslint-disable-next-line */}
                <LoadedImage
                    classes='row-span-3 object-cover w-full h-full p-2'  
                    src='https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg' 
                    name='1'
                    />
                <LoadedImage
                    classes='row-span-2 object-cover w-full h-full p-2'  
                    src='https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg'
                    name='2' /> 
                <LoadedImage
                    classes='row-span-2 object-cover w-full h-full p-2'  
                    src='https://images.pexels.com/photos/8711555/pexels-photo-8711555.jpeg' 
                    name='3'
                    />
                <LoadedImage
                    classes='row-span-3 object-cover w-full h-full p-2'  
                    src='https://images.pexels.com/photos/4321802/pexels-photo-4321802.jpeg' 
                    name='4'
                    />
                <LoadedImage
                    classes='row-span-2 bject-cover w-full h-full p-2'  
                    src='https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg' 
                    name='5'
                    />
            </div>
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-3xl md:text-4xl font-bold'>Plan Your Vacation</h3>
                <p className='text-xl md:text-2xl py-4'>
                    Imagine waking up to the sound of waves crashing against the shore, 
                    sipping on a refreshing drink as you lounge by the pool, and exploring the vibrant coral reefs 
                    that surround your secluded island paradise. 
                    This is just a taste of the vacation experience that awaits you at Tropicana Maldives.
                </p>
                <p className='pb-4 md:text-lg'>
                    So why wait? Start planning your dream vacation in the Maldives today and discover the ultimate escape!
                </p>
                <div>
                    <button className='border-black mr-1 hover:shadow-xl ease-in-out'>Learn More</button>
                    <button className='border-black bg-black text-white hover:shadow-xl ease-in-out'>Book Your Trip</button>
                </div>
            </div>
        </div>
    )
}

export default Plan