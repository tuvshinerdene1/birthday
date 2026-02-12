"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Heart, Stars } from "lucide-react";

export default function Hero({ name }: { name: string }) {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Badge variant="secondary" className="mb-4 bg-pink-100 text-pink-600 hover:bg-pink-100 border-none px-4 py-1">
                    <Heart className="w-3 h-3 mr-2 fill-current" /> February 14, 2026
                </Badge>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500">
                    Happy Birthday is coming, <br /><span className="text-pink-500">{name}</span>
                </h1>
                <p className="max-w-xl text-lg text-slate-500 font-medium leading-relaxed mx-auto italic">
                    "To my favorite person and my little bumbagar"
                </p>
            </motion.div>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-12 text-slate-300"
            >
                <p className="text-xs uppercase tracking-[0.2em] mb-2 font-bold">Scroll Down</p>
                <div className="w-[1px] h-12 bg-slate-200 mx-auto" />
            </motion.div>
        </section>
    );
}