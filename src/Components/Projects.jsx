import React from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from "../data";

export default function Projects() {
    return (
        <section id="projects" className="mb-28 px-10 sm:px-16 flex flex-col items-center">
            <h2 className="text-4xl mb-10 text-teal-400 text-center font-medium underline underline-offset-8">My Projects</h2>
            <p className="leading-relaxed max-w-3xl text-center mx-auto text-lg">
                Here are some of the projects I have completed recently. Take a look the live preview with the globe icon, 
                or click learn more for further details.
            </p>
            <div className="my-6 flex items-center flex-col space-y-4 lg:flex-row lg:space-x-10 lg:space-y-0 lg:max-w-6xl">
                
                {/* looping through projects data and creating a card for each element in the array with data passed down as props */}
                {projects.map(project => {
                    return <ProjectCard 
                                key={project.id} 
                                id={project.id} 
                                name={project.name} 
                                summary={project.summary}
                                image={project.image}
                                route={project.route}
                            />
                })}
            </div>
        </section>
    )
}