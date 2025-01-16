'use client'

import { motion } from 'framer-motion'

export default function TransitionWelcome() {
    const paragraphs = [
        "Bienvenido a mi portafolio personal, ¡es un placer tenerte por aquí!",
        "Si eres un apasionado por la programación déjame decirte que estás  en el lugar correcto.",
        "Aquí podrás encontrar mis proyectos más recientes e importantes"
    ]
    
    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const paragraph = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <motion.div
            className='text-center rounded-xl p-4'
            variants={container}
            initial='hidden'
            animate='visible'
        >
            {paragraphs[0].split(' ').map((word, index) => (
                <motion.p key={word} variants={paragraph} className='inline text-secondary text-xl'>
                    {word + (index !== paragraphs[0].split(' ').length - 1 ? ' ' : '')}
                </motion.p>
            ))}
            <br />
            {paragraphs[1].split(' ').map((word, index) => (
                <motion.p key={word} variants={paragraph} className='inline text-secondary text-xl'>
                    {word + (index !== paragraphs[0].split(' ').length - 1 ? ' ' : '')}
                </motion.p>
            ))} 
            <br />
            {paragraphs[2].split(' ').map((word, index) => (
                <motion.p key={word} variants={paragraph} className='inline text-secondary text-xl '>
                    {word + (index !== paragraphs[0].split(' ').length - 1 ? ' ' : '')}
                </motion.p>
            ))}
        </motion.div>
    )
}