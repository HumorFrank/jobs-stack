import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Job } from '@/types/job';
import { JOB_TYPE_LABELS } from '@/types/job';

interface JobCardProps {
  job: Job;
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const posted = new Date(dateStr);
  const diffMs = now.getTime() - posted.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return '今天';
  if (diffDays === 1) return '昨天';
  if (diffDays < 7) return `${diffDays}天前`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}周前`;
  return `${Math.floor(diffDays / 30)}月前`;
}

const TYPE_COLORS: Record<string, string> = {
  'full-time': 'bg-accent-muted text-accent border-accent-border',
  'part-time': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'contract': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
  'internship': 'bg-violet-500/10 text-violet-400 border-violet-500/30',
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Link to={`/jobs/${job.id}`}>
      <Card className="group relative overflow-hidden bg-surface-elevated border-border-subtle rounded-xl p-5 hover:border-accent-border hover:bg-surface-overlay transition-all duration-300 cursor-pointer">
        {/* Accent line on hover */}
        <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500" />

        <div className="flex items-start gap-4">
          <img
            src={job.logo}
            alt={job.company}
            className="h-11 w-11 rounded-lg bg-surface-overlay flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-accent transition-colors truncate">
              {job.title}
            </h3>
            <p className="text-sm text-text-secondary mt-0.5">{job.company}</p>
          </div>
          <span className="font-mono text-sm font-medium text-accent whitespace-nowrap">
            {job.salary}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          <Badge variant="outline" className="gap-1 border-border-subtle text-text-secondary text-xs">
            <MapPin className="h-3 w-3" />
            {job.location}
          </Badge>
          <Badge variant="outline" className="border-border-subtle text-text-secondary text-xs">
            {job.category}
          </Badge>
          <Badge variant="outline" className={`text-xs border ${TYPE_COLORS[job.type] || ''}`}>
            {JOB_TYPE_LABELS[job.type]}
          </Badge>
        </div>

        <div className="flex items-center gap-1.5 mt-3 text-xs text-text-muted">
          <Clock className="h-3 w-3" />
          <span>{timeAgo(job.postedAt)}</span>
        </div>
      </Card>
    </Link>
  );
}