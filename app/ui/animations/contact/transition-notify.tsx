'use client'

import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"

export default function TransitionNotify({ children }: { children: ReactNode }) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 1, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: 300 }}
                transition={{ duration: 0.8, type:"spring", stiffness: 70, damping: 10 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}