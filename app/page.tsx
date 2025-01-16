import Project from "./ui/home/project";
import { projects } from "./lib/data";
import Link from 'next/link'
import  TransitionWrapper  from './ui/animations/transition-wrapper';
import AnimatedTitle from "./ui/animations/home/transition-title";
import TransitionCard from "./ui/animations/home/transiton-cards";
import TransitionWelcome from "./ui/animations/home/transition-welcome";

export default function Home() {
  return (
    <TransitionWrapper>
      <div className="container mx-auto px-4 py-2 md:py-4 font-[family-name:var(--font-geist-sans)]">
        <main className="px-4 mt-8">
          <div className="items-center gap-4">
            <h1 className="text-4xl font-bold text-center text-secondary">
              ¡Bienvenido! soy ...
            </h1>
            <div className="text-center mt-4 p-4">
              <h1 className="font-bold font-inter text-6xl animate-color-shift">
                  {"<Lorenzo Garcia />"}
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center text-center text-4xl text-secondary gap-2 mb-4 md:min-h-[50px] min-h-[110px]">
                <AnimatedTitle />
              </div>
            <div className="text-center font-mono rounded-xl p-4">
              <TransitionWelcome />
            </div>
            <h2 className="text-center text-secondary items-center mt-8">¡Revisa mis últimos proyectos!</h2>
          </div>
          <div className="flex flex-row flex-wrap gap-4 mt-8 justify-center items-center">
            {projects.slice(0,3).map((project) => (
              <TransitionCard key={project.slug}>
                <Link href={`/${project.slug}`} key={project.slug}>
                  <Project
                    title={project.title}
                    imageURL={project.imageURL}
                    description={project.description}
                    technologies={project.technologies.map((tech) => tech)}
                  />
                </Link>
              </TransitionCard>
              ))
            }
          </div>
          
        </main>
      </div>
    </TransitionWrapper>
  );
}
