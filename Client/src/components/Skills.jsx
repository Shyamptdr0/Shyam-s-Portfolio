import React from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaServer,
    FaGitAlt,
} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress } from 'react-icons/si';

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
];

const Skills = () => {
    return (
        <motion.section
            id="skills"
            className="py-20 px-6 min-h-screen bg-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl font-bold text-center text-white mb-10 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-blue-500 after:rounded-full">
                Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <p className="text-lg font-semibold text-white">
                            {skill.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;
