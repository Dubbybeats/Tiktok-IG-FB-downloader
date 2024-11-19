import React, { useState } from 'react';
import { PlatformToggle, type Platform } from './components/PlatformToggle';
import { DownloadForm } from './components/DownloadForm';
import { Sparkles } from 'lucide-react';

function App() {
  const [platform, setPlatform] = useState<Platform>('tiktok');

  const gradients = {
    tiktok: 'from-pink-500 via-red-500 to-purple-500',
    instagram: 'from-purple-600 via-pink-500 to-orange-500',
    youtube: 'from-red-600 via-red-500 to-orange-500'
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradients[platform]} transition-colors duration-700`}>
      <div className="container mx-auto px-4 py-16 flex flex-col items-center min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            Social Video Downloader
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </h1>
          <p className="text-white/80 text-lg">
            Download and transcribe videos from TikTok, Instagram, and YouTube
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-8">
            <PlatformToggle platform={platform} setPlatform={setPlatform} />
          </div>

          <DownloadForm platform={platform} />

          <div className="text-center text-white/60 text-sm mt-8">
            © {new Date().getFullYear()} Social Video Downloader. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;