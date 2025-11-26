import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';
import { GoogleIcon, SearchIcon, SparklesIcon } from '../components/icons/Icons';
import type { GroundingChunk } from '../types';

export const DeviceInsights: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [sources, setSources] = useState<GroundingChunk[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!prompt) {
      setError('Please enter a question or topic.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResponse('');
    setSources([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      
      const genAIResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      setResponse(genAIResponse.text ?? "No text response received.");

      const groundingMetadata = genAIResponse.candidates?.[0]?.groundingMetadata;
      if (groundingMetadata?.groundingChunks) {
        setSources(groundingMetadata.groundingChunks);
      }

    } catch (e) {
      console.error(e);
      setError('An error occurred while fetching insights. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl mb-6 border border-emerald-500/20">
            <GoogleIcon className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Device & Tech Insights</h1>
          <p className="text-slate-400 text-lg">
            Get up-to-date information powered by Google Search and Gemini.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-3xl p-8"
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., 'Latest news on the iPhone 16' or 'Compare Pixel 8 vs Galaxy S24'"
              className="flex-grow px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 backdrop-blur-sm transition-all"
            />
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <SparklesIcon className="h-5 w-5 animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <SearchIcon className="h-5 w-5" />
                  <span>Get Insights</span>
                </>
              )}
            </motion.button>
          </form>
          {error && <p className="text-red-400 text-center mt-4">{error}</p>}
        </motion.div>

        {(isLoading || response) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 glass-card rounded-3xl p-8"
          >
            {isLoading && (
              <div className="space-y-4">
                <div className="w-3/4 h-8 bg-slate-700 rounded shimmer"></div>
                <div className="w-full h-4 bg-slate-700 rounded shimmer"></div>
                <div className="w-full h-4 bg-slate-700 rounded shimmer"></div>
                <div className="w-5/6 h-4 bg-slate-700 rounded shimmer"></div>
              </div>
            )}

            {response && (
              <div className="prose prose-invert prose-lg max-w-none text-slate-200">
                <h2 className="text-2xl font-bold text-white mb-4">Insights on "{prompt}"</h2>
                <p className="whitespace-pre-wrap">{response}</p>
                
                {sources.length > 0 && (
                  <div className="mt-8 pt-4 border-t border-slate-700/50">
                    <h3 className="text-lg font-semibold text-slate-300 mb-3">Sources:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      {sources.map((source, index) => (
                        source.web && (
                          <li key={index}>
                            <a 
                              href={source.web.uri} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                              {source.web.title || source.web.uri}
                            </a>
                          </li>
                        )
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};
