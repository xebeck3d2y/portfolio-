import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock, FaShieldAlt, FaServer } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Ransomware Detection Using GANs and Machine Learning",
      description: "A machine learning model leveraging GANs (Generative Adversarial Networks) to detect ransomware attacks from behavioral and network-based datasets.",
      tags: ["Python", "Ransomware datasets", "Machine learning"],
      icon: <FaShieldAlt className="text-[var(--primary)] text-3xl" />,
      presentation: "https://www.canva.com/design/DAGkpU5FJpQ/y7kcVk9rTV28TVhrzRncmw/edit",
      github: "https://github.com/xebeck3d2y"
    },
    {
      title: "Secure File Exchange Application",
      description: "A full-stack web application for uploading, sharing, and downloading files securely, using token-based authentication and file encryption.",
      tags: ["Encryption", "Secure File Transfer", "JWT"],
      icon: <FaLock className="text-[var(--primary)] text-3xl" />,
      github: "https://github.com/xebeck3d2y",
      presentation: "https://www.canva.com/design/DAGo1j4kNJQ/qYMKgNkhMDTOTxUwyk8KOg/edit"
    },
    {
      title: "AI-powered Quiz Generation Platform",
      description: "An interactive platform allowing educators to automatically generate quizzes from PDFs or text documents using an AI engine (e.g. OpenAI), with real-time student participation and results tracking.",
      tags: ["OpenAI API", "WebSocket", "React"],
      icon: <FaServer className="text-[var(--primary)] text-3xl" />,
      github: "https://github.com/xebeck3d2y",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <div className="terminal mb-8">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
          </div>
          <div className="p-4">
            <p className="mb-3 text-[var(--foreground)]">
              <span className="text-[var(--primary)]">$</span> ls -la ~/projects/
            </p>
            <p className="mb-3 text-[var(--foreground)]">
              Displaying my cybersecurity projects. Each project demonstrates different aspects of security engineering .
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="cyber-card overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
                borderColor: 'var(--primary)'
              }}
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>{project.icon}</div>
                  <div className="flex space-x-3">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                      whileHover={{ y: -3 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                      whileHover={{ y: -3 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                    {project.presentation && (
                      <motion.a
                        href={project.presentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                        whileHover={{ y: -3 }}
                      >
                        Presentation
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{project.title}</h3>
                <p className="text-[var(--muted-foreground)] mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 rounded-md bg-[var(--code-bg)] text-[var(--primary)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="h-1 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://github.com/xebeck3d2y" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 15px rgba(0, 255, 157, 0.7)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-2" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
