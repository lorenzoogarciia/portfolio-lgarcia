'use client'
import Project from "./ui/home/project";
import { projects, trayectory, studies } from "./lib/data";
import Link from 'next/link'
import  TransitionWrapper  from './ui/animations/transition-wrapper';
import AnimatedTitle from "./ui/animations/home/transition-title";
import TransitionCard from "./ui/animations/home/transiton-cards";
import TransitionWelcome from "./ui/animations/home/transition-welcome";
import SkillsCarrousel from "./ui/animations/home/skills-carrousel";
import TrayectoryCard from "./ui/home/trayectory-card";
import StudyCard from "./ui/home/study-card";
//import TransitionSend from "./ui/animations/contact/transition-sendbutton";

export default function Home() {

  return (
    <TransitionWrapper>
      <div className="container mx-auto px-4 py-2 md:py-12 font-[family-name:var(--font-geist-sans)]">
        <main className="px-4 mt-8 md:mt-0">
          <section id="welcome" className="mb-24">
            <div className="items-center gap-4">
              <h1 className="text-4xl font-bold text-center text-secondary">
                ¡Bienvenido! soy ...
              </h1>
              <div className="text-center mt-4 p-4">
                <h1 className="font-bold font-inter text-6xl animate-color-shift">
                    {"<Lorenzo Garcia />"}
                </h1>
              </div>
              <div className="flex flex-row items-center justify-center text-center text-4xl text-secondary gap-2 md:min-h-[50px] min-h-[110px]">
                  <AnimatedTitle />  
              </div>
              <div className="text-center font-inter rounded-xl p-4">
                <TransitionWelcome />
              </div>
              <div className="items-center text-center py-4">
                <h1 className="text-secondary">Se un poco de todo esto...</h1>
                <div className="mt-12 mb-12 md:mb-0 overflow-x-hidden">
                  <SkillsCarrousel />
                </div>
              </div>
              <div>
              </div>
            </div>
          </section>
          <section id="trayectoria" className="mb-24">
            <div>
              <h1 className="text-secondary text-center">Trayectoria Profesional</h1>
              <div className="flex flex-col flex-wrap gap-4 mt-8 justify-start items-center px-8">
                {trayectory.map((job) => {
                  return (
                    <div key={job.id}>
                      <TrayectoryCard
                        company={job.company} 
                        position={job.position}
                        date={job.date}
                        description={job.description}  
                      />
                    </div>
                  )
                })}
              </div>
              <div className="flex justify-center items-center mt-12">
                {/* <TransitionSend>
                  <a
                    href="/CV_LorenzoGarcia.pdf"
                    download="CV_Lorenzo_Garcia.pdf"
                    className="border-2 border-secondary text-secondary font-bold rounded-full p-4 transition hover:bg-secondary hover:text-primary duration-200 ease-in-out hover:scale-110">
                    Descargar CV
                  </a>
                </TransitionSend> */}
              </div>
            </div>
          </section>
          <section id="studies" className="mb-24">
            <div className="">
              <h1 className="text-center text-secondary">Estudios</h1>
              <div className="flex flex-row flex-wrap text-secondary gap-4 mt-8 justify-center items-center">
                {studies.map((study) => {
                  return (
                    <div key={study.title}>
                      <StudyCard
                        title={study.title}
                        center={study.center}
                        date={study.date}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          <section id="lastProjects" className="md:min-h-[400px] mb-4">
            <div className="text-center">
              <h1 className="text-secondary">¡Revisa mis últimos proyectos!</h1>
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
            </div>
          </section>
        </main>
      </div>
    </TransitionWrapper>
  );
}
