import { MapPin, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Job } from '@/types/job';
import { JOB_TYPE_LABELS } from '@/types/job';

interface JobDetailProps {
  job: Job;
}

const TYPE_COLORS: Record<string, string> = {
  'full-time': 'bg-accent-muted text-accent border-accent-border',
  'part-time': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'contract': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
  'internship': 'bg-violet-500/10 text-violet-400 border-violet-500/30',
};

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

export function JobDetail({ job }: JobDetailProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Back link */}
      <a
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        返回职位列表
      </a>

      {/* Header */}
      <Card className="bg-surface-elevated border-border-subtle rounded-2xl p-6 sm:p-8">
        <div className="flex items-start gap-5">
          <img
            src={job.logo}
            alt={job.company}
            className="h-14 w-14 rounded-xl bg-surface-overlay flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-text-primary leading-tight">
              {job.title}
            </h1>
            <p className="text-lg text-text-secondary mt-1">{job.company}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-6">
          <Badge variant="outline" className="gap-1 border-border-subtle text-text-secondary">
            <MapPin className="h-3 w-3" />
            {job.location}
          </Badge>
          <Badge variant="outline" className="border-border-subtle text-text-secondary">
            {job.category}
          </Badge>
          <Badge variant="outline" className={`border ${TYPE_COLORS[job.type] || ''}`}>
            {JOB_TYPE_LABELS[job.type]}
          </Badge>
          <span className="font-mono text-lg font-bold text-accent">{job.salary}</span>
        </div>

        <div className="flex items-center gap-1.5 mt-4 text-sm text-text-muted">
          <Clock className="h-3.5 w-3.5" />
          <span>发布于 {timeAgo(job.postedAt)}</span>
        </div>

        <Separator className="my-6 bg-border-subtle" />

        {/* Description */}
        <div className="space-y-6">
          <section>
            <h2 className="font-display text-lg font-bold text-text-primary mb-3">职位描述</h2>
            <p className="text-text-secondary leading-relaxed">{job.description}</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-text-primary mb-3">任职要求</h2>
            <ul className="space-y-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 text-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-text-primary mb-3">福利待遇</h2>
            <div className="flex flex-wrap gap-2">
              {job.benefits.map((benefit, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="border-accent-border text-accent bg-accent-muted"
                >
                  {benefit}
                </Badge>
              ))}
            </div>
          </section>
        </div>

        <Separator className="my-6 bg-border-subtle" />

        {/* Apply */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button
            className="h-12 px-8 bg-accent hover:bg-accent-hover text-surface font-bold rounded-xl text-base"
          >
            <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
              立即申请
              <ExternalLink className="ml-2 h-4 w-4 inline" />
            </a>
          </Button>
          <span className="text-sm text-text-muted">申请将跳转至公司招聘页面</span>
        </div>
      </Card>
    </div>
  );
}