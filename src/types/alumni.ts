export interface Alumni {
  id: string;
  name: string;
  batch: string;
  linkedinId: string;
  profileImage: string;
  currentCompany: string;
  currentRole: string;
  workHistory: WorkExperience[];
  skills: string[];
  location: string;
  email: string;
  available: boolean;
}

export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  description?: string;
}

export type FilterType = 'all' | 'company' | 'batch' | 'skills';