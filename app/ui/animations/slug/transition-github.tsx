'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TransitionGithub() {
    const MotionImage = motion(Image)

    return (
        <MotionImage
            src="/img/icons/github-icon-dark.png"
            alt="github-icon"
            width={35}
            height={35}
            className="rounded-xl"
            initial={{ opacity: 0, x: 150, y: 250 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: -50 }}
            transition={{ duration: 1, type: "spring", stiffness: 70 }}
        />
    )
}