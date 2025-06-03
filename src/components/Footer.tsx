import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-[var(--border)] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-[var(--muted-foreground)] flex items-center">
              <FaCode className="mr-2 text-[var(--primary)]" />
              <span>Designed & Built with </span>
              <FaHeart className="mx-1 text-[var(--accent)]" />
              <span> by Aymen Boutfoust</span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-[var(--muted-foreground)]">
              &copy; {new Date().getFullYear()} | All Rights Reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
