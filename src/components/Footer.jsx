import React from 'react';
import { Code2, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-white border-t border-black/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-subtle border border-black/5 text-accent shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter">
                KHARECE <span className="text-accent">TECH</span>
              </span>
            </div>
            <p className="text-sm font-bold text-muted mb-8 max-w-xs" style={{ lineHeight: 1.6 }}>
              Architecting high-performance software and infrastructure tailored for the modern enterprise.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-subtle border border-black/5 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-black uppercase tracking-widest opacity-40 mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 font-bold text-sm">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-black uppercase tracking-widest opacity-40 mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 font-bold text-sm text-muted">
              <li>support@umusa.cloud</li>
              <li>+44 7961 919525</li>
              <li className="max-w-[200px]">EC2A 4NE, London, UK</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-black uppercase tracking-widest opacity-40 mb-6">Newsletter</h4>
            <p className="text-xs font-bold text-muted mb-6">Stay updated with our latest insights.</p>
            <div className="flex gap-2 w-full max-w-sm">
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-1 p-3 bg-subtle border border-black/5 rounded-xl outline-none text-sm font-bold placeholder:opacity-30"
              />
              <button className="px-5 py-3 bg-accent text-white rounded-xl shadow-lg shadow-accent/20 hover:scale-105 transition-transform">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40 text-center">
            &copy; {new Date().getFullYear()} KHARECE TECHNOLOGY LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest opacity-40">
              <a href="#" className="hover:text-accent">Privacy</a>
              <a href="#" className="hover:text-accent">Terms</a>
            </div>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-subtle border border-black/5 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
