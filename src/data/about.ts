import { JavaOriginal } from "devicons-react";

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
    link: "https://www.learn-c.org/",
  },
  {
    img: "cplusplus.svg",
    label: "C++",
    link: "https://cplusplus.com/",
  },
  {
    img: "tailwindcss.svg",
    label: "Tailwind CSS",
    link: "https://tailwindcss.com/",
  },
  {
    img: "javascript.svg",
    label: "Javascript",
    link: "https://www.javascript.com/",
  },
  {
    img: "typescript.svg",
    label: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    img: "react.svg",
    label: "React",
    link: "https://react.dev/",
  },
  {
    img: "firebase.svg",
    label: "Firebase",
    link: "https://firebase.google.com/",
  },
  {
    img: "supabase.svg",
    label: "Supabase",
    link: "https://supabase.com/",
  },
  {
    img: "git.svg",
    label: "Git",
    link: "https://git-scm.com/",
  },
  {
    img: "nodedotjs.svg",
    label: "Node.js",
    link: "https://nodejs.org/en",
  },
  {
    img: "php.svg",
    label: "PHP",
    link: "https://www.php.net/",
  },
  {
    img: "python.svg",
    label: "Python",
    link: "https://www.python.org/",
  },
  {
    img: "nextdotjs.svg",
    label: "Next.js",
    link: "https://nextjs.org",
  },
  {
    img: "java.svg",
    label: "Java",
    link: "https://www.java.com/en/",
  },
  {
    img: "springboot.svg",
    label: "Spring Boot",
    link: "https://spring.io/projects/spring-boot",
  },
  {
    img: "nestjs.svg",
    label: "NestJS",
    link: "https://nestjs.com/",
  },
];
