import actor1 from "../assets/actores/actor1.png";
import actor2 from "../assets/actores/actor2.png";
import actor3 from "../assets/actores/actor3.png";
import actor4 from "../assets/actores/actor4.png";
import actor5 from "../assets/actores/actor5.png";

import demo1 from "../assets/demos/demo1.mp3";
import demo2 from "../assets/demos/demo2.mp3";
import demo3 from "../assets/demos/demo3.mp3";
import demo4 from "../assets/demos/demo4.mp3";
import demo5 from "../assets/demos/demo5.mp3";

const defaultBadges = [
    { label: "Comercial", icon: "mic" },
    { label: "Doblaje", icon: "film" },
    { label: "Narración", icon: "book" }
];

export const actors = [
    {
        id: 1,
        slug: "luka",
        name: "Luisana 'Luka' Otero",
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
                {
                    name: "Comandante Arthus",
                    project: "Serie Sci-Fi: Eclipse",
                    image: "/characters/arthus.jpg",
                    demo: "/audios/arthus.mp3"
                }
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

    {
        id: 2,
        slug: "santiago-zambrano",
        name: "Santiago Zambrano",
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
                {
                    name: "Comandante Arthus",
                    project: "Serie Sci-Fi: Eclipse",
                    image: "/characters/arthus.jpg",
                    demo: "/audios/arthus.mp3"
                }
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

    {
        id: 3,
        slug: "antonio-tony-arzuza",
        name: "Antonio 'Tony' Arzuza",
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
                {
                    name: "Comandante Arthus",
                    project: "Serie Sci-Fi: Eclipse",
                    image: "/characters/arthus.jpg",
                    demo: "/audios/arthus.mp3"
                }
            ]
        },

        media: {
            image: actor3,
            demo: demo3,
            gallery: []
        },

        contact: {},
        social: {},
        stats: {
            projects: 0,
            yearsExperience: 0
        }
    },

    {
        id: 4,
        slug: "valentina-toro",
        name: "Valentina Toro",
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
                {
                    name: "Comandante Arthus",
                    project: "Serie Sci-Fi: Eclipse",
                    image: "/characters/arthus.jpg",
                    demo: "/audios/arthus.mp3"
                }
            ]
        },

        media: {
            image: actor4,
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

    {
        id: 5,
        slug: "nicolas-barrera",
        name: "Nicolás Barrera",
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
            image: actor5,
            demo: demo5,
            gallery: []
        },

        contact: {},
        social: {},
        stats: {
            projects: 0,
            yearsExperience: 0
        }
    }
];