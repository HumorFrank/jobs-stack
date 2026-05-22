import { useMemo } from 'react';
import { getAllJobs } from '@/data/jobs';
import { CATEGORIES, LOCATIONS, JOB_TYPE_LABELS, type JobType } from '@/types/job';

interface UseJobsParams {
  search?: string;
  category?: string;
  location?: string;
  type?: JobType;
}

export function useJobs({ search = '', category = '', location = '', type }: UseJobsParams = {}) {
  const filteredJobs = useMemo(() => {
    const allJobs = getAllJobs();
    return allJobs.filter((job) => {
      if (search) {
        const q = search.toLowerCase();
        const matchesSearch =
          job.title.toLowerCase().includes(q) ||
          job.company.toLowerCase().includes(q) ||
          job.description.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }
      if (category && job.category !== category) return false;
      if (location && job.location !== location) return false;
      if (type && job.type !== type) return false;
      return true;
    });
  }, [search, category, location, type]);

  const filterOptions = useMemo(() => ({
    categories: [...CATEGORIES],
    locations: [...LOCATIONS],
    types: Object.entries(JOB_TYPE_LABELS).map(([value, label]) => ({
      value: value as JobType,
      label,
    })),
  }), []);

  return { jobs: filteredJobs, totalCount: getAllJobs().length, filterOptions };
}