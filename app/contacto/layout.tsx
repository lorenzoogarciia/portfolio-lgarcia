import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | LGarciaDev",
    description: "¡Hola! ¿Necesitas contactarme? siempre estoy dispuesto a escuchar nuevas propuestas, rellena este formulario y me pondré en contacto contigo lo antes posible."
}

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <main>
            {children}
        </main>
    )
}