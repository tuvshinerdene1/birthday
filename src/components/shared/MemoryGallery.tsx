"use client";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Camera } from "lucide-react";
import Image from "next/image"; // Import the Next.js Image component

const memories = [
    { title: "Bogd mountain trip(Couldn't find better picture hha)", date: "Sep 2025", rotate: "-rotate-2", photo: "/bogd.jpg" },
    { title: "Christmas tree", date: "Dec 2025", rotate: "rotate-3", photo: "/newyear.jpg" },
    { title: "Bumbagar with mask", date: "May 2025", rotate: "-rotate-1", photo: "/mask.jpeg" },
    { title: "Egceetei uulzsan ni", date: "Jul 2025", rotate: "rotate-2", photo: "/sister.jpg" },
    { title: "Zaisan", date: "Jun 2025", rotate: "rotate-2", photo: "/zaisan.jpeg" },
    { title: "Summer evening", date: "Jul 2025", rotate: "rotate-2", photo: "/pictureafterwork.jpeg" },
];

export default function MemoryGallery() {
    return (
        <section className="py-12 px-4">
            <div className="flex flex-col items-center mb-12">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Camera className="text-pink-400 mb-2 mx-auto" size={32} />
                    <h2 className="text-3xl font-bold text-slate-800">Our Memories</h2>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {memories.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                            scale: 1.05,
                            rotate: 0,
                            zIndex: 50,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                        className={`bg-white p-4 pb-8 shadow-2xl border border-slate-200 ${photo.rotate} transition-all cursor-pointer`}
                    >
                        <AspectRatio ratio={1} className="overflow-hidden bg-slate-100">
                            <Image
                                src={photo.photo}
                                alt={photo.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </AspectRatio>

                        <div className="pt-6 text-center">
                            <p className="font-medium text-slate-700 font-serif text-xl">
                                {photo.title}
                            </p>
                            <p className="text-xs text-pink-400 font-bold uppercase tracking-tighter mt-1">
                                {photo.date}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}