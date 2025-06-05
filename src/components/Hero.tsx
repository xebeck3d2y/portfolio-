import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Grid background */}
      <div className="grid-background"></div>
      
      {/* Matrix-like effect (will be implemented with particles) */}
      <div className="matrix-background"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-3/5 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <motion.span 
                className="text-[var(--primary)] font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                &lt; Hello World /&gt;
              </motion.span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">I'm </span>
              <span className="text-[var(--primary)] glitch" title="Aymen Boutfoust">Aymen Boutfoust</span>
            </h1>
            
            <div className="terminal mb-6">
              <div className="terminal-header">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="terminal-prompt">
                <TypeAnimation
                  sequence={[
                    'Cybersecurity Engineering Student',
                    1000,
                    'Ethical Hacker',
                    1000,
                    'Network Security Enthusiast',
                    1000,
                    'CTF Player',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>
            
            <p className="text-[var(--muted-foreground)] mb-8 max-w-lg">
              Passionate about protecting digital assets and exploring the fascinating world of cybersecurity. 
              Currently pursuing my degree in Cybersecurity Engineering.
            </p>
            
            <div className="flex space-x-4">
              <motion.a
                href="#contact"
                className="cyber-button inline-flex items-center"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 157, 0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>

              <motion.a
                href="#projects"
                className="cyber-button inline-flex items-center ml-4 bg-[#a259ff] text-white border border-[#a259ff] shadow-[0_0_15px_#a259ff80]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px #a259ff' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.a>
            </div>
            
            <div className="flex mt-8 space-x-6">
              <motion.a 
                href="https://github.com/xebeck3d2y" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: 'var(--primary)' }}
                className="text-[var(--foreground)] text-2xl"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/aymen-boutfoust-10a700366/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: 'var(--primary)' }}
                className="text-[var(--foreground)] text-2xl"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Placeholder for a profile image or a cyber-themed graphic */}
              <div className="w-full h-80 bg-[var(--code-bg)] rounded-lg relative overflow-hidden border border-[var(--border)] shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[var(--primary)] text-6xl">
                    {/* This will be replaced with an actual image or SVG */}
                    &lt;/&gt;
                  </div>
                </div>
                
                {/* Scan effect */}
                <div className="scan-effect"></div>
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--primary)]"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--primary)]"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--primary)]"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--primary)]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[var(--primary)] flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-[var(--primary)] rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
