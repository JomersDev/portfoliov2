import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai"

export default function Hero() {
    return (
        <section>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
                <img src="../src/images/avatar.png"/>
            </div>
            <div className="text-center px-10 pt-10 pb-5">
                <h1 className="text-5xl py-2 text-teal-600 font-medium">James McGrory</h1>
                <h2 className="text-2xl py-2">Developer and Designer.</h2>
                <p className="text-md py-5 leading-8 text-gray-800"> 
                    Freelander providing services for programming and design content needs. 
                    Join me down below and let's get cracking!
                </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 pb-3 text-gray-600">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
            </div>
        </section>
    )
}