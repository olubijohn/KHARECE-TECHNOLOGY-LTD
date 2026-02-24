import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Section, Button } from './ui';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1.5rem' }}>
            Let's Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2.5rem' }}>
            Whether you have a specific project in mind or just want to explore how technology can help your business, our team is ready to listen.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="flex items-center gap-4">
              <div style={{ padding: '0.75rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '1rem', color: 'hsl(var(--primary))' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Mail Us</h4>
                <p style={{ color: 'hsl(var(--muted-foreground))' }}>support@umusa.cloud</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div style={{ padding: '0.75rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '1rem', color: 'hsl(var(--primary))' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Call Us</h4>
                <p style={{ color: 'hsl(var(--muted-foreground))' }}>+44 7961 919525</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div style={{ padding: '0.75rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '1rem', color: 'hsl(var(--primary))' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Visit Us</h4>
                <p style={{ color: 'hsl(var(--muted-foreground))' }}>86-90, Paul Street, London,<br />England, United Kingdom, EC2A 4NE</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass"
          style={{ padding: '2rem sm:3rem', borderRadius: '2rem' }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.8 }}>Full Name</label>
              <input 
                type="text" 
                required
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                style={{ 
                  padding: '1rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '0.75rem',
                  color: 'white',
                  outline: 'none'
                }} 
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.8 }}>Email Address</label>
              <input 
                type="email" 
                required
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                style={{ 
                  padding: '1rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '0.75rem',
                  color: 'white',
                  outline: 'none'
                }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.8 }}>Message</label>
              <textarea 
                rows="4" 
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                style={{ 
                  padding: '1rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '0.75rem',
                  color: 'white',
                  outline: 'none',
                  resize: 'none'
                }} 
              />
            </div>

            <Button type="submit" style={{ width: '100%', marginTop: '1rem' }}>
              Send Message <Send size={18} />
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
