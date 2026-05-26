import actor1 from "../assets/actores/actor1.png";
import actor2 from "../assets/actores/actor2.png";
import actor3 from "../assets/actores/actor3.png";
import actor4 from "../assets/actores/actor4.png";
import actor5 from "../assets/actores/actor5.png";
import actor6 from "../assets/actores/actor6.png";
import actor7 from "../assets/actores/actor7.png";
import actor8 from "../assets/actores/actor8.png";
import actor9 from "../assets/actores/actor9.png";
import actor10 from "../assets/actores/actor10.png";

import demo1 from "../assets/demos/demo1.mp3";
import demo2 from "../assets/demos/demo2.mp3";
import demo3 from "../assets/demos/demo3.mp3";
import demo4 from "../assets/demos/demo4.mp3";
import demo5 from "../assets/demos/demo5.mp3";
import demo6 from "../assets/demos/demo6.mp3";
import demo7 from "../assets/demos/demo7.mp3";
import demo8 from "../assets/demos/demo8.mp3";
import demo9 from "../assets/demos/demo9.mp3";
import demo10 from "../assets/demos/demo10.mp3";


import demo3_1 from "../assets/demos/demo3_1.mp3";
import character_image_3_2 from "../assets/actores/characters3/Frigidum.jpg";
import character_demo_3_2 from "../assets/actores/characters3/character3_2_demo.mp4";
import character_demo_3_3 from "../assets/actores/characters3/character3_3_demo.mp4";
import character_demo_3_4 from "../assets/actores/characters3/character3_4_demo.mp4";



const defaultBadges = [
    { label: "Comercial", icon: "mic" },
    { label: "Doblaje", icon: "film" },
    { label: "Narración", icon: "book" }
];

export const actors = [
    // Tony
    {
        id: 3,
        slug: "tony",
        name: "Antonio 'Tony' Arzuza",
        gender: "masculino",
        featured: false,

        profile: {
            shortBio: "Especialista en narración profunda y dramática.",
            fullBio: `
Soy Tony. Co-creador y Co-director de Sonido Hargoz. Locutor, actor de voz y doblaje con mas de 8 años de experiencia. ¡Bienvenidos!
      `,
            skills: ["Narración dramática"],
            awards: [],
            languages: ["Español"],
            badges: defaultBadges,
            characters: [
                {
                    name: "Audición Voz Narradora Andes",
                    project: "La Joya de los Andes Andoke",
                    image: "/",
                    demo: demo3_1
                },
                {
                    name: "Frigidum",
                    project: "Frailejón Ernesto Pérez y el acecho de las sombras siniestras",
                    image: character_image_3_2,
                    demo: character_demo_3_2
                },
                {
                    name: "90 minutos",
                    project: "Clasificatoria al mundial 2026",
                    demo: character_demo_3_3
                },
                {
                    name: "Uao Play",
                    project: "Promo Colonias",
                    image: '/',
                    demo: character_demo_3_4
                }
            ]
        },

        media: {
            image: actor3,
            demo: demo3,
            image_position: "middle",
            gallery: []
        },

        contact: {},
        social: {
            instagram: "",
            youtube: "",
            linkedin: "",
            website: ""
        },
        stats: {
            projects: 0,
            yearsExperience: 0
        }
    },

    // Samuel
    {
        id: 10,
        slug: "samuel-diaz-gomez",
        name: "Samuel Diaz Gomez",
        gender: "masculino",
        featured: true,

        profile: {
            shortBio: "Especialista en narración profunda y dramática.",
            fullBio: `Hola, soy Samuel Diaz Gómez, un joven amante del doblaje, enfocado en la narración profunda y dramática, en la interpretación y construcción de voz de personajes o narrativas para piezas audiovisuales y diversos formatos multimedia.`,
            skills: [
                "Narración dramática",
                "Locución comercial",
                "Voz institucional"
            ],
            awards: [],
            languages: ["Español"],
            badges: defaultBadges,
            characters: [
                
            ]
        },

        media: {
            image: actor10,
            demo: demo10,
            gallery: []
        },

        contact: {
            email: "",
            phone: "",
            website: "https://sonido-hargoz.vercel.app/profile/luka"
        },

        social: {
            instagram: "",
            youtube: "",
            linkedin: "",
            website: ""
        },

        stats: {
            projects: 0,
            yearsExperience: 0
        }
    },

    // Luka
    {
        id: 1,
        slug: "luka",
        name: "Luisana 'Luka' Otero",
        gender: "femenino",
        featured: true,

        profile: {
            shortBio: "Especialista en narración profunda y dramática.",
            fullBio: `
Especialista en narración profunda y dramática con experiencia en interpretación vocal para piezas audiovisuales, institucionales y comerciales.
      `,
            skills: [
                "Narración dramática",
                "Locución comercial",
                "Voz institucional"
            ],
            awards: [],
            languages: ["Español"],
            badges: defaultBadges,
            characters: [
                
            ]
        },

        media: {
            image: actor1,
            demo: demo1,
            gallery: []
        },

        contact: {
            email: "",
            phone: "",
            website: "https://sonido-hargoz.vercel.app/profile/luka"
        },

        social: {
            instagram: "",
            youtube: "",
            linkedin: ""
        },

        stats: {
            projects: 0,
            yearsExperience: 0
        }
    },

    // Santiago
    {
        id: 2,
        slug: "santiago-zambrano",
        name: "Santiago Zambrano",
        gender: "masculino",
        featured: true,

        profile: {
            shortBio: "Comunicador social, periodista y locutor profesional.",
            fullBio: `
Soy Santiago Zambrano Rivera, Comunicador Social y Periodista con especialización en Comunicación y Periodismo Digital.

Ganador del primer lugar en "Radio del Nuevo Siglo 2023" en Montevideo Uruguay en la categoría "Pódcast de ficción".

Experiencia en producción audiovisual, radio, televisión y ecosistemas digitales.
      `,
            skills: [
                "Locución profesional",
                "Producción audiovisual",
                "Podcasting interactivo",
                "Español neutro colombiano"
            ],
            awards: [
                "Radio del Nuevo Siglo 2023 - 1er lugar",
                "Festival Interno de La Canción 2024 - 1er lugar",
                "ASCUN Occidente 2024 - 1er lugar"
            ],
            languages: ["Español"],
            badges: defaultBadges,
            characters: [
                
            ]
        },

        media: {
            image: actor2,
            demo: demo2,
            gallery: []
        },

        contact: {
            email: "",
            phone: "",
            website: ""
        },

        social: {
            instagram: "",
            youtube: "",
            linkedin: ""
        },

        stats: {
            projects: 12,
            yearsExperience: 4
        }
    },

    // Valentina
    {
        id: 4,
        slug: "valentina-toro",
        name: "Valentina Toro",
        gender: "femenino",
        featured: false,

        profile: {
            shortBio: "Especialista en narración profunda y dramática.",
            fullBio: `
Especialista en narración profunda y dramática con experiencia en interpretación vocal para diversos formatos multimedia.
      `,
            skills: ["Narración dramática"],
            awards: [],
            languages: ["Español"],
            badges: defaultBadges,
            characters: [

            ]
        },

        media: {
            image: actor4,
            image_position: "top",
            demo: demo4,
            gallery: []
        },

        contact: {},
        social: {},
        stats: {
            projects: 0,
            yearsExperience: 0
        }
    },

    // Nicolás
    {
        id: 5,
        slug: "nicolas-barrera",
        name: "Nicolás Barrera",
        gender: "masculino",
        featured: false,

        profile: {
            shortBio: "Especialista en narración profunda y dramática.",
            fullBio: `
Especialista en narración profunda y dramática enfocado en proyectos audiovisuales y narrativas sonoras.
      `,
            skills: ["Narración dramática"],
            awards: [],
            languages: ["Español"],
            badges: defaultBadges,
            characters: [
                {
                    
                }
            ]
        },

        media: {
            image: actor5,
            image_position: "middle",
            demo: demo5,
            gallery: []
        },

        contact: {},
        social: {},
        stats: {
            projects: 0,
            yearsExperience: 0
        }
    },

    // Ludobina 'Lula' León
    {
        id: 6,
        slug: "lula",
        name: "Ludobina 'Lula' León",
        gender: "femenino",
        featured: false,

        profile: {
            shortBio: "Especialista en narración profunda y dramática.",
            fullBio: `
Especialista en narración profunda y dramática enfocado en proyectos audiovisuales y narrativas sonoras.
      `,
            skills: ["Narración dramática"],
            awards: [],
            languages: ["Español"],
            badges: defaultBadges,
            characters: [
                {
                    
                }
            ]
        },

        media: {
            image: actor6,
            image_position: "middle",
            demo: demo6,
            gallery: []
        },

        contact: {},
        social: {},
        stats: {
            projects: 0,
            yearsExperience: 0
        }
    },

    // Carlos Valero
    {
        id: 7,
        slug: "carlos-valero",
        name: "Carlos Valero",
        gender: "masculino",
        featured: false,

        profile: {
            shortBio: "Especialista en narración profunda y dramática.",
            fullBio: `
Especialista en narración profunda y dramática enfocado en proyectos audiovisuales y narrativas sonoras.
      `,
            skills: ["Narración dramática"],
            awards: [],
            languages: ["Español"],
            badges: defaultBadges,
            characters: [
                {
                    name: "Comandante Arthus",
                    project: "Serie Sci-Fi: Eclipse",
                    image: "/characters/arthus.jpg",
                    demo: "/audios/arthus.mp3"
                }
            ]
        },

        media: {
            image: actor7,
            image_position: "bottom",
            demo: demo7,
            gallery: []
        },

        contact: {},
        social: {},
        stats: {
            projects: 0,
            yearsExperience: 0
        }
    },

    // Jaime Lévano
    {
        id: 8,
        slug: "jaime-levano",
        name: "Jaime Lévano",
        gender: "masculino",
        featured: false,

        profile: {
            shortBio: "Especialista en narración profunda y dramática.",
            fullBio: `
            Soy Jaime Lévano, Licenciado en Ciencias de la Comunicación, especialista en doblaje de voz y locución comercial. Tengo experiencia en diversos proyectos de voz, interpretando distintos estilos y registros con naturalidad. Destaco por mi versatilidad, capacidad actoral y habilidad para adaptar mi voz a diferentes personajes y necesidades comunicativas.
      `,
            skills: [
                "Doblaje de voz",
                "Locución comercial",
                "Narración",
                "Voz institucional",
                "Español neutro"
            ],
            awards: [],
            languages: ["Español"],
            badges: defaultBadges,
            characters: [
                
            ]
        },

        media: {
            image: actor8,
            image_position: "middle",
            demo: demo8,
            gallery: []
        },

        contact: {},
        social: {},
        stats: {
            projects: 0,
            yearsExperience: 0
        }
    },

    // Levet
    {
        id: 9,
        slug: "levet",
        name: "Leslie 'Levet' Esquivias",
        gender: "femenino",
        featured: false,

        profile: {
            shortBio: "Especialista en narración profunda y dramática.",
            fullBio: `
Especialista en narración profunda y dramática con capacidad interpretativa para proyectos audiovisuales y comerciales.
      `,
            skills: ["Narración dramática"],
            awards: [],
            languages: ["Español"],
            badges: defaultBadges,
            characters: [
                
            ]
        },

        media: {
            image: actor9,
            image_position: "middle",
            demo: demo9,
            gallery: []
        },

        contact: {},
        social: {},
        stats: {
            projects: 0,
            yearsExperience: 0
        }
    },

];