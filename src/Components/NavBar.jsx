import React, {useState, useEffect} from "react";
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-scroll";

export default function Test() {

    const [nav, setNav] = useState(false)

    {/* opens and closes the mobile nav menu*/}
    function handleNav() {
        setNav(!nav)
    }

    {/* This closes the mobile nav if it is still open once the screen width is larger than 768px */}
    useEffect(() => {
        const x = window.matchMedia("(max-width: 768px)")
        function myFunction(e) {
          setNav(false);
        };
        x.addListener(myFunction)
        return () => x.removeListener(myFunction);
      }, []);


    return (
        <div className="flex justify-between items-center mx-auto px-4 py-4 text-white">
            <h1 className="w-full text-3xl font-bold text-white">James McGrory</h1>

            {/* desktop nav menu */}
            <ul className="hidden md:flex md:items-center">
                <li className="p-4 hover:text-teal-200 hover:underline cursor-pointer ease-in-out duration-500">
                   <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link> 
                </li>
                <li className="p-4 hover:text-teal-200 hover:underline cursor-pointer ease-in-out duration-500">
                   <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
                </li>
                <li className="p-4 hover:text-teal-200 hover:underline cursor-pointer ease-in-out duration-500">
                   <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link> 
                </li>
                <li className="px-4">
                   <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md py-1 px-4 font-semibold cursor-pointer hover:scale-105 transition-all duration-200">
                       Resume
                    </button>
                </li>
            </ul>

            {/* render open or close menu based on the state of nav  */}
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile nav menu */}
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] bg-gray-900 h-full border-r border-r-gray-800 ease-in-out duration-500' : 'bg-gray-900 ease-in-out duration-1000 fixed left-[-100%] top-0 h-full w-[60%]'}>
                <h1 className="w-full text-3xl font-bold text-white m-4">James McGrory</h1>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4 border-b border-gray-600">Projects</li>
                <li className="p-4 border-b border-gray-600">Contact</li>
                <li className="p-4 border-b border-gray-600">Resume</li>
            </ul>
        </div>
    )
}