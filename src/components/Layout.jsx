import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/K&S.PNG';

const Layout = ({ children, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#FFFEF8]/96 backdrop-blur-md border-b border-[#E2C97E]/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <img src={logo} alt="K&S Services" className="h-36 w-auto" />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium tracking-widest text-sm transition-all duration-300 relative ${
                    activeSection === section
                      ? 'text-[#B8920C]'
                      : 'text-[#3D4E5E] hover:text-[#B8920C]'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#C8A020] to-[#E8C84A]"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-[#C8A020] to-[#A07818] hover:from-[#A07818] hover:to-[#8A6610] text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 tracking-wider text-sm font-semibold border-0"
                >
                  Get Quote
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#F5EDD8] transition-colors"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} className="text-[#1A2535]" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} className="text-[#1A2535]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-[#FFFEF8]/98 backdrop-blur-md border-t border-[#E2C97E]/40"
            >
              <motion.div
                className="px-4 py-4 space-y-1"
                initial="closed" animate="open" exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {['home', 'about', 'services', 'contact'].map((section) => (
                  <motion.button
                    key={section}
                    variants={{ open: { y: 0, opacity: 1 }, closed: { y: 20, opacity: 0 } }}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left capitalize font-medium text-[#3D4E5E] hover:text-[#B8920C] transition-colors py-3 px-4 rounded-xl hover:bg-[#F5EDD8] tracking-wider text-sm"
                  >
                    {section}
                  </motion.button>
                ))}
                <motion.div variants={{ open: { y: 0, opacity: 1 }, closed: { y: 20, opacity: 0 } }} className="pt-2">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-[#C8A020] to-[#A07818] hover:from-[#A07818] hover:to-[#8A6610] text-white tracking-wider text-sm font-semibold border-0"
                  >
                    Get Quote
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {children}

      {/* Footer */}
      <footer className="bg-[#152236] text-white py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #C8A020 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A020]/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-5">
              <div className="bg-white/8 rounded-xl p-1">
                <img src={logo} alt="K&S Services" className="h-28 w-auto" />
              </div>
              <div>
                <p className="text-[#E2C97E] font-semibold text-base tracking-wide italic">
                  "Here to serve your needs"
                </p>
                <p className="text-[#5A7A96] text-sm mt-1 tracking-wide">London, United Kingdom</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-1 text-sm text-[#5A7A96]">
                <span>+44 (0) 7376 977792</span>
                <span className="hidden md:inline w-px h-4 bg-[#2D4060] self-center" />
                <span>info@kandsservicesinternational.com</span>
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-[#C8A020] to-transparent" />
              <p className="text-[#3D5570] text-sm">
                © 2025 K&S Services International Ltd. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
