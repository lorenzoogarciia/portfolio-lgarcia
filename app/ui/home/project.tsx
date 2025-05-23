import Image from 'next/image';

export type iconSVG = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

interface TechData {
    name: string;
    icon: iconSVG | null;
    docURL: string;
}

interface ProjectProps {
    title: string;
    imageURL: string | null;
    technologies: TechData[];
    description: string;
}


export default function Project({
    title, 
    imageURL,
    technologies,
    description,
} : ProjectProps) {
    return (
        <div className='px-4 py-4 min-h-[250px]'>
            <main className="bg-secondary text-primary text-left rounded-xl p-4 transition-colors hover:bg-primary hover:text-secondary border-2 border-secondary">
                <div className='py-2 relative h-48 w-48 mx-auto'>
                    <Image 
                        src={imageURL || `/nextjs.svg`}
                        alt={title}
                        fill
                        className='object-contain rounded-lg'/>
                </div>
                <div className='py-2'>
                    <p className='overflow-hidden font-bold text-lg'>{title}</p>
                    <span className='overflow-hidden text-wrap line-clamp-2 max-w-[200px] mb-2'>{description}</span>
                    <div className='flex flex-row gap-4 pt-4'>
                        {technologies.map((tech) => (
                            tech.icon ? (
                            <tech.icon key={tech.icon.name} className='w-10 h-10' />
                        ) : (
                                <Image 
                                key={tech.name}
                                src={`${tech.icon}`}
                                alt={tech.name}
                                style={{ objectFit: 'contain'}}
                                width={40}
                                height={40}/>
                            )
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}