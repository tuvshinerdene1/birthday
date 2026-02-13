"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((err) => {
                    console.log("Browser blocked autoplay, wait for interaction.", err);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <audio ref={audioRef} src="/new-song.mp3" loop />

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all ${isPlaying
                    ? "bg-pink-500 text-white"
                    : "bg-white/80 text-slate-600 border border-pink-100"
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.div
                            key="playing"
                            initial={{ opacity: 0, rotate: -20 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 20 }}
                        >
                            <Volume2 className="w-4 h-4" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="muted"
                            initial={{ opacity: 0, rotate: -20 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 20 }}
                        >
                            <VolumeX className="w-4 h-4" />
                        </motion.div>
                    )}
                </AnimatePresence>
                <span className="text-xs font-bold uppercase tracking-widest">
                    {isPlaying ? "On Repeat" : "Play Music"}
                </span>

                {/* Floating Note Icon when playing */}
                {isPlaying && (
                    <motion.div
                        animate={{
                            y: [-10, -20],
                            x: [0, 5],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-2 right-2 text-pink-300"
                    >
                        <Music className="w-3 h-3" />
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
}