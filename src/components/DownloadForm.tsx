import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import type { Platform } from './PlatformToggle';

interface DownloadFormProps {
  platform: Platform;
}

export function DownloadForm({ platform }: DownloadFormProps) {
  const [url, setUrl] = useState('');
  const [transcribe, setTranscribe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will implement download and transcription logic later
    console.log('Download requested:', { url, transcribe, platform });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
      <div className="relative">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={`Paste your ${platform} video URL here...`}
          className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-white/80 cursor-pointer group">
          <input
            type="checkbox"
            checked={transcribe}
            onChange={(e) => setTranscribe(e.checked)}
            className="w-5 h-5 rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
          />
          <FileText className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
          <span className="group-hover:text-purple-400 transition-colors">Generate transcript</span>
        </label>

        <button
          type="submit"
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Download className="w-5 h-5" />
          Download
        </button>
      </div>
    </form>
  );
}