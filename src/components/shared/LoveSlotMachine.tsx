"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Sparkles, PartyPopper } from "lucide-react";

const reasons = [
    "Хөөрхөн инээд", "Сайхан сэтгэл", "Бумбагар хацар",
    "Хөөрхөн том нүд", "Зөөлөн чанар", "Хошин шогийн мэдрэмж", "Нойрмог байхдаа жаахан baby шиг болдог нь", "Өөдрөг энерги",
    "Хөөрхөн иддэг", "Тэврэлт"
];

export default function LoveSlotMachine() {
    const [index, setIndex] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);

    const spin = () => {
        setIsSpinning(true);
        let count = 0;
        const interval = setInterval(() => {
            setIndex(Math.floor(Math.random() * reasons.length));
            count++;
            if (count > 12) {
                clearInterval(interval);
                setIsSpinning(false);
            }
        }, 100);
    };

    return (
        <section className="text-center relative">
            <Sparkles className="text-yellow-400 mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Why I Love You</h2>
            <Card className="max-w-md mx-auto bg-white/60 backdrop-blur-md p-12 shadow-2xl border-none">
                <div className="h-24 flex items-center justify-center mb-8 border-y border-pink-50">
                    <AnimatePresence mode="wait">
                        <motion.p key={index} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="text-2xl font-serif italic text-slate-700">
                            "{reasons[index]}"
                        </motion.p>
                    </AnimatePresence>
                </div>
                <button onClick={spin} disabled={isSpinning} className="px-8 py-4 rounded-full font-bold text-white bg-slate-900 hover:bg-pink-500 transition-colors disabled:bg-slate-300">
                    {isSpinning ? "Choosing..." : "Spin"}
                </button>
            </Card>
        </section>
    );
}