import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    // const [darkMode, setDarkMode] = useState(false);
    //
    // useEffect(() => {
    //     document.documentElement.classList.toggle('dark', darkMode);
    // }, [darkMode]);

    return (
        <div className=" bg-gray-900  text-white min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
