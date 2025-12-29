"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-32 left-6 z-[110] flex items-center gap-4">
      <audio ref={audioRef} src="/music/MainTheme.mp3" loop />

      <button
        onClick={toggleMusic}
        className="group flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/5 p-2 px-4 transition-all hover:border-primary/50"
      >
        <div className="relative">
          {isPlaying ? (
            <Volume2 className="w-3 h-3 text-primary animate-pulse" />
          ) : (
            <VolumeX className="w-3 h-3 text-white/20" />
          )}
        </div>

        <div className="flex flex-col items-start">
          <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em] leading-none mb-1">
            Audio_Protocol
          </span>
          <span
            className={`text-[10px] font-black uppercase tracking-widest leading-none ${
              isPlaying ? "text-primary" : "text-white/10"
            }`}
          >
            {isPlaying ? "Active" : "Offline"}
          </span>
        </div>

        {/* Декоративная полоска уровня громкости (просто декор) */}
        {isPlaying && (
          <div className="flex gap-[2px] items-end h-3 ml-2">
            <div className="w-[2px] h-1 bg-primary animate-[bounce_1s_infinite]" />
            <div className="w-[2px] h-3 bg-primary animate-[bounce_1.2s_infinite]" />
            <div className="w-[2px] h-2 bg-primary animate-[bounce_0.8s_infinite]" />
          </div>
        )}
      </button>
    </div>
  );
}
