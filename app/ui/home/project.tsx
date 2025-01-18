import Image from 'next/image';

interface TechData {
    name: string;
    icon: string;
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
            <main className="bg-secondary text-foreground text-left rounded-xl p-4 transition-colors hover:bg-accent hover:text-secondary border-2 border-secondary">
                <div className='py-2 relative'>
                    <Image 
                        src={imageURL || `/nextjs.svg`}
                        alt={title}
                        width={200}
                        height={200}
                        className='rounded-lg'/>
                </div>
                <div className='py-2'>
                    <p className='overflow-hidden font-bold text-lg'>{title}</p>
                    <span className='overflow-hidden text-wrap line-clamp-2 max-w-[200px] mb-2'>{description}</span>
                    <div className='flex flex-row gap-4 pt-4'>
                        {technologies.map((tech) => (
                                <Image 
                                key={tech.name}
                                src={`${tech.icon}`}
                                alt='technology-icon'
                                style={{ objectFit: 'contain'}}
                                width={40}
                                height={40}/>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}