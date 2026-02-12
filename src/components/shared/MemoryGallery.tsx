"use client";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Camera } from "lucide-react";

const memories = [
    { title: "First Date", date: "Jan 2024", rotate: "-rotate-2" },
    { title: "Beach Trip", date: "Summer 2024", rotate: "rotate-3" },
    { title: "New Year's", date: "Dec 2024", rotate: "-rotate-1" },
    { title: "Coffee Mornings", date: "Daily", rotate: "rotate-2" },
];

export default function MemoryGallery() {
    return (
        <section>
            <div className="flex flex-col items-center mb-12">
                <Camera className="text-pink-400 mb-2" />
                <h2 className="text-3xl font-bold text-slate-800">Our Memories</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {memories.map((photo, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                        className={`bg-white p-3 shadow-xl border border-slate-100 ${photo.rotate} transition-all`}
                    >
                        <AspectRatio ratio={1}>
                            <div className="bg-slate-100 w-full h-full flex items-center justify-center text-xs text-slate-400">
                                [Photo {index + 1}]
                            </div>
                        </AspectRatio>
                        <div className="pt-4 pb-2 text-center">
                            <p className="font-medium text-slate-700 font-serif text-lg">{photo.title}</p>
                            <p className="text-[10px] text-pink-400 font-bold uppercase tracking-widest">{photo.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}