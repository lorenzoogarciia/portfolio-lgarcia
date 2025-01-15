'use client'

import { useEffect, useRef } from "react"
import Typed from "typed.js"

export default function AnimatedTitle() {
    const el = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings:[
                `<span style="font-family: 'Ubuntu', serif">Full Stack Developer</span>`,
                `<span style="font-family: 'Geist Mono', serif">Dev Mobile</span>`,
                `<span style="font-family: 'Roboto'">Web Designer</span>`,
            ],
            typeSpeed: 60,
            backSpeed: 40,
            startDelay: 800,
            backDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        })

        return () => {
            typed.destroy()
        }
    }, [])

    return (
            <h1 className="animate-color-shift" ref={el}></h1> 
    )
}