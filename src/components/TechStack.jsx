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
    <Section id="tech" className="bg-subtle">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-4 py-1 rounded-full bg-white border border-black/5 text-accent font-bold uppercase tracking-widest mb-4 inline-block"
          style={{ fontSize: '0.75rem' }}
        >
          Our Capabilities
        </motion.div>
        <h2 className="mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          Future-Proof <span className="text-gradient">Technology Stack</span>
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto" style={{ fontWeight: 500 }}>
          We leverage industry-standard technologies to build scalable, secure, and high-performance solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="p-6 rounded-2xl bg-white border border-black/5 flex flex-col items-center gap-4 text-center group transition-all duration-300 shadow-sm"
            whileHover={{ y: -5, borderColor: 'var(--text-accent)' }}
          >
            <div className="p-4 rounded-xl bg-subtle text-accent group-hover:bg-white transition-colors">
              {tech.icon}
            </div>
            <div>
              <div className="font-bold text-main">{tech.name}</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mt-1">{tech.category}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Abstract AI Graphic */}
      <div className="mt-20 h-[180px] relative overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm">
        <motion.div
          animate={{ x: ['-100%', '100%'], opacity: [0, 0.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-3xl"
          style={{ width: '40%' }}
        />
        <div className="absolute inset-0 flex items-center justify-center gap-6 md:gap-12 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              className="w-12 h-12 md:w-20 md:h-20 border border-accent rounded-full"
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="text-xl md:text-3xl font-black uppercase tracking-[0.2em] md:tracking-[0.4em] opacity-30 text-accent">
            AI POWERED INTELLIGENCE
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
