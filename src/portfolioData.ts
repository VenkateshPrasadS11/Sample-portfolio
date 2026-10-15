export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: 'Code' | 'Brain' | 'Globe' | 'Wrench';
  skills: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  currentYear?: string;
  institution: string;
  location: string;
  period: {
    start: string;
    end: string;
  };
  score?: string;
  description?: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    title: string;
    year?: string;
    tagline: string;
    about: string;
    interests: string[];
    locationPlaceholder: string;
    status: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    phone?: string;
    rawPhone?: string;
  };
  skills: SkillCategory[];
  projects: ProjectItem[];
  education: EducationItem[];
}

/**
 * =======================================================================
 * CENTRALIZED PORTFOLIO CONFIGURATION
 * =======================================================================
 * You can easily customize your personal details, links, education,
 * skills, and project showcases below.
 */
export const portfolioData: PortfolioConfig = {
  personal: {
    name: "Venkatesh Prasad S",
    title: "BSc Computer Science | AI & Data Science",
    year: "2nd Year",
    tagline: "Passionate about programming, Artificial Intelligence, Data Science, and building innovative technology solutions.",
    about: "I am a 2nd Year BSc Computer Science student with a strong interest in Artificial Intelligence and Data Science. I enjoy learning programming, developing applications, solving problems, and exploring new technologies.",
    interests: [
      "Artificial Intelligence",
      "Data Science",
      "Programming",
      "Software Development",
      "Problem Solving"
    ],
    locationPlaceholder: "Coimbatore, Tamil Nadu",
    status: "2nd Year BSc Computer Science Student",
  },

  socialLinks: {
    github: "https://github.com/VenkateshPrasadS11",
    linkedin: "https://www.linkedin.com/in/venkatesh-prasad-s-8078b3377",
    email: "venkateshprasads1108@gmail.com",
    phone: "+91 9342178826",
    rawPhone: "9342178826",
  },

  skills: [
    {
      category: "Programming",
      iconName: "Code",
      skills: ["Python", "Java", "C"],
    },
    {
      category: "AI & Data Science",
      iconName: "Brain",
      skills: ["Artificial Intelligence", "Data Science", "Machine Learning"],
    },
    {
      category: "Web Development",
      iconName: "Globe",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      category: "Tools",
      iconName: "Wrench",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ],

  projects: [
    {
      id: "project-1",
      title: "AI Assistant Application",
      subtitle: "Buddy AI",
      description: "An AI-powered application (Buddy AI)designed to provide users with helpful solutions and information.",
      technologies: ["Python", "AI"],
      githubUrl: "#", // Placeholder: replace with your repository URL
      liveDemoUrl: "#", // Placeholder: replace with your live demo URL
      featured: true,
    },
    {
      id: "project-2",
      title: "Software Application Project",
      subtitle: "Application Development",
      description: "A functional software application demonstrating object-oriented programming principles, clean code structure, and efficient logic implementation.",
      technologies: ["Python", "Java"],
      githubUrl: "#", // Placeholder: replace with your repository URL
      liveDemoUrl: "#", // Placeholder: replace with your live demo URL
      featured: false,
    },
    {
      id: "project-3",
      title: "Data Science Project",
      subtitle: "Data Analysis & Insights",
      description: "An exploratory data science project involving data cleaning, preprocessing, exploratory data analysis, and predictive modeling using standard libraries.",
      technologies: ["Python", "Pandas", "Data Analysis"],
      githubUrl: "#", // Placeholder: replace with your repository URL
      liveDemoUrl: "#", // Placeholder: replace with your live demo URL
      featured: false,
    },
  ],

  education: [
    {
      degree: "BSc Computer Science",
      field: "Focus: Artificial Intelligence & Data Science",
      currentYear: "2nd Year",
      institution: "Rathinam Global Deemed to be University",
      location: "Coimbatore",
      period: {
        start: "[START YEAR]",
        end: "[GRADUATION YEAR]",
      },
      score: "[CGPA / GRADE]",
      description: "Undergraduate curriculum covering computer science fundamentals, data structures, algorithms, Artificial Intelligence, machine learning concepts, and practical data analysis.",
    },
  ],
};
