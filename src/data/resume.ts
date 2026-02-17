export interface IResumeEvent {
  title: string;
  subtitle: string;
  year: string;
}

export interface IAchievement {
  title: string;
  subtitle: string;
  year: string;
  imgs: string[];
  description?: string;
}

export interface ICertification {
  title: string;
  subtitle: string;
  year: string;
  imgs: string[];
  description?: string;
  url?: string;
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
}

export const educations: IEducation[] = [
  {
    id: "usc",
    institution: "University of San Carlos",
    url: "https://www.usc.edu.ph",
    degree: "BS Computer Science",
    startDate: "2022-08",
    endDate: "Present",
    highlights: [
      "Consistent Dean's Lister throughout the program",
      "Specialized in software engineering and artificial intelligence",
      "Active member of the Computer and Information Sciences Council",
    ],
  },
  {
    id: "shs-adc",
    institution: "SHS-ADC",
    degree: "High School Diploma",
    startDate: "2020-06",
    endDate: "2022-05",
    highlights: [
      "Graduated with honors under the STEM strand",
      "Participated in school-wide programming and math competitions",
    ],
  },
];

export const experiences: IExperience[] = [
  {
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
          "Developed AI-powered features using machine learning algorithms",
          "Collaborated with cross-functional teams to implement new functionalities",
          "Optimized existing codebase for better performance",
        ],
      },
    ],
  },
  {
    company: {
      id: "usc-cisco",
      name: "Computer and Information Sciences Council",
      url: "https://face",
      icon: "cisco.jpg",
    },
    positions: [
      {
        title: "Vice President for Information",
        startDate: "2025-06",
        contributions: [
          "Built and maintained web applications using modern frameworks",
          "Participated in code reviews and agile development practices",
          "Fixed bugs and implemented new features based on client requirements",
        ],
      },
    ],
  },
  {
    company: {
      id: "todays-carolinian",
      name: "Today's Carolinian",
      url: "https://todayscarolinian.com",
      icon: "tc.jpg",
    },
    positions: [
      {
        title: "Web Developer",
        startDate: "2025-02",
        endDate: "Present",
        contributions: [
          "Maintained and updated the organization's website",
          "Implemented responsive design improvements",
          "Managed content updates and technical issues",
        ],
      },
    ],
  },
  {
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
          "Built and maintained web applications using modern frameworks",
          "Participated in code reviews and agile development practices",
          "Fixed bugs and implemented new features based on client requirements",
        ],
      },
    ],
  },
];

export const achievements: IAchievement[] = [
  {
    title: "Top 3 Score (Philippines)",
    subtitle: "PhilNITS",
    year: "2025",
    imgs: ["mrbean-phone.gif"],
    description:
      "Achieved top 3 score in the Philippines for the PhilNITS examination.",
  },
  {
    title: "1st Place",
    subtitle: "National CS/IT Skills Competition",
    year: "2025",
    imgs: ["mrbean-phone.gif"],
    description: "Won first place in the National CS/IT Skills Competition.",
  },
  {
    title: "3rd Place",
    subtitle: "Codechum National Programming Competition - Group 2",
    year: "2024",
    imgs: ["mrbean-phone.gif"],
    description:
      "Secured third place in the Codechum National Programming Competition - Group 2.",
  },
];

export const certifications: ICertification[] = [
  {
    title: "TOPCIT Level III",
    subtitle: "Ministry of Science and ICT, South Korea",
    year: "2025",
    imgs: ["mrbean-phone.gif"],
    description:
      "Achieved TOPCIT Level III certification from the Ministry of Science and ICT, South Korea.",
    url: "/pdf/Elderfield-Zeus-TOPCIT-Certificate.pdf",
  },
  {
    title: "Fundamental IT Engineer",
    subtitle: "PhilNITS",
    year: "2025",
    imgs: ["mrbean-phone.gif"],
    description:
      "Earned the Fundamental IT Engineer certification from PhilNITS.",
  },
  {
    title: "Software Engineer",
    subtitle: "HackerRank",
    year: "2025",
    imgs: ["mrbean-phone.gif"],
    description: "Completed the Software Engineer certification on HackerRank.",
    url: "https://www.hackerrank.com/certificates",
  },
];

// Helper function to convert experiences for home page preview
export const getHomePageExperiences = (): IResumeEvent[] => {
  return experiences.flatMap((exp) =>
    exp.positions.map((pos) => ({
      title: pos.title,
      subtitle: exp.company.name,
      year: pos.startDate,
    })),
  );
};

// Helper functions to convert achievements and certifications for home page preview
export const getHomePageAchievements = (): IResumeEvent[] => {
  return achievements.map((achievement) => ({
    title: achievement.title,
    subtitle: achievement.subtitle,
    year: achievement.year,
  }));
};

export const getHomePageCertifications = (): IResumeEvent[] => {
  return certifications.map((certification) => ({
    title: certification.title,
    subtitle: certification.subtitle,
    year: certification.year,
  }));
};
