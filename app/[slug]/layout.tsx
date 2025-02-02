import { Metadata } from "next";
import { getProjectBySlug } from "../lib/actions";

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{slug: string}>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const project = await getProjectBySlug((await params).slug.toString());
    return {
        title: `${project?.title} | LGarciaDev` || "404 Not Found",
        description: `${project?.description}` || "Descripción del proyecto no disponible",
        icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨🏻‍💻</text></svg>",
    }
}

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <main>
            {children}
        </main>
    )
}