export enum ProjectCategoryEnum {
  ALL_CATEGORIES = "All Categories",
  WEB_DEVELOPMENT = "Web Development",
  DATA_SCIENCE = "Data Science",
}

export interface IProject {
  img: string;
  category: ProjectCategoryEnum;
  title: string;
  main_description: string;
  full_description?: string;
  github: string;
  live_demo: string;
  technologies: string[];
  position?: string;
  isFeatured?: boolean;
}

export const projects: IProject[] = [
  {
    img: "gainz.png",
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Gainz",
    main_description: `
        Gainz is a simple, powerful workout tracker to help you crush your fitness goals.
        `,
    github: "https://github.com/elderfieldzeus/gainz-api",
    live_demo: "https://gainz-web.vercel.app",
    technologies: ["Spring Boot", "Spring Security", "MySQL", "Hibernate"],
    position: "",
    isFeatured: true,
  },
  {
    img: "hermes.png",
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Hermes",
    main_description: `
        Project Hermes is a queue system for DCISM students, by DCISM students.
        `,
    github: "https://github.com/usc-cisco/hermes-site",
    live_demo: "https://queue.dcism.org",
    technologies: [
      "Typescript",
      "React",
      "Tailwind CSS",
      "Mantine UI",
      "Axios",
    ],
    position: "-mt-1",
    isFeatured: true,
  },
  {
    img: "twerkout.png",
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Twerkout",
    main_description: `
        Twerkout is a mobile-friendly site designed to help you track and visualize your workout progress.
        `,
    github: "https://github.com/elderfieldzeus/twerkout",
    live_demo: "https://twerkout.vercel.app",
    technologies: ["Typescript", "React", "Tailwind CSS", "Firebase"],
    position: "-mt-1",
    isFeatured: true,
  },
  {
    img: "vintage-royale.png",
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Vintage Royale",
    main_description: `
        Vintage Royale's mobile-based product management system and tailored to enhance client-side functionality.
        `,
    github: "https://github.com/elderfieldzeus/vintage-royale",
    live_demo: "https://vintage-royale.vercel.app",
    technologies: ["Typescript", "React", "Tailwind CSS", "Supabase"],
    position: "-mt-2",
    isFeatured: true,
  },
  {
    img: "foamfusion.png",
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Foamfusion",
    main_description: `
        A full-stack product management system for Foamfusion Soaps, enhancing end-to-end operations.
        `,
    github: "https://github.com/elderfieldzeus/foamfusion",
    live_demo: "https://foamfusion.dcism.org/",
    technologies: ["PHP", "Tailwind CSS", "MySQL"],
    position: "-mt-2",
  },
  {
    img: "basher.png",
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Basher",
    main_description: `
        An anonymous, forum-based web application for open user discussions.
        `,
    github: "https://github.com/DestinEcarma/basher-frontend",
    live_demo: "https://basher-ph-dpbf.shuttle.app/",
    technologies: ["Typescript", "React", "Tailwind CSS", "Axios", "GraphQL"],
    position: "-mt-2",
  },
  {
    img: "philnits-mock-exam.png",
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Philnits Mock Exam",
    main_description: `
        The PhilNITS Mock Exam helps students prepare for the upcoming PhilNITS FE Morning Exam by simulating the actual time limit and using real past exam questions.
        `,
    github: "https://github.com/elderfieldzeus/philnits-mock-exam",
    live_demo: "https://philnits.dcism.org/",
    technologies: ["Next.js", "Typescript", "Tailwind CSS"],
    position: "",
  },
  {
    img: "schedaddle.png",
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Schedaddle",
    main_description: `
        Schedaddle is a web app that generates and visualizes class schedules based on offered schedules.
        `,
    github: "https://github.com/elderfieldzeus/schedaddle",
    live_demo: "https://schedaddle-react.vercel.app/",
    technologies: ["Typescript", "React", "Tailwind CSS"],
    position: "",
  },
  {
    img: "datacamp.png",
    category: ProjectCategoryEnum.DATA_SCIENCE,
    title: "Datacamp Projects",
    main_description: `
        Compilation of all my Data-related projects from my DataCamp scholarship. 
        `,
    github: "https://github.com/elderfieldzeus/datacamp",
    live_demo: "https://www.datacamp.com/portfolio/elderfieldzeus24",
    technologies: ["Python", "SQL"],
  },
  {
    img: "house-predict.jpg",
    category: ProjectCategoryEnum.DATA_SCIENCE,
    title: "House Price Prediction",
    main_description: `
        Utilizing Linear Regression to predict House Prices in the Philippines.
        `,
    github: "https://github.com/elderfieldzeus/ph-house-price-prediction",
    live_demo: "https://github.com/elderfieldzeus/ph-house-price-prediction",
    technologies: ["Python", "Scikit-Learn", "Matplotlib"],
  },
];
