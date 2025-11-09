
import React from 'react';
import type { DiscoveryItem } from '../types';

const discoveriesData: DiscoveryItem[] = [
  {
    year: '1783',
    title: 'John Michell\'s "Dark Stars"',
    description: 'English natural philosopher John Michell first proposes the idea of an object so massive that its gravity would prevent even light from escaping.',
  },
  {
    year: '1915',
    title: 'Einstein\'s General Relativity',
    description: 'Albert Einstein publishes his theory of general relativity, providing the theoretical framework for black holes, describing how gravity is a curvature of spacetime.',
  },
  {
    year: '1916',
    title: 'Schwarzschild Solution',
    description: 'Karl Schwarzschild finds the first exact solution to the Einstein field equations, describing the spacetime around a non-rotating, uncharged black hole.',
  },
  {
    year: '1967',
    title: 'Term "Black Hole" Coined',
    description: 'Physicist John Archibald Wheeler is credited with popularizing the term "black hole" during a lecture.',
  },
  {
    year: '1971',
    title: 'First Black Hole Candidate',
    description: 'The binary star system Cygnus X-1 is identified as the first strong candidate for a black hole, based on its intense X-ray emissions.',
  },
  {
    year: '2019',
    title: 'First-Ever Image',
    description: 'The Event Horizon Telescope collaboration releases the first direct image of a black hole, the supermassive black hole at the center of galaxy M87.',
  },
];

const TelescopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 21-3-3 3-3" />
    <path d="m18 3 3 3-3 3" />
    <path d="M12 2a10 10 0 0 0-3.54 19.55" />
    <path d="M12 22a10 10 0 0 1 7.07-2.93" />
  </svg>
);


const Discoveries: React.FC = () => {
  return (
    <section id="discoveries" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400 mb-4">
            A Timeline of Discovery
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From theoretical concepts to groundbreaking images, follow humanity's journey to understand black holes.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gray-700 hidden md:block"></div>
          {discoveriesData.map((item, index) => (
            <div key={index} className="relative mb-8 md:mb-12">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border-2 border-indigo-500">
                  <TelescopeIcon className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <div className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-5/12"></div>
                <div className="md:w-1/12"></div>
                <div className="md:w-6/12 w-full p-6 bg-gray-800/50 rounded-lg border border-gray-700 shadow-md">
                  <p className="text-indigo-400 font-semibold mb-1">{item.year}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discoveries;
