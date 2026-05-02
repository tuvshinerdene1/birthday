"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown({ onFinish }: { onFinish?: () => void }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Set your target date here
        const targetDate = new Date("2026-05-03T00:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(timer);
                handleFinish();
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleFinish = () => {
        // 1. Fire a massive confetti burst
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } });
        }, 250);

        // 2. Hide the countdown after a tiny delay so she sees the 00:00:00 for a split second
        setTimeout(() => {
            setIsVisible(false);
            if (onFinish) onFinish();
        }, 800);
    };

    if (!isVisible || !timeLeft) return null;

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center mx-2 md:mx-4">
            <motion.div
                key={value}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tighter"
            >
                {value.toString().padStart(2, "0")}
            </motion.div>
            <span className="text-[10px] uppercase tracking-widest text-pink-400 font-black mt-1">
                {label}
            </span>
        </div>
    );

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    exit={{ scale: 0, opacity: 0, filter: "blur(20px)" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center py-10"
                >
                    <p className="text-sm font-medium text-slate-400 mb-6 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-slate-200"></span>
                        Something Special In
                        <span className="w-8 h-[1px] bg-slate-200"></span>
                    </p>
                    <div className="flex bg-white/40 backdrop-blur-sm border border-white p-6 rounded-3xl shadow-xl shadow-pink-100/50">
                        <TimeUnit value={timeLeft.days} label="Days" />
                        <div className="text-3xl md:text-5xl font-light text-slate-300 self-start mt-[-2px]">:</div>
                        <TimeUnit value={timeLeft.hours} label="Hours" />
                        <div className="text-3xl md:text-5xl font-light text-slate-300 self-start mt-[-2px]">:</div>
                        <TimeUnit value={timeLeft.minutes} label="Mins" />
                        <div className="text-3xl md:text-5xl font-light text-slate-300 self-start mt-[-2px]">:</div>
                        <TimeUnit value={timeLeft.seconds} label="Secs" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}