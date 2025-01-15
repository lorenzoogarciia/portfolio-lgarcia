"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"

export default function TransitionWrapper({
    children
}: {children: ReactNode}) {
    const pathname = usePathname()
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -50, y: -50 }}
                transition={{ duration: 0.8 }}
                style={{ overflowX: "hidden", overflowY: "hidden" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
