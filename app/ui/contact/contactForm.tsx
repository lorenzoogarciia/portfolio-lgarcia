'use client'

import { sendMail, State } from "@/app/lib/actions"
import { useActionState, useEffect, useState } from "react"
import TransitionSend from "../animations/contact/transition-sendbutton"

type Props = {
    onSucces?: (msg: string) => void
    onFail?: (msg: string) => void
}

export default function ContactForm({onSucces, onFail}: Props) {
    const initialSate: State = { consoleMessage: "", errors: {}, submissionId: undefined}
    const [state, formAction] = useActionState(sendMail, initialSate)
    const [lastSubmissionId, setLastSubmissionId] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (state.consoleMessage === 'Formulario enviado correctamente' && state.submissionId !== lastSubmissionId && state.submissionId !== undefined) {
            onSucces?.(state.consoleMessage)
            setLastSubmissionId(state.submissionId)
        } else if (state.consoleMessage !== 'Formulario enviado correctamente' && state.submissionId !== lastSubmissionId && state.submissionId !== undefined) {
            onFail?.(state.consoleMessage)
            setLastSubmissionId(state.submissionId)
        }
        console.log("Submission id: ", state.submissionId ?? null)
    }, [state.consoleMessage, state.submissionId, lastSubmissionId, onSucces, onFail])
    
    return (
            <form action={formAction}>
                <div className="flex flex-col md:flex-row flex-wrap">
                    <div className="p-4 flex flex-col">
                        <label htmlFor="name" className="text-xl font-inter text-secondary">Nombre*</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="text-lg font-mono text-secondary block bg-background p-1 mt-2 border-secondary border-b-2 focus:outline-none focus:caret-secondary"
                            aria-describedby="name-error"/>
                        <div id='name-error' aria-live="polite" aria-atomic="true">
                            {state?.errors?.name && state.errors.name.map((error: string) => (
                            <p className='p-1 mt-1 text-sm text-red-500' key={error}>{error}</p>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 flex flex-col">
                        <label htmlFor="phone" className="text-xl font-inter text-secondary">Teléfono*</label>
                        <input 
                            type="phone"
                            name="phone"
                            id="phone"
                            className="text-lg text-secondary font-mono block bg-background mt-2 placeholder:text-gray-600 p-1 border-secondary border-b-2 focus:outline-none focus:caret-secondary"
                            aria-describedby="phone-error"/>
                        <div id='phone-error' aria-live="polite" aria-atomic="true">
                            {state?.errors?.phone && state.errors.phone.map((error: string) => (
                                <p className='p-1 mt-1 text-sm text-red-500' key={error}>{error}</p>
                            ))}
                        </div>
                </div>
                        
                    </div>
                
                <div className="p-4 flex flex-col">
                            <label htmlFor="email" className="text-xl font-inter text-secondary px-1">Correo*</label>
                            <input
                                type="email"
                                name="email" 
                                id="email" 
                                className="text-lg text-secondary font-mono block bg-background mt-2  p-1 border-secondary border-b-2 focus:outline-none focus:caret-secondary"
                                aria-describedby="email-error"/>
                            <div id='email-error' aria-live="polite" aria-atomic="true">
                                {state?.errors?.email && state.errors.email.map((error: string) => (
                                <p className='p-1 mt-1 text-sm text-red-500' key={error}>{error}</p>
                                ))}
                            </div>
                        </div>
                <div className="p-4 flex flex-col">
                    <label htmlFor="message" className="text-xl font-inter text-secondary px-1">Mensaje*</label>
                    <textarea 
                        name="message" 
                        id="message"
                        className="flex flex-col text-lg text-secondary font-mono bg-background text-wrap mt-2 px-1 placeholder:text-secondary placeholder:text-lg border-secondary border-b-2 focus:outline-none focus:caret-secondary"
                        aria-describedby="message-error"/>
                    <div id='message-error' aria-live="polite" aria-atomic="true">
                        {state?.errors?.message && state.errors.message.map((error: string) => (
                            <p className='p-1 mt-1 text-sm text-red-500' key={error}>{error}</p>
                        ))}
                    </div>
                </div>
                <TransitionSend>
                    <div className="flex flex-col justify-center py-5">
                        <button
                            type="submit"
                            className="rounded-full mx-auto md:mx-52 bg-accent text-secondary p-4 text-xl font-ubuntu hover:bg-secondary hover:text-accent hover:font-bold hover:shadow-xl hover:border-accent shadow-black border-secondary border-2"
                        >
                            {"¡Enviar!"}
                        </button>
                    </div>
                </TransitionSend>
            </form>
    )
}