import React, {useState} from "react";
import { BsFillMoonStarsFill} from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Test() {

    const [nav, setNav] = useState(false)

    function handleNav() {
        console.log('test click')
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-white">James McGrory</h1>
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] bg-gray-900 h-full border-r border-r-gray-800 ease-in-out duration-500' : 'ease-in-out duration-1000 fixed left-[-100%] top-0 h-full w-[60%]'}>
                <h1 className="w-full text-3xl font-bold text-white m-4">James McGrory</h1>
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Resources</li>
                <li className="p-4 border-b border-gray-600">About</li>
            </ul>
        </div>
    )
}