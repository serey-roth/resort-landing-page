import React from 'react'
import LoadedImage from './LoadedImage'

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <LoadedImage 
                src='https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg' 
                classes='top-0 left-0 w-full h-screen object-cover'
                name='hero'
            />
            <div className='bg-black/50 absolute top-0 left-0 w-full h-screen'/>
            <div className='absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center'>
                <div className='md:left-[5%] max-w-[1100px] m-auto absolute p-4 text-white'>
                    <h1 className='font-bold text-3xl md:text-4xl mb-1'>Luxurious Resort & Private Getaway</h1>
                    <p className='max-w-[600px] md:text-md text-sm mb-5'>
                        Nestled among crystal clear waters and white sandy beaches,
                        our resort is a true paradise on earth.
                        With a wide range of amenities and activities, you'll never be at a loss for things to do.
                        From snorkeling and diving in the vibrant coral reefs to lounging by the pool or
                        getting pampered at the spa, we've got it all. 
                        Let us make your vacation dreams a reality at our Maldives resort.
                    </p> 
                    <button className='bg-white text-black mt-1'>Reserve now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero