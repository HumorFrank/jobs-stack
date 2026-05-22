import { motion } from 'motion/react';
import { SearchX } from 'lucide-react';
import type { Job } from '@/types/job';
import { JobCard } from './JobCard';

interface JobListProps {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {
  if (jobs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <div className="h-16 w-16 rounded-2xl bg-surface-overlay flex items-center justify-center mb-4">
          <SearchX className="h-8 w-8 text-text-muted" />
        </div>
        <h3 className="font-display text-xl font-bold text-text-primary">没有找到匹配的职位</h3>
        <p className="text-text-muted mt-2 text-sm">试试调整搜索条件或筛选器</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: index * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <JobCard job={job} />
        </motion.div>
      ))}
    </div>
  );
}