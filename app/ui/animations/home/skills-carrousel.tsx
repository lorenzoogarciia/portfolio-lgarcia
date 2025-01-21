'use client'

import { habilities } from "@/app/lib/data";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

export default function SkillsCarrousel() {
    const [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        const finalPosition = -width / 2 - 24;
        const controls = animate(xTranslation, finalPosition, {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        })

        return () => controls.stop()
    }, [xTranslation, width])

    return (
        <main className="py-10">
            <motion.div className="absolute left-0 flex gap-12" ref={ref} style={{ x: xTranslation }}>
                {[...habilities, ...habilities].map((hability, index) => (
                    <div key={index} className="relative overflow-hidden flex-shrink-0">
                        <a  href={hability.webUrl} target="_blank" rel="nopener noreferrer" className="transition duration-150 hover:scale-110">
                            <Image src={hability.iconUrl || ""} alt={hability.name} objectFit="contain" width={80} height={80}/>
                        </a>
                    </div>
                ))}
            </motion.div>
        </main>
    )
}