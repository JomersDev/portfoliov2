import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data";

export default function ProjectInfo() {

    {/* parameter for react-router */}
    const {projectId} = useParams()

    {/* using find() to get the data for the specific project that has been clicked */}
    const project = projects.find(project => project.id === projectId)

    return (
        <div className="px-10 flex flex-col h-[79vh]">
            <div>
                <h2 className="text-4xl mb-4 text-teal-400 font-medium underline underline-offset-8">
                    {project.name}
                </h2>
                <ul className="flex space-x-2 mb-10">
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-600">HTML</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-600">CSS</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-600">Javascript</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-600">React</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-600">API</li>
                </ul>
            </div>
            <div className="max-w-2xl">
                <img src={project.image} />
            </div>
            <p className="mb-28">
                {project.summary}
            </p>
            <Link to="/" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md py-2 px-2 w-28">
                Back Home
            </Link>
        </div>
    )
}