import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            id="about"
            className="relative py-24 px-6 min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Glowing Frame */}
            <div className="mt-20 absolute inset-6 border-2 border-white/10 rounded-3xl animate-pulse-slow z-0"></div>

            {/* Background Gradient Blurs */}
            <div className="absolute w-96 h-96 bg-purple-500/40 rounded-full blur-3xl top-0 left-0 -z-10"></div>
            <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-2xl bottom-0 right-0 -z-10"></div>

            {/* Corner Lines */}
            <div className="mt-20 absolute top-8 left-8 w-12 h-1 bg-white rounded-full rotate-45"></div>
            <div className="absolute bottom-8 right-8 w-12 h-1 bg-white rounded-full -rotate-45"></div>

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold text-white mb-10 z-10 tracking-wide relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:rounded-full"
            >
                About Me
            </motion.h2>

            {/* Info Card */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="relative z-10 max-w-3xl bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl shadow-2xl p-10 text-center transition-transform duration-300"
            >
                <p className="text-lg leading-relaxed font-light">
                    I am a{" "}
                    <span className="font-semibold underline decoration-dotted text-white">
                        Full Stack Developer
                    </span>{" "}
                    with a passion for building responsive, scalable web applications using the{" "}
                    <span className="font-bold text-white">MERN Stack</span>.
                    <br /><br />
                    B.Tech from{" "}
                    <span className="font-medium text-white">Medi-Caps University</span>{" "}
                    with a GPA of{" "}
                    <span className="font-bold text-white">8.48</span>. I enjoy solving real-world problems
                    through technology and love exploring modern tools to build clean, efficient, and
                    user-centric products.
                </p>
            </motion.div>
        </motion.section>
    );
};

export default About;
