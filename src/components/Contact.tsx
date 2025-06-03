import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaLock } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

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
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center h-full"
          >
            <div className="relative w-[220px] h-[220px] mb-6">
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none" className="absolute inset-0">
                <defs>
                  <radialGradient id="cyberpunk-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a259ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00ff9d" stopOpacity="0.2" />
                  </radialGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <circle
                  cx="110"
                  cy="110"
                  r="90"
                  stroke="url(#cyberpunk-glow)"
                  strokeWidth="4"
                  fill="rgba(162,89,255,0.08)"
                  filter="url(#glow)"
                />
                <circle cx="110" cy="110" r="3" fill="#a259ff" />
              </svg>
              {/* Ellipses animées */}
              <svg width="220" height="220" className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '8s' }}>
                <ellipse cx="110" cy="110" rx="80" ry="30" fill="none" stroke="#00ff9d" strokeWidth="1.5" opacity="0.7"/>
              </svg>
              <svg width="220" height="220" className="absolute inset-0 animate-spin-reverse" style={{ animationDuration: '12s' }}>
                <ellipse cx="110" cy="110" rx="60" ry="80" fill="none" stroke="#a259ff" strokeWidth="1.5" opacity="0.5"/>
              </svg>
              <svg width="220" height="220" className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '16s' }}>
                <ellipse cx="110" cy="110" rx="40" ry="100" fill="none" stroke="#00ff9d" strokeWidth="1" opacity="0.3"/>
              </svg>
              {/* Points fixes */}
              <svg width="220" height="220" className="absolute inset-0 pointer-events-none">
                <circle cx="110" cy="40" r="4" fill="#00ff9d" opacity="0.7"/>
                <circle cx="110" cy="180" r="2.5" fill="#00ff9d" opacity="0.7"/>
                <circle cx="40" cy="110" r="2.5" fill="#a259ff" opacity="0.7"/>
                <circle cx="180" cy="110" r="2.5" fill="#a259ff" opacity="0.7"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-[var(--primary)] mb-2 glitch relative select-none" title="Secure Messaging Coming Soon">
              Secure Messaging Coming Soon
            </h4>
            <p className="text-[var(--muted-foreground)] text-center max-w-xs">
              This feature will allow you to send encrypted messages directly.<br />
              Stay tuned for a real cyberpunk experience!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
