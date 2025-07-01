import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import photo from "../assets/image/photo 1.jpg"

const Hero = () => {
    return (
        <section id="hero" className=" min-h-screen grid bg-gray-900 py-20 px-4">
            <div className="max-w-6xl mx-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-5 text-center md:text-left"
                >
                    <h3 className="text-blue-600 text-xl font-semibold">I'm</h3>
                    <h1 className="text-5xl font-extrabold  text-white">
                        Shyam Patidar
                    </h1>

                    {/* Typewriter Effect */}
                    <div className="text-2xl text-gray-300 h-[40px]">
                        <Typewriter
                            options={{
                                strings: [
                                    "Full Stack Developer (MERN)",
                                    "Frontend Developer",
                                    "React.js ",
                                    "Node.js",
                                    "Backend Developer",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    {/* Action Button */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 justify-center md:justify-start">
                        <a
                            href="/Shyam_Patidar_Fullstack_Developer.pdf"
                            download
                            className="bg-blue-600 text-white py-3 px-5 rounded hover:bg-blue-700 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT SIDE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center md:justify-end"
                >
                    {/* Glow Background */}
                    <div className="absolute -top-5 -left-5 w-[320px] h-[320px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse"></div>

                    {/* Outer animated ring */}
                    <div className="relative w-72 h-72 md:w-80 md:h-80 border-4 border-gray-600 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out">
                        <img
                            src={photo}
                            alt="Shyam Patidar"
                            className="w-full h-full object-cover rounded-full"
                        />
                        <div className="absolute inset-0 border-2 border-dashed border-blue-500 rounded-full animate-spin-slow z-[-1]" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
