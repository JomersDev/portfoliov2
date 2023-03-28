import React from "react";
import { Link } from "react-router-dom";

export default function TheBrewBox() {

    return (
        <div className="flex flex-col my-6 max-w-3xl mx-auto px-10">
            <div className="max-w-4xl">
                <img src="/quizzical/menu.png" alt="the brew box home page" className="rounded-md"/>
            </div>
            <div>
                <h2 className="text-3xl mb-4 text-teal-400 font-medium underline underline-offset-8 mt-4 md:text-5xl">
                    Quizzical
                </h2>
                <ul className="flex space-x-2">
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">React</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">Tailwind CSS</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">Javascript</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">API</li>
                </ul>
                <div className="flex gap-x-2 items-center mt-4">
                    <a href="https://quizzical-jamesm.netlify.app/" target="_blank" rel="noopener" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md py-1 px-2 cursor-pointer hover:scale-105 transition-all duration-200">
                        Live View
                    </a>
                    <a href="https://github.com/JomersDev/quizzical" target="_blank" rel="noopener" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md py-1 px-2 cursor-pointer hover:scale-105 transition-all duration-200">
                        Github
                    </a>
                </div>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    Overview
                </h2>
                <p className="text-gray-100 leading-6 mb-4 md:text-base">
                    I love going to trivia nights with my friends so I decided to develop a trivia game with React, Tailwind CSS
                    and the Open Trivia API. Players are able to test their trivia skills with quizzes from four categories including
                    Sports, History, Film and Geography
                </p>
                <div className="max-w-4xl">
                    <img src="/quizzical/question.png" alt="all coffee page" className="rounded-md"/>
                </div>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    Features
                </h2>
                <ul className="list-disc ml-6 text-gray-100 md:text-base">
                    <li>Players have choice on what category and difficulty they would like to play</li>
                    <li className="pt-2">These values are stored in state and used within the api call to generate the correct questions</li>
                    <li className="pt-2">Each quiz is 10 questions</li>
                    <li className="pt-2">Each question is multiple choice with 4 options as answers</li>
                    <li className="pt-2">Current question count displayed</li>
                    <li className="pt-2">Results screen which displays your final score</li>
                    <li className="pt-2">Bronze, Silver or Gold medal will display based on your results</li>
                    <li className="pt-2">Mobile and desktop responsive</li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    Purpose and Goal
                </h2>
                <p className="text-gray-100 leading-6 md:text-base">
                    After completing the React course from Scrimba.com, the final solo project is a quiz game called Quizzical, 
                    which uses the Open Trivia API to generate a unique quiz each playthrough. I was excited to complete this project 
                    as I enjoy going to trivia nights with my friends. I also saw it as a great opportunity to further practice and 
                    refine my skills by utilizing data from API calls (Open Trivia API) and to practice React and Tailwind CSS. 
                </p>
                <div className="my-4 max-w-4xl">
                    <img src="/quizzical/results.png" alt="all coffee page" className="rounded-md"/>
                </div>
                <p className="text-gray-100  mt-2 leading-6 md:text-base">
                    The Quizzical game presented by Scrimba has a relatively basic overall design. I decided to redesign the game and 
                    implement a menu where the player could select different quiz categories and difficulty options. Before I started 
                    coding I viewed and played around with some other trivia based apps to get a feel for how important information is 
                    often presented. 
                </p>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    Highlight
                </h2>
                <p className="text-gray-100  leading-6 md:text-base">
                    For this project I really like how the main menu turned out. Before starting this project I thought that this would be 
                    harder to implement, however it was quite simple and all that was needed was a function that was created in the App component 
                    that updated state (category, difficulty), and that was passed down to the Title component. When a category div is selected 
                    the state would update in the App component accordingly. 
                    <br/><br/>
                    The API url was also set as a template string that would take in these 
                    state variables when called. I also enjoyed working with this simple violet/purple color palette and I think it gives the app a 
                    nice polished look. Traditionally I feel more comfortable working with darker color palettes, so this was a good exercise in trying 
                    something different and I believe that the end result works well.
                </p>
            </div>
            <Link to="/" className="bg-gradient-to-r mt-10 from-cyan-500 to-teal-500 text-white rounded-md py-2 text-center w-28">
                Back Home
            </Link>
        </div>
    )
}