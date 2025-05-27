import { AngularIcon } from "@/public/icons/angular-icon";
import { ExpoIcon } from "@/public/icons/expo-icon";
import { FirebaseIcon } from "@/public/icons/firebase-icon";
import { JavaIcon } from "@/public/icons/java-icon";
import { JavascriptIcon } from "@/public/icons/javascript-icon";
import { KotlinIcon } from "@/public/icons/kotlin-icon";
import { LaravelIcon } from "@/public/icons/laravel-icon";
import { NextjsIcon } from "@/public/icons/nextjs-icon";
import { PhpIcon } from "@/public/icons/php-icon";
import { ReactIcon } from "@/public/icons/react-icon";
import { ReactnativeIcon } from "@/public/icons/reactNative-icon";
import SpringIcon from "@/public/icons/springboot-icon";
import StripeIcon from "@/public/icons/stripe-icon";
import { SupabaseIcon } from "@/public/icons/supabase-icon";
import { SwiftRoundedIcon } from "@/public/icons/swift-rounded-icon";
import { TailwindIcon } from "@/public/icons/tailwind-icon";

export type iconSVG = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export interface TechData {
    name: string;
    icon: iconSVG | null;
    docURL: string;
}


export interface ProjectData {
    title: string;
    description: string;
    author: string;
    imageURL: string | null;
    technologies: TechData[];
    hasGithub: boolean;
    webURL: string | null;
    slug: string;
    status: string;
}

export interface HabilitesData {
    name: string,
    webUrl: string,
    slug: string,
    iconUrl: string | null
    iconSvg: iconSVG | null 
}

export interface TrayectoryData {
    id: number
    company: string;
    position: string;
    date: string;
    description: string;
}

export interface StudyData {
    title: string;
    center: string;
    date: string;
}

export const studies: StudyData[] = [
    {
        title: "Grado en Ingeniería Informática",
        center: "UNED",
        date: "2024 - Actualidad"
    },
    {
        title: "Desarrollo de Aplicaciones Multiplataforma",
        center: "Ilerna",
        date: "Sept. 2022 - Junio 2024"
    },
    {
        title: "CFGM Sistemas Microinformáticos y Redes",
        center: "IES Gonzalo Nazareno",
        date: "Sept. 2019 - Junio 2021"
    }
]

export const trayectory: TrayectoryData[] = [
    {
        id: 1,
        company: "Freelance",
        position: "Desarrollador Web y Mobile",
        date: "Enero 2024 - Actualidad",
        description: "En mis ratos libres me gusta desarrollar proyectos propios, si es cierto que me apasiona el mundo de las aplicaciones mobile, he de decir que me encandilado con tecnologías como React, que me hacen pasarme cada vez más al desarrollo web."
        + " Me gusta estar al día de todo, cosa que es imposible, por lo que me he especializado en tecnologías como React, NextJS, React Native, Kotlin, Spring Boot, Laravel y Firebase."
        + " Todo en base al trabajo diario y al amor que siento por este fascinante mundo, cosa que me gusta transmitir en mis proyectos y sobre todo, a mis clientes."
    },
    {
        id: 2,
        company: "Proxya (Actualmente Ayesa)",
        position: "Desarrollador Fullstack",
        date: "Marzo 2024 - Junio 2024",
        description: "Desarrollo del sistema de tickets interno para el proyecto APAE, desarrollado con HTML, CSS y PHP, también llevé a cabo la refactorización de código legacy del proyecto actualizando el código de PHP 4 a PHP 7. Apoyo en el backend del proyecto Gesuser optimizando la respuesta de las peticiones de la API con Python."
    }
]

export const projects: ProjectData[] = [
    {
        title: "AM Peluqueros",
        description: "AM Peluqueros es una aplicación creada para la peluquería con el nombre ya mencionado, ubicada en Dos Hermanas, Sevilla. Fue mi primer proyecto utilizando React Native, tecnología que me cautivó y me motivó a seguir usándola para crear mis proyectos de aplicaciones multiplataforma.",
        author: "Lorenzo Garcia Garcia",
        imageURL: '/img/ordenador.jpg',
        technologies: [
            {
                name: "React Native",
                icon: ReactnativeIcon,
                docURL: "https://reactnative.dev/"
            },
            {
                name: "Expo",
                icon: ExpoIcon,
                docURL: "https://expo.dev/"
            },
            {
                name: "Firebase",
                icon: FirebaseIcon,
                docURL: "https://firebase.google.com/"
            }
        ],
        slug: "am-peluqueros",
        hasGithub: true,
        webURL: null,
        status: "Finalizado"
    },
    {
        title: "Nutrigest",
        description: "Nutrigest es una aplicación pensada para nutricionistas que necesitan trabajar desde cualquier parte, tanto utilizar su panel de administración como la aplicación móvil para la gestión de clientes y dietas. Cuenta tanto con panel de nutricionista como panel de cliente, creada de manera nativa para Android y iOS, junto a un backend creado con SpringBoot y una base de datos en PostgreSQL de Supabase, teniendo como base la web principal creada en NextJS.",
        author: "Lorenzo Garcia Garcia",
        imageURL: `/img/nutricion.jpg`,
        technologies: [
            {
                name: "SpringBoot",
                icon: SpringIcon,
                docURL: "https://spring.io/projects/spring-boot"
            },
            {
                name: "NextJS",
                icon: NextjsIcon,
                docURL: "https://nextjs.org/"
            },
            {
                name: "Kotlin",
                icon: KotlinIcon,
                docURL: "https://reactnative.dev/"
            },
            {
                name: "Swift",
                icon: SwiftRoundedIcon,
                docURL: "https://swift.org/"
            },
            {
                name: "Supabase",
                icon: SupabaseIcon,
                docURL: "https://supabase.com"
            }
        ],
        hasGithub: true,
        webURL: null,
        slug: "nutrigest-api",
        status: "En desarrollo"
    },
    {
        title: "MAACUU Glow",
        description: "MAACU Glow es un panel de administración creado para la gestión de pedidos de una tienda de ropa de mujer, creada con NextJS e implementando Stripe como pasarela de pagos, permitiendo generar enlaces fácilmente para compartirlos con los clientes y gestionar los pedidos de manera sencilla.",
        author: "Lorenzo Garcia Garcia",
        imageURL: '/img/maacuglow-logo.png',
        technologies: [
            {
                name: "NextJS",
                icon: NextjsIcon,
                docURL: "https://nextjs.org/"
            },
            {
                name: "Stripe",
                icon: StripeIcon,
                docURL: "https://stripe.com/es"
            },
            {
                name: "Tailwind CSS",
                icon: TailwindIcon,
                docURL: "https://tailwindcss.com/"
            }
        ],
        slug: "maacuu-glow",
        hasGithub: false,
        webURL: "https://maacuuglow.es",
        status: "Finalizado"
    },
    {
        title: "Conejos Ordoñez y Pons",
        description: "Página web creada para el criadero de conejos Ordoñez y Pons, Creada con NextJS y Firebase, permitiendo a los dueños cambiar las fotos de los conejos cuando lo deseen mediante una herramienta personalizada",
        author: "Lorenzo Garcia Garcia",
        imageURL: `/img/conejos-ordonez-pons.jpg`,
        technologies: [
            {
                name: "NextJS",
                icon: NextjsIcon,
                docURL: "https://nextjs.org/"
            },
            {
                name: "Firebase",
                icon: FirebaseIcon,
                docURL: "https://firebase.google.com/"
            }

        ],
        slug: "conejos-ordonez-y-pons",
        webURL: "https://conejosordoñezypons.es",
        hasGithub: false,
        status: "Finalizado"
    },
    {
        title: "Nutrigest (Versión antigua)",
        description: "Nutrigest fue un proyecto realizado para la gestión de pacientes en tiempo real para un amigo nutricionista, creada con Kotlin y utilizando Firebase como backend."
        + " La aplicación permite la creación de pacientes, la creación de dietas y la visualización de las mismas.",
        author: "Lorenzo Garcia Garcia",
        imageURL: `/img/nutricion.jpg`,
        technologies: [
            {
                name: "Kotlin",
                icon: KotlinIcon,
                docURL: "https://kotlinlang.org/"
            },
            {
                name: "Firebase",
                icon: FirebaseIcon,
                docURL: "https://firebase.google.com/"
            }

        ],
        slug: "nutrigest",
        hasGithub: true,
        webURL: null,
        status: "Finalizado"
    },
]

export const habilities: HabilitesData[] = [
    {
        name: "Javascript",
        webUrl: "https://developer.mozilla.org/es/docs/Web/JavaScript",
        slug: "javascript",
        iconUrl: "/img/icons/javascript-icon.png",
        iconSvg: JavascriptIcon
    },
    {
        name: "React",
        webUrl: "https://es.react.dev",
        slug: "react",
        iconUrl: "/img/icons/react-icon.png",
        iconSvg: ReactIcon
    },
    {
        name: "Next",
        webUrl: "https://nextjs.org/",
        slug: "nextjs",
        iconUrl: "/img/icons/NextJS.png",
        iconSvg: NextjsIcon
    },
    {
        name: "React Native",
        webUrl: "https://reactnative.dev/",
        slug: "react-native",
        iconUrl: "/img/icons/react-native.png",
        iconSvg: ReactnativeIcon
    },
    {
        name: "Angular",
        webUrl: "https://angular.dev",
        slug: "angular",
        iconUrl: "/img/icons/angular-icon.png",
        iconSvg: AngularIcon
    },
    {
        name: "Kotlin",
        webUrl: "https://kotlinlang.org/",
        slug: "kotlin",
        iconUrl: "/img/icons/Kotlin.png",
        iconSvg: KotlinIcon
    },
    {
        name: "Java",
        webUrl: "https://dev.java",
        slug: "java",
        iconUrl: "/img/icons/java-icon.png",
        iconSvg: JavaIcon
    },
    {
        name: "Spring Boot",
        webUrl: "https://spring.io/projects/spring-boot",
        slug: "spring-boot",
        iconUrl: "/img/icons/Spring Boot.png",
        iconSvg: SpringIcon
    },
    {
        name: "PHP",
        webUrl: "https://www.php.net/docs.php",
        slug: "php",
        iconUrl: "/img/icons/php-icon.png",
        iconSvg: PhpIcon
    },
    {
        name: "Laravel",
        webUrl: "https://laravel.com",
        slug: "laravel",
        iconUrl: "/img/icons/laravel-icon.png",
        iconSvg: LaravelIcon
    },
    {
        name: "Swift",
        webUrl: "https://swift.org",
        slug: "swift",
        iconUrl: "/img/icons/swift-icon.png",
        iconSvg: SwiftRoundedIcon
    },
    {
        name: "Firebase",
        webUrl: "https://firebase.google.com/",
        slug: "firebase",
        iconUrl: "/img/icons/Firebase.png",
        iconSvg: FirebaseIcon
    }

]