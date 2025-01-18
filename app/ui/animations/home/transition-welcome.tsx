'use client'

import { motion } from 'framer-motion'

export default function TransitionWelcome() {
    const paragraphs = [
        "Bienvenido a mi portafolio personal, ¡es un placer tenerte por aquí!",
        "Desarrollador Full Stack Junior con un año de experiencia apasionado por  la programación",
        "Aquí podrás encontrar mis proyectos más recientes e importantes,",
        "así como toda mi trayectoria, estudios y conocimiento.",
        "¡Espero que disfrutes mi carta de presentación!"
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    }

    return (
        <motion.div
            className='justify-center items-center mt-4 text-center max-w-full max-h-full p-6'
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
                <motion.p key={word} variants={paragraph} className='inline text-secondary text-xl'>
                    {word + (index !== paragraphs[0].split(' ').length - 1 ? ' ' : '')}
                </motion.p>
            ))}
            {paragraphs[3].split(' ').map((word, index) => (
                <motion.p key={word} variants={paragraph} className='inline text-secondary text-xl'>
                    {word + (index !== paragraphs[0].split(' ').length - 1 ? ' ' : '')}
                </motion.p>
            ))}
            {paragraphs[4].split(' ').map((word, index) => (
                <motion.p key={word} variants={paragraph} className='inline text-secondary text-xl'>
                    {word + (index !== paragraphs[0].split(' ').length - 1 ? ' ' : '')}
                </motion.p>
            ))}
        </motion.div>
    )
}