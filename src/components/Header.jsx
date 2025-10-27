import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/images/Logo_2nd-1536x305 1.svg';
import bgImage from '../assets/images/bgImage.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full h-[80px] sm:h-[90px] lg:h-[100px] pt-4 sm:pt-5 lg:pt-6 pb-4 sm:pb-5 lg:pb-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src={Logo} 
              alt="Namoosx Logo" 
              className="h-6 sm:h-7 lg:h-8 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-primary transition-colors cursor-pointer">
              About Us
            </button>
            <div className="relative group">
              <button className="text-white hover:text-primary transition-colors flex items-center">
                Innovate
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-white hover:text-primary transition-colors flex items-center">
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-white hover:text-primary transition-colors flex items-center">
                Transform
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-white hover:text-primary transition-colors flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <button onClick={() => scrollToSection('careers')} className="text-white hover:text-primary transition-colors cursor-pointer">
              Career
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block text-white font-medium transition-colors h-[40px] sm:h-[45px] lg:h-[50px] gap-[10px] opacity-100 py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-[100px] bg-custom-blue text-[12px] sm:text-[13px] lg:text-[14px]"
          >
            Let's Build Together
          </motion.button>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/30 backdrop-blur-xl border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left text-white hover:text-primary transition-colors py-2"
              >
                About Us
              </button>
              <button className="block w-full text-left text-white hover:text-primary transition-colors py-2">
                Innovate
              </button>
              <button className="block w-full text-left text-white hover:text-primary transition-colors py-2">
                Solutions
              </button>
              <button className="block w-full text-left text-white hover:text-primary transition-colors py-2">
                Transform
              </button>
              <button className="block w-full text-left text-white hover:text-primary transition-colors py-2">
                Services
              </button>
              <button 
                onClick={() => scrollToSection('careers')} 
                className="block w-full text-left text-white hover:text-primary transition-colors py-2"
              >
                Career
              </button>
              
              {/* Mobile CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-white font-medium transition-colors h-[50px] py-4 px-8 rounded-[100px] bg-custom-blue mt-4"
              >
                Let's Build Together
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
