import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/image/home.png'
import image2 from '../assets/image/products.png'
import image3 from '../assets/image/checkout.png'
import image4 from '../assets/image/img1.png'
import image5 from '../assets/image/img2.png'
import image6 from '../assets/image/img3.png'


const projectList = [
    {
        title: 'Chat Application',
        description:
            'Real-time messaging app using Socket.IO, authentication, and MongoDB. Includes user login, real-time chat, and MongoDB storage.',
        images: [
            image4,image5,image6
        ],
        demoLink: 'https://chat-application-foil.onrender.com/login',
        tags: ['ReactJS', 'NodeJS', 'Socket.IO', 'MongoDB'],
    },
    {
        title: 'Kapdo Ki Duniya',
        description:
            'Developed a complete MERN stack-based e-commerce website with modern UI using ShadCN UI.',
        images: [
            image1, image2, image3
        ],

        demoLink: 'https://kapdo-ki-duniya.onrender.com/',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Responsive Design'],
    },
];

const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="py-20 px-6 min-h-screen bg-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2
                className="text-4xl font-bold text-center text-white mb-10 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-blue-500 after:rounded-full"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Projects
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projectList.map((proj, index) => (
                    <ProjectCard key={index} project={proj} />
                ))}
            </div>
        </motion.section>
    );
};

const ProjectCard = ({ project }) => {
    const [current, setCurrent] = useState(0);
    const total = project.images.length;

    const nextImage = () => setCurrent((prev) => (prev + 1) % total);
    const prevImage = () => setCurrent((prev) => (prev - 1 + total) % total);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-xl bg-gray-900 border border-gray-700 transition-transform duration-300 hover:shadow-2xl"
        >
            {/* Image Slider */}
            <div className="relative w-full h-48">
                <img
                    src={project.images[current]}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                />
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full shadow-md"
                >
                    ←
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full shadow-md"
                >
                    →
                </button>
            </div>

            {/* Card Content */}
            <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-white">
                    {project.title}
                </h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-xs font-medium bg-gray-700 text-white px-2 py-1 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-400 hover:underline"
                >
                    Live Demo →
                </a>
            </div>
        </motion.div>
    );
};

export default Projects;
