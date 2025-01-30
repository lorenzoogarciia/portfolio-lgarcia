import Link from "next/link"
import { projects } from "../lib/data"
import Image from "next/image"
import TransitionProject from "../ui/animations/slug/transition-project"
import TransitionParagraph from "../ui/animations/slug/transition-paragraph"
import TransitionTitle from "../ui/animations/slug/transition-title"
import TransitionImage from "../ui/animations/slug/transition-image"
import TransitionTechnology from "../ui/animations/slug/transition-technology"
import TransitionGithub from "../ui/animations/slug/transition-github"
import TransitionWeb from "../ui/animations/slug/transition-web"

export async function generateStaticParams() {
    return projects.map((project) => ({
            slug: project.slug
    }))
}

interface ProjectPageProps {
    params: {slug: string}
}

export default async function Page({ params }: ProjectPageProps) {
    const { slug } = params
    const project =  projects.find((p) => p.slug === slug) 
    if(!project) return (
        <div className="mx-auto flex flex-col items-center gap-2 py-8 md:py-12">
            <h1 className="text-red-600 font-bold">Error 404</h1>
            <h3 className="text-red-600 font-bold">Proyecto: {slug} no encontrado</h3>
        </div>
    ) 
    return (
        <TransitionProject>
            <div className="mx-auto md:max-w-[800px] max-w-[80%] bg-secondary rounded-xl px-4 py-4 mt-12">
                <main className="flex-initial flex-col p-4">
                    <div className="flex flex-row flex-wrap md:justify-between justify-center gap-4">
                        <TransitionImage imageURL={project?.imageURL || "/window.svg"} slug={project?.slug || "foto-proyecto"}/>
                        <div className="flex flex-col gap-2">
                            {project?.hasGithub && (
                                <div className="p-2">
                                <Link
                                    href={`https://github.com/lorenzoogarciia/${project?.slug}`} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform duration-300 ease-in-out hover:scale-110 flex flex-col items-center gap-2"
                                >
                                    <TransitionGithub />
                                </Link>
                            </div>
                            )}
                            {project?.webURL && (
                                <div className="p-2">
                                    <Link
                                        href={project?.webURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-transform duration-300 ease-in-out hover:scale-110 flex flex-col items-center gap-2"
                                    >
                                        <TransitionWeb />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <TransitionTitle>
                        {project?.title}
                    </TransitionTitle>
                    <TransitionParagraph>
                        {project?.description}
                    </TransitionParagraph>
                    <div className="flex flex-row gap-4 pt-4 mt-4">
                        {project?.technologies.map((tech) => (
                            <TransitionTechnology key={tech.name}>
                                <Link
                                    key={tech.name}
                                    href={tech.docURL}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Image
                                        src={tech.icon || "/window.svg"}
                                        alt={tech.name || "foto-tecnologia"}
                                        width={40}
                                        height={40}
                                        className="rounded-xl"
                                    />
                                </Link>
                            </TransitionTechnology>
                        ))}
                    </div>
                    <p className="mt-8 text-accent text-xl font-bold">Estado: {project?.status}</p>
                </main>
            </div>
        </TransitionProject>
    )
}