import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
        <footer className="bg-background text-foreground py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-secondary">&copy; 2025 Lorenzo Garcia Garcia. Made with 🩵</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link href={"https://github.com/lorenzoogarciia"} className="transition ease-in-out duration-200 hover:scale-110" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src="/img/icons/github-icon.png"
                                alt="github-icon"
                                width={35}
                                height={35}
                                className="rounded-lg"
                            />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/lorenzogarcia-g"} className="transition hover:scale-110 delay-75" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src="/img/icons/linkedin-icon.png"
                                alt="linkedin-icon"
                                width={35}
                                height={35}
                                className="rounded-lg"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}