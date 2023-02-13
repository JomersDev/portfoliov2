import React from "react";
import ProjectCard from "../Components/ProjectCard";

export default function() {
    return (
        <section className="pb-10 px-10">
            <h2 className="text-3xl mb-10 text-teal-400 font-medium underline underline-offset-8">My Projects</h2>
            <p>Here are some of the projects I have completed recently</p>
            <div className="my-6 flex items-center flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}