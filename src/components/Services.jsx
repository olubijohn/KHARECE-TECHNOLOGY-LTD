import React from 'react';
import { motion } from 'framer-motion';
import { Code, Box, Cpu, Cloud, Database, BarChart3 } from 'lucide-react';
import { Section } from './ui';

const services = [
  {
    title: 'Custom Enterprise Engineering',
    description: 'Specializing in distributed systems, microservices architecture, and high-concurrency applications using Node.js and Go.',
    icon: <Code size={32} />,
  },
  {
    title: 'Strategic IT Consultancy',
    description: 'End-to-end digital transformation strategies, architectural auditing, and UK-compliance driven technology roadmaps.',
    icon: <Box size={32} />,
  },
  {
    title: 'Intelligent System Integration',
    description: 'Deep-level API synchronization, webhook orchestration, and event-driven architecture for seamless ecosystem flow.',
    icon: <Cpu size={32} />,
  },
  {
    title: 'Cloud-Native Infrastructure',
    description: 'Serverless deployment, Docker containerization, and automated CI/CD pipelines on AWS and Azure cloud environments.',
    icon: <Cloud size={32} />,
  },
  {
    title: 'Data Science & Big Data',
    description: 'Scalable data warehousing with PostgreSQL, analytical modeling, and real-time processing of complex datasets.',
    icon: <Database size={32} />,
  },
  {
    title: 'Neural AI Implementation',
    description: 'Integrating LLMs, computer vision, and machine learning models for predictive analytics and process automation.',
    icon: <BarChart3 size={32} />,
  },
];


const Services = () => {
  return (
    <Section id="services">
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}
        >
          Our <span className="text-gradient">Core expertise</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ color: 'hsl(var(--muted-foreground))', maxWidth: '600px', margin: '0 auto' }}
        >
          We provide a comprehensive suite of IT services designed to empower your business through digital transformation and innovation.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 30 },
              show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
            }}
            className="glass"
            style={{ 
              padding: '2.5rem', 
              borderRadius: 'var(--radius)',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ 
              y: -15, 
              borderColor: 'hsl(var(--primary))',
              boxShadow: '0 20px 40px -20px hsla(var(--primary), 0.4)'
            }}
          >
            {/* Hover glow effect */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at center, hsla(var(--primary), 0.1) 0%, transparent 70%)',
                opacity: 0,
                zIndex: 0
              }}
              whileHover={{ opacity: 1 }}
            />
            
            <div style={{ 
              color: 'hsl(var(--primary))', 
              marginBottom: '1.5rem',
              display: 'inline-flex',
              padding: '1rem',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              <motion.div whileHover={{ rotate: 15 }}>
                {service.icon}
              </motion.div>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>{service.title}</h3>
            <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.95rem', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Services;
