import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Zap } from 'lucide-react';
import { Button } from './ui';

const Hero = () => {
  return (
    <section id="home" className="section overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Background decoration */}
      <div className="bg-glow" style={{ top: '-10%', right: '-10%' }} />
      <div className="bg-glow" style={{ bottom: '10%', left: '-5%', opacity: 0.5 }} />
      
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: `linear-gradient(var(--text-accent) 1px, transparent 1px), linear-gradient(90deg, var(--text-accent) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
      }} />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-5 py-2 rounded-full bg-subtle border border-black/5 text-accent font-bold flex items-center gap-2 mb-8"
              style={{ fontSize: '0.85rem' }}
            >
              <Zap size={14} fill="currentColor" />
              ELITE TECH CONSULTANCY
            </motion.div>
            
            <h1 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1 }}>
              Engineering the <br />
              <span className="text-gradient">Digital Elite</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted mb-10 max-w-xl" style={{ fontWeight: 500, lineHeight: 1.6 }}>
              KHARECE TECHNOLOGY LTD architects high-performance software and infrastructure tailored for the modern enterprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Let's Talk <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                Our Expertise
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative lg:block"
          >
            <div className="main-visual-deck animate-float max-w-lg mx-auto lg:max-w-none">
              <img 
                src="assets/11062b_53a199d7840b4947904db7d83d61e710f000.avif"
                alt="Elite Engineering"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1', filter: 'brightness(1.02)' }}
              />
              
              {/* Terminal Overlay */}
              <motion.div 
                className="absolute"
                style={{
                  bottom: '10%',
                  left: '10%',
                  right: '10%',
                  padding: '1.5rem',
                  background: 'rgba(10, 15, 25, 0.9)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }} />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent/20">
                    <Terminal className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase opacity-60">Session</div>
                    <div className="text-sm text-white font-black uppercase">kharece_engine_v1</div>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-lg font-mono text-[10px] text-accent/80 bg-black/40 border border-white/5">
                  {`> initializing_infrastructure... [OK]`}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
