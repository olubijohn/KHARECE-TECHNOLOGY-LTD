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
    <Section id="contact" className="bg-white border-t border-black/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="px-5 py-2 rounded-full bg-subtle border border-black/5 text-accent font-bold mb-6" style={{ fontSize: '0.85rem' }}>
            GET IN TOUCH
          </div>
          <h2 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Let's Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-lg text-muted mb-10 max-w-xl" style={{ fontWeight: 500, lineHeight: 1.6 }}>
            Whether you have a specific project in mind or just want to explore how technology can help your business, our team is ready to listen.
          </p>

          <div className="flex flex-col gap-8 w-full">
            {[
              { icon: <Mail size={24} />, title: 'Mail Us', detail: 'support@umusa.cloud' },
              { icon: <Phone size={24} />, title: 'Call Us', detail: '+44 7961 919525' },
              { icon: <MapPin size={24} />, title: 'Visit Us', detail: '86-90, Paul Street, London, EC2A 4NE' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 p-2 group">
                <div className="w-14 h-14 rounded-2xl bg-subtle border border-black/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">{item.title}</h4>
                  <p className="text-main font-bold">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[2.5rem] bg-subtle border border-black/5 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-2">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full p-4 bg-white border border-black/5 rounded-2xl outline-none focus:border-accent/40 focus:ring-4 focus:ring-accent/5 transition-all text-main font-bold placeholder:opacity-30"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-2">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="john@company.com"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full p-4 bg-white border border-black/5 rounded-2xl outline-none focus:border-accent/40 focus:ring-4 focus:ring-accent/5 transition-all text-main font-bold placeholder:opacity-30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-2">Message</label>
              <textarea 
                rows="4" 
                required
                placeholder="How can we help you?"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full p-4 bg-white border border-black/5 rounded-2xl outline-none focus:border-accent/40 focus:ring-4 focus:ring-accent/5 transition-all text-main font-bold placeholder:opacity-30 resize-none"
              />
            </div>

            <Button type="submit" className="w-full py-6 text-lg">
              Send Message <Send size={20} className="ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
