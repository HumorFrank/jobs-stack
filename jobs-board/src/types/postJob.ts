import type { Job, JobType } from '@/types/job';
import { CATEGORIES, LOCATIONS, JOB_TYPE_LABELS } from '@/types/job';

export interface PostJobForm {
  title: string;
  company: string;
  location: string;
  category: string;
  type: JobType;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  applyUrl: string;
}

export const POST_JOB_FILTERS = {
  categories: [...CATEGORIES],
  locations: [...LOCATIONS],
  types: Object.entries(JOB_TYPE_LABELS).map(([value, label]) => ({
    value: value as JobType,
    label,
  })),
};

export function formToJob(form: PostJobForm): Job {
  return {
    id: `job-${Date.now()}`,
    title: form.title,
    company: form.company,
    logo: `https://ui-avatars.com/api/?name=${encodeURIComponent(form.company)}&background=random`,
    location: form.location,
    category: form.category,
    type: form.type,
    salary: form.salary,
    description: form.description,
    requirements: form.requirements,
    benefits: form.benefits,
    postedAt: new Date().toISOString(),
    applyUrl: form.applyUrl,
  };
}