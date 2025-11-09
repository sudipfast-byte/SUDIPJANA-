
import React from 'react';

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m6 9 6 6 6-6"/>
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="Cosmic background" className="absolute inset-0 w-full h-full object-cover"/>
      
      <div className="relative z-20 p-4">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 animate-fade-in-down" style={{textShadow: '0 0 15px rgba(129, 140, 248, 0.7)'}}>
          Beyond the Event Horizon
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 animate-fade-in-up">
          For most people, black holes feel far away — abstract. But their discovery changed how we see the universe. They taught us that even space and time are flexible, that the cosmos is not static but alive and evolving.
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce text-indigo-400">
            <ChevronDownIcon className="w-8 h-8"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
