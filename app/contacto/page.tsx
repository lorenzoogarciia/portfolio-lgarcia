'use client'

import TransitionForm from "../ui/animations/contact/transition-form"
import TransitionNotify from "../ui/animations/contact/transition-notify"
import TransitionWrapper from "../ui/animations/transition-wrapper"
import ContactForm from "../ui/contact/contactForm"
import { useEffect, useRef, useState } from "react"

export default function Page() {
    const [showNotification, setShowNotification] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState("")
    const timeoutRef = useRef<number | null>(null)

    const handleSuccesNotification = (msg: string) => {
        setNotificationMessage(msg)
        setShowNotification(true)
        timeoutRef.current = window.setTimeout(() => {
            setShowNotification(false)
        }, 3000)        
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return (
        <TransitionWrapper>
            <div className="mx-auto flex flex-col py-8 md:py-12">
                <main className="flex flex-col items-center gap-4">
                    <h1 className="text-secondary mb-8">¡No te cortes!😉</h1>
                    <TransitionForm>
                        <div className="md:min-w-[600px] bg-secondary rounded-xl">
                            <ContactForm onSucces={handleSuccesNotification}/>
                        </div>
                    </TransitionForm>
                        {showNotification && (
                            <TransitionNotify>
                                <div className="flex flex-col mx-auto bg-green-400 p-4 rounded-xl shadow-xl shadow-current">
                                    <p className="text-accent text-lg font-bold">{notificationMessage}</p>
                                </div>
                            </TransitionNotify>
                        )}
                    
                </main>
            </div>
        </TransitionWrapper>
    )
}