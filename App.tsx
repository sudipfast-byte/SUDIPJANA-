
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIf from './components/WhatIf';
import Anatomy from './components/Anatomy';
import Discoveries from './components/Discoveries';
import Visualizer from './components/Visualizer';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-black">
      <Header />
      <main>
        <Hero />
        <WhatIf />
        <Anatomy />
        <Discoveries />
        <Visualizer />
      </main>
      <Footer />
    </div>
  );
};

export default App;
