import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Shield, Zap } from 'lucide-react';
import { Button } from './ui';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, hsla(var(--primary), 0.2) 0%, transparent 70%)',
        zIndex: 0,
        filter: 'blur(50px)'
      }} />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, hsla(280, 80%, 60%, 0.15) 0%, transparent 70%)',
          zIndex: 0,
          filter: 'blur(60px)'
        }} 
      />

      {/* Cyber grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
        backgroundSize: '100px 100px',
        opacity: 0.3,
        maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
        zIndex: 0
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                padding: '0.5rem 1rem', 
                backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                borderRadius: 'full',
                color: 'hsl(var(--primary))',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              <Zap size={16} />
              Revolutionizing IT Consultancy
            </motion.div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
              Turning Vision into <br />
              <span className="text-gradient">Robust Reality</span>
            </h1>
            
            <p style={{ fontSize: '1.125rem', color: 'hsl(var(--muted-foreground))', marginBottom: '2.5rem', maxWidth: '600px' }}>
              KHARECE TECHNOLOGY LTD delivers cutting-edge software development and domestic IT solutions tailored to your business needs. We bridge the gap between complex technology and seamless execution.
            </p>
            
            <div className="flex gap-6">
              <Button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Start a Project <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                Our Services
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="animate-float"
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            {/* Main Hero Image with Glass Border */}
            <div style={{
              width: '100%',
              maxWidth: '550px',
              aspectRatio: '1',
              position: 'relative',
              borderRadius: '2.5rem',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <img 
                src="/assets/11062b_53a199d7840b4947904db7d83d61e710f000.avif"
                alt="KHARECE Technology"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.8) contrast(1.1)'
                }}
              />
              
              {/* Floating Overlay Card */}
              <motion.div 
                className="glass"
                style={{
                  position: 'absolute',
                  bottom: '5%',
                  left: '5%',
                  right: '5%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.5rem',
                  gap: '1rem',
                  borderColor: 'hsla(var(--primary), 0.3)',
                  backdropFilter: 'blur(12px)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '1.5rem'
                }}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div className="flex items-center gap-3">
                    <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '0.75rem' }}>
                      <Terminal size={18} color="hsl(var(--primary))" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 600 }}>System Initialized</h3>
                      <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>Ready for deployment</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  padding: '0.75rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '0.75rem',
                  fontSize: '0.75rem',
                  fontFamily: 'monospace',
                  color: 'hsl(var(--primary))',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  {`> kharece --build --success`}
                </div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              zIndex: -1,
              filter: 'blur(30px)'
            }} />
          </motion.div>


        </div>
      </div>
    </section>
  );
};


export default Hero;
