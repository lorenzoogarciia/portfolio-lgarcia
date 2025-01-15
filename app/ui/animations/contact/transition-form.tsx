'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export default function TransitionForm({children}: {children: ReactNode}) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 0, y: 0 }}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}