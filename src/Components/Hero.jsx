import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai"

export default function Hero() {

    return (
        <section className="min-h-screen flex justify-center items-center -mt-16">
            <div className="text-center">
                <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-500">
                    James McGrory
                </h1>
                <h2 className="text-2xl py-2 text-white">
                    Front End Developer.
                </h2>
            </div>
        </section>
    )
}