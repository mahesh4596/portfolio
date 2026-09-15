import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Snapshot from './sections/Snapshot';
import About from './sections/About';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Achievements from './sections/Achievements';
import CodingProfiles from './sections/CodingProfiles';
import CurrentFocus from './sections/CurrentFocus';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent/30 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <Snapshot />
        <About />
        <Skills />
        <Work />
        <Achievements />
        <CodingProfiles />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
