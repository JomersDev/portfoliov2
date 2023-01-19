import React from "react";

export default function Skills() {
    return (
        <section>
            <h2 className="text-3xl py-1">Skills and Tools</h2>
            <p>The skills, tools and technologies I use to bring your products to life.</p>
            <div className="flex flex-wrap w-100 gap-6 justify-center my-6">
                <div>
                    <img className="w-20 h-20" src="../src/images/tech-icons/html.svg" alt="css-logo" />
                    <p className="text-center">HTML</p>
                </div>
                <div>
                    <img className="w-20 h-20" src="../src/images/tech-icons/css.svg" alt="css-logo" />
                    <p className="text-center">CSS</p>
                </div>
                <div>
                    <img className="w-20 h-20" src="../src/images/tech-icons/javascript.svg" alt="css-logo" />
                    <p className="text-center">Javascript</p>
                </div>
                <div>
                    <img className="w-20 h-20" src="../src/images/tech-icons/react.svg" alt="css-logo" />
                    <p className="text-center">React</p>
                </div>
                <div>
                    <img className="w-20 h-20" src="../src/images/tech-icons/tailwind.svg" alt="css-logo" />
                    <p className="text-center">Tailwind CSS</p>
                </div>
                <div>
                    <img className="w-20 h-20" src="../src/images/tech-icons/github.svg" alt="css-logo" />
                    <p className="text-center">GitHub</p>
                </div>
                <div>
                    <img className="w-20 h-20" src="../src/images/tech-icons/vscode.svg" alt="css-logo" />
                    <p className="text-center">VS Code</p>
                </div>
                <div>
                    <img className="w-20 h-20" src="../src/images/tech-icons/responsive.svg" alt="css-logo" />
                    <p className="text-center">Responsive</p>
                </div>
            </div>
        </section>
    )
}