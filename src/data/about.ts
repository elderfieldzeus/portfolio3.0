import { SiOpenai } from "react-icons/si";

export const CurrentlyLearning: React.ElementType = SiOpenai;

export interface ITechStack {
  img: string;
  label: string;
  link: string;
}

export interface AboutData {
  name: string;
  age: number;
  location: string;
  education: string;
  description1: string;
  description2: string;
}

export const aboutData: AboutData = {
  name: "Zeus Elderfield",
  age: 22,
  location: "Cebu, Philippines",
  education: "University of San Carlos",
  description1: `
     I'm currently exploring the world of Web & Mobile Development, Competitive Programming, Data Science, and AI/Machine Learning. I thrive on solving challenging problems and constantly expanding my skill set through side projects. Known for my adaptability, quick learning, and persistence, I enjoy tackling new challenges and finding creative solutions.
  `,
  description2: `
    Whether I'm coding an app, competing in programming contests, or diving into data, I'm driven by a desire to build, learn, and grow in everything I do. I'm always excited to take on new challenges and make a meaningful impact through innovative solutions. 
  `,
};

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
  {
    img: "aspnet.svg",
    label: "ASP.NET",
    link: "https://link.net",
  },
];

export const frontend: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Angular",
  "Astro",
  "Tailwind CSS",
  "Bootstrap",
  "Shadcn UI",
  "Mantine UI",
  "Axios",
  "Redux",
  "ESLint",
  "Prettier",
  "Vite",
];

export const backend: string[] = [
  "Spring Boot",
  "Golang",
  "ASP.NET",
  "Node.js",
  "Express",
  "NestJS",
  "PHP",
  "REST API",
  "GraphQL",
  "WebSocket",
  "Firebase",
  "Supabase",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Prisma",
  "Sequelize",
  "Hibernate",
  "JWT",
  "Swagger",
];

export const dsml: string[] = [
  "Python",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "Matplotlib",
  "Seaborn",
  "Plotly",
];

export const devopsAndTools: string[] = [
  "Apache",
  "Docker",
  "Github Actions",
  "Git",
  "GitHub",
  "VS Code",
  "Visual Studio",
  "IntelliJ IDEA",
  "XCode",
  "Postman",
  "Discord",
  "Teams",
  "Trello",
  "Clickup",
  "Figma",
  "Canva",
];
