export interface IResumeEvent {
  title: string;
  subtitle: string;
  year: string;
}

export interface IAchievement {
  title: string;
  subtitle: string;
  date: string;
  imgs: string[];
  description?: string;
  isFeatured?: true;
}

export interface ICertification {
  title: string;
  subtitle: string;
  date: string;
  imgs: string[];
  description?: string;
  url?: string;
  isFeatured?: true;
}

export interface IEducation {
  id: string;
  institution: string;
  url?: string;
  icon?: string;
  degree: string;
  startDate: string;
  endDate?: string;
  highlights?: string[];
}

export interface IExperiencePosition {
  title: string;
  startDate: string;
  endDate?: string;
  contributions?: string[];
}

export interface ICompany {
  id: string;
  name: string;
  url?: string;
  icon?: string; // Placeholder for now, will be image path
}

export interface IExperience {
  company: ICompany;
  positions: IExperiencePosition[];
  isFeatured?: true;
}

export const educations: IEducation[] = [
  {
    id: "usc",
    institution: "University of San Carlos",
    url: "https://www.usc.edu.ph",
    icon: "usc.jpg",
    degree: "Bachelor of Science Computer Science",
    startDate: "2022-08",
    endDate: "Present",
    highlights: [
      "Dean's Lister and one of the top students in the batch with a GPA of 1.39/1.00.",
      "Specialized in software engineering and artificial intelligence.",
      "Active member of CISCO, the department's student council for the College of Computer, Information, and Mathematics.",
    ],
  },
  {
    id: "shs-adc",
    institution: "Sacred Heart School - Ateneo de Cebu",
    url: "https://shs-adc.edu.ph",
    icon: "ateneo.jpg",
    degree: "High School Diploma",
    startDate: "2020-06",
    endDate: "2022-05",
    highlights: [
      "Graduated with honors under the STEM strand with a final grade of 95/100.",
      "Participated in school-wide programming and math competitions.",
    ],
  },
];

export const experiences: IExperience[] = [
  {
    isFeatured: true,
    company: {
      id: "oboda",
      name: "oboda",
      url: "https://oboda.com",
      icon: "oboda.jpg", // Placeholder
    },
    positions: [
      {
        title: "Software/AI Engineer Intern",
        startDate: "2025-09",
        contributions: [
          "Handled sales and inventory forecasting features for the company dashboard.",
          "Managed migration to OpenAI Vector Stores for RAG workflows, improving retrieval accuracy and performance.",
          "Contributed to the development of oGPT and oInsight, the company's AI-powered chatbot products.",
          "Handled a daily CRON microservice responsible for automated data processing and scheduling tasks.",
        ],
      },
    ],
  },
  {
    company: {
      id: "usc-cisco",
      name: "Computer and Information Sciences Council",
      url: "https://facebook.com/cisco.usc",
      icon: "cisco.jpg",
    },
    positions: [
      {
        title: "Vice President for Information",
        startDate: "2025-06",
        contributions: [
          "Built Ciscode, a web-based coding platform designed for DCISM students to practice and develop their programming skills.",
          "Maintained a queueing management system for the department, handling operations for over 1,000+ students.",
          "Built an AI-automated workflow for sending email blasts to students, streamlining departmental communications.",
          "Led a team of 20 ambassadors in disseminating information and representing the organization across the department.",
        ],
      },
    ],
  },
  {
    isFeatured: true,
    company: {
      id: "todays-carolinian",
      name: "Today's Carolinian",
      url: "https://todayscarolinian.com",
      icon: "tc.jpg",
    },
    positions: [
      {
        title: "Full Stack Developer",
        startDate: "2025-02",
        contributions: [
          "Developed and managed the backend architecture for an archiving system using Next.js and Firebase.",
          "Integrated Firebase Authentication to secure user access and ensure role-based permissions.",
          "Implemented Firestore Database for efficient content storage and retrieval, optimizing query performance for large datasets.",
          "Developed server-side functions to handle data processing, ensuring smooth archiving and retrieval operations.",
          "Collaborated with the team to align backend functionalities with editorial and organizational requirements.",
        ],
      },
    ],
  },
  {
    isFeatured: true,
    company: {
      id: "alliance-software",
      name: "Alliance Software Inc.",
      url: "https://www.alliance.com.ph",
      icon: "alliance.png",
    },
    positions: [
      {
        title: "Software Developer Intern",
        startDate: "2025-06",
        endDate: "2025-07",
        contributions: [
          "Selected as one of the top 30 applicants for the competitive Summer Bridging Program.",
          "Collaborated in a team of 4 to develop SkillStacker, a knowledge management platform designed to help users train and assess their skills.",
          "Handled key backend development responsibilities, implementing core logic and data flow using C# and ASP.NET Razor Pages.",
          "Debugged and resolved complex issues across the codebase, often assisting teammates by fixing blockers they couldn't resolve.",
        ],
      },
    ],
  },
];

export const achievements: IAchievement[] = [
  {
    isFeatured: true,
    title: "Top 3 Score (Philippines)",
    subtitle: "PhilNITS",
    date: "2025",
    imgs: ["philnits-cisco.jpeg", "philnits-top-3.jpeg"],
    description:
      "Achieved top 3 score in the Philippines for the PhilNITS examination.",
  },
  {
    isFeatured: true,
    title: "1st Place",
    subtitle: "National CS/IT Skills Competition",
    date: "2025",
    imgs: ["sikaptala.jpeg"],
    description: "Won first place in the National CS/IT Skills Competition.",
  },
  {
    isFeatured: true,
    title: "3rd Place",
    subtitle: "Codechum National Programming Competition - Group 2",
    date: "2024",
    imgs: ["codechum-3rd.jpeg"],
    description:
      "Secured third place in the Codechum National Programming Competition - Group 2.",
  },
];

export const certifications: ICertification[] = [
  {
    isFeatured: true,
    title: "TOPCIT Level III",
    subtitle: "Ministry of Science and ICT, South Korea",
    date: "2025",
    imgs: ["mrbean-phone.gif"],
    description:
      "Achieved TOPCIT Level III certification from the Ministry of Science and ICT, South Korea.",
    url: "/pdf/Elderfield-Zeus-TOPCIT-Certificate.pdf",
  },
  {
    isFeatured: true,
    title: "Fundamental IT Engineer",
    subtitle: "PhilNITS",
    date: "2025",
    imgs: ["mrbean-phone.gif"],
    description:
      "Earned the Fundamental IT Engineer certification from PhilNITS.",
  },
  {
    isFeatured: true,
    title: "Software Engineer",
    subtitle: "HackerRank",
    date: "2025",
    imgs: ["mrbean-phone.gif"],
    description: "Completed the Software Engineer certification on HackerRank.",
    url: "https://www.hackerrank.com/certificates",
  },
];

// Helper function to convert experiences for home page preview
export const getHomePageExperiences = (): IResumeEvent[] => {
  return experiences
    .filter((exp) => exp.isFeatured)
    .flatMap((exp) =>
      exp.positions.map((pos) => ({
        title: pos.title,
        subtitle: exp.company.name,
        year: pos.startDate,
      })),
    );
};

// Helper functions to convert achievements and certifications for home page preview
export const getHomePageAchievements = (): IResumeEvent[] => {
  return achievements
    .filter((achievement) => achievement.isFeatured)
    .map((achievement) => ({
      title: achievement.title,
      subtitle: achievement.subtitle,
      year: achievement.date,
    }));
};

export const getHomePageCertifications = (): IResumeEvent[] => {
  return certifications
    .filter((certification) => certification.isFeatured)
    .map((certification) => ({
      title: certification.title,
      subtitle: certification.subtitle,
      year: certification.date,
    }));
};
