import React from "react";

export default function About() {
    return (
        <section id="about" className="mb-28 px-10 pt-20 flex flex-col sm:px-16">
            <h2 className="text-5xl mb-10 text-teal-400 text-center font-medium underline underline-offset-8">
                About Me
            </h2>
            <p className="leading-relaxed max-w-3xl text-gray-100 mx-auto">
                My name is James McGrory, and I am a frontend web developer. I love building visually appealing 
                interfaces and functional webapps. 
                <br/><br/>
                I graduated from the University of Technology Sydney with a Bachelor in Business in Finance and 
                Information Technology and have been working as a Finance Officer for the past 3 years at an IT 
                consulting business.
                <br/><br/>
                Through learning web development I’ve come to understand the importance of staying up to date 
                with the latest industry trends and emerging technologies. I constantly strive to improve my skills 
                through online courses, coding challenges and designing & developing my own projects. I am a strong 
                believer in the philosophy of life long learning and the importance of it in the continuously 
                evolving industry of web development.
                <br/><br/>
                When I’m not coding I’m most likely at the gym, reading a book or playing a video game. 
            </p>
            <div className="flex flex-wrap w-100 gap-6 justify-center mt-10 text-gray-100">
                <div>
                    <i className="devicon-html5-plain text-7xl hover:text-teal-300 transition-all duration-200"></i>
                    <p className="text-center">HTML</p>
                </div>
                <div>
                    <i className="devicon-css3-plain text-7xl hover:text-teal-300 transition-all duration-200"></i>
                    <p className="text-center">CSS</p>
                </div>
                <div>
                    <i className="devicon-javascript-plain text-7xl hover:text-teal-300 transition-all duration-200"></i>
                    <p className="text-center">Javascript</p>
                </div>
                <div>
                    <i className="devicon-react-original text-7xl hover:text-teal-300 transition-all duration-200"></i>
                    <p className="text-center">React</p>
                </div>
                <div>
                    <i className="devicon-tailwindcss-plain text-7xl px-2 hover:text-teal-300 transition-all duration-200"></i>
                    <p className="text-center">Tailwind CSS</p>
                </div>
                <div>
                    <i className="devicon-github-original text-7xl hover:text-teal-300 transition-all duration-200"></i>
                    <p className="text-center">GitHub</p>
                </div>
                <div>
                    <i className="devicon-npm-original-wordmark text-7xl hover:text-teal-300 transition-all duration-200"></i>
                    <p className="text-center">npmjs</p>
                </div>
            </div>
        </section>
    )
}