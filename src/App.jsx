import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import Thesis from './components/Thesis';
import Services from './components/Services';
import Strategy from './components/Strategy';
import IndustryChallenges from './components/IndustryChallenges';
import Differentiators from './components/Differentiators';
import Industries from './components/Industries';
import Governance from './components/Governance';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <div id="about">
          <Purpose />
        </div>
        <div id="innovate">
          <Thesis />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="solutions">
          <Strategy />
        </div>
        <IndustryChallenges />
        <Differentiators />
        <Industries />
        <div id="transform">
          <Governance />
        </div>
        <Quality />
        <Contact />
        <div id="careers">
          <Newsletter />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;