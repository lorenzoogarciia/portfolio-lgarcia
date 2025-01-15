'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export default function TransitionTitle({children} : {children: ReactNode}){
    const pathname = usePathname()

    return (
        <AnimatePresence mode='wait'>
            <motion.h1
                key={pathname}
                initial={{ opacity: 0, x: -100, y: -80, rotate: 10  }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -50, y: -50 }}
                transition={{ duration: 0.8 }}
                className='text-3xl text-accent mt-4'
            >
                {children}
            </motion.h1>
        </AnimatePresence>
    )
}