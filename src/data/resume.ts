export interface IResumeEvent {
  title: string;
  subtitle: string;
  year: string;
}

export interface IExperiencePosition {
  title: string;
  startDate: string;
  endDate: string;
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

export const experiences: IExperience[] = [
  {
    company: {
      id: "oboda",
      name: "oboda",
      url: "https://oboda.com",
      icon: "/images/placeholder-company.png", // Placeholder
    },
    positions: [
      {
        title: "Software/AI Engineer Intern",
        startDate: "2025-01",
        endDate: "2025-03",
        contributions: [
          "Developed AI-powered features using machine learning algorithms",
          "Collaborated with cross-functional teams to implement new functionalities",
          "Optimized existing codebase for better performance",
        ],
      },
      // Example: Multiple positions at the same company
      // Uncomment below to see the feature in action:
      // {
      //   title: "Junior Software Engineer",
      //   startDate: "2025-04",
      //   endDate: "Present",
      //   contributions: [
      //     "Led development of new product features",
      //     "Mentored junior developers",
      //   ],
      // },
    ],
  },
  {
    company: {
      id: "alliance-software",
      name: "Alliance Software Inc.",
      url: "https://www.alliance.com.ph",
      icon: "/images/placeholder-company.png",
    },
    positions: [
      {
        title: "Software Developer Intern",
        startDate: "2025-01",
        endDate: "2025-02",
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
      icon: "/images/placeholder-company.png",
    },
    positions: [
      {
        title: "Web Developer",
        startDate: "2025-01",
        endDate: "Present",
        contributions: [
          "Maintained and updated the organization's website",
          "Implemented responsive design improvements",
          "Managed content updates and technical issues",
        ],
      },
    ],
  },
];

export const achievements: IResumeEvent[] = [
  {
    title: "Top 3 Score (Philippines)",
    subtitle: "PhilNITS",
    year: "2025",
  },
  {
    title: "1st Place",
    subtitle: "National CS/IT Skills Competition",
    year: "2025",
  },
  {
    title: "3rd Place",
    subtitle: "Codechum National Programming Competition - Group 2",
    year: "2024",
  },
];

export const certifications: IResumeEvent[] = [
  {
    title: "TOPCIT Level III",
    subtitle: "Ministry of Science and ICT, South Korea",
    year: "2025",
  },
  {
    title: "Fundamental IT Engineer",
    subtitle: "PhilNITS",
    year: "2025",
  },
  {
    title: "Software Engineer",
    subtitle: "HackerRank",
    year: "2025",
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
