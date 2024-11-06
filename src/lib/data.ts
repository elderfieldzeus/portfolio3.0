import { PythonOriginal } from 'devicons-react';

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
        link: ""
    },
    {
        img: "cplusplus.svg",
        label: "C++",
        link: ""
    },
    {
        img: "tailwindcss.svg",
        label: "Tailwind CSS",
        link: ""
    },
    {
        img: "javascript.svg",
        label: "Javascript",
        link: ""
    },
    {
        img: "typescript.svg",
        label: "Typescript",
        link: ""
    },
    {
        img: "react.svg",
        label: "React JS",
        link: ""
    },
    {
        img: "firebase.svg",
        label: "Firebase",
        link: ""
    },
    {
        img: "supabase.svg",
        label: "Supabase",
        link: ""
    },
    {
        img: "git.svg",
        label: "Git",
        link: ""
    },
    {
        img: "nodedotjs.svg",
        label: "Node JS",
        link: ""
    }
]

export const CurrentlyLearning: React.ElementType = PythonOriginal;