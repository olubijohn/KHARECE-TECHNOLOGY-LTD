import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Section } from './ui';

const About = () => {
  const highlights = [
    'Strategic IT Alignment',
    'Custom Software Solutions',
    'Agile Development Methodology',
    '24/7 Technical Support',
    'Data-Driven Decision Making',
    'Scalable Cloud Infrastructure'
  ];

  return (
    <Section id="about" className="bg-subtle">
      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="px-5 py-2 rounded-full bg-white border border-black/5 text-accent font-bold mb-6" style={{ fontSize: '0.85rem' }}>
            WHATEVER IT TAKES
          </div>
          <h2 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Driving <span className="text-gradient">Digital Success</span> <br className="hidden md:block" />
            Since Day One
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl" style={{ fontWeight: 500, lineHeight: 1.7 }}>
            At KHARECE TECHNOLOGY LTD, we believe that technology should be an enabler, not a hurdle. Our team of expert consultants and developers work tirelessly to provide domestic and business software solutions.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index} 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-black/5 shadow-sm"
                whileHover={{ x: 5, borderColor: 'var(--text-accent)' }}
              >
                <CheckCircle2 size={18} className="text-accent" />
                <span className="font-bold text-sm" style={{ color: 'var(--text-main)' }}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="main-visual-deck">
            <img 
              src="assets/Data Center.avif"
              alt="Professional Data Center"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '1', filter: 'brightness(0.9)' }}
            />
            
            {/* Stats Overlay */}
            <motion.div 
              className="absolute glass-card flex flex-col items-center justify-center text-center p-8"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '70%',
                background: 'rgba(255, 255, 255, 0.9)',
                borderColor: 'white'
              }}
            >
              <div style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 900, color: 'var(--text-accent)', letterSpacing: '-0.05em' }}>
                20+
              </div>
              <div className="font-black uppercase tracking-widest text-[10px] opacity-60">Global Projects</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
