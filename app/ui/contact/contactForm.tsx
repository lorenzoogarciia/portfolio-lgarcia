'use client'

import { sendMail, State } from "@/app/lib/actions"
import { useActionState, useEffect, useState } from "react"

type Props = {
    onSucces?: (msg: string) => void
}

export default function ContactForm({onSucces}: Props) {
    const initialSate: State = { message: null, errors: {} }
    const [state, formAction] = useActionState(sendMail, initialSate)
    const [prevMessage, setPrevMessage] = useState<string | null>(null)

    useEffect(() => {
        console.log("useEffect corriendo")
        if (state.message === 'Formulario enviado correctamente') {
            onSucces?.("¡Solicitud enviada!")
            console.log("Se llama a onSucces")
        }
        
        console.log("Poniendo prevMessage a", state.message ?? null)
        setPrevMessage(state.message ?? null)
    }, [state.message, onSucces, prevMessage])

    useEffect(() => {
        console.log("ContactForm MONTADO")
        return () => {
            console.log("ContactForm DESMONTADO")
        }
    })
    
    return (
            <form action={formAction}>
                <div className="p-4 flex flex-col">
                    <label htmlFor="name" className="text-lg font-bold mt-4 text-accent px-1">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Lorenzo Garcia"
                        className="text-lg block placeholder:text-gray-600 rounded-xl p-2 border-accent border-2"
                        aria-describedby="name-error"/>
                    <div id='name-error' aria-live="polite" aria-atomic="true">
                        {state?.errors?.name && state.errors.name.map((error: string) => (
                        <p className='p-2 mt-1 text-sm text-red-500' key={error}>{error}</p>
                        ))}
                    </div>
                </div>
                
                <div className="p-4 flex flex-col">
                    <label htmlFor="email" className="text-lg font-bold text-accent px-1">Correo</label>
                    <input
                        type="email"
                        name="email" 
                        id="email" 
                        placeholder="lgarciadev2024@gmail.com"
                        className="text-lg block placeholder:text-gray-600 rounded-xl p-2 border-accent border-2"
                        aria-describedby="email-error"/>
                    <div id='email-error' aria-live="polite" aria-atomic="true">
                        {state?.errors?.email && state.errors.email.map((error: string) => (
                        <p className='p-2 mt-1 text-sm text-red-500' key={error}>{error}</p>
                        ))}
                    </div>
                </div>
                <div className="p-4 flex flex-col">
                    <label htmlFor="email" className="text-lg font-bold text-accent px-1">Teléfono</label>
                    <input 
                        type="phone"
                        name="phone"
                        id="phone"
                        placeholder="600111222"
                        className="text-lg block placeholder:text-gray-600 rounded-xl p-2 border-accent border-2"
                        aria-describedby="phone-error"/>
                    <div id='phone-error' aria-live="polite" aria-atomic="true">
                        {state?.errors?.phone && state.errors.phone.map((error: string) => (
                        <p className='p-2 mt-1 text-sm text-red-500' key={error}>{error}</p>
                        ))}
                    </div>
                </div>
                <div className="p-4 flex flex-col">
                    <label htmlFor="message" className=" text-lg font-bold text-accent px-1">Mensaje</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        placeholder="¡Déjame aquí tu mensaje!"
                        className="text-lg block placeholder:text-gray-600 placeholder:text-lg rounded-xl p-4 border-accent border-2"
                        aria-describedby="message-error"/>
                    <div id='message-error' aria-live="polite" aria-atomic="true">
                        {state?.errors?.message && state.errors.message.map((error: string) => (
                        <p className='p-2 mt-1 text-sm text-red-500' key={error}>{error}</p>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center p-5">
                    <button
                        type="submit"
                        className="rounded-full bg-accent text-secondary p-4 text-xl font-ubuntu transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-secondary hover:text-accent hover:shadow-xl shadow-black border-accent border-2"
                    >
                        Enviar 
                    </button>
                </div>
            </form>
    )
}