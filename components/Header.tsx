
import React from 'react';

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18l1.9-5.8 5.8-1.9-5.8-1.9L12 3z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-md">
      <div className="flex items-center justify-center">
        <SparklesIcon className="h-6 w-6 text-indigo-400 mr-3" />
        <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          Cosmic Canvas
        </h1>
      </div>
    </header>
  );
};

export default Header;
