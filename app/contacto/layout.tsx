import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | LGarciaDev",
    description: "¡Hola! ¿Necesitas contactarme? siempre estoy dispuesto a escuchar nuevas propuestas, rellena este formulario y me pondré en contacto contigo lo antes posible.",
    icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨🏻‍💻</text></svg>",
}

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <main>
            {children}
        </main>
    )
}