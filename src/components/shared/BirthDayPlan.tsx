"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Gift } from "lucide-react";

const schedule = [
    { time: "10:00 AM", activity: "Surprise Breakfast", icon: "🥐", note: "Your favorite pancakes!" },
    { time: "01:00 PM", activity: "Art Gallery Visit", icon: "🎨", note: "The new exhibit." },
    { time: "07:00 PM", activity: "Valentine's Dinner", icon: "🍷", note: "Corner table reserved." },
    { time: "09:30 PM", activity: "Stargazing & Cake", icon: "✨", note: "Make a wish!" },
];

export default function BirthdayPlan() {
    const [opened, setOpened] = useState<number[]>([]);

    const toggle = (i: number) => !opened.includes(i) && setOpened([...opened, i]);

    return (
        <section className="max-w-3xl mx-auto">
            <Gift className="text-pink-400 mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">The Birthday Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {schedule.map((item, i) => (
                    <motion.div key={i} layout onClick={() => toggle(i)} className="cursor-pointer group">
                        <Card className={`relative h-44 overflow-hidden border-none transition-all duration-700 shadow-xl ${opened.includes(i) ? "bg-white" : "bg-pink-500"}`}>
                            <AnimatePresence mode="wait">
                                {!opened.includes(i) ? (
                                    <motion.div key="c" exit={{ scale: 1.2, opacity: 0 }} className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
                                        <Gift className="w-12 h-12 mb-2 group-hover:animate-bounce" />
                                        <p className="font-bold">{item.time}</p>
                                    </motion.div>
                                ) : (
                                    <motion.div key="o" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 flex items-center gap-5 h-full">
                                        <span className="text-5xl">{item.icon}</span>
                                        <div>
                                            <p className="text-[10px] font-black text-pink-500 uppercase tracking-widest">{item.time}</p>
                                            <p className="text-xl font-bold text-slate-800">{item.activity}</p>
                                            <p className="text-sm text-slate-500 italic">{item.note}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {!opened.includes(i) && <div className="absolute inset-0 bg-pink-600/20 z-10 pointer-events-none" />}
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}