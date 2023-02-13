import React from "react";
import { BsFillMoonStarsFill} from 'react-icons/bs'

export default function Nav() {
    return (
        <nav className="py-4 flex justify-between px-10 bg-sky-900">
            <h1 className="text-3xl text-white font-kenia">JamesMcGrory</h1>
            <ul className="flex items-center justify-between">
                <li>
                    <a className="px-4 py-2 rounded-md mr-4 hover:text-teal-200 hover:underline hidden md:inline-flex" href="#">
                        About
                    </a>
                </li>
                <li>
                    <a className="px-4 py-2 rounded-md mr-4 hover:text-teal-200 hover:underline hidden md:inline-flex" href="#">
                        Projects
                    </a>
                </li>
                <li>
                    <a className="px-4 py-2 rounded-md mr-4 hover:text-teal-200 hover:underline hidden md:inline-flex" href="#">
                        Contact
                    </a>
                </li>
                <li>
                    <BsFillMoonStarsFill className="cursor-pointer text-2xl text-white mr-8 ml-4 hover:text-teal-200 hidden md:inline-flex"/>
                </li>
                <li>
                    <a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md hidden md:inline-flex" href="#">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}