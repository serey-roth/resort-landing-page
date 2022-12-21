import React, {  useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'

const menu = ['About', 'Reservations', 'Amenities', 'Rooms', 'Contact']
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleMenuToggle = () => {
        setOpen(prevOpen => !prevOpen);
        if (!open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }

    return (
        <div className='absolute top-0 left-0 w-full h-screen text-white z-10'>
            <div className='flex items-center px-4 py-2 text-lg absolute inset-x-0 z-20'>
                <h1 className='font-bold flex-1'>Tropicana Maldives</h1>
                <BiMenuAltRight
                    size={25}
                    className='cursor-pointer'
                    onClick={handleMenuToggle}
                />
            </div>
            <div className={`
            top-0 left-0 h-screen bg-black/90
            text-white flex items-center justify-center transition-all
            ease-in duration-200 ${open ? 'w-full opacity-100' : 'w-0 opacity-0'}
            `}>
                <ul className='flex flex-col items-center justify-center'>
                    {menu.map(item => (
                        <li 
                            key={item} 
                            className='font-bold text-xl p-2 hover:scale-100 scale-95 ease-in-out duration-150'>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar