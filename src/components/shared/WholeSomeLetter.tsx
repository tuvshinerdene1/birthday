"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Lock, Unlock } from "lucide-react";

export default function WholesomeLetter({ name, partnerName }: { name: string, partnerName: string }) {
    const [pin, setPin] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(false);

    // CHANGE THIS TO YOUR SPECIAL PIN (e.g., your anniversary date like "0924")
    const CORRECT_PIN = "0322";

    const handlePinInput = (digit: string) => {
        setError(false);
        if (pin.length < 4) {
            const newPin = pin + digit;
            setPin(newPin);
            if (newPin === CORRECT_PIN) {
                setTimeout(() => setIsUnlocked(true), 300);
            } else if (newPin.length === 4) {
                setTimeout(() => {
                    setError(true);
                    setPin("");
                }, 400);
            }
        }
    };

    return (
        <section className="max-w-2xl mx-auto px-4 py-12">
            <AnimatePresence mode="wait">
                {!isUnlocked ? (
                    <motion.div
                        key="lock"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-center border border-slate-800"
                    >
                        <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Lock className="text-pink-500 w-8 h-8" />
                        </div>
                        <h3 className="text-white text-xl font-bold mb-2">Private Letter</h3>
                        <p className="text-slate-400 text-sm mb-8 font-light">
                            Only for my baby. Enter our special 4-digit date to read.
                        </p>

                        {/* PIN Dots */}
                        <div className="flex justify-center gap-4 mb-10">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${pin.length > i ? "bg-pink-500 border-pink-500 scale-110" : "border-slate-700"
                                        } ${error ? "bg-red-500 border-red-500 animate-bounce" : ""}`}
                                />
                            ))}
                        </div>

                        {/* Numpad */}
                        <div className="grid grid-cols-3 gap-4 max-w-[280px] mx-auto">
                            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "⌫"].map((btn) => (
                                <button
                                    key={btn}
                                    onClick={() => {
                                        if (btn === "C") setPin("");
                                        else if (btn === "⌫") setPin(pin.slice(0, -1));
                                        else handlePinInput(btn);
                                    }}
                                    className="h-14 rounded-xl bg-slate-800 text-white text-xl font-medium hover:bg-slate-700 active:bg-pink-600 transition-colors"
                                >
                                    {btn}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="letter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative bg-white p-10 md:p-20 shadow-2xl border border-slate-100 rounded-sm"
                    >
                        {/* Letter Header */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-rose-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                            <Heart className="text-white w-6 h-6 fill-current animate-pulse" />
                        </div>

                        {/* Letter Content */}
                        <div className="font-serif text-slate-700 leading-relaxed space-y-6 text-lg">
                            <div className="flex justify-between items-start mb-8">
                                <Unlock className="text-slate-200 w-5 h-5" />
                                <span className="text-[10px] text-slate-300 uppercase tracking-widest font-sans">Privately Encrypted</span>
                            </div>

                            <p className="italic">Хайрт жулжагадаа,</p>

                            <p>
                                Миний хайрт, хамгийн сайн найз, миний жулжага, хүнд өдрийг шууд гэрэлтүүлдэг хайрдаа дандаа баярладаг шүү.
                                Хөөрхөн жулжагаасаа л жинхэнэ хайр ямар мэдрэгддийг мэдсэн дээ.
                            </p>

                            <p>
                                Заримдаа үл ойлголцохдоо baby-дээ хэр их хайртайгаа үргэлж мэдэрдэг. Сэтгэл санаа хэцүү байхад хайраараа тэврүүлэхэд л
                                жинхэнэ хайрыг мэдэрдэг шүү.
                            </p>
                            <p>
                                Төрсөн өдөр, гэгээн хайрын баярын мэнд хүргэе baby минь
                            </p>

                            <div className="pt-10 border-t border-slate-50">
                                <p className="text-xs text-slate-400 mb-1 font-sans uppercase tracking-widest">Хайртай шүү,</p>
                                <p className="text-3xl font-bold text-pink-600 italic">Baby </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}