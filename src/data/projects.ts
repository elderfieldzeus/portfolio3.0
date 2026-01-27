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
        Project Ciscode is CISCO's very own coding platform built exclusively for DCISM students.
        `,
    long_description: `Project Ciscode is CISCO's very own coding platform built exclusively for DCISM students. This comprehensive platform provides a complete coding environment where students can practice, learn, and compete in programming challenges.

The platform features a robust code editor with syntax highlighting, real-time compilation, and instant feedback. Students can access a curated library of coding problems ranging from basic algorithms to advanced data structures. The system includes automated testing, code submission tracking, and detailed performance analytics.

Built with modern web technologies, Ciscode offers a seamless user experience with a clean, intuitive interface. The platform supports multiple programming languages and provides comprehensive documentation and learning resources. It serves as both an educational tool and a competitive programming environment, helping students prepare for technical interviews and coding competitions.`,
    github: "https://github.com/usc-cisco/ciscode",
    live_demo: "https://ciscode.dcism.org",
    technologies: ["Next.js", "Shadcn UI", "Sequelize", "MySQL"],
    position: "-mt-5",
    featureIndex: 1,
  },
  {
    imgs: ["gainz.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Gainz",
    main_description: `
        Gainz is a simple, powerful workout tracker to help you crush your fitness goals.
        `,
    long_description: `Gainz is a simple, powerful workout tracker designed to help you crush your fitness goals. This full-stack application provides comprehensive workout management with an intuitive interface and robust backend architecture.

The platform allows users to create custom workout routines, track exercises, sets, and reps, and monitor their progress over time. Users can log their workouts, view detailed statistics, and analyze their performance trends. The application includes features for managing multiple workout programs, setting personal records, and tracking body measurements.

Built with Spring Boot and Spring Security, Gainz ensures secure user authentication and data protection. The application features a responsive design that works seamlessly across desktop and mobile devices, making it easy to log workouts at the gym or at home. With Hibernate ORM and MySQL database, the platform efficiently manages complex workout data and user information.`,
    github: "https://github.com/elderfieldzeus/gainz-api",
    live_demo: "https://gainz.zoos.dev",
    technologies: ["Spring Boot", "Spring Security", "Hibernate", "MySQL"],
    position: "",
    featureIndex: 4,
  },
  {
    imgs: ["hermes.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Hermes",
    main_description: `
        Project Hermes is a queue system for DCISM students, by DCISM students.
        `,
    long_description: `Project Hermes is a queue system for DCISM students, built by DCISM students. This innovative platform streamlines the process of managing queues for various services and resources within the department.

The system allows students to join virtual queues for consultations, lab access, equipment checkout, and other department services. Real-time queue updates ensure students know their position and estimated wait times. The platform includes features for queue management, notifications, and analytics to help optimize service delivery.

Built with React and Mantine UI, Hermes provides a modern, responsive user interface that works seamlessly on all devices. The backend, powered by ElysiaJS, handles real-time queue updates efficiently. With SQLite database, the system ensures fast data access and reliable queue management. The platform has significantly reduced wait times and improved the overall student experience.`,
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
        SwipEats is a mobile-based match making application to help groups decide what restaurant to eat at.
        `,
    long_description: `SwipEats is a mobile-based matchmaking application designed to help groups decide what restaurant to eat at. Inspired by dating apps, this innovative platform solves the age-old problem of group decision-making when choosing dining locations.

Users create groups and swipe through restaurant options, with the app using a sophisticated matching algorithm to find restaurants that everyone in the group likes. The platform integrates with restaurant APIs to provide real-time information, menus, ratings, and availability. Real-time synchronization using WebSocket ensures all group members see updates instantly.

Built with Angular for the frontend and Golang for the backend, SwipEats delivers a fast, responsive experience. The application features beautiful UI/UX design optimized for mobile devices, making it easy to use on the go. With MySQL database, the platform efficiently manages user data, restaurant information, and group preferences. The app has helped countless groups make dining decisions quickly and democratically.`,
    github: "https://github.com/SwipEats/SwipEats",
    live_demo: "https://swipeats.dcism.org",
    technologies: ["Angular", "Golang", "WebSocket", "MySQL"],
    position: "-mt-1",
    featureIndex: 3,
  },
  {
    imgs: ["skillstacker.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Skill Stacker",
    main_description: `
        Skill Stacker is a training management system for authors to publish, and for learners to learn.
        `,
    long_description: `Skill Stacker is a comprehensive training management system designed for authors to publish educational content and for learners to access structured learning materials. This platform bridges the gap between content creators and learners in a seamless, user-friendly environment.

Authors can create, organize, and publish courses with multimedia content including videos, documents, quizzes, and assignments. The system includes features for course management, student enrollment tracking, progress monitoring, and certification generation. Learners benefit from a structured curriculum, interactive content, progress tracking, and achievement badges.

Built with ASP.NET MVC, the platform provides a robust server-side architecture with secure authentication and authorization. Tailwind CSS ensures a modern, responsive design that works beautifully on all devices. SQL Server handles complex data relationships for courses, users, and progress tracking, while Supabase integration provides additional real-time capabilities and storage solutions.`,
    github: "https://github.com/SwipEats/SwipEats",
    live_demo: "https://swipeats.dcism.org",
    technologies: ["ASP.NET MVC", "Tailwind CSS", "SQL Server", "Supabase"],
    position: "-mt-11",
  },
  {
    imgs: ["twerkout.png"],
    category: ProjectCategoryEnum.WEB_DEVELOPMENT,
    title: "Twerkout",
    main_description: `
        Twerkout is a mobile-friendly site designed to help you track and visualize your workout progress.
        `,
    long_description: `Twerkout is a mobile-friendly web application designed to help you track and visualize your workout progress. This personal fitness companion makes it easy to log workouts, monitor progress, and stay motivated on your fitness journey.

The application allows users to create custom workout routines, log exercises with sets, reps, and weights, and track their progress over time. Interactive charts and graphs visualize strength gains, workout frequency, and personal records. Users can set fitness goals, track body measurements, and view detailed workout history.

Built with TypeScript and React, Twerkout provides a type-safe, component-based architecture that ensures reliability and maintainability. Tailwind CSS creates a beautiful, responsive design that works perfectly on mobile devices. Firebase integration provides real-time data synchronization, secure authentication, and cloud storage, ensuring your workout data is always accessible and backed up.`,
    github: "https://github.com/elderfieldzeus/twerkout",
    live_demo: "https://twerkout.zoos.dev",
    technologies: ["Typescript", "React", "Tailwind CSS", "Firebase"],
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
