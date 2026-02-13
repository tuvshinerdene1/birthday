"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Gift, Sparkles, MapPin } from "lucide-react";

const schedule = [
    {
        time: "10:00 AM",
        activity: "Surprise Breakfast",
        icon: "🍳",
        note: "Egg and ham for nutrition!"
    },
    {
        time: "01:00 PM",
        activity: "Museum & Mystery",
        icon: "🔍",
        note: "Glass gallery vibes followed by a horror escape room adventure!"
    },
    {
        time: "03:00 PM",
        activity: "Canvas Date",
        icon: "🎨",
        note: "Gonna fix the failed portrait hha"
    },
    {
        time: "06:00 PM",
        activity: "Dinner at Lovely Place",
        icon: "🍷",
        note: "I always thought about bringing my baby there."
    },
    {
        time: "08:00 PM",
        activity: "Cake & Wish",
        icon: "🎂",
        note: "The highlight of the day. Make it a big wish! ✨"
    },
];

export default function BirthdayPlan() {
    const [opened, setOpened] = useState<number[]>([]);

    const toggle = (i: number) => !opened.includes(i) && setOpened([...opened, i]);

    return (
        <section className="max-w-2xl mx-auto py-12 px-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <Gift className="text-pink-400 mx-auto mb-2" size={32} />
                <h2 className="text-3xl font-bold text-slate-800 tracking-tight">The Birthday Plan</h2>
                <p className="text-slate-500 mt-2 italic text-sm">Tap each time slot to reveal the surprise...</p>
            </motion.div>

            <div className="flex flex-col gap-6">
                {schedule.map((item, i) => (
                    <motion.div
                        key={i}
                        layout
                        onClick={() => toggle(i)}
                        className="cursor-pointer group"
                    >
                        <Card className={`relative min-h-[140px] overflow-hidden border-none transition-all duration-700 shadow-lg ${opened.includes(i) ? "bg-white" : "bg-gradient-to-r from-pink-500 to-rose-400"
                            }`}>
                            <AnimatePresence mode="wait">
                                {!opened.includes(i) ? (
                                    <motion.div
                                        key="c"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ x: 50, opacity: 0 }}
                                        className="absolute inset-0 flex items-center justify-between px-8 text-white z-20"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                                                <Gift className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                            </div>
                                            <p className="font-bold text-xl tracking-wider">{item.time}</p>
                                        </div>
                                        <span className="text-white/60 text-xs font-bold uppercase tracking-widest animate-pulse">Tap to open</span>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="o"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-6 flex items-center gap-6 h-full"
                                    >
                                        <span className="text-5xl md:text-6xl drop-shadow-sm">{item.icon}</span>
                                        <div className="flex flex-col pr-4">
                                            <div className="flex items-center gap-2">
                                                <p className="text-[11px] font-black text-pink-500 uppercase tracking-widest">
                                                    {item.time}
                                                </p>
                                                <Sparkles size={12} className="text-pink-300" />
                                            </div>
                                            <p className="text-xl font-bold text-slate-800 mt-0.5 leading-tight">
                                                {item.activity}
                                            </p>
                                            <p className="text-sm text-slate-500 italic mt-1.5 leading-relaxed">
                                                {item.note}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Visual indicator for "current" or "unopened" items */}
                            {!opened.includes(i) && (
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white/30" />
                            )}
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-12 flex flex-col items-center gap-2"
            >
                <div className="h-px w-20 bg-pink-100" />
                <p className="text-center text-slate-400 text-[10px] uppercase tracking-[0.2em]">
                    Ulaanbaatar • February 14th • 2026
                </p>
            </motion.div>
        </section>
    );
}