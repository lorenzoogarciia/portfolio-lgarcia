'use client'

import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"

export default function TransitionCard({children}: {children: ReactNode}) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, x: 100, y: 300, rotate: 15 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -50, y: -50 }}
                transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

