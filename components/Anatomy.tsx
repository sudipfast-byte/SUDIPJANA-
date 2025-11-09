
import React, { useState } from 'react';
import type { AnatomyPart } from '../types';

const anatomyData: AnatomyPart[] = [
  {
    id: 'singularity',
    name: 'Singularity',
    description: 'A one-dimensional point at the center of a black hole which contains a huge mass in an infinitely small space, where density and gravity become infinite and spacetime curves infinitely.',
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  },
  {
    id: 'event-horizon',
    name: 'Event Horizon',
    description: "The boundary around a black hole from which nothing—not even light—can escape. It's the point of no return.",
    position: 'top-[30%] left-[65%]'
  },
  {
    id: 'accretion-disk',
    name: 'Accretion Disk',
    description: 'A disk of superheated gas and dust that swirls around a black hole at immense speeds, emitting vast amounts of radiation before it falls into the event horizon.',
    position: 'top-[55%] left-[80%]'
  },
  {
    id: 'jets',
    name: 'Relativistic Jets',
    description: 'Powerful beams of ionized matter that are ejected from near the accretion disk along the black hole\'s axis of rotation, traveling at nearly the speed of light.',
    position: 'top-[5%] left-[48%]'
  }
];

const Anatomy: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<AnatomyPart | null>(anatomyData[1]);

  return (
    <section id="anatomy" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400 mb-4">
            Anatomy of a Black Hole
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Click on the labels to explore the key components that make up these enigmatic cosmic objects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
             <img src="https://picsum.photos/500/500?grayscale" alt="Diagram of a black hole" className="w-full h-full object-cover rounded-full shadow-2xl shadow-indigo-500/20" />
            
            {anatomyData.map((part) => (
              <div key={part.id} className={`absolute ${part.position} cursor-pointer group`} onClick={() => setSelectedPart(part)}>
                <span className={`block w-4 h-4 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform duration-300 animate-pulse`}></span>
                <span className={`absolute bottom-full mb-2 whitespace-nowrap px-3 py-1 text-sm rounded-md transition-all duration-300 ${selectedPart?.id === part.id ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 group-hover:bg-indigo-500'}`}>
                  {part.name}
                </span>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 min-h-[200px]">
            {selectedPart ? (
              <div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-3">{selectedPart.name}</h3>
                <p className="text-gray-300 leading-relaxed">{selectedPart.description}</p>
              </div>
            ) : (
              <div className="text-gray-500">Select a part to learn more.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anatomy;
