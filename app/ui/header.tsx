'use client';


import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import TransitionMobileMenu from './animations/transition-mobile-menu';


 const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/contacto', label: 'Contacto' },
 ]

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='bg-background text-foreground sticky top-0 z-20 backdrop:filter backdrop-blur-xl'>
            <div className='container mx-auto px-4 border-b-2'>
                <div className='flex flex-col sm:flex-row items-center justify-between py-4'>
                    <Link href="/" className='text-2xl font-bold mb-4 sm:mb-0 hover:text-accent hover:bg-secondary hover:rounded-xl rounded-xl delay-75 p-3 transition-colors'>
                        <p>{"LgarciaDev <👨🏻‍💻 />"} </p>
                    </Link>
                    <button 
                        onClick={() => {setIsOpen(!isOpen)}}
                        className='sm:hidden p-2 rounded'>
                        <Image 
                            src={'/img/icons/burger-menu.png'}
                            alt='burger-menu'
                            width={25}
                            height={25}
                        />
                            <path d="M4 6h16M4 12h16M4 18h16" />
                    </button>
                    <nav className='hidden sm:flex space-x-4 font-bold'>
                        {navItems.map((item) => (
                            <Link 
                            key={item.href}
                            href={item.href}
                            className={`hover:text-accent hover:font-bold font-bold transition ease-in-out duration-200 ${pathname === item.href ? 'text-accent bg-secondary' : ''} text-xl hover:bg-secondary hover:scale-110 p-3 rounded-xl`}>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                {/* Menú para pantallas pequeñas */}
                    <TransitionMobileMenu isOpen={isOpen}>
                    <nav className="sm:hidden bg-background px-4 pb-4">
                        <ul className="flex flex-col items-center mx-auto gap-2 mt-2 font-bold">
                            {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                href={item.href}
                                className="block p-2 hover:bg-secondary rounded-xl text-xl transition ease-in-out duration-200 hover:scale-105"
                                onClick={() => setIsOpen(false)}
                                >
                                {item.label}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </nav>
                    </TransitionMobileMenu>
            </div>
        </header>
    )
}