import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck, ArrowRight } from 'lucide-react';
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
        ? 'py-3 glass-nav shadow-lg' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container flex justify-between items-center">
        {/* Logo Section */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-3 group whitespace-nowrap"
          whileHover={{ scale: 1.02 }}
        >
          <div className="p-2 rounded-xl bg-subtle border border-black/5 group-hover:bg-white transition-colors shadow-sm">
            <ShieldCheck size={24} className="text-accent" />
          </div>
          <span className="text-lg md:text-xl font-black uppercase tracking-tighter">
            KHARECE <span className="text-accent font-bold">TECH</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Let's Talk <ArrowRight size={18} />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div 
          className="md:hidden p-2 rounded-xl bg-subtle border border-black/5 text-main cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>


      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-nav border-b border-black/5 overflow-hidden fixed left-0 right-0 top-[70px] z-40"
            style={{ background: 'rgba(255, 255, 255, 0.98)' }}
          >
            <div className="container py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-black uppercase tracking-tighter opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="flex flex-col gap-4 pt-4 border-t border-black/5">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full"
                >
                  Start a Project <ArrowRight size={20} />
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
