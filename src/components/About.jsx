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
    <Section id="about" className="bg-secondary/30">
      <div className="grid grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Driving <span className="text-gradient">Digital Success</span> <br />
            Since Day One
          </h2>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem', lineHeight: '1.7' }}>
            At KHARECE TECHNOLOGY LTD, we believe that technology should be an enabler, not a hurdle. Our team of expert consultants and developers work tirelessly to provide domestic and business software solutions that are as robust as they are intuitive.
          </p>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
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
                className="flex items-center gap-3"
                whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                style={{ cursor: 'default', transition: 'color 0.2s' }}
              >
                <CheckCircle2 size={20} color="hsl(var(--primary))" />
                <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
          whileHover={{ scale: 1.02 }}
        >
          <div style={{ 
            padding: '1rem', 
            borderRadius: '2.5rem', 
            overflow: 'hidden',
            aspectRatio: '1',
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative'
          }}>
            <img 
              src="/assets/Data Center.avif"
              alt="Professional Data Center"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '1.5rem',
                filter: 'brightness(0.8) contrast(1.1)'
              }}
            />
            
            {/* Stats Overlay */}
            <motion.div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                padding: '2rem',
                borderRadius: '2rem',
                backdropFilter: 'blur(8px)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '70%'
              }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', textShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              >
                20+
              </motion.div>
              <div style={{ fontSize: '1rem', color: '#fff', opacity: 0.9, fontWeight: 500 }}>Global Projects Delivered</div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};

export default About;
