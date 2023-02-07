import React from "react";
import { BsFillMoonStarsFill} from 'react-icons/bs'

export default function Nav() {
    return (
        <section>
            <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-xl">JamesM</h1>
                <ul className="flex items-center">
                    <li>
                        <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
                    </li>
                    <li>
                        <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}