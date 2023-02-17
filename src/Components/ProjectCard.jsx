import React from "react";
import { BsGlobe} from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function ProjectCard(props) {

    const {id, name, summary, image} = props

    return (
        <div className="border-2 border-gray-700 rounded-lg max-w-lg">
            <img src={image} className="rounded-t-lg"/>
            <h1 className="text-2xl mb-4 text-teal-400 mt-4 ml-4">{name}</h1>
            <p className="ml-4 text-gray-200">{summary}</p>
            <div className="flex justify-between items-center">
                
                {/* dynamically links to the project info page for each specific project */}
                <Link to={`/projects/${id}`} className="ml-4 text-orange-500">Learn more</Link>
                <div className="flex gap-8 mt-4 mb-4 mr-4 items-center">
                    <BsGlobe size="1.75rem" className="hover:text-teal-300 cursor-pointer"/>
                    <i className="devicon-github-original text-3xl hover:text-teal-300 cursor-pointer"></i>
                </div>
            </div> 
        </div>
    )
}