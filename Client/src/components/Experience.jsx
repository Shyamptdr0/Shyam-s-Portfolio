import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const Experience = () => {
    return (
        <motion.section
            id="experience"
            className="py-20 px-6 min-h-screen flex flex-col items-center justify-center bg-black"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
        >



            {/* Heading */}
            <motion.h2
                className="text-4xl font-bold text-center text-white mb-10 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-blue-500 after:rounded-full"
                variants={itemVariants}
            >
                Experience
            </motion.h2>


            {/* Experience Card */}
            <motion.div
                className="max-w-3xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8  transition duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}

            >
                <div className="absolute -top-5 -left-5 w-[320px] h-[320px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse"></div>

                <motion.h3
                    className="text-2xl font-semibold text-white"
                    variants={itemVariants}
                >
                    Frontend Developer - MII Foundation
                </motion.h3>
                <motion.p
                    className="text-sm text-gray-400 mb-4"
                    variants={itemVariants}
                >
                    Jan 2023 - Jun 2023
                </motion.p>
                <motion.ul
                    className="list-disc ml-6 space-y-2 text-gray-300"
                    variants={itemVariants}
                >
                    <li>Built responsive UI with React.js</li>
                    <li>Collaborated with backend team on full stack projects</li>
                    <li>Boosted user engagement by 25%</li>
                </motion.ul>
            </motion.div>

        </motion.section>
    );
};

export default Experience;
