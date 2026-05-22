import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { getAllJobs } from '@/data/jobs';
import { JobDetail } from '@/components/jobs/JobDetail';

export function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const job = getAllJobs().find((j) => j.id === id);

  if (!job) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div className="h-16 w-16 rounded-2xl bg-surface-overlay flex items-center justify-center mb-4">
            <AlertCircle className="h-8 w-8 text-text-muted" />
          </div>
          <h2 className="font-display text-2xl font-bold text-text-primary">职位不存在</h2>
          <p className="text-text-muted mt-2">该职位可能已被下架或链接无效</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium"
          >
            返回首页
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <JobDetail job={job} />
    </motion.div>
  );
}