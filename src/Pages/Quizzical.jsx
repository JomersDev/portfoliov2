import React from "react";
import { Link } from "react-router-dom";

export default function TheBrewBox() {

    return (
        <div className="flex flex-col my-6 max-w-3xl mx-auto px-10">
            <div className="max-w-4xl">
                <img src="/the-brew-box/the-brew-box.png" alt="the brew box home page" className="rounded-md"/>
            </div>
            <div>
                <h2 className="text-3xl mb-4 text-teal-400 font-medium underline underline-offset-8 mt-4 md:text-4xl">
                    The Brew Box
                </h2>
                <ul className="flex space-x-2">
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">React</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">Tailwind CSS</li>
                    <li className="border border-teal-500 px-2 py-1 text-xs text-teal-400">Javascript</li>
                </ul>
                <div className="flex gap-x-2 items-center mt-4">
                    <a href="https://musical-speculoos-3a4e78.netlify.app/" target="_blank" rel="noopener" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md py-1 px-2 text-xs cursor-pointer">
                        Live View
                    </a>
                    <a href="https://github.com/JomersDev/the-brew-box" target="_blank" rel="noopener" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md py-1 px-2 text-xs cursor-pointer">
                        Github
                    </a>
                </div>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    Overview
                </h2>
                <p className="text-gray-100 leading-6 mb-4 md:text-base">
                    This ecommerce website was developed with React and Tailwind CSS for a fictional small coffee bean business. Users 
                    are able to view all products, view detailed product information and add selected items to a cart.
                </p>
                <div className="max-w-4xl">
                    <img src="/the-brew-box/all-coffee.png" alt="all coffee page" className="rounded-md"/>
                </div>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    Features
                </h2>
                <ul className="list-disc ml-6 text-gray-100 md:text-base">
                    <li>Products are sorted into different categories that customers can browse</li>
                    <li className="pt-2">Customers can view detailed product information</li>
                    <li className="pt-2">From the cart, customers can increase or decrease the quantity of each product</li>
                    <li className="pt-2">Intuitive navigation between all pages</li>
                    <li className="pt-2">Fully mobile responsive</li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    Purpose and Goal
                </h2>
                <p className="text-gray-100 leading-6 md:text-base">
                    As a developer, I built this fictional ecommerce website to showcase my skills in creating professional and user friendly
                    websites. I also wanted to improve and refine my skills with React, React Router, React Context and Tailwind CSS. 
                </p>
                <div className="my-4 max-w-4xl">
                    <img src="/the-brew-box/detail.png" alt="all coffee page" className="rounded-md"/>
                </div>
                <p className="text-gray-100  mt-2 leading-6 md:text-base">
                    As always, when starting a new project I like to view some designs from dribbble and take inspiration from modern and
                    sleek designs. This allowed me to brainstorm some ideas for how I want my project to look and the overall structure of the website. 
                    I also viewed some current real coffee bean businesses and how they present their information to their customers.
                </p>
            </div>
            <div>
                <h2 className="text-xl mb-4 text-teal-400 underline underline-offset-8 mt-6 md:text-2xl">
                    Highlight
                </h2>
                <p className="text-gray-100  leading-6 md:text-base">
                    The feature that I am most proud of for this project was the shopping cart functionality. After diving deeper into React context I was
                    able to create a shopping cart that was accessible from any page on the website. Learning how this works is a valuable skill, as it can 
                    easily be replicated in other projects down the line.
                </p>
                <div className="mt-4 max-w-4xl">
                    <img src="/the-brew-box/cart.png" alt="all coffee page" className="rounded-md"/>
                </div>
            </div>
            <Link to="/" className="bg-gradient-to-r mt-10 from-cyan-500 to-teal-500 text-white rounded-md py-2 text-center w-28">
                Back Home
            </Link>
        </div>
    )
}