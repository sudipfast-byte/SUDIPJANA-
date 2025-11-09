
import React, { useState, useCallback } from 'react';
import { askQuestion } from '../services/geminiService';
import Loader from './Loader';

const SendIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const WhatIf: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const examplePrompts = [
    "What would happen if I fell into a black hole?",
    "Can black holes evaporate?",
    "How are black holes formed?",
    "What is spaghettification?"
  ];

  const handleSubmit = useCallback(async (currentPrompt: string) => {
    if (!currentPrompt.trim()) return;
    setIsLoading(true);
    setError('');
    setAnswer('');
    try {
      const result = await askQuestion(currentPrompt);
      setAnswer(result);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleSubmit(prompt);
  };
  
  const handleExampleClick = (example: string) => {
      setPrompt(example);
      handleSubmit(example);
  };

  return (
    <section id="ask" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400 mb-4">
            Ask the Cosmos
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a question about the universe's greatest mystery? The Gemini model, trained as an astrophysicist, is ready to answer.
          </p>
        </div>

        <div className="mt-12">
          <form onSubmit={handleFormSubmit} className="flex items-center gap-2 md:gap-4 p-2 bg-gray-800/50 rounded-full border border-gray-700 shadow-lg focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., What is an event horizon?"
              className="w-full bg-transparent text-white placeholder-gray-500 py-3 px-4 focus:outline-none"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              className="flex-shrink-0 bg-indigo-600 text-white rounded-full p-3 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
            >
              <SendIcon className="h-6 w-6" />
            </button>
          </form>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
            {examplePrompts.map(p => (
                <button key={p} onClick={() => handleExampleClick(p)} disabled={isLoading} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-700 transition-colors disabled:opacity-50">
                    {p}
                </button>
            ))}
        </div>

        <div className="mt-10 min-h-[10rem] p-6 bg-gray-800/30 rounded-xl border border-gray-700">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <Loader />
              <p className="mt-4">Consulting the cosmic archives...</p>
            </div>
          ) : error ? (
            <div className="text-red-400">{error}</div>
          ) : answer ? (
            <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-gray-100 whitespace-pre-wrap">
                {answer}
            </div>
          ) : (
            <div className="text-gray-500 text-center flex items-center justify-center h-full">Your answer will appear here.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatIf;
