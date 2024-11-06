import { PythonOriginal } from 'devicons-react';

export const CurrentlyLearning: React.ElementType = PythonOriginal;

export interface ITechStack {
    img: string;
    label: string;
    link: string;
}

// svg from https://simpleicons.org/
export const techStacks = [
    {
        img: "c.svg",
        label: "C",
        link: "https://www.learn-c.org/"
    },
    {
        img: "cplusplus.svg",
        label: "C++",
        link: "https://cplusplus.com/"
    },
    {
        img: "tailwindcss.svg",
        label: "Tailwind CSS",
        link: "https://tailwindcss.com/"
    },
    {
        img: "javascript.svg",
        label: "Javascript",
        link: "https://www.javascript.com/"
    },
    {
        img: "typescript.svg",
        label: "Typescript",
        link: "https://www.typescriptlang.org/"
    },
    {
        img: "react.svg",
        label: "React JS",
        link: "https://react.dev/"
    },
    {
        img: "firebase.svg",
        label: "Firebase",
        link: "https://firebase.google.com/"
    },
    {
        img: "supabase.svg",
        label: "Supabase",
        link: "https://supabase.com/"
    },
    {
        img: "git.svg",
        label: "Git",
        link: "https://git-scm.com/"
    },
    {
        img: "nodedotjs.svg",
        label: "Node JS",
        link: "https://nodejs.org/en"
    },
    {
        img: "php.svg",
        label: "PHP",
        link: "https://www.php.net/"
    },
    {
        img: "python.svg",
        label: "Python",
        link: "https://www.python.org/"
    }
]



export interface IProject {
    img: string;
    title: string;
    description: string;
    github: string;
    live_demo: string;
    technologies: string[];
    position?: string;
}

export const projects: IProject[] = [
    {
        img: "/images/me_aha.jpeg",
        title: "Twerkout",
        description: `
        This is the best project I have ever done.
        `,
        github: "https://github.com/elderfieldzeus/twerkout",
        live_demo: "https://twerkout.vercel.app",
        technologies: ["Typescript", "React JS", "Tailwind CSS", "Firebase"],
        position: "-mt-48"
    },
    {
        img: "/images/me_aha.jpeg",
        title: "Vintage Royale",
        description: `
        This is the best project I have ever done.
        `,
        github: "https://github.com/elderfieldzeus/vintage-royale",
        live_demo: "https://vintage-royale.vercel.app",
        technologies: ["Typescript", "React JS", "Tailwind CSS", "Supabase"],
        position: "-mt-48"
    },
    {
        img: "/images/me_aha.jpeg",
        title: "Foamfusion",
        description: `
        This is the best project I have ever done.
        `,
        github: "https://github.com/elderfieldzeus/foamfusion",
        live_demo: "http://foamfusion.infinityfreeapp.com/",
        technologies: ["PHP", "Tailwind CSS", "MySQL"],
        position: "-mt-48"
    },
    {
        img: "/images/me_aha.jpeg",
        title: "Basher",
        description: `
        This is the best project I have ever done.
        `,
        github: "https://github.com/elderfieldzeus/basher",
        live_demo: "",
        technologies: ["Typescript", "React JS", "Tailwind CSS", "Axios", "GraphQL"],
        position: "-mt-48"
    }
]