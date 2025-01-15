'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TransitionImage(project: {imageURL: string | null, slug: string | null}) {
    const MotionImage = motion(Image)

    return (
        <MotionImage
            src={project?.imageURL || "/window.svg"}
            alt={project?.slug || "foto-proyecto"}
            width={300}
            height={300}
            className="rounded-xl"
            style={{objectFit: "contain"}}
            initial={{ opacity: 0, x: 150, y: 50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -50, y: -50 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
        />
    )
}