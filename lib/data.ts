import type {
  Project,
  Experience,
  SkillCategory,
  SocialLink,
  NavItem,
} from "./types";

// ─── Personal Info ─────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Geetartha Borpatra Gohain",
  shortName: "Geetartha",
  title: "Radiographer & AI Automation Specialist",
  tagline: "Bridging the gap between healthcare, patient care, and AI technology.",
  bio: [
    "I am eager to begin my career in radiography within an environment where I can gain extensive knowledge, learn from experienced professionals, and delve deep into the field.",
    "I aim to contribute to the advancement of healthcare through my dedication, with a long-term aspiration to evolve into a management position in the healthcare sector to serve humanity with specialized knowledge."
  ],
  location: "Guwahati, Assam, India",
  email: "geetgohain14@gmail.com",
  linkedin: "https://www.linkedin.com/in/geetartha-b-gohain-6a508927a",
  github: "https://github.com",
  resumeUrl: "/resume.pdf",
};

// ─── Navigation ────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// ─── Social Links ──────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/geetartha-b-gohain-6a508927a",
    icon: "Linkedin",
  },
  {
    label: "Email",
    href: "mailto:geetgohain14@gmail.com",
    icon: "Mail",
  },
];

// ─── Skills ────────────────────────────────────────────────────────────────

export const skills: SkillCategory[] = [
  {
    category: "AI & Automation",
    skills: [
      "AI Workflow Design",
      "No-Code Automation",
      "Prompt Engineering",
      "Generative AI",
      "Claude / GPT APIs",
      "Google Colab",
    ],
  },
  {
    category: "Programming & Data",
    skills: [
      "Python",
      "Web Scraping",
      "Data Extraction",
      "Google Sheets Automation",
      "Bash / CLI",
    ],
  },
  {
    category: "Digital Marketing",
    skills: [
      "SEO",
      "Social Media Marketing",
      "E-commerce",
      "Content Strategy",
      "Meta Ads",
      "Google Analytics",
    ],
  },
  {
    category: "Healthcare & Domain",
    skills: [
      "Radiography",
      "Medical Imaging",
      "Healthcare AI",
      "Diagnostic Workflow",
      "Patient Communication",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "WordPress",
      "Systeme.io",
      "Vercel",
      "Notion",
      "Figma (basic)",
      "Git",
    ],
  },
  {
    category: "Currently Learning",
    skills: [
      "Next.js",
      "TypeScript",
      "Agentic AI Systems",
      "LLM Fine-tuning",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Communication Skills",
      "Problem Solving Skills",
      "Active Listening",
      "Management Skills",
    ],
  },
];

// ─── Experience ────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    company: "Emozi Technologies",
    role: "AI Automation & Digital Marketing Intern",
    startDate: "Mar 2026",
    endDate: "Aug 2026",
    location: "Guwahati, Assam",
    description: [
      "Designed and deployed a no-code AI workflow for a healthtech client, replacing 3 manual processes and reducing turnaround time by ~60%.",
      "Automated the migration of 1,000+ blog posts from Systeme.io to WordPress, exporting structured data to Google Sheets for QA.",
      "Contributed to SEO audits, social media content pipelines, and paid campaign tracking using Meta and Google platforms.",
    ],
    technologies: [
      "AI Workflow Automation",
      "No-Code Tools",
      "WordPress",
      "Python",
      "Google Sheets",
      "Meta Ads",
    ],
  },
  {
    company: "Ultracare Diagnostic Centre",
    role: "Radiography Technician Intern",
    startDate: "Jun 2025",
    endDate: "Dec 2025",
    location: "Guwahati, Assam",
    description: [
      "Operated diagnostic imaging equipment and assisted radiologists in acquiring and processing patient scans.",
      "Maintained patient records and ensured imaging workflows met safety and quality standards.",
      "Gained hands-on experience with X-ray, ultrasound, and related diagnostic protocols.",
    ],
    technologies: [
      "Medical Imaging",
      "Diagnostic Equipment",
      "Patient Records",
      "Radiography Protocols",
    ],
  },
  {
    company: "Prarthana Orthopaedic & Super Speciality Hospital",
    role: "Radiographer Intern",
    startDate: "May 2024",
    endDate: "May 2024",
    location: "Guwahati, Assam",
    description: [
      "Assisted senior radiographers in orthopaedic imaging procedures across a 15-day intensive placement.",
      "Supported patient preparation and post-scan workflow within a high-throughput speciality hospital environment.",
    ],
    technologies: ["Orthopaedic Imaging", "X-ray", "Clinical Workflow"],
  },
  {
    company: "Downtown Hospital",
    role: "Radiographer Intern",
    startDate: "Mar 2024",
    endDate: "Apr 2024",
    location: "Guwahati, Assam",
    description: [
      "Rotated through radiology departments gaining exposure to a range of imaging modalities.",
      "Shadowed experienced radiographers and contributed to patient-facing clinical tasks.",
    ],
    technologies: ["Medical Imaging", "Clinical Rotation", "Radiology"],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "healthtech-ai-workflow",
    title: "AI Workflow for Healthtech Automation",
    summary:
      "No-code AI pipeline that eliminated 3 manual processes for a healthtech company.",
    description:
      "Designed and built a no-code AI automation workflow for a healthtech client at Emozi Technologies. The system integrated AI-driven decision logic into existing tools, removing the need for manual intervention in repetitive operational tasks. Delivered as a plug-and-play workflow with documentation for the client team.",
    tags: [
      "AI Automation",
      "No-Code",
      "Healthtech",
      "Workflow Design",
      "Process Optimization",
    ],
    imageUrls: [],
    featured: true,
    year: 2025,
  },
  {
    slug: "blog-migration-automation",
    title: "1,000+ Blog Migration Automation",
    summary:
      "Programmatic content migration from Systeme.io to WordPress, tracked in Google Sheets.",
    description:
      "Built a Python-based automation pipeline to migrate over 1,000 blog posts from a Systeme.io platform to WordPress. The script extracted post content, metadata, categories, and images, then exported a structured manifest to Google Sheets for QA tracking. Reduced what would have been weeks of manual copy-paste work to a reliable, auditable process.",
    tags: [
      "Python",
      "Web Automation",
      "WordPress",
      "Google Sheets API",
      "Content Migration",
    ],
    imageUrls: [],
    featured: true,
    year: 2025,
  },
  {
    slug: "python-web-scraper",
    title: "Web Scraping Automation with Python",
    summary:
      "AI-assisted web scraper built with Claude Code and Google Colab for structured data extraction.",
    description:
      "Built a web scraping automation tool using Python in Google Colab, leveraging Claude Code for accelerated development. The scraper targeted structured data sources, parsed HTML with BeautifulSoup, and exported clean datasets for downstream analysis. Demonstrated the power of AI-assisted coding for rapid prototyping of data pipelines.",
    tags: [
      "Python",
      "Web Scraping",
      "BeautifulSoup",
      "Google Colab",
      "Claude Code",
      "Data Extraction",
    ],
    imageUrls: [
      "/images/projects/Web_Scrape.jpeg",
      "/images/projects/Web_Scrape2.jpeg"
    ],
    githubUrl: "https://github.com",
    featured: true,
    year: 2024,
  },
  {
    slug: "ai-rectal-cancer-review",
    title: "AI in Rectal Cancer Diagnosis — Systematic Review",
    summary:
      "Academic review article on the role of AI in diagnosing rectal cancer through medical imaging.",
    description:
      "Authored a systematic review article examining how artificial intelligence is being applied to the diagnosis of rectal cancer. The paper synthesised current research on AI-assisted MRI interpretation, CAD systems, and radiomics-based approaches, positioning AI as a clinical decision support tool in oncological radiology. Written at the intersection of my radiography background and growing interest in healthcare AI.",
    tags: [
      "Healthcare AI",
      "Medical Imaging",
      "Research",
      "Radiology",
      "Oncology",
      "Systematic Review",
    ],
    imageUrls: [],
    featured: false,
    year: 2024,
  },
  {
    slug: "emozi-gpts",
    title: "Custom GPTs for Content & Operations",
    summary:
      "Created multiple GPTs in ChatGPT for image generation, blog writing, etc.",
    description:
      "Designed and configured multiple specialized GPTs within ChatGPT tailored for Emozi Technologies. These models streamline internal processes including image generation, blog writing, and various content creation workflows.",
    tags: [
      "Generative AI",
      "ChatGPT",
      "Prompt Engineering",
      "Automation",
    ],
    imageUrls: ["/images/projects/Custom_GPT.jpeg"],
    featured: true,
    year: 2025,
  },
  {
    slug: "emozi-digital-website",
    title: "Emozi Digital Website",
    summary:
      "Built an immersive yet simplistic website for Emozi Digital.",
    description:
      "Developed an immersive and simplistic website for Emozi Digital. Focused on delivering a seamless user experience and highlighting the agency's digital services effectively.",
    tags: [
      "Web Development",
      "Web Design",
      "Digital Marketing",
    ],
    liveUrl: "https://www.emozidigital.com",
    imageUrls: [
      "/images/projects/Web_page.jpeg",
      "/images/projects/Web_Building.jpeg",
      "/images/projects/Web_Hosting.jpeg"
    ],
    featured: true,
    year: 2025,
  },
  {
    slug: "emozi-admin-panel",
    title: "Emozi Digital Admin Panel",
    summary:
      "Increased client acquisition and management system efficiency by building an Admin panel.",
    description:
      "Developed a comprehensive Admin panel for Emozi Digital, designed to increase client acquisition rates and improve the overall efficiency of their management systems.",
    tags: [
      "Web Development",
      "Management System",
      "Admin Panel",
    ],
    imageUrls: [
      "/images/projects/emozi_overview.jpeg",
      "/images/projects/emozi_clients.jpeg",
      "/images/projects/emozi_leads.jpeg",
      "/images/projects/emozi_content.jpeg",
      "/images/projects/emozi_blogs.jpeg",
      "/images/projects/emozi_emails.jpeg",
      "/images/projects/emozi_automations.jpeg",
      "/images/projects/emozi_settings.jpeg"
    ],
    featured: true,
    year: 2025,
  },
];

// ─── Certifications ────────────────────────────────────────────────────────

export const certifications = [
  {
    title: "Introduction to Social Media Marketing",
    issuer: "Meta",
    year: 2026,
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    year: 2024,
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    year: 2024,
  },
  {
    title: "Foundation of Digital Marketing & E-commerce",
    issuer: "Google",
    year: 2023,
  },
  {
    title: "Introduction to Public Speaking",
    issuer: "University of Washington (Coursera)",
    year: 2024,
  },
  {
    title: "Grammar and Punctuation",
    issuer: "University of California, Irvine (Coursera)",
    year: 2024,
  },
];
