import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

export default function Hero() {

    return (
        <section className="background h-[90vh] flex justify-center items-center">
            <div className="text-center">
                <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-500 md:text-7xl">
                    James McGrory
                </h1>
                <h2 className="text-2xl py-2 text-white md:text-3xl">
                    Front End Developer.
                </h2>
                <div className="flex justify-center gap-x-4">
                    <a href="https://github.com/JomersDev" target="_blank" rel="noopener">
                        <AiFillGithub size={32} className="hover:text-teal-300 cursor-pointer"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jamesmcgrory/" target="_blank" rel="noopener">
                        <AiFillLinkedin size={32} className="hover:text-teal-300 cursor-pointer"/>
                    </a>
                </div>
            </div>
        </section>
    )
}