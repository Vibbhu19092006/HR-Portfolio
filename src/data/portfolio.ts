export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  score: string;
  scoreLabel: string;
  period: string;
  year: string;
  description?: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge?: string;
  description: string;
  skills: string[];
  images?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  images?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: "HR & Professional" | "Technical & Cloud";
  images: string[];
  credentialId?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  award: string;
  organization: string;
  year: string;
  description: string;
  images?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; tag?: string; description?: string; icon?: string }[];
}

export const portfolioData = {
  personal: {
    name: "VIBBHU A",
    shortName: "Vibbhu",
    headline: "Aspiring HR Professional | B.E CSE (Cyber Security) Student",
    roles: [
      "Aspiring HR Professional",
      "Candidate Screening & Interview Scheduling Specialist",
      "Community Engagement & Outreach Leader",
      "B.E CSE (Cyber Security) Student",
      "Talent Acquisition & People Operations Enthusiast",
    ],
    tagline:
      "Passionate about people-handling, communication, community engagement, candidate screening, and interview coordination, combining analytical rigor with empathetic talent operations.",
    location: "Coimbatore, Tamil Nadu, India",
    email: "vibbhu.a2024csecs@sece.ac.in",
    phone: "7904205517",
    linkedIn: "https://www.linkedin.com/in/vibbhu-a",
    linkedInUser: "Vibbhu A",
    gitHub: "https://github.com/Vibbhu19092006",
    gitHubUser: "Vibbhu19092006",
    resumeUrl: "/resume.pdf",
    avatar: "/images/vibbhu.jpg",
    previewImages: [
      "/images/vibbhu.jpg",
    ],
  },

  stats: [
    { label: "B.E CGPA (4th Sem)", value: "8.14", suffix: "" },
    { label: "Certifications Earned", value: "7", suffix: "+" },
    { label: "Competitions & Awards", value: "5", suffix: "" },
    { label: "Campus Leadership Roles", value: "2", suffix: "" },
  ],

  education: [
    {
      id: "ug",
      degree: "B.E CSE (Cyber Security)",
      institution: "Sri Eshwar College of Engineering",
      score: "8.14 CGPA",
      scoreLabel: "4th Semester",
      period: "2024 - 2028",
      year: "2024-2028",
      highlight: true,
      description:
        "Building a solid foundation in Computer Science & Cyber Security while spearheading campus ambassador initiatives, student outreach, and human-centric talent coordination.",
    },
    {
      id: "hsc",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Githanjali Public School",
      score: "74%",
      scoreLabel: "Final Board",
      period: "2023 - 2024",
      year: "2023-2024",
      description: "Completed higher secondary curriculum with consistent academic performance.",
    },
    {
      id: "sslc",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Githanjali Public School",
      score: "80%",
      scoreLabel: "Final Board",
      period: "2021 - 2022",
      year: "2021-2022",
      description: "Strong foundational academic achievement in high school examinations.",
    },
  ] as EducationItem[],

  hrSkills: [
    {
      category: "HR Skills",
      description: "Core talents for sourcing, screening, and facilitating interview processes",
      skills: [
        {
          name: "Candidate Screening",
          tag: "Core Focus",
          description: "Evaluating profiles against role criteria and functional competencies",
        },
        {
          name: "Interview Scheduling",
          tag: "Specialist",
          description: "Seamless coordination between hiring stakeholders and candidates",
        },
        {
          name: "Documentation Management",
          tag: "Operational Strength",
          description: "Structured record-keeping and HR pipeline documentation",
        },
      ],
    },
    {
      category: "Administrative Skills",
      description: "Operational competencies ensuring process fidelity and clear correspondence",
      skills: [
        {
          name: "Data Accuracy",
          tag: "High Attention",
          description: "Meticulous verification of details and tracking records",
        },
        {
          name: "Spreadsheet Tracking",
          tag: "Core Strength",
          description: "Systematic organization in Google Sheets & MS Excel",
        },
        {
          name: "Task Coordination",
          tag: "Operational Strength",
          description: "Workflow oversight, deadline management, and logistics",
        },
        {
          name: "Professional Email Communication",
          tag: "Key Competency",
          description: "Polite, timely, and articulate business correspondence",
        },
      ],
    },
    {
      category: "Soft Skills",
      description: "Interpersonal qualities fostering positive stakeholder rapport and leadership",
      skills: [
        {
          name: "Communication",
          tag: "Key Strength",
          description: "Empathetic listening and persuasive peer presentation",
        },
        {
          name: "Leadership",
          tag: "Demonstrated",
          description: "Guiding student initiatives, peer groups, and community outreach",
        },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      id: "internshala",
      role: "Student Partner",
      organization: "Internshala",
      period: "2026",
      badge: "Campus Representative",
      description:
        "Completed the three-day Internshala Student Partner program, which prepares students to promote Internshala within their own college community. Created awareness among peers about internships, trainings and career opportunities, and encouraged students to register and apply. Engaged with students through outreach, interactive sessions and word-of-mouth promotion, helping them understand how to build their profile and find suitable opportunities. Strengthened people-handling, persuasion and community-engagement skills while acting as the link between the platform and the student body.",
      skills: [
        "Communication",
        "Student Engagement",
        "Networking",
        "Persuasion",
        "Community Outreach",
        "Peer Coordination",
      ],
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "ecell",
      role: "Campus Ambassador (Entrepreneurship)",
      organization: "E-Cell IIT-Bombay",
      period: "2025",
      badge: "Entrepreneurship Cell",
      description:
        "Completed a Campus Ambassador program with E-Cell IIT-Bombay, promoting entrepreneurship initiatives across the college. Engaged with student communities, encouraging participation in startup events, workshops and competitions. Gained exposure to startup ecosystems and interacted with industry professionals and mentors, building entrepreneurial thinking, management and leadership abilities. Strengthened professional communication while coordinating with students and mentors.",
      skills: [
        "Entrepreneurship",
        "Management",
        "Leadership",
        "Professional Communication",
      ],
      images: ["/images/vibbhu.jpg"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "fuelnow",
      title: "FuelNow",
      subtitle: "Online Petrol Delivery Platform",
      year: "2026",
      highlights: [
        "Built a location-based web app to find nearby petrol bunks and order petrol using GPS and map APIs.",
        "Implemented role-based access with a database to manage users, orders and fuel availability.",
        "Designed REST APIs with Node.js and Express.js to handle order placement and real-time order status.",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
      githubUrl: "#",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "linkride",
      title: "LinkRide",
      subtitle: "Carpooling System with SOS Feature",
      year: "2025",
      highlights: [
        "Developed a ride-sharing platform connecting commuters with similar routes for ride creation and schedule management.",
        "Added expense sharing so riders can split travel costs fairly among all passengers.",
        "Integrated an SOS safety module to alert emergency contacts or authorities during unsafe situations.",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
      githubUrl: "#",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "ppdetect",
      title: "PPDetect",
      subtitle: "Phishing Page Detector",
      year: "2025",
      highlights: [
        "Built a phishing detection system that analyzes websites for fake login forms, brand impersonation and insecure connections.",
        "Integrated automated risk scoring and red-flag detection to help users identify phishing attacks.",
        "Presented clear, easy-to-read results so users can judge the safety of a page before sharing credentials.",
      ],
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "#",
      images: ["/images/vibbhu.jpg"],
    },
  ] as ProjectItem[],

  certifications: [
    {
      id: "cert-hr-prep",
      title: "HR Preparation",
      issuer: "Unstop",
      year: "2026",
      category: "HR & Professional",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "cert-resume-interview",
      title: "Resume Writing and Job Interviewing",
      issuer: "HP",
      year: "2026",
      category: "HR & Professional",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "cert-group-discussion",
      title: "Group Discussion",
      issuer: "Unstop",
      year: "2026",
      category: "HR & Professional",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "cert-linguaskill",
      title: "Linguaskill",
      issuer: "Cambridge",
      year: "2026",
      category: "HR & Professional",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "cert-product-mgmt",
      title: "Product Management Basics",
      issuer: "Pendo",
      year: "2026",
      category: "HR & Professional",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "cert-nde",
      title: "Network Defense Essentials (NDE)",
      issuer: "EC-Council",
      year: "2026",
      category: "Technical & Cloud",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "cert-cloud-fund",
      title: "Cloud Fundamentals",
      issuer: "AWS Academy",
      year: "2026",
      category: "Technical & Cloud",
      images: ["/images/vibbhu.jpg"],
    },
  ] as CertificationItem[],

  achievements: [
    {
      id: "ach-1",
      title: "Tech Trailathon",
      award: "Secured Top 10 Position",
      organization: "Tech Trailathon",
      year: "2026",
      description:
        "Ranked among the Top 10 finalists demonstrating analytical problem-solving and agile project execution.",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "ach-2",
      title: "Tamil Nadu Global Startup Summit 2025",
      award: "Third Place",
      organization: "InstaVenture.Ai",
      year: "2025",
      description:
        "Awarded 3rd place in state-wide competitive venture pitching and startup innovation summit.",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "ach-3",
      title: "TECHNOVA",
      award: "Top 32 Finalist among 92 Teams",
      organization: "TECHNOVA",
      year: "2025",
      description:
        "Shortlisted into the top 32 finalist teams from a fiercely competitive cohort of 92 participant groups.",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "ach-4",
      title: "HackNexus",
      award: "Third Place",
      organization: "Sri Ramakrishna College of Arts & Science",
      year: "2025",
      description:
        "Secured third prize in an intensive inter-collegiate hackathon focusing on practical software and system design.",
      images: ["/images/vibbhu.jpg"],
    },
    {
      id: "ach-5",
      title: "Freshathon",
      award: "Second Place",
      organization: "Freshathon",
      year: "2024",
      description:
        "Earned 2nd position among first-year collegiate builders for collaborative innovation and presentation.",
      images: ["/images/vibbhu.jpg"],
    },
  ] as AchievementItem[],

  technicalSkills: {
    Languages: ["C", "C++", "Python"],
    Database: ["MySQL", "MongoDB"],
    "Core Security Concepts": ["OSINT", "Networking"],
    "Tools & Platforms": [
      "VS Code",
      "GitHub",
      "IntelliJ",
      "Canva",
      "Nmap",
      "MS Excel",
      "Google Sheets",
      "MS PowerPoint",
      "MS Word",
    ],
  },

  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
};
