// ─── Personal Info ─────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}

// ─── Project ───────────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

// ─── Experience ────────────────────────────────────────────────────────────

export interface Experience {
  company: string;
  role: string;
  startDate: string; // e.g. "Jan 2022"
  endDate: string;   // e.g. "Present"
  location: string;
  description: string[];
  technologies: string[];
}

// ─── Skill ─────────────────────────────────────────────────────────────────

export interface SkillCategory {
  category: string;
  skills: string[];
}

// ─── Certification ─────────────────────────────────────────────────────────

export interface Certification {
  title: string;
  issuer: string;
  year: number;
}

// ─── Social Link ───────────────────────────────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // lucide-react icon name
}

// ─── Navigation ────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

// ─── Contact Form ──────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
}
