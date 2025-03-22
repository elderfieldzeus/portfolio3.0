import { JavaOriginal } from 'devicons-react';

export const CurrentlyLearning: React.ElementType = JavaOriginal;

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
    },
    {
        img: "nextdotjs.svg",
        label: "Next JS",
        link: "https://nextjs.org"
    },
    {
        img: "java.svg",
        label: "Java",
        link: "https://www.java.com/en/"
    }
]

export enum ProjectCategoryEnum {
    ALL_CATEGORIES = "All Categories",
    WEB_DEVELOPMENT = "Web Development",
    DATA_SCIENCE = "Data Science"
}

export const CATEGORIES: ProjectCategoryEnum[] = [
    ProjectCategoryEnum.ALL_CATEGORIES,
    ProjectCategoryEnum.WEB_DEVELOPMENT,
    ProjectCategoryEnum.DATA_SCIENCE,
]

export interface IProject {
    img: string;
    category: ProjectCategoryEnum;
    title: string;
    description: string;
    github: string;
    live_demo: string;
    technologies: string[];
    position?: string;
}

export const projects: IProject[] = [
    {
        img: "twerkout.png",
        category: ProjectCategoryEnum.WEB_DEVELOPMENT,
        title: "Twerkout",
        description: `
        Twerkout is a mobile-friendly site designed to help you track and visualize your workout progress.
        `,
        github: "https://github.com/elderfieldzeus/twerkout",
        live_demo: "https://twerkout.vercel.app",
        technologies: ["Typescript", "React JS", "Tailwind CSS", "Firebase"],
        position: "-mt-1"
    },
    {
        img: "vintage-royale.png",
        category: ProjectCategoryEnum.WEB_DEVELOPMENT,
        title: "Vintage Royale",
        description: `
        Vintage Royale's mobile-based product management system and tailored to enhance client-side functionality.
        `,
        github: "https://github.com/elderfieldzeus/vintage-royale",
        live_demo: "https://vintage-royale.vercel.app",
        technologies: ["Typescript", "React JS", "Tailwind CSS", "Supabase"],
        position: "-mt-2"
    },
    {
        img: "foamfusion.png",
        category: ProjectCategoryEnum.WEB_DEVELOPMENT,
        title: "Foamfusion",
        description: `
        A full-stack product management system for Foamfusion Soaps, enhancing end-to-end operations.
        `,
        github: "https://github.com/elderfieldzeus/foamfusion",
        live_demo: "http://foamfusion.infinityfreeapp.com/",
        technologies: ["PHP", "Tailwind CSS", "MySQL"],
        position: "-mt-2"
    },
    {
        img: "basher.png",
        category: ProjectCategoryEnum.WEB_DEVELOPMENT,
        title: "Basher",
        description: `
        An anonymous, forum-based web application for open user discussions.
        `,
        github: "https://github.com/DestinEcarma/basher-frontend",
        live_demo: "https://basher-ph-dpbf.shuttle.app/",
        technologies: ["Typescript", "React JS", "Tailwind CSS", "Axios", "GraphQL"],
        position: "-mt-2"
    },
    {
        img: "datacamp.png",
        category: ProjectCategoryEnum.DATA_SCIENCE,
        title: "Datacamp Projects",
        description: `
        Compilation of all my Data-related projects from my DataCamp scholarship. 
        `,
        github: "https://github.com/elderfieldzeus/datacamp",
        live_demo: "https://www.datacamp.com/portfolio/elderfieldzeus24",
        technologies: ["Python", "SQL"]
    },
    {
        img: "house-predict.jpg",
        category: ProjectCategoryEnum.DATA_SCIENCE,
        title: "House Price Prediction",
        description: `
        Utilizing Linear Regression to predict House Prices in the Philippines.
        `,
        github: "https://github.com/elderfieldzeus/ph-house-price-prediction",
        live_demo: "https://github.com/elderfieldzeus/ph-house-price-prediction",
        technologies: ["Python", "Scikit-Learn", "Matplotlib"]
    }
]