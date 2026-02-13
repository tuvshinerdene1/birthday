"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function RelationshipTimer() {
    // 1. SET YOUR START DATE HERE (Year, Month (0-11), Day, Hour, Minute)
    // Note: January is 0, February is 1, etc.
    const START_DATE = new Date(2025, 2, 22, 11, 0); // Example: Sep 24, 2024, 6:00 PM

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalMinutes: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = now.getTime() - START_DATE.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const m = Math.floor((difference / 1000 / 60) % 60);
            const s = Math.floor((difference / 1000) % 60);
            const totalM = Math.floor(difference / (1000 * 60));

            setTime({ days: d, hours: h, minutes: m, seconds: s, totalMinutes: totalM });
        }, 1000);

        return () => clearInterval(interval);
    }, [START_DATE]);

    return (
        <section className="py-16 flex flex-col items-center justify-center bg-transparent">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-pink-100 text-center max-w-sm w-full"
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="mb-4 flex justify-center"
                >
                    <Heart className="text-pink-500 fill-pink-500" size={32} />
                </motion.div>

                <h3 className="text-slate-500 text-xs uppercase tracking-[0.2em] mb-2 font-bold">
                    Time Spent Together
                </h3>

                {/* Big Total Minutes Display */}
                <div className="mb-6">
                    <span className="text-5xl font-black text-slate-800 tabular-nums">
                        {time.totalMinutes.toLocaleString()}
                    </span>
                    <p className="text-pink-500 font-medium mt-1 italic">the happiest minutes of my life</p>
                </div>

                <div className="h-px bg-slate-100 w-full mb-6" />

                {/* Detailed Breakdown */}
                <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-slate-700">{time.days}</span>
                        <span className="text-[10px] text-slate-400 uppercase">Days</span>
                    </div>
                    <div className="flex flex-col border-x border-slate-100">
                        <span className="text-xl font-bold text-slate-700">{time.hours}</span>
                        <span className="text-[10px] text-slate-400 uppercase">Hours</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-slate-700">{time.seconds}</span>
                        <span className="text-[10px] text-slate-400 uppercase">Seconds</span>
                    </div>
                </div>
            </motion.div>

            <p className="mt-6 text-slate-400 text-[10px] italic">
                ...and I've cherished every single one.
            </p>
        </section>
    );
}