import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data";

export default function ProjectInfo() {

    {/* parameter for react-router*/}
    const {projectId} = useParams()

    {/* usign find() to get the data for the specific project we have clicked */}
    const project = projects.find(project => project.id === projectId)

    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <Link to="/">Back Home</Link>
        </div>
    )
}