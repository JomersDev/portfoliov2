import React from "react";
import { BsGlobe} from 'react-icons/bs';

export default function ProjectCard() {
    return (
        <div className="border-2 border-gray-700 rounded-lg max-w-lg">
            <img src="../src/Images/project-screenshot.png" className="rounded-t-lg"/>
            <h1 className="text-2xl mb-4 text-teal-400 mt-4 ml-4">Sample Project</h1>
            <p className="ml-4 text-gray-200">This is a simple sample project. This will be a quick summary of what the projet is.</p>
            <div className="flex justify-between items-center">
                <a href="#" className="ml-4 text-orange-500">Learn more</a>
                <div className="flex gap-8 mt-4 mb-4 mr-4 items-center">
                    <BsGlobe size="1.75rem" className="hover:text-teal-300 cursor-pointer"/>
                    <i className="devicon-github-original text-3xl hover:text-teal-300 cursor-pointer"></i>
                </div>
            </div> 
        </div>
    )
}