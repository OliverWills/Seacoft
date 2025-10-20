import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Process from './components/Process.tsx';
import CaseStudies from './components/CaseStudies.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-100 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;