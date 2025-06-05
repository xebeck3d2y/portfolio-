import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--secondary)]">Get In Touch</h3>
            
            <div className="terminal mb-6">
              <div className="terminal-header">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="p-4">
                <p className="mb-3 text-[var(--foreground)]">
                  <span className="text-[var(--primary)]">$</span> echo "Let's connect!"
                </p>
                <p className="mb-3 text-[var(--foreground)]">
                  I'm always open to discussing new projects, cybersecurity challenges, or potential collaborations.
                </p>
                <p className="mb-3 text-[var(--foreground)]">
                  <span className="text-[var(--primary)]">$</span> cat contact_info.txt
                </p>
                <p className="mb-3 text-[var(--foreground)]">
                  <span className="flex items-center mb-2">
                    <FaEnvelope className="mr-2 text-[var(--primary)]" /> 
                    monkeydydluffy07@gmail.com
                  </span>
                  <span className="flex items-center">
                    <FaLinkedin className="mr-2 text-[var(--primary)]" /> 
                    https://www.linkedin.com/in/aymen-boutfoust-10a700366/
                  </span>
                </p>
                <p className="text-[var(--foreground)]">
                  <span className="text-[var(--primary)]">$</span> _
                </p>
              </div>
            </div>
            
            <div className="flex space-x-6 mt-8">
              <motion.a 
                href="https://github.com/xebeck3d2y" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--foreground)] text-2xl"
                whileHover={{ y: -5, color: 'var(--primary)' }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/aymen-boutfoust-10a700366/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--foreground)] text-2xl"
                whileHover={{ y: -5, color: 'var(--primary)' }}
              >
                <FaLinkedin />
              </motion.a>
              
              <motion.a 
                href="mailto:monkeydydluffy07@gmail.com" 
                className="text-[var(--foreground)] text-2xl"
                whileHover={{ y: -5, color: 'var(--primary)' }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Globe animé à droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-64 h-64 relative">
              <svg
                className="animate-spin-slow"
                style={{ animationDuration: '8s' }}
                width="256"
                height="256"
                viewBox="0 0 256 256"
                fill="none"
              >
                <circle cx="128" cy="128" r="120" stroke="#a259ff" strokeWidth="4" fill="#18181b" />
                <ellipse cx="128" cy="128" rx="100" ry="40" stroke="#00ff9d" strokeWidth="2" fill="none" />
                <ellipse cx="128" cy="128" rx="60" ry="100" stroke="#a259ff" strokeWidth="2" fill="none" />
                <ellipse cx="128" cy="128" rx="80" ry="120" stroke="#00ff9d" strokeWidth="1" fill="none" />
                <circle cx="128" cy="128" r="5" fill="#a259ff" />
              </svg>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[var(--primary)] font-bold text-lg">
                Cyber Globe
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
