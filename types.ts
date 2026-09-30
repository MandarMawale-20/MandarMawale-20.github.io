
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  tags: string[];
  status: 'LIVE' | 'DEV' | 'PRIVATE' | 'DOCS' | 'PAPER';
  image: string;
  imageAlt?: string;
  sourceUrl?: string;
  demoUrl?: string;
  metric?: string;
  highlights?: string[];
  architecture?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  tags: string[];
  achievements: string[];
  active?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  color?: string;
}

export interface SkillModule {
  title: string;
  moduleName: string;
  icon: string;
  skills: { name: string; icon?: string; color?: string }[];
}
