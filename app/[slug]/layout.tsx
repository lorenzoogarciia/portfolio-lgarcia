import { getProjectBySlug } from "../lib/actions";

interface LayoutProps {
    children: React.ReactNode;
    params: {slug: string};
}

export async function generateMetadata({ params }: LayoutProps): Promise<{title: string, description: string}> {
    const project = await getProjectBySlug(params.slug)
    return {
        title: `${project?.title} | LGarciaDev`,
        description: `${project?.description}`
    }
}

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <main>
            {children}
        </main>
    )
}