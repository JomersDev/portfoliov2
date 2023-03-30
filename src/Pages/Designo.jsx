import React from "react";
import { Link } from "react-router-dom";

export default function Designo() {

    return (
        <div className="flex flex-col my-6 max-w-3xl mx-auto px-10">
            <div className="max-w-4xl">
                <img src="/designo/designo-home.png" alt="designo home page" className="rounded-md"/>
            </div>
            <div>
                <h2 className="text-3xl mb-4 text-teal-400 font-medium underline underline-offset-8 mt-4 md:text-5xl">
                    Designo
                </h2>
                <ul className="flex space-x-2">
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">React</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">Tailwind CSS</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">Javascript</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">React Router</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">React Hook Form</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">Yup</li>
                </ul>
                <div className="flex gap-x-2 items-center mt-4">
                    <a href="https://designo-jamesm.netlify.app/" target="_blank" rel="noopener" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md py-1 px-2 cursor-pointer hover:scale-105 transition-all duration-200">
                        Live View
                    </a>
                    <a href="https://github.com/JomersDev/designo" target="_blank" rel="noopener" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md py-1 px-2 cursor-pointer hover:scale-105 transition-all duration-200">
                        Github
                    </a>
                </div>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    Overview
                </h2>
                <p className="text-gray-100 leading-6 mb-4 md:text-base">
                    This is a solution to the Designo agency website challenge on Frontend Mentor.
                </p>
                <div className="max-w-4xl">
                    <img src="" alt="" className="rounded-md"/>
                </div>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    The Challenge
                </h2>
                <p>Users should be able to:</p>
                <ul className="list-disc ml-6 text-gray-100 md:text-base">
                    <li>View the optimal layout for each page depending on their device's screen size ✅</li>
                    <li className="pt-2">See hover states for all interactive elements throughout the site ✅</li>
                    <li className="pt-2">
                        Receive an error message when the contact form is submitted if: ✅
                        <br/>The Name, Email Address or Your Message fields are empty should show "Can't be empty"
                        <br/>The Email Address is not formatted correctly should show "Please use a valid email address"
                    </li>
                    <li className="pt-2">Bonus: View actual locations on the locations page maps (we recommend Leaflet JS for this)</li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    What I learned
                </h2>
                <p className="text-gray-100 leading-6 md:text-base">
                    For this project I wanted to try out React Hook Form and Yup for easy form validation and setup. 
                    Using this package made the process of setting up a form in react so much more intuitive and easy to 
                    adjust. Please see my code below for the form schema I set up with Yup for this project. 
                </p>
                <div className="my-4 max-w-4xl">
                    <img src="" alt="" className="rounded-md"/>
                </div>
                <p className="text-gray-100  mt-2 leading-6 md:text-base">
                    I Discovered the HTML picture tag and how it makes switching images for different screen sizes so much more 
                    intuitive and easy to implement. Please see my code below that automatically switches the image source when 
                    the screen size reaches the breakpoints of 768px and 1440px.
                </p>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    Continued Development
                </h2>
                <p className="text-gray-100  leading-6 md:text-base">
                    I'd like to implement Leaflet JS and solve the bonus requirement for this project.
                </p>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    Useful Resources
                </h2>
                <ul className="list-disc ml-6 text-gray-100 md:text-base">
                    <li>
                        <a href="https://react-hook-form.com/" className="text-teal-400">React Hook Form</a> - React form setup and validation
                    </li>
                    <li>
                        <a href="https://www.npmjs.com/package/yup" className="text-teal-400">Yup</a> - Straighforward integration with react hook form validation
                    </li>
                    <li>
                        <a href="https://www.youtube.com/shorts/d9i68C628Nk" className="text-teal-400">Kevin Powell - Picture Tag</a> -Great YouTube short outlining how to use the HTML picture tag
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/docs/installation" className="text-teal-400">Tailwind CSS</a> - he tailwind docs are excellent and easy to understand
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/docs/installation" className="text-teal-400">Tailwind CSS IntelliSense</a> - A must have extension when using Tailwind. Adds auto complete when writing tailwind classes and much more.
                    </li>
                </ul>
            </div>
            <Link to="/" className="bg-gradient-to-r mt-10 from-cyan-500 to-teal-500 text-white rounded-md py-2 text-center w-28">
                Back Home
            </Link>
        </div>
    )
}