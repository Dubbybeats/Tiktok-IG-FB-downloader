import React from 'react';
import { Instagram, Youtube, BrandTiktok } from 'lucide-react';
import { clsx } from 'clsx';

export type Platform = 'tiktok' | 'instagram' | 'youtube';

interface PlatformToggleProps {
  platform: Platform;
  setPlatform: (platform: Platform) => void;
}

export function PlatformToggle({ platform, setPlatform }: PlatformToggleProps) {
  return (
    <div className="flex gap-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
      <button
        onClick={() => setPlatform('tiktok')}
        className={clsx(
          'p-3 rounded-full transition-all duration-300',
          platform === 'tiktok' ? 'bg-pink-500 text-white' : 'text-white/60 hover:text-white'
        )}
      >
        <BrandTiktok size={24} />
      </button>
      <button
        onClick={() => setPlatform('instagram')}
        className={clsx(
          'p-3 rounded-full transition-all duration-300',
          platform === 'instagram' ? 'bg-purple-500 text-white' : 'text-white/60 hover:text-white'
        )}
      >
        <Instagram size={24} />
      </button>
      <button
        onClick={() => setPlatform('youtube')}
        className={clsx(
          'p-3 rounded-full transition-all duration-300',
          platform === 'youtube' ? 'bg-red-500 text-white' : 'text-white/60 hover:text-white'
        )}
      >
        <Youtube size={24} />
      </button>
    </div>
  );
}