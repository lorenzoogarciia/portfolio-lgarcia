import { Metadata } from "next";
import { getProjectBySlug } from "../lib/actions";

interface LayoutProps {
    children: React.ReactNode;
    slug: string;
}

export async function generateMetadata({ slug }: LayoutProps): Promise<Metadata> {
    const project = await getProjectBySlug(slug)
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