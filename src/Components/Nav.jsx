import React, {useState} from "react";
import { BsFillMoonStarsFill} from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Nav() {

    const [showNav, setShowNav] = useState(true)

    function handleNav() {
        console.log("clicked")
        setShowNav(!showNav)
    }

    return (
        <nav className="py-4 flex justify-between items-center px-10 bg-sky-900">
            <h1 className="text-3xl text-white font-kenia">JamesMcGrory</h1>
            <ul className="items-center justify-between hidden md:inline-flex">
                <li>
                    <a className="px-4 py-2 rounded-md mr-4 hover:text-teal-200 hover:underline" href="#">
                        About
                    </a>
                </li>
                <li>
                    <a className="px-4 py-2 rounded-md mr-4 hover:text-teal-200 hover:underline" href="#">
                        Projects
                    </a>
                </li>
                <li>
                    <a className="px-4 py-2 rounded-md mr-4 hover:text-teal-200 hover:underline" href="#">
                        Contact
                    </a>
                </li>
                <li>
                    <BsFillMoonStarsFill className="cursor-pointer text-2xl text-white mr-8 ml-4 hover:text-teal-200"/>
                </li>
                <li>
                    <a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md" href="#">
                        Resume
                    </a>
                </li>
            </ul>
            <button onClick={handleNav}>
                {!showNav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </button>

            {/* Mobile Nav menu below */}   
            <div className=" hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-gray-900">
                <h1 className="text-3xl text-white font-kenia m-4">JamesMcGrory</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600 ">
                        <a className="hover:text-teal-200" href="#">
                            About
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a className="hover:text-teal-200" href="#">
                            Projects
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a className=" hover:text-teal-200" href="#">
                            Contact
                        </a>
                    </li>
                    <li className="p-4">
                        <a className="hover:text-teal-200" href="#">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}