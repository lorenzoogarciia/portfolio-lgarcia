'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import TransitionMobileMenu from './animations/transition-mobile-menu';
import TransitionButtonHeader from './animations/transition-button-header';


 const navItems = [
    { href: '/', label: 'Inicio' },
    //{ href: '/proyectos', label: 'Proyectos' },
    { href: '/contacto', label: 'Contacto' },
 ]

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isTranslationOpen, setIsTranslationOpen] = useState(false);
    const translationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(translationRef.current && !translationRef.current.contains(event.target as Node)) {
                setIsTranslationOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    const changeLanguage = (lang: string) => {
        console.log("Cambiando idioma a: " + lang);
    }

    return (
        <header className='max-w-full bg-background text-foreground sticky top-0 z-20 backdrop:filter backdrop-blur-xl'>
            <div className='container mx-auto px-4 border-b-2'>
                <div className='flex flex-col sm:flex-row items-center justify-between py-4'>
                    <div className='flex flex-row items-center gap-4'>
                    <Link href="/" className='text-2xl font-bold mb-4 sm:mb-0 hover:text-accent hover:bg-secondary hover:rounded-xl rounded-xl delay-75 p-3 transition-colors'>
                        <p>{"LgarciaDev <👨🏻‍💻 />"} </p>
                    </Link>
                    <div className='p-3 justify-center transition-transform duration-100 hover:scale-110' onMouseEnter={() => setIsTranslationOpen(true)} onMouseLeave={() => setIsTranslationOpen(false)}>
                        <button onClick={() => setIsTranslationOpen(!isTranslationOpen)}>
                            <Image
                                src={'/img/icons/traduccion-icon.png'}
                                alt='traduccion-icon'
                                width={25}
                                height={25}
                            />
                        </button>
                        {isTranslationOpen && (
                            <div className='absolute mt-2 mx-auto p-2 bg-primary items-center justify-center border-2 border-secondary rounded shadow-lg z-30' ref={translationRef}>
                                <ul className='flex flex-col bg-background'>
                                    <li className='border-b-2 p-2 text-secondary transition-colors hover:bg-secondary hover:text-primary'>
                                        <button onClick={() => changeLanguage('es')}>Español</button>
                                    </li>
                                    <li className='border-b-2 p-2 text-secondary transition-colors hover:bg-secondary hover:text-primary'>
                                        <button onClick={() => changeLanguage('en')}>English</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    
                    </div>
                    
                    <button 
                        onClick={() => {setIsOpen(!isOpen)}}
                        className='sm:hidden p-2 rounded'>
                        <Image 
                            src={'/img/icons/burger-menu.png'}
                            alt='burger-menu'
                            width={25}
                            height={25}
                        />
                    </button>
                    <nav className='hidden sm:flex space-x-4 font-bold'>
                        {navItems.map((item) => (
                            <TransitionButtonHeader key={item.href}>
                                <Link 
                                href={item.href}
                                className={`transition-colors hover:text-accent ${pathname === item.href ? 'text-accent bg-secondary' : ''} text-xl hover:bg-secondary p-3 border-x-2 border-secondary`}>
                                    {item.label}
                                </Link>
                            </TransitionButtonHeader>
                        ))}
                    </nav>
                </div>
                {/* Menú para pantallas pequeñas */}
                    <TransitionMobileMenu isOpen={isOpen}>
                    <nav className="sm:hidden bg-background px-4 pb-4">
                        <ul className="flex flex-col items-center mx-auto gap-2 mt-2 font-bold">
                            {navItems.map((item) => (
                            <TransitionButtonHeader key={item.href}>
                            <li> 
                                    <Link
                                    href={item.href}
                                    className={`block p-2 transition-colors hover:text-accent ${pathname === item.href ? 'text-accent bg-secondary' : ''} text-xl rounded-xl hover:bg-secondary`}
                                    onClick={() => setIsOpen(false)}
                                    >
                                    {item.label}
                                    </Link>
                            </li>
                            </TransitionButtonHeader>
                            ))}
                        </ul>
                    </nav>
                    </TransitionMobileMenu>
            </div>
        </header>
    )
}