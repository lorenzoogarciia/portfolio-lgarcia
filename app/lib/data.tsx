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
        company: "Sycket Technologies",
        position: "Desarrollador Fullstack",
        date: "Septiembre 2024 - Actualidad",
        description: "Empresa especializada en el producto Turbopos, un ecosistema fascinante pensado para todo tipo de negocios de hostelería, mis principales funciones aquí son el mantenimiento y actualización de las aplicaciones para nuestro ecosistema, creado completamente en base a Kotlin"
        + " y desarrollar apps personalizadas para nuestros clientes, ya sea para nuestros kioscos de autoservicio como nuestras web apps para clientes creadas en Flutter."
        + " Alguna que otra vez me ha tocado mantener la API de estás últimas soluciones, ya que su backend creado en Laravel también necesita alguna que otra mejora de vez en cuando."
    },
    {
        id: 3,
        company: "Proxya (Actualmente Ayesa)",
        position: "Desarrollador Fullstack",
        date: "Marzo 2024 - Junio 2024",
        description: "Mi primer empleo como programador (prácticas), en el que tuve la oportunidad de trabajar en un proyecto completamente nuevo para mi, PHP puro en el backend, HTML, CSS y algo de JS en el frontend."
        + " Puedo decir, que junto a mi experiencia en Sycket, aquí fue donde más aprendí, ya que me enfrentaba a un lenguaje completamente nuevo, en un entorno de trabajo completamente diferente al que acostumbraba."
        + " Siempre agradeceré a los compañeros que tuve allí, que siempre me apoyaron y me enseñaron todo lo que sabían asumiendo mi rol como becario, y haciéndome mejor profesional."
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
                icon: "/img/icons/react-native.png",
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
                icon: "/img/icons/react-native.png",
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
        name: "Javascript",
        webUrl: "https://developer.mozilla.org/es/docs/Web/JavaScript",
        slug: "javascript",
        iconUrl: "/img/icons/javascript-icon.png",
    },
    {
        name: "React",
        webUrl: "https://es.react.dev",
        slug: "react",
        iconUrl: "/img/icons/react-icon.png",
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
        iconUrl: "/img/icons/react-native.png",
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
    {
        name: "Swift",
        webUrl: "https://swift.org",
        slug: "swift",
        iconUrl: "/img/icons/swift-icon.png",
    },
    {
        name: "Firebase",
        webUrl: "https://firebase.google.com/",
        slug: "firebase",
        iconUrl: "/img/icons/Firebase.png",
    }

]