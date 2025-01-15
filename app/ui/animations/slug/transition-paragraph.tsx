'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export default function TransitionParagraph({children} : {children: ReactNode}){
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.p
                key={pathname}
                initial={{ opacity: 0, x: -100, y: -80, rotate: -5}}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -50, y: -50 }}
                transition={{ duration: 0.8 }}
                className='text-wrap text-xl font-bold text-black max-w-[800px] mt-4'
            >
                {children}
            </motion.p>
        </AnimatePresence>
    )
}