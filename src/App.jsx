import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import TechStack from './components/TechStack';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

