export enum ProjectCategoryEnum {
  ALL_CATEGORIES = "All Categories",
  WEB_DEVELOPMENT = "Web Development",
  DATA_SCIENCE = "Data Science",
}

export interface IProject {
  imgs: string[];
  category: ProjectCategoryEnum;
  title: string;
  main_description: string;
  full_description?: string;
  long_description?: string;
  github: string;
  live_demo: string;
  technologies: string[];
  position?: string;
  featureIndex?: number;
}

export const projects: IProject[] = [
  {
    imgs: ["ciscode.jpg"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Ciscode",
    main_description: `
        Project Ciscode is a student-built coding platform by USC-CISCO that offers algorithm challenges to help students practice, improve, and master their problem-solving skills.
    `,
    long_description: `Project Ciscode is a fullstack coding platform developed by USC-CISCO to provide students with structured algorithm challenges across multiple difficulty levels. The platform is designed to sharpen problem-solving skills in a competitive yet supportive learning environment.

    Students can browse, search, and filter coding problems ranging from beginner-friendly to advanced levels. The system allows users to track their progress, monitor submitted solutions, and manage their accounts through built-in authentication features.

    Built entirely with Next.js as a fullstack framework (handling both frontend and API backend), Ciscode integrates MySQL as its database and Sequelize as its ORM for efficient data management. The application delivers a fast and modern UI experience while maintaining scalable backend functionality.

    This project is intended for educational purposes under USC-CISCO and welcomes contributions from students and developers.
    
    To test out the site, you can use a test account with the following credentials:
    Username: testuser
    Password: testpassword
    `,
    github: "https://github.com/usc-cisco/ciscode",
    live_demo: "https://ciscode.dcism.org",
    technologies: ["Next.js", "MySQL", "Sequelize", "Node.js"],
    position: "-mt-5",
    featureIndex: 1,
  },
  {
    imgs: ["gainz.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Gainz API",
    main_description: `
    Gainz API is a secure, extensible Workout Tracker REST API built with Java 21 and Spring Boot 3, featuring JWT authentication.
  `,
    long_description: `
Gainz API is a secure and extensible Workout Tracker REST API built using Java 21 and Spring Boot 3. It enables users to register, authenticate via JWT, and manage their workout sessions through a clean RESTful architecture.

The API supports user registration and login, workout CRUD operations, and secure endpoint access using Spring Security with JWT authentication. Designed with scalability and maintainability in mind, the project follows a modular architecture separating configuration, controllers, services, repositories, DTOs, and models.

The system uses Spring Data JPA (Hibernate) for database interaction and supports MySQL in production, with planned support for PostgreSQL and MariaDB. Environment variables are managed using Dotenv, and OpenAPI/Swagger UI is integrated for API documentation and testing.

Although the project is no longer actively maintained, it serves as a strong foundation for secure backend API development using modern Spring Boot practices.
  `,
    github: "https://github.com/elderfieldzeus/gainz-api",
    live_demo: "",
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security (JWT)",
      "Spring Data JPA (Hibernate)",
      "MySQL",
      "Maven",
      "Lombok",
      "OpenAPI/Swagger",
      "Dotenv",
    ],
    position: "",
    featureIndex: 4,
  },
  {
    imgs: ["hermes.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Hermes",
    main_description: `
    Hermes is an enrollment queue management system built for DCISM students to streamline the enrollment process.
  `,
    long_description: `
Hermes is a web-based enrollment queue management system designed specifically for DCISM students. The platform streamlines the enrollment process by allowing students to join a virtual queue for advising, subject approval, and enrollment-related concerns.

Students can enter the queue remotely, monitor their real-time position, and receive updates on estimated wait times. This reduces physical crowding, improves scheduling efficiency, and provides better visibility into the enrollment flow.

Administrators and faculty can manage the queue through a dedicated interface, monitor active students, process requests in order, and maintain an organized enrollment workflow.

Built with React and Mantine UI, Hermes delivers a responsive and user-friendly interface. The backend, powered by ElysiaJS, handles real-time updates efficiently, while SQLite ensures lightweight and reliable data storage.
  `,
    github: "https://github.com/usc-cisco/hermes-site",
    live_demo: "https://queue.dcism.org",
    technologies: ["React", "Mantine UI", "ElysiaJS", "SQLite"],
    position: "-mt-1",
    featureIndex: 2,
  },
  {
    imgs: ["swipeats.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "SwipEats",
    main_description: `
    SwipEats is a mobile-first web app that helps groups decide where to eat by swiping and voting on nearby restaurants.
  `,
    long_description: `
SwipEats is a mobile-first web application that allows groups to swipe and vote on nearby restaurants — inspired by the Tinder swipe experience. It solves the common problem of group indecision by turning restaurant selection into a fast, collaborative, and interactive process.

Users can create or join group sessions, discover location-based restaurant options, and swipe right or left to vote. Votes are synchronized in real time using WebSockets, allowing all members to instantly see updates and final results once a match is found.

The frontend is built with Angular and TailwindCSS, optimized for a smooth mobile experience. The backend is written in Go, using Gorilla WebSocket for real-time communication alongside REST endpoints for session and restaurant management. The project follows a clean separation between client and server, with dedicated documentation covering architecture, API references, and system diagrams.

The application is deployed using Apache for the backend and static hosting for the Angular frontend. While the project is no longer maintained, it remains a strong example of real-time system design, WebSocket implementation, and full-stack architecture using Go and Angular.
  `,
    github: "https://github.com/SwipEats/SwipEats",
    live_demo: "https://swipeats.dcism.org",
    technologies: [
      "Angular",
      "TailwindCSS",
      "Go",
      "REST API",
      "WebSockets",
      "Apache",
    ],
    position: "-mt-1",
    featureIndex: 3,
  },
  {
    imgs: ["skillstacker.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "SkillStacker",
    main_description: `
    SkillStacker is an admin-side training management system built in C# for managing users, trainings, and categories.
  `,
    long_description: `
SkillStacker is a C# web application developed for the Alliance Software Inc. Summer Bridge Program. It serves as the admin-side interface of a knowledge and training platform, enabling administrators to manage users, training categories, and training content efficiently.

The system supports full CRUD (Create, Read, Update, Delete) functionality for user accounts, training categories, trainings, and topics. It includes authentication features such as login and forgot/change password, along with master screens for managing structured training data. Administrators can add, edit, delete, search, view, and rate trainings within the system.

Built using .NET 6.0 and Razor Pages, the application follows a clean server-rendered architecture. Entity Framework Core handles database interactions, while SQL Server (managed through SQL Server Management Studio) stores relational data. Tailwind CSS is used for responsive and modern UI styling.

This project focuses strictly on the admin-side implementation based on provided functional specifications and does not include the public-facing learner interface.
  `,
    github: "",
    live_demo: "",
    technologies: [
      ".NET 6.0",
      "C#",
      "Razor Pages",
      "Entity Framework Core",
      "SQL Server",
      "Tailwind CSS",
    ],
    position: "-mt-11",
  },
  {
    imgs: ["twerkout.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Twerkout",
    main_description: `
    Twerkout is a mobile-first workout tracker built to log sessions, monitor progress, and visualize gym performance.
  `,
    long_description: `
Twerkout is a mobile-first web application designed for logging and tracking workout progress. Built around my personal gym workflow, the platform focuses on simplicity, speed, and visual feedback to make tracking performance effortless.

Users can create workout routines, log exercises with sets, reps, and weights, and monitor strength progression over time. The app provides clear workout history tracking and structured logging to help users stay consistent and goal-oriented.

The frontend is built using TypeScript, React (TSX), and Vite, providing a fast and type-safe development experience. Tailwind CSS powers a responsive, mobile-optimized UI with a playful, cartoony aesthetic inspired by a twerking chicken mascot. Firebase handles authentication, real-time data synchronization, and cloud storage, ensuring secure and accessible workout data.

Twerkout is open source and available under the MIT License.
  `,
    github: "https://github.com/elderfieldzeus/twerkout",
    live_demo: "https://twerkout.zoos.dev",
    technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "Firebase"],
    position: "-mt-1",
  },
  {
    imgs: ["vintage-royale.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Vintage Royale",
    main_description: `
        Vintage Royale's mobile-based product management system and tailored to enhance client-side functionality.
        `,
    long_description: `Vintage Royale is a mobile-based product management system tailored to enhance client-side functionality for a vintage retail business. This comprehensive platform streamlines inventory management, order processing, and customer interactions.

The system features an intuitive product catalog with high-quality images, detailed descriptions, and real-time inventory tracking. Customers can browse products, add items to cart, and complete purchases seamlessly. The admin dashboard provides tools for inventory management, order fulfillment, sales analytics, and customer relationship management.

Built with TypeScript and React, the application delivers a fast, responsive user experience optimized for mobile devices. Tailwind CSS ensures a beautiful, consistent design throughout the platform. Supabase integration provides real-time database updates, secure authentication, file storage for product images, and efficient data management. The platform has significantly improved operational efficiency and customer satisfaction.`,
    github: "https://github.com/elderfieldzeus/vintage-royale",
    live_demo: "https://vintage-royale.zoos.dev",
    technologies: ["Typescript", "React", "Tailwind CSS", "Supabase"],
    position: "-mt-2",
  },
  {
    imgs: ["foamfusion.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Foamfusion",
    main_description: `
        A full-stack product management system for Foamfusion Soaps, enhancing end-to-end operations.
        `,
    long_description: `Foamfusion is a full-stack product management system designed specifically for Foamfusion Soaps, enhancing end-to-end business operations. This comprehensive platform manages the entire product lifecycle from inventory to sales.

The system includes features for product catalog management, inventory tracking, order processing, customer management, and sales reporting. Administrators can add products with detailed specifications, manage stock levels, process orders, and generate comprehensive sales reports. The platform provides a seamless experience for both customers browsing products and administrators managing the business.

Built with PHP for server-side logic, the application provides robust backend functionality with secure data handling. Tailwind CSS creates a modern, responsive interface that works beautifully on all devices. MySQL database efficiently manages product information, inventory data, orders, and customer records. The platform has streamlined operations and improved overall business efficiency.`,
    github: "https://github.com/elderfieldzeus/foamfusion",
    live_demo: "https://foamfusion.dcism.org/",
    technologies: ["PHP", "Tailwind CSS", "MySQL"],
    position: "-mt-2",
  },
  {
    imgs: ["basher.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Basher",
    main_description: `
        An anonymous, forum-based web application for open user discussions.
        `,
    long_description: `Basher is an anonymous, forum-based web application designed for open user discussions. This platform provides a safe space for users to express their thoughts, share ideas, and engage in meaningful conversations without revealing their identity.

The application features threaded discussions, upvote/downvote systems, topic categorization, and real-time updates. Users can create posts, comment on discussions, follow topics of interest, and discover trending conversations. The anonymous nature encourages honest dialogue while maintaining community guidelines through moderation tools.

Built with TypeScript and React, Basher provides a modern, interactive user interface with real-time updates. Tailwind CSS ensures a clean, responsive design that works seamlessly across devices. The application uses Axios for HTTP requests and GraphQL for efficient data fetching, allowing for flexible queries and optimized performance. The platform has created a vibrant community of engaged users.`,
    github: "https://github.com/DestinEcarma/basher-frontend",
    live_demo: "https://basher-ph-dpbf.shuttle.app/",
    technologies: ["Typescript", "React", "Tailwind CSS", "Axios", "GraphQL"],
    position: "-mt-2",
  },
  {
    imgs: ["philnits-mock-exam.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Philnits Mock Exam",
    main_description: `
        The PhilNITS Mock Exam helps students prepare for the upcoming PhilNITS FE Morning Exam by simulating the actual time limit and using real past exam questions.
        `,
    long_description: `The PhilNITS Mock Exam is a comprehensive preparation tool designed to help students prepare for the upcoming PhilNITS FE Morning Exam. This application simulates the actual exam environment by using real past exam questions and enforcing the actual time limit.

Students can take timed practice exams with questions from previous PhilNITS examinations, providing authentic preparation experience. The platform tracks performance, provides detailed explanations for each question, and generates comprehensive score reports. Users can review their answers, understand mistakes, and focus on areas that need improvement.

Built with Next.js and TypeScript, the application provides server-side rendering for fast page loads and optimal performance. Tailwind CSS creates a clean, distraction-free interface that mimics the actual exam environment. The platform has helped numerous students prepare effectively for the PhilNITS examination, improving their confidence and performance.`,
    github: "https://github.com/elderfieldzeus/philnits-mock-exam",
    live_demo: "https://philnits.zoos.dev/",
    technologies: ["Next.js", "Typescript", "Tailwind CSS"],
    position: "",
  },
  {
    imgs: ["schedaddle.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Schedaddle",
    main_description: `
        Schedaddle is a web app that generates and visualizes class schedules based on offered schedules.
        `,
    long_description: `Schedaddle is a web application that generates and visualizes class schedules based on offered course schedules. This tool helps students plan their academic semesters by automatically generating optimal schedule combinations.

The application allows users to input their desired courses and automatically generates all possible schedule combinations, considering time conflicts and preferences. Interactive visualizations display schedules in an easy-to-read format, making it simple to compare options. Users can filter schedules based on preferences, view detailed course information, and export their chosen schedule.

Built with TypeScript and React, Schedaddle provides a robust, type-safe application with efficient algorithm implementation for schedule generation. Tailwind CSS ensures a clean, intuitive interface that makes complex schedule data easy to understand. The platform has saved students countless hours of manual schedule planning and helped them find optimal course combinations.`,
    github: "https://github.com/elderfieldzeus/schedaddle",
    live_demo: "https://schedaddle.zoos.dev/",
    technologies: ["Typescript", "React", "Tailwind CSS"],
    position: "",
  },
  {
    imgs: ["datacamp.png"],
    category: ProjectCategoryEnum.DATA_SCIENCE,
    title: "Datacamp Projects",
    main_description: `
        Compilation of all my Data-related projects from my DataCamp scholarship. 
        `,
    long_description: `This is a compilation of all my data-related projects completed during my DataCamp scholarship. These projects demonstrate proficiency in data analysis, data manipulation, statistical analysis, and data visualization using Python and SQL.

The portfolio includes projects covering various domains including data cleaning, exploratory data analysis, statistical modeling, machine learning applications, and database querying. Each project showcases different techniques and methodologies, from basic data wrangling to advanced analytical approaches. Projects include real-world datasets and practical applications of data science concepts.

All projects are implemented using Python with libraries such as pandas, numpy, matplotlib, seaborn, and scikit-learn. SQL projects demonstrate proficiency in database querying, data extraction, and complex joins. The portfolio serves as a comprehensive showcase of data science skills and practical experience gained through the DataCamp scholarship program.`,
    github: "https://github.com/elderfieldzeus/datacamp",
    live_demo: "https://www.datacamp.com/portfolio/elderfieldzeus24",
    technologies: ["Python", "SQL"],
  },
  {
    imgs: ["house-predict.jpg"],
    category: ProjectCategoryEnum.DATA_SCIENCE,
    title: "House Price Prediction",
    main_description: `
        Utilizing Linear Regression to predict House Prices in the Philippines.
        `,
    long_description: `This project utilizes Linear Regression to predict house prices in the Philippines. The machine learning model analyzes various property features such as location, size, number of bedrooms, amenities, and other relevant factors to estimate property values.

The project involves comprehensive data preprocessing including handling missing values, feature engineering, and data normalization. The model is trained on historical property data and evaluated using various metrics to ensure accuracy. Visualizations created with Matplotlib help understand the relationships between features and house prices, as well as model performance.

Built with Python and Scikit-Learn, the project demonstrates practical application of machine learning techniques to real-world problems. The model provides valuable insights for both buyers and sellers in the Philippine real estate market, helping them make informed decisions based on data-driven predictions.`,
    github: "https://github.com/elderfieldzeus/ph-house-price-prediction",
    live_demo: "https://github.com/elderfieldzeus/ph-house-price-prediction",
    technologies: ["Python", "Scikit-Learn", "Matplotlib"],
  },
];
