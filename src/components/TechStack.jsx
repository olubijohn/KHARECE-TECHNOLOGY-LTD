import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui';
import { 
  Database, 
  Layers, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Smartphone,
  Server,
  Code2
} from 'lucide-react';

const techStack = [
  { name: 'React / Next.js', icon: <Layers size={24} />, category: 'Frontend' },
  { name: 'Node.js / Go', icon: <Server size={24} />, category: 'Backend' },
  { name: 'PostgreSQL / MongoDB', icon: <Database size={24} />, category: 'Database' },
  { name: 'AI / LLM Integration', icon: <Cpu size={24} />, category: 'Advanced' },
  { name: 'AWS / Azure', icon: <Globe size={24} />, category: 'Cloud' },
  { name: 'Cybersecurity', icon: <ShieldCheck size={24} />, category: 'Security' },
  { name: 'Mobile (React Native)', icon: <Smartphone size={24} />, category: 'Mobile' },
  { name: 'TypeScript / Rust', icon: <Code2 size={24} />, category: 'Languages' },
];

const TechStack = () => {
  return (
    <Section id="tech" className="bg-secondary/20">
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ 
            display: 'inline-block', 
            padding: '4px 12px', 
            borderRadius: '9999px', 
            background: 'hsla(var(--primary), 0.1)',
            color: 'hsl(var(--primary))',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '1rem'
          }}
        >
          Our Capabilities
        </motion.div>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>
          Future-Proof <span className="text-gradient">Technology Stack</span>
        </h2>
        <p style={{ color: 'hsl(var(--muted-foreground))', maxWidth: '600px', margin: '0 auto' }}>
          We leverage the latest industry-standard technologies to build scalable, secure, and high-performance solutions for our UK and global clients.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass"
            style={{ 
              padding: '1.5rem', 
              borderRadius: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
            whileHover={{ 
              y: -5, 
              borderColor: 'hsl(var(--primary))',
              backgroundColor: 'hsla(var(--primary), 0.05)'
            }}
          >
            <div style={{ 
              color: 'hsl(var(--primary))',
              padding: '0.75rem',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '0.75rem'
            }}>
              {tech.icon}
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 600 }}>{tech.name}</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '2px' }}>{tech.category}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Abstract AI Graphic (CSS Based) */}
      <div style={{ 
        marginTop: '6rem', 
        height: '200px', 
        position: 'relative', 
        overflow: 'hidden',
        borderRadius: '2rem',
        background: 'linear-gradient(90deg, transparent, hsla(var(--primary), 0.05), transparent)'
      }}>
        <motion.div
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '20%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, hsla(var(--primary), 0.3), transparent)',
            filter: 'blur(40px)'
          }}
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '4rem',
          opacity: 0.2
        }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 0.5 
              }}
              style={{
                width: '60px',
                height: '60px',
                border: '1px solid hsl(var(--primary))',
                borderRadius: '50%'
              }}
            />
          ))}
        </div>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 800,
          letterSpacing: '4px',
          opacity: 0.6,
          color: 'hsl(var(--primary))'
        }}>
          AI POWERED INTELLIGENCE
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
