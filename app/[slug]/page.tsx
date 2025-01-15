import Link from "next/link"
import { projects } from "../lib/data"
import Image from "next/image"
import TransitionProject from "../ui/animations/slug/transition-project"
import TransitionParagraph from "../ui/animations/slug/transition-paragraph"
import TransitionTitle from "../ui/animations/slug/transition-title"
import TransitionImage from "../ui/animations/slug/transition-image"
import TransitionTechnology from "../ui/animations/slug/transition-technology"
import TransitionGithub from "../ui/animations/slug/transition-github"

interface ProjectProps{
    params: {
        slug: string
    }

}

export default function Page({params}: ProjectProps ) {
    const project = projects.find((p) => p.slug === params.slug) 
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
                                        <Image 
                                            src="/img/icons/web-icon.png"
                                            alt="web-icon"
                                            width={35}
                                            height={35}
                                            className="rounded-xl"/>
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
                            <TransitionTechnology key={tech.name} className="transition-transform duration-300 ease-in-out hover:scale-110">
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