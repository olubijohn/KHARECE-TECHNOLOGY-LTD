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
    <Section id="services" className="bg-white">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
        >
          Our <span className="text-gradient">Core Expertise</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted max-w-2xl mx-auto"
          style={{ fontWeight: 500 }}
        >
          We build high-performance, secure, and scalable digital ecosystems for the modern enterprise.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto lg:max-w-none"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              show: { opacity: 1, scale: 1, y: 0 }
            }}
            className="p-8 rounded-3xl bg-subtle border border-black/5 hover:border-accent/40 shadow-sm transition-all duration-300"
            whileHover={{ y: -10, backgroundColor: '#ffffff', boxShadow: '0 20px 40px -20px rgba(59, 130, 246, 0.2)' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-accent mb-6 shadow-sm">
              <motion.div whileHover={{ rotate: 10 }}>
                {service.icon}
              </motion.div>
            </div>
            <h3 className="text-xl font-black uppercase tracking-tighter mb-4" style={{ color: 'var(--text-main)' }}>
              {service.title}
            </h3>
            <p className="text-sm font-bold text-muted" style={{ lineHeight: 1.6 }}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Services;
