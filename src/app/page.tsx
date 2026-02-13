"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/shared/Hero";
import Countdown from "@/components/shared/CountDown";
import MemoryGallery from "@/components/shared/MemoryGallery";
import LoveSlotMachine from "@/components/shared/LoveSlotMachine";
import BirthdayPlan from "@/components/shared/BirthDayPlan";
import WholesomeLetter from "@/components/shared/WholeSomeLetter";
import { Lock } from "lucide-react";
import BackgroundMusic from "@/components/shared/BackGroundMusic";
import RelationshipTimer from "@/components/shared/TogetherMinutes";

export default function BirthdayPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [loading, setLoading] = useState(true);

  // Inside your page.tsx useEffect:
  useEffect(() => {
    // ENSURE THIS MATCHES THE COUNTDOWN TARGET
    const targetDate = new Date("2026-02-14T00:00:00").getTime();
    const now = new Date().getTime();

    if (now >= targetDate) {
      setIsUnlocked(true);
    }
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <main className="relative min-h-screen bg-white transition-colors duration-1000">
      <div className="fixed inset-0 z-0">
        <div className={`absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full blur-[120px] transition-colors duration-1000 ${isUnlocked ? "bg-pink-100/40" : "bg-slate-100/40"}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] transition-colors duration-1000 ${isUnlocked ? "bg-rose-100/40" : "bg-slate-50/40"}`} />
      </div>

      <div className="relative z-10 flex flex-col gap-5 pb-32">
        <Hero name="Zulaa" />

        <div className="px-6 -mt-32 mb-10">
          {/* We pass the setIsUnlocked function directly to the countdown */}
          <Countdown onFinish={() => setIsUnlocked(true)} />
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full">
          <AnimatePresence mode="wait">
            {isUnlocked ? (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col gap-40"
              >
                <RelationshipTimer />
                <MemoryGallery />
                <LoveSlotMachine />
                <BirthdayPlan />
                <WholesomeLetter name="HerName" partnerName="YourName" />
              </motion.div>
            ) : (
              <motion.div
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <Lock className="w-12 h-12 text-slate-300 mb-6" />
                <h2 className="text-xl font-medium text-slate-400">Locked until February 14th...</h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <BackgroundMusic />
    </main>
  );
}