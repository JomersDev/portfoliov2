import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai"

export default function Hero() {
    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-5xl py-2 text-teal-400 font-extrabold">James McGrory</h1>
                <h2 className="text-2xl py-2 text-white">Front End Developer.</h2>
            </div>
        </section>
    )
}