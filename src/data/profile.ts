export const profile = {
  firstName: "Mohibbul",
  lastName: "Bari",
  fullName: "Mohibbul Bari",
  email: "mohibbbulbari643@gmail.com",
  phoneHref: "+918299227068",
  phoneDisplay: "+91 82992 27068",
  location: "India",
  github: "https://github.com/Mohibbulbari643",
  githubProjects: "https://github.com/Mohibbulbari643/Mohibbulbari643",
  linkedin: "https://www.linkedin.com/in/mohibbul-bari-526725234/",
  geeksForGeeks: "https://www.geeksforgeeks.org/user/mohibbuly6yt/",
  resumeHref: "/mohibbul_resume.pdf",
  resumeFileName: "mohibbul_resume.pdf",
  landingLead: "Driven",
  landingTitles: ["Associate Software", "Engineer"],
  about:
    "Final-year Electrical Engineering student at Aligarh Muslim University, building production-focused backend systems and real-world applications. Currently working as an Associate Software Engineer at Delta6Labs, contributing to scalable systems and solving practical engineering challenges. Previously worked as a Teaching Assistant at Coding Ninjas, where I solved 800+ problems and strengthened my approach to debugging, system thinking, and clear technical communication.",
  aboutExtra:
    "My focus is on backend engineering, system design, and performance-driven applications, with hands-on experience in building secure APIs, real-time systems, and scalable architectures. Currently building zBit, a crypto platform focused on modern architecture, security, and real-world usability.",
};

export const focusAreas = [
  {
    title: "DEVELOP",
    subtitle: "Full-stack product building",
    description:
      "Build scalable backend systems and full-stack applications with a focus on clean architecture, performance, and production readiness.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "WebSockets"
    ],
  },
  {
    title: "SOLVE",
    subtitle: "Logic, debugging, and DSA",
    description:
      "Solve real engineering problems involving debugging, system design, concurrency, and performance optimization, backed by strong fundamentals in DSA and core CS.",
    tags: [
      "C++",
      "Java",
      "Python",
      "DSA",
      "System Design",
      "Concurrency",
      "Debugging",
      "Problem Solving",
    ],
  },
];

export const careerItems = [
  {
    role: "Associate Software Engineer",
    company: "Delta6Labs",
    year: "Present",
    description: "• Engineering high-performance fintech & crypto infrastructure, building scalable backend systems powering real-world trading platforms.\n• Architecting low-latency, event-driven systems for real-time trading and data processing\n• Building secure REST APIs with authentication (JWT, WebAuthn), rate limiting & RBAC\n• Designing scalable backend systems using Node.js, PostgreSQL, Redis & caching strategies\n• Solving production-grade system challenges: concurrency, idempotency, fault tolerance\n• Contributing to AI-assisted development workflows to accelerate engineering output\n• Shipping end-to-end features from system design → deployment → monitoring",
  },
  {
    role: "Teaching Assistant",
    company: "Coding Ninjas",
    year: "2024",
    description: "• Delivered high-impact mentorship at scale, strengthening core CS fundamentals and debugging skills.\n• Solved 800+ student doubts across DSA, backend, and system design\n• Maintained 4.5+ rating, consistently recognized for clarity & problem-solving depth\n• Mentored students on debugging, optimization, and clean coding practices\n• Simplified complex topics into intuitive, real-world explanations",
  },
  {
    role: "Technical Leadership",
    company: "IEEE Student Branch",
    year: "2025 — Present",
    description: "• Driving technical initiatives and engineering culture within a high-performance student community.\n• Led execution of 50+ technical events, workshops, and hackathons\n• Organized sessions on backend engineering, system design & emerging tech\n• Collaborated with teams to build scalable technical initiatives and learning systems\n• Fostered a culture of practical engineering over theoretical learning",
  },
  {
    role: "B.Tech — Electrical Engineering",
    company: "Zakir Hussain College of Engineering & Technology, AMU",
    year: "2022 — 2026",
    description: "• Built strong foundation in problem-solving, systems & analytical thinking\n• Transitioned into software engineering with production-level projects",
  },
  {
    role: "Diploma — Electrical Engineering",
    company: "University Polytechnic, AMU",
    year: "2019 — 2022",
    description: "• Graduated with Gold Medal (Top Performer)\n• Developed discipline and technical fundamentals",
  },
];

export interface ProjectItem {
  title: string;
  category: string;
  summary: string;
  tools: string;
  image: string;
  alt: string;
  link?: string;
}

export const projectItems: ProjectItem[] = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack Project",
    summary:
      "Built a complete e-commerce solution featuring order and cart management, secure user and admin roles, and robust authentication/authorization. Integrated Redis for caching, Nodemailer for emails, and Twilio for notifications.",
    tools:
      "Node.js, Redis, Nodemailer, Twilio, Authentication, Authorization",
    image: "/images/node.webp",
    alt: "E-Commerce Platform project card",
  },
  {
    title: "zBit",
    category: "Crypto Platform · In Progress",
    summary:
      "Building a crypto platform focused on scalable backend architecture and secure transaction flows. Designing systems for authentication, real-time updates, and modular feature expansion, while shaping the core product roadmap.",
    tools:
      "React, TypeScript, Node.js, Express, MongoDB, APIs, Auth Systems",
    image: "/images/react.webp",
    alt: "zBit crypto platform project card",
  },
];
