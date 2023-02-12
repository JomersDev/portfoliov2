import React from "react";

export default function() {
    return (
        <section className="pb-10 px-10">
            <h2 className="text-3xl mb-10 text-teal-400 font-medium underline underline-offset-8">
                Contact Me
            </h2>
            <div className="bg-gray-100 py-8 px-6 shadow-lg rounded-lg">
                <form className="text-black space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-900">
                            Your Name
                        </label>
                        <div className="mt-1">
                            <input 
                                id="name" 
                                name="name" 
                                type="text" 
                                placeholder="John Smith"
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm  focus:outline-none focus:border-teal-500 "
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-900  ">
                            Email Address
                        </label>
                        <div className="mt-1">
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                placeholder="john.smith@email.com"
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-teal-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-900 ">
                            Message
                        </label>
                        <div className="mt-1">
                            <textarea 
                                id="message" 
                                name="message"
                                placeholder="Hi, Write me a message here" 
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-teal-500"
                            />
                        </div>
                    </div>
                    <button type="submit" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md py-2 w-full">
                        Send Message
                    </button>

                </form>
            </div>
        </section>
    )
}