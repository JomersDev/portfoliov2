import React from "react";
import { BsFillMoonStarsFill} from 'react-icons/bs'

export default function Nav() {
    return (
        <nav className="py-10 flex justify-between">
            <h1 className="text-3xl text-white font-kenia">JamesMcGrory</h1>
            <ul className="flex items-center">
                <li>
                    <BsFillMoonStarsFill className="cursor-pointer text-2xl text-white"/>
                </li>
                <li>
                    <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}