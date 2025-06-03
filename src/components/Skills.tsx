import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaNetworkWired, FaLock, FaDatabase, FaTools, FaServer } from 'react-icons/fa';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: "Network Security", level: 20, icon: <FaNetworkWired /> },
    { name: "Ethical Hacking", level: 10, icon: <FaLaptopCode /> },
    { name: "Cryptography", level: 15, icon: <FaLock /> },
    { name: "Database Security", level: 5, icon: <FaDatabase /> },
    { name: "Security Tools", level: 10, icon: <FaTools /> },
    { name: "Cloud Security", level: 5, icon: <FaServer /> },
  ];

  const certifications = [
    "Certified in Cybersecurity (CC) from ISC2 (In Progress)",
    "Certified Ethical Hacker (CEH) -Future Goal",
    "CCNA Security - Future Goal",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--secondary)]">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-[var(--primary)] mr-3">{skill.icon}</span>
                      <span className="text-[var(--foreground)]">{skill.name}</span>
                    </div>
                    <span className="text-[var(--primary)]">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + (0.1 * index) }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--secondary)]">Certifications & Education</h3>
            
            <div className="terminal mb-6">
              <div className="terminal-header">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="p-4">
                <p className="mb-3 text-[var(--foreground)]">
                  <span className="text-[var(--primary)]">$</span> ls certifications/
                </p>
                {certifications.map((cert, index) => (
                  <p key={index} className="mb-2 text-[var(--foreground)]">
                    {cert}
                  </p>
                ))}
                <p className="mb-3 text-[var(--foreground)]">
                  <span className="text-[var(--primary)]">$</span> cat education.txt
                </p>
                <p className="mb-3 text-[var(--foreground)]">
                  Bachelor's in Cybersecurity Engineering (Year 1)
                  <br />
                  INPT,2024-Present
                </p>
                <p className="text-[var(--foreground)]">
                  <span className="text-[var(--primary)]">$</span> _
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-[var(--secondary)]">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Wireshark", "Metasploit", "Burp Suite", "Nmap",
                "Kali Linux", "Python", "Bash Scripting", "OWASP ZAP"
              ].map((tool, index) => (
                <motion.div 
                  key={index}
                  className="cyber-card p-3 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                    borderColor: 'var(--primary)'
                  }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
