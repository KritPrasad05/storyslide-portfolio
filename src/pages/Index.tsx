
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Academics from '../components/Academics';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import LatestWork from '../components/LatestWork';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to check for elements already in view
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Initial loading animation */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        onAnimationComplete={() => {
          document.body.style.overflow = 'auto';
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl font-bold text-primary">AI/ML Portfolio</div>
        </motion.div>
      </motion.div>
      
      {/* Main content */}
      <main className="relative min-h-screen overflow-hidden">
        <Navbar />
        
        <div className="pl-[70px]"> {/* Offset for navbar */}
          <Hero />
          <About />
          <Academics />
          <Experience />
          <Projects />
          <Certifications />
          <LatestWork />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
