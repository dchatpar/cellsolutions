import React, { useState } from 'react';
import { motion } from 'framer-motion';
// FIX: Removed unused HarmCategory and HarmBlockThreshold imports.
import { GoogleGenAI } from '@google/genai';
import { SparklesIcon, CloudUploadIcon } from '../components/icons/Icons';

// Helper function to convert a File object to a GoogleGenerativeAI.Part object.
async function fileToGenerativePart(file: File) {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}

export const ImageEditor: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [originalImagePreview, setOriginalImagePreview] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setOriginalImage(file);
      setOriginalImagePreview(URL.createObjectURL(file));
      setEditedImage(null);
      setError(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!originalImage || !prompt) {
      setError('Please upload an image and provide an editing prompt.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setEditedImage(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const imagePart = await fileToGenerativePart(originalImage);
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [imagePart, { text: prompt }] },
      });

      let foundImage = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64String = part.inlineData.data;
          setEditedImage(`data:${part.inlineData.mimeType};base64,${base64String}`);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
        setError('The AI did not return an image. Please try a different prompt.');
      }

    } catch (e) {
      console.error(e);
      setError('An error occurred while generating the image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl mb-6 border border-indigo-500/20">
            <SparklesIcon className="h-10 w-10 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">AI Image Editor</h1>
          <p className="text-slate-400 text-lg">
            Edit your photos with the power of AI. Just upload an image and tell us what to change.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-3xl p-8"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Side: Upload & Original Image */}
              <div className="flex flex-col gap-4">
                <label htmlFor="image-upload" className="w-full h-48 border-2 border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <CloudUploadIcon className="h-8 w-8 text-slate-500 mb-2" />
                  <span className="font-bold text-white">Click to upload image</span>
                  <span className="text-sm text-slate-400">PNG, JPG, WEBP up to 10MB</span>
                </label>
                <input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                
                {originalImagePreview && (
                  <div className="relative aspect-square w-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                    <img src={originalImagePreview} alt="Original" className="w-full h-full object-contain" />
                    <div className="absolute bottom-0 left-0 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-tr-lg">ORIGINAL</div>
                  </div>
                )}
              </div>

              {/* Right Side: Prompt & Edited Image */}
              <div className="flex flex-col gap-4">
                 <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., 'Add a retro filter', 'Make the sky look like a sunset', 'Remove the person in the background'"
                    className="w-full h-48 bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                    rows={4}
                />
                
                {isLoading ? (
                   <div className="relative aspect-square w-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shimmer flex items-center justify-center">
                      <p className="text-slate-400 font-bold z-10">Generating...</p>
                   </div>
                ) : editedImage ? (
                  <div className="relative aspect-square w-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                    <img src={editedImage} alt="Edited" className="w-full h-full object-contain" />
                    <div className="absolute bottom-0 left-0 bg-indigo-500/80 text-white text-xs font-bold px-2 py-1 rounded-tr-lg">EDITED</div>
                  </div>
                ) : (
                   <div className="relative aspect-square w-full bg-slate-900/50 border-2 border-dashed border-slate-700 rounded-xl overflow-hidden flex items-center justify-center">
                      <p className="text-slate-500">Your edited image will appear here</p>
                   </div>
                )}
              </div>
            </div>
            
            {error && <p className="text-red-400 text-center mt-6">{error}</p>}
            
            <motion.button
              type="submit"
              disabled={isLoading || !originalImage || !prompt}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold py-4 rounded-xl text-lg shadow-lg shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Editing with AI...' : 'Generate Edit'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};