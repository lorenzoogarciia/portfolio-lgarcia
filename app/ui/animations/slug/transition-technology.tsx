'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export default function TransitionTechnology({children}: {children: ReactNode}) {
    const pathname = usePathname()

    return (
        <AnimatePresence>
            <motion.div
            key={pathname}
            initial={{ opacity: 0, x: 150, y: 250 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: -50 }}
            whileHover={{ scale: 1.25, transition: { duration: 0.2 } }}
            transition={{ duration: 1, type: "spring", stiffness: 70 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}