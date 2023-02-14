import React from "react";
import ProjectCard from "../Components/ProjectCard";

export default function() {
    return (
        <section className="pb-10 px-10 sm:px-16">
            <h2 className="text-4xl mb-10 text-teal-400 text-center font-medium underline underline-offset-8">My Projects</h2>
            <p className="leading-relaxed max-w-3xl text-center mx-auto text-lg">
                Here are some of the projects I have completed recently. Take a look the live preview with the globe icon, 
                or click learn more for further details.
            </p>
            <div className="my-6 flex items-center flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}