import React from "react";
import ProjectCard from "../ProjectCard";

export default function() {
    return (
        <section className="pb-10">
            <h2 className="text-3xl mb-4 text-teal-400 font-medium underline underline-offset-8">My Projects</h2>
            <p>Here are some of the projects I have completed recently</p>
            <div className="my-6 flex-col space-y-8">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}