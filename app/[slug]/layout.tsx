import { Metadata } from "next";
import { getProjectBySlug } from "../lib/actions";

interface LayoutProps {
    children: React.ReactNode;
    params: {slug: string};
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    if (!params || !params.slug) {
        return {
            title: "404 Not Found | LGarciaDev",
            description: "No se encontró la información del proyecto.",
        };
    }
    const project = await getProjectBySlug(params.slug)
    return {
        title: `${project?.title} | LGarciaDev` || "404 Not Found",
        description: `${project?.description}` || "Descripción del proyecto no disponible",
    }
}

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <main>
            {children}
        </main>
    )
}