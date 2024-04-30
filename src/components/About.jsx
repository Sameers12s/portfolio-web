import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-0 sm:mt-20">
                    Hello, I am Sameer Singh Vishene, a recent graduate from IPS Academy, Indore. With a deep enthusiasm for software development and design, I'm eager to kickstart my career by leveraging my skills on practical projects. My current interests revolve around web application development, where I enjoy working with technologies like React, Tailwind, Express JS, Node JS and Mongo DB to craft engaging and user-friendly solutions.
                </p>

                <br />

                <p className="text-xl">
                    I am a committed and passionate engineering student with a passion for applying scientific principles to real-world challenges. Currently pursuing my engineering degree, I am focused on expanding my knowledge and
                    practical skills in various disciplines, aiming to make a positive impact in the field of engineering.

                </p>
            </div>
        </div>
    );
};

export default About;