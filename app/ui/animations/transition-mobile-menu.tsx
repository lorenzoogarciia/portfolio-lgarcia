'use client'

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface TransitionMobileMenuProps{
    isOpen: boolean,
    children: ReactNode
}

export default function TransitionMobileMenu({isOpen, children}: TransitionMobileMenuProps) {

    return (
    <AnimatePresence>
        {isOpen && (
            <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
            {children}
        </motion.nav>
        )}
        
    </AnimatePresence>
    )
}