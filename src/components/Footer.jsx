import React from 'react';
import { Code2, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass" style={{ marginTop: '4rem', padding: '5rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ marginBottom: '4rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              <Code2 size={32} color="hsl(var(--primary))" />
              <span className="text-gradient">KHARECE</span>
            </div>
            <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: '1.6', marginBottom: '2rem' }}>
              Empowering businesses through cutting-edge software development and strategic IT consultancy. Robust solutions for a digital world.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="glass" style={{ padding: '0.75rem', borderRadius: '50%', color: 'hsl(var(--primary))', transition: 'all 0.3s' }}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} style={{ color: 'hsl(var(--muted-foreground))', transition: 'color 0.2s' }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Newsletter</h4>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem' }}>Stay updated with our latest insights and technological breakthroughs.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                style={{ 
                  flex: 1,
                  padding: '0.75rem 1rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '0.75rem',
                  color: 'white',
                  outline: 'none'
                }} 
              />
              <button style={{ 
                backgroundColor: 'hsl(var(--primary))', 
                color: 'white', 
                padding: '0.75rem 1.25rem', 
                borderRadius: '0.75rem' 
              }}>
                Join
              </button>
            </div>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          smFlexDirection: 'row',
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '1.5rem',
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          color: 'hsl(var(--muted-foreground))',
          fontSize: '0.9rem',
          textAlign: 'center'
        }} className="flex-col sm:flex-row">
          <p>&copy; {new Date().getFullYear()} KHARECE TECHNOLOGY LTD (UK). All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            style={{ 
              padding: '0.5rem', 
              background: 'hsla(var(--primary), 0.1)', 
              borderRadius: '0.5rem',
              color: 'hsl(var(--primary))'
            }}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
