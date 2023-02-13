import React from "react";

export default function About() {
    return (
        <section className="mb-20 px-10 text-center flex flex-col w-screen sm:px-16 ">
            <h2 className="text-3xl mb-10 text-teal-400 font-medium underline underline-offset-8">
                About Me
            </h2>
            <p className="leading-relaxed max-w-3xl mx-auto text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="flex flex-wrap w-100 gap-6 justify-center my-10">
                <div>
                    <i className="devicon-html5-plain text-7xl hover:text-teal-300"></i>
                    <p className="text-center">HTML</p>
                </div>
                <div>
                    <i className="devicon-css3-plain text-7xl hover:text-teal-300"></i>
                    <p className="text-center">CSS</p>
                </div>
                <div>
                    <i className="devicon-javascript-plain text-7xl hover:text-teal-300"></i>
                    <p className="text-center">Javascript</p>
                </div>
                <div>
                    <i className="devicon-react-original text-7xl hover:text-teal-300"></i>
                    <p className="text-center">React</p>
                </div>
                <div>
                    <i className="devicon-tailwindcss-plain text-7xl px-2 hover:text-teal-300"></i>
                    <p className="text-center">Tailwind CSS</p>
                </div>
                <div>
                    <i className="devicon-github-original text-7xl hover:text-teal-300"></i>
                    <p className="text-center">GitHub</p>
                </div>
                <div>
                    <i className="devicon-npm-original-wordmark text-7xl hover:text-teal-300"></i>
                    <p className="text-center">npmjs</p>
                </div>
            </div>
        </section>
    )
}