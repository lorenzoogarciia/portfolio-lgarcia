'use client'

import TransitionForm from "../ui/animations/contact/transition-form"
import TransitionNotify from "../ui/animations/contact/transition-notify"
import TransitionWrapper from "../ui/animations/transition-wrapper"
import ContactForm from "../ui/contact/contactForm"
import { useEffect, useState } from "react"

export default function Page() {
    const [showNotification, setShowNotification] = useState(false)
    const [functionMessage, setFunctionMessage] = useState("")
    const [notificationMessage, setNotificationMessage] = useState("")

    const handleSuccesNotification = (msg: string) => {
        setFunctionMessage(msg)
        setShowNotification(true)
        setTimeout(() => {
            setShowNotification(false)
        }, 3000)        
    }

    useEffect(() => {
        if (functionMessage === 'Formulario enviado correctamente') {
            setNotificationMessage('¡Solicitud enviada!')
        } else {
            setNotificationMessage('Error al enviar solicitud')
        }
    }, [functionMessage])

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
                                <div className={`flex flex-col mx-auto ${notificationMessage === '¡Solicitud enviada!' ? 'bg-green-400 text-accent shadow-current' : 'bg-red-500 text-white shadow-current'} p-4 rounded-xl shadow-xl`}>
                                    <p className="text-lg font-bold">{notificationMessage}</p>
                                </div>
                            </TransitionNotify>
                        )}
                    
                </main>
            </div>
        </TransitionWrapper>
    )
}