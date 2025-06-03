import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCode, FaBug, FaLock } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[var(--secondary)]">My Journey</h3>
            <div className="terminal mb-6">
              <div className="terminal-header">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="p-4">
                <p className="mb-3 text-[var(--foreground)]">
                  <span className="text-[var(--primary)]">$</span> whoami
                </p>
                <p className="mb-3 text-[var(--foreground)]">
                  First-year Cybersecurity Engineering student with a passion for ethical hacking, 
                  network security, and digital forensics.
                </p>
                <p className="mb-3 text-[var(--foreground)]">
                  <span className="text-[var(--primary)]">$</span> cat motivation.txt
                </p>
                <p className="mb-3 text-[var(--foreground)]">
                  My fascination with cybersecurity began when I discovered how vulnerable our digital 
                  infrastructure can be. I'm driven by the challenge of staying one step ahead of threats 
                  and protecting critical systems from malicious actors.
                </p>
                <p className="text-[var(--foreground)]">
                  <span className="text-[var(--primary)]">$</span> _
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[var(--secondary)]">My Focus Areas</h3>
            <div className="space-y-6">
              {[
                { 
                  icon: <FaShieldAlt className="text-[var(--primary)] text-2xl" />, 
                  title: "Network Security",
                  description: "Analyzing and securing network infrastructure against unauthorized access and potential threats."
                },
                { 
                  icon: <FaCode className="text-[var(--primary)] text-2xl" />, 
                  title: "Secure Coding",
                  description: "Developing applications with security in mind from the ground up to prevent vulnerabilities."
                },
                { 
                  icon: <FaBug className="text-[var(--primary)] text-2xl" />, 
                  title: "Penetration Testing",
                  description: "Identifying security weaknesses through controlled cyberattack simulations."
                },
                { 
                  icon: <FaLock className="text-[var(--primary)] text-2xl" />, 
                  title: "Cryptography",
                  description: "Studying encryption techniques to protect sensitive data and communications."
                },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="cyber-card flex items-start p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                    borderColor: 'var(--primary)'
                  }}
                >
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-[var(--foreground)]">{item.title}</h4>
                    <p className="text-[var(--muted-foreground)]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Currently pursuing my degree in Cybersecurity Engineering, I'm constantly learning and 
            challenging myself through CTF competitions, personal projects, and industry certifications.
            My goal is to contribute to a more secure digital world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
