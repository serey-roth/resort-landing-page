import React from 'react'
import LoadedImage from './LoadedImage'

const Rooms = () => {
    return (
        <div className='max-w-[1300px] h-[500px] bg-blue-100 
        mx-auto my-20 pt-16 lg:mt-[10%] md:mb-[15%] px-4 grid lg:grid-cols-4 gap-4'>
            <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
                <h3 className='text-3xl font-bold'>The Perfect Room</h3>
                <p className='pt-4'>Our rooms and villas at Tropicana Maldives offer the ultimate in 
                luxury and comfort, with stunning views of the ocean and a range of modern amenities. 
                </p>
                <ul className='list-disc pl-6'>
                    <li>Single Rooms</li>
                    <li>Deluxe Rooms</li>
                    <li>Beachfront Villas</li>
                    <li>Overwater Villas</li>
                </ul>
                <button className='border-black hover:shadow-xl mt-4'>Learn More</button>
            </div>

            <div className='grid grid-cols-2 col-span-2 lg:col-span-3 gap-2'>
                <LoadedImage
                    classes='object-cover w-full h-full'
                    src='https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg' 
                    name='terrace-view' />
                <LoadedImage
                    classes='row-span-2 object-cover w-full h-full'
                    src='https://images.pexels.com/photos/4915547/pexels-photo-4915547.jpeg' 
                    name='bedroom-1' />
                <LoadedImage
                    classes='object-cover w-full h-full'
                    src='https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg' 
                    name='bedroom-2' />
            </div>
        </div>
    )
}

export default Rooms