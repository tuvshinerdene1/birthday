"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function WholesomeLetter({ name, partnerName }: { name: string, partnerName: string }) {
    return (
        <section className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-white p-12 md:p-20 shadow-2xl border border-slate-100">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-rose-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <Heart className="text-white w-6 h-6 fill-current" />
                </div>
                <div className="font-serif text-slate-700 leading-relaxed space-y-6 text-lg">
                    <p>My Dearest {name},</p>
                    <p>Thank you for being my partner, my best friend, and my favorite person to debug life with. I hope today is as beautiful as you are.</p>
                    <div className="pt-10">
                        <p className="text-sm text-slate-400 mb-1 font-sans uppercase tracking-widest">Always yours,</p>
                        <p className="text-3xl font-bold text-pink-600">{partnerName}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}