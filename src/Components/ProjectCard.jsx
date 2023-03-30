import React from "react";
import { BsGlobe} from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function ProjectCard(props) {

    //destructuring props received from Projects component
    const {id, name, summary, image, route, github, live} = props

    return (
        <div className="border-2 border-gray-700 rounded-lg max-w-lg hover:scale-105 transition-all duration-500 flex flex-col">
            <img src={image} className="rounded-t-lg"/>
            <div className="h-[10rem]">
                <h1 className="text-2xl mb-4 text-teal-400 mt-4 ml-4">{name}</h1>
                <p className="mx-4 text-gray-200">{summary}</p>
            </div>
            <div className="flex justify-between items-center">
                
                {/* dynamically links to the project info page for each specific project */}
                <Link 
                    to={route} 
                    className="text-teal-500 hover:underline hover:text-teal-400 ml-4 underline-offset-2 cursor-pointer">
                        Learn more
                </Link>
                <div className="flex gap-8 mt-4 mb-4 mr-4 items-center">
                    <a href={live} target="_blank" rel="noopener">
                        <BsGlobe size="1.75rem" className="hover:text-teal-300 cursor-pointer"/>
                    </a>
                    <a href={github} target="_blank" rel="noopener">
                        <i className="devicon-github-original text-3xl hover:text-teal-300 cursor-pointer"></i>
                    </a>
                </div>
            </div> 
        </div>
    )
}
