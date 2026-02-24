import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Button } from './ui';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'pt-4 pb-3 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-xl' 
        : 'pt-8 pb-6 bg-transparent'
    }`}>
      <div className="container flex justify-between items-center">
        {/* Logo Section */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-2 group whitespace-nowrap"
          whileHover={{ scale: 1.02 }}
        >
          <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <ShieldCheck size={24} className="text-primary" />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight">
            KHARECE <span className="text-primary">TECHNOLOGY</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
         
        </div>

        {/* Mobile Toggle */}
        <div 
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>


      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="container py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              {/* Replaced single button with two buttons and added gap-6 */}
              <div className="flex flex-col gap-4"> {/* Changed to flex-col for mobile, gap-4 for vertical spacing */}
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full"
                >
                  Start a Project <ArrowRight size={20} />
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full"
                >
                  Our Services
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


export default Navbar;
