import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function TransitionSend({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={pathname}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}