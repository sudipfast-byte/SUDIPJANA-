
import React, { useState, useCallback } from 'react';
import { generateBlackHoleImage } from '../services/geminiService';
import Loader from './Loader';

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18l1.9-5.8 5.8-1.9-5.8-1.9L12 3z" />
    <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
  </svg>
);


const Visualizer: React.FC = () => {
  const [prompt, setPrompt] = useState('a black hole consuming a blue star');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const loadingMessages = [
    "Warping spacetime...",
    "Gathering photons...",
    "Calibrating gravitational lens...",
    "Painting with dark matter...",
    "Rendering cosmic strings..."
  ];
  const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError('');
    setImageUrl('');

    const intervalId = setInterval(() => {
        setLoadingMessage(prev => loadingMessages[(loadingMessages.indexOf(prev) + 1) % loadingMessages.length]);
    }, 2000);

    try {
      const resultUrl = await generateBlackHoleImage(prompt);
      setImageUrl(resultUrl);
    } catch (err: any) {
      setError(err.message || 'Failed to create cosmic art.');
    } finally {
      setIsLoading(false);
      clearInterval(intervalId);
    }
  }, [prompt, loadingMessages]);

  return (
    <section id="visualizer" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400 mb-4">
            Create Your Own Cosmos
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Describe a scene and let AI be your telescope. Generate a unique, stunning visualization of a black hole.
          </p>
        </div>

        <div className="mt-12">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A black hole with a rainbow accretion disk"
              className="w-full bg-gray-800/50 text-white placeholder-gray-500 py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              className="w-full sm:w-auto flex-shrink-0 bg-indigo-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 flex items-center justify-center gap-2"
            >
              <SparklesIcon className="h-5 w-5"/>
              <span>Generate</span>
            </button>
          </form>
        </div>

        <div className="mt-10 min-h-[20rem] aspect-video bg-gray-800/30 rounded-xl border border-gray-700 flex items-center justify-center overflow-hidden">
          {isLoading ? (
            <div className="text-center text-gray-400">
              <Loader />
              <p className="mt-4">{loadingMessage}</p>
            </div>
          ) : error ? (
            <div className="text-red-400 p-4">{error}</div>
          ) : imageUrl ? (
            <img src={imageUrl} alt={prompt} className="w-full h-full object-cover" />
          ) : (
            <div className="text-gray-500 text-center p-4">Your generated cosmic art will appear here.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Visualizer;
