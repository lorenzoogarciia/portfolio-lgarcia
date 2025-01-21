export interface TechData {
    name: string;
    icon: string;
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
}

export const projects: ProjectData[] = [
    {
        title: "AM Peluqueros",
        description: "AM Peluqueros es una aplicación creada para la peluquería con el nombre ya mencionado, ubicada en Dos Hermanas, Sevilla. Fue mi primer proyecto utilizando React Native, tecnología que me cautivó y me motivó a seguir usándola para crear mis proyectos de aplicaciones multiplataforma.",
        author: "Lorenzo Garcia Garcia",
        imageURL: '/img/ordenador.jpg',
        technologies: [
            {
                name: "React Native",
                icon: "/img/icons/React Native.png",
                docURL: "https://reactnative.dev/"
            },
            {
                name: "Expo",
                icon: "/img/icons/Expo.png",
                docURL: "https://expo.dev/"
            },
            {
                name: "Firebase",
                icon: "/img/icons/Firebase.png",
                docURL: "https://firebase.google.com/"
            }
        ],
        slug: "am-peluqueros",
        hasGithub: true,
        webURL: null,
        status: "Beta Testing"
    },
    {
        title: "Conejos Ordoñez y Pons",
        description: "Página web creada para el criadero de conejos Ordoñez y Pons, Creada con NextJS y Firebase, permitiendo a los dueños cambiar las fotos de los conejos cuando lo deseen mediante una herramienta personalizada",
        author: "Lorenzo Garcia Garcia",
        imageURL: `/img/conejos-ordonez-pons.jpg`,
        technologies: [
            {
                name: "NextJS",
                icon: "/img/icons/NextJS.png",
                docURL: "https://nextjs.org/"
            },
            {
                name: "Firebase",
                icon: "/img/icons/Firebase.png",
                docURL: "https://firebase.google.com/"
            }

        ],
        slug: "conejos-ordonez-y-pons",
        webURL: "https://conejosordoñezypons.es",
        hasGithub: false,
        status: "Finalizado"
    },
    {
        title: "Nutrigest",
        description: "Nutrigest PRO es la versión actualizada de Nutrigest, mucho más profunda y profesional, pensada para ser multiplataforma, con un backend creado en SpringBoot y un frontend creado con NextJS para la versión web y React Native para su versión móvil.",
        author: "Lorenzo Garcia Garcia",
        imageURL: `/img/nutricion.jpg`,
        technologies: [
            {
                name: "SpringBoot",
                icon: "/img/icons/Spring Boot.png",
                docURL: "https://spring.io/projects/spring-boot"
            },
            {
                name: "NextJS",
                icon: "/img/icons/NextJS.png",
                docURL: "https://nextjs.org/"
            },
            {
                name: "React Native",
                icon: "/img/icons/React Native.png",
                docURL: "https://reactnative.dev/"
            },
            {
                name: "Supabase",
                icon: "/img/icons/supabase-icon.png",
                docURL: "https://supabase.com"
            }
        ],
        hasGithub: true,
        webURL: null,
        slug: "nutrigest-api",
        status: "En desarrollo"
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
                icon: "/img/icons/Kotlin.png",
                docURL: "https://kotlinlang.org/"
            },
            {
                name: "Firebase",
                icon: "/img/icons/Firebase.png",
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
        name: "React",
        webUrl: "https://es.react.dev",
        slug: "react",
        iconUrl: "/img/icons/React Native.png",
    },
    {
        name: "Next",
        webUrl: "https://nextjs.org/",
        slug: "nextjs",
        iconUrl: "/img/icons/NextJS.png",
    },
    {
        name: "React Native",
        webUrl: "https://reactnative.dev/",
        slug: "react-native",
        iconUrl: "/img/icons/React Native.png",
    },
    {
        name: "Angular",
        webUrl: "https://angular.dev",
        slug: "angular",
        iconUrl: "/img/icons/angular-icon.png",
    },
    {
        name: "Kotlin",
        webUrl: "https://kotlinlang.org/",
        slug: "kotlin",
        iconUrl: "/img/icons/Kotlin.png",
    },
    {
        name: "Java",
        webUrl: "https://dev.java",
        slug: "java",
        iconUrl: "/img/icons/java-icon.png",
    },
    {
        name: "Spring Boot",
        webUrl: "https://spring.io/projects/spring-boot",
        slug: "spring-boot",
        iconUrl: "/img/icons/Spring Boot.png",
    },
    {
        name: "PHP",
        webUrl: "https://www.php.net/docs.php",
        slug: "php",
        iconUrl: "/img/icons/php-icon.png",
    },
    {
        name: "Laravel",
        webUrl: "https://laravel.com",
        slug: "laravel",
        iconUrl: "/img/icons/laravel-icon.png",
    },

]